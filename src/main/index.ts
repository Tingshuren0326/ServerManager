import {
  app,
  shell,
  BrowserWindow,
  ipcMain,
  Tray,
  Menu,
  globalShortcut,
  session,
  WebContents,
  dialog,
  FileFilter
} from 'electron'
import { join } from 'path'
import { optimizer, is } from '@electron-toolkit/utils'
import StreamZip from 'node-stream-zip'

import icon from '../../resources/icon.png?asset'
import home from '../../resources/tray/home.png?asset'
import start from '../../resources/tray/start.png?asset'
import reset from '../../resources/tray/reset.png?asset'
import stop from '../../resources/tray/stop.png?asset'
import setting from '../../resources/tray/setting.png?asset'
import info from '../../resources/tray/info.png?asset'
import exit from '../../resources/tray/exit.png?asset'

import { getVersion, mkdirPath, formatBytes } from './utils'
import * as remoteMain from '@electron/remote/main'

import { MessageOfTheDay } from './entity/MessageOfTheDay'
import { SessionSettings } from './entity/SessionSettings'
import { ServerSettings } from './entity/ServerSettings'
import { Server } from './entity/Server';

import fs from 'fs'
import ini from 'ini'
import { v4 as uuidv4 } from 'uuid'
import { GameUserSettings } from './entity/GameUserSettings'

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'

let mainWindow
let appTray
let showTaryMenu = false
let contentMenu

declare type downloadItem = {
  url: string
  filePath: string
  fileName: string
  item: any
  fingerPrint: string
  current: string
  total: string
  speed: string
  state: string
  state_text: string
  process: number
}

declare type unzipItem = {
  zipPath: string
  extractPath: string
  currentFile: string
  fingerPrint: string
  current: number
  total: number
  state: string
  state_text: string
  process: number
}

declare type SettingsType = {
  work_dir: string
  backup_dir: string
  server_dir: string
  steamCmd_dir: string
  mods_dir: string
  download_dir: string
  server_profile_dir: string
  server_list: {}
}


const downloadItems: downloadItem[] = []
const unzipItems: unzipItem[] = []

global.sharedAppConfig = {
  version: getVersion(),
  publicIP: '127.0.0.1',
  work_dir: '',
  backup_dir: '',
  server_dir: '',
  steamCmd_dir: '',
  mods_dir: '',
  download_dir: '',
  server_profile_dir: '',
  server_ids:[],
  server_list: {}
}

function createWindow(): void {
  // 创建 browser window.
  mainWindow = new BrowserWindow({
    // 窗口宽度
    width: 1200,
    // 窗口高度
    height: 768,
    // 最小窗口宽度
    minWidth: 900,
    // 最小窗口高度
    minHeight: 670,
    // 是否显示窗口
    show: true,
    // 允许调整窗口大小
    resizable: true,
    // 图标
    icon: '../../resources/icon.png',
    // 是否自动隐藏菜单栏
    autoHideMenuBar: true,
    // 隐藏窗口标题栏
    titleBarStyle: 'hidden',
    // 显示控制按钮
    titleBarOverlay: {
      color: 'aliceblue',
      height: 32,
      symbolColor: 'black'
    },
    // 窗口背景色
    backgroundColor: 'aliceblue',
    // 是否显示窗口边框
    frame: false,
    // 是否窗口透明
    transparent: false,
    ...(process.platform === 'linux' ? { icon } : {}),

    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
      nodeIntegration: true,
      contextIsolation: true,
      webSecurity: false,
      devTools: is.dev ? true : false
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.webContents.insertCSS(
      `::-webkit-scrollbar {
			display: none;
      }`
    )

    initConfig()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }

  globalShortcut.register('CommandOrControl+Shift+k', function () {
    mainWindow.webContents.openDevTools()
  })

  trayManager()
}

const gotTheLock = app.requestSingleInstanceLock()

if (!gotTheLock) {
  app.quit()
} else {
  app.on('second-instance', () => {
    if (mainWindow) {
      mainWindow.dialog.showMessageBox({
        message: '此程序已经正在运行'
      })
      if (mainWindow.isMinimized()) mainWindow.restore()
      mainWindow.focus()
    }
  })

  app.whenReady().then(() => {
    remoteMain.initialize()

    globalShortcut.register('Shift+i', function () {
      mainWindow.webContents.openDevTools()
    })

    app.on('browser-window-created', (_, window) => {
      optimizer.watchWindowShortcuts(window)
    })

    ipcMain.on('ping', () => console.log('pong'))

    createWindow()

    app.on('activate', function () {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

  process.on('uncaughtException', (error) => {
    console.error('未捕获的异常：', error)
  })
}

function trayManager(): void {
  contentMenu = Menu.buildFromTemplate([
    {
      label: '打开主界面',
      icon: home,
      click: () => {
        mainWindow.show()
      }
    },
    {
      label: '启动所有服务器',
      icon: start,
      click: () => { }
    },
    {
      label: '关闭所有服务器',
      icon: stop,
      click: () => { }
    },
    {
      label: '重启所有服务器',
      icon: reset,
      click: () => { }
    },
    {
      label: '设置',
      icon: setting,
      click: () => { }
    },
    {
      label: '关于',
      icon: info,
      click: () => { }
    },
    {
      label: '退出程序',
      icon: exit,
      click: () => {
        app.quit()
      }
    }
  ])

  appTray = new Tray(icon)

  appTray.setToolTip('服务器管理工具')

  appTray.on('double-click', handerTray)
  appTray.on('right-click', handerTrayRightClick)
}

function initConfig() {
  getAppSettings();
  console.log(global.sharedAppConfig);
  addServer();
  addServer();
  addServer();
  addServer();
  addServer();
  saveAppSettings();
  console.log(getAppSettings());
  console.log(global.sharedAppConfig);
}

function getAppSettings(): SettingsType {
  const settings_path = app.getAppPath() + '\\settings.ini';

  let app_settings: SettingsType;

  if (fs.existsSync(settings_path)) {
    app_settings = ini.parse(fs.readFileSync(settings_path, 'utf8')) as SettingsType;
  } else {
    app_settings = setDefaultAppSettings();
  }

  global.sharedAppConfig.work_dir = app_settings.work_dir;
  global.sharedAppConfig.backup_dir = app_settings.backup_dir;
  global.sharedAppConfig.server_dir = app_settings.server_dir;
  global.sharedAppConfig.steamCmd_dir = app_settings.steamCmd_dir;
  global.sharedAppConfig.mods_dir = app_settings.mods_dir;
  global.sharedAppConfig.download_dir = app_settings.download_dir;
  global.sharedAppConfig.server_profile_dir = app_settings.server_profile_dir;
  global.sharedAppConfig.server_list = app_settings.server_list === undefined ? [] : app_settings.server_list;

  return app_settings;
}

function setDefaultAppSettings() {
  const settings_path = app.getAppPath() + '\\settings.ini';
  const work_base_path = mkdirPath(app.getAppPath() + '\\AsaData')

  const app_settings: SettingsType = {
    work_dir: work_base_path,
    backup_dir: mkdirPath(work_base_path + '\\Backup'),
    server_dir: mkdirPath(work_base_path + '\\Server'),
    steamCmd_dir: mkdirPath(work_base_path + '\\SteamCMD'),
    mods_dir: mkdirPath(work_base_path + '\\Mods'),
    download_dir: mkdirPath(work_base_path + '\\Download'),
    server_profile_dir: mkdirPath(work_base_path + '\\Profile'),
    server_list: {}
  }

  fs.writeFileSync(settings_path, ini.stringify(app_settings))
  return app_settings;
}

function saveAppSettings():void{
  const settings_path = app.getAppPath() + '\\settings.ini';

  const app_settings: SettingsType = {
    work_dir: global.sharedAppConfig.work_dir,
    backup_dir: global.sharedAppConfig.backup_dir,
    server_dir: global.sharedAppConfig.server_dir,
    steamCmd_dir: global.sharedAppConfig.steamCmd_dir,
    mods_dir:  global.sharedAppConfig.mods_dir,
    download_dir: global.sharedAppConfig.download_dir,
    server_profile_dir: global.sharedAppConfig.server_profile_dir,
    server_list: global.sharedAppConfig.server_list
  }
  fs.writeFileSync(settings_path, ini.stringify(app_settings))
}

// 获取服务器列表
function listServer() {
  return global.sharedAppConfig.server_list;
}

// 创建一个服务器
function addServer(): Server {
  const server = new Server;
  global.sharedAppConfig.server_list[server.uuid] = server;
  return server;
}

// 删除服务器
function removeServer(uuid: string): void {
  if (uuid in global.sharedAppConfig.server_list) {
    delete global.sharedAppConfig.server_list[uuid];
  }
}

// 获取服务器信息
function getServer(uuid: string): Server {
  if (uuid in global.sharedAppConfig.server_list) {
    return global.sharedAppConfig.server_list[uuid];
  }
  else {
    return new Server;
  }
}

// 设置服务器参数
function setServer(server: Server): void {
  global.sharedAppConfig.server_list[server.uuid] = server
}

async function unzipFile(
  webContents: WebContents,
  zipPath: string,
  extractPath: string,
  fingerPrint: string
) {
  return new Promise((resolve, reject) => {
    try {
      const zip = new StreamZip({
        file: zipPath,
        storeEntries: true
      })

      let zip_item = {
        zipPath: zipPath,
        extractPath: extractPath,
        currentFile: '',
        fingerPrint: fingerPrint,
        current: 0,
        total: 0,
        state: 'readfile',
        state_text: '读取文件中',
        process: 0.0
      }

      unzipItems.push(zip_item)

      webContents.send('watch-unzip-file-state', zip_item.state, zip_item)

      zip.on('entry', (entry) => {
        if (entry.isFile) {
          zip_item.total += 1
        }
      })

      zip.on('ready', () => {
        zip_item.state = 'extract'
        zip_item.state_text = '解压中'
        zip_item.currentFile = ''
        zip_item.current = 0
        zip_item.process = 0
        zip.extract(null, extractPath, (err, count) => {
          if (err) {
            console.log('extract ' + zipPath + ' failed: ' + err)
            reject(err)
          } else {
            console.log('extract  files count :' + count)
            zip_item.state = 'complete'
            zip_item.state_text = '解压完成'
            zip_item.currentFile = ''
            zip_item.current = count as number
            zip_item.process = 1
            webContents.send('watch-unzip-file-state', zip_item.state, zip_item)
            zip.close()
            resolve(count)
          }
        })
      })

      zip.on('extract', (entry) => {
        zip_item.state = 'extract'
        zip_item.state_text = '解压中'
        zip_item.currentFile = entry.name
        zip_item.current += 1
        zip_item.process = zip_item.current / zip_item.total
        webContents.send('watch-unzip-file-state', zip_item.state, zip_item)
      })

      zip.on('error', (err) => {
        console.log('unzip ' + zipPath + ' failed: ' + err)
        webContents.send('watch-unzip-file-state', 'error', zip_item)
        reject(err)
      })
    } catch (err) {
      console.log('unzip ' + zipPath + ' failed: ' + err)
    }
  })
}

function handerTrayRightClick(): void {
  showTaryMenu = !showTaryMenu

  if (showTaryMenu) {
    appTray.setContextMenu(contentMenu)
  } else {
    appTray.closeContextMenu()
  }
}

function handerTray(): void {
  mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show()
  mainWindow.isVisible() ? mainWindow.setSkipTaskbar(false) : mainWindow.setSkipTaskbar(true)
}

function downloadFile(
  currentWindow,
  filePath: string,
  url: string,
  fileName,
  fingerPrint: string
): void {
  currentWindow.webContents.downloadURL(url)

  session.defaultSession.on('will-download', (event, item, webContents) => {
    console.log(event)
    item.setSavePath(join(filePath, '\\', fileName))

    const download_item = {
      url: url,
      filePath: filePath,
      fileName: fileName,
      item: item,
      fingerPrint: fingerPrint,
      current: formatBytes(0),
      total: formatBytes(0),
      speed: '0KB/s',
      state: 'none',
      state_text: '等待下载',
      process: 0.0
    }

    downloadItems.push(download_item)

    item.on('updated', (event, state) => {
      console.log(event)
      download_item.current = formatBytes(item.getReceivedBytes())
      download_item.total = formatBytes(item.getTotalBytes())
      download_item.state = state
      download_item.process =
        item.getReceivedBytes() === 0 && item.getTotalBytes() === 0
          ? 0.0
          : item.getReceivedBytes() / item.getTotalBytes()

      switch (state) {
        case 'interrupted':
          download_item.state_text = '下载中断'
          download_item.speed = formatBytes(item.getCurrentBytesPerSecond()) + '/s'
          webContents.send('watch-download-file-state', state, {
            url: download_item.url,
            fileName: download_item.fileName,
            filePath: download_item.filePath,
            fingerPrint: download_item.fingerPrint,
            current: download_item.current,
            total: download_item.total,
            speed: download_item.speed,
            state: download_item.state,
            state_text: download_item.state_text,
            process: download_item.process
          })
          break
        case 'progressing':
          if (item.isPaused()) {
            download_item.state_text = '下载暂停'
            download_item.speed = formatBytes(item.getCurrentBytesPerSecond()) + '/s'
            webContents.send('watch-download-file-state', state, {
              url: download_item.url,
              fileName: download_item.fileName,
              filePath: download_item.filePath,
              fingerPrint: download_item.fingerPrint,
              current: download_item.current,
              total: download_item.total,
              speed: download_item.speed,
              state: download_item.state,
              state_text: download_item.state_text,
              process: download_item.process
            })
          } else {
            download_item.state_text = '下载中'
            download_item.speed = formatBytes(item.getCurrentBytesPerSecond()) + '/s'
            webContents.send('watch-download-file-state', state, {
              url: download_item.url,
              fileName: download_item.fileName,
              filePath: download_item.filePath,
              fingerPrint: download_item.fingerPrint,
              current: download_item.current,
              total: download_item.total,
              speed: download_item.speed,
              state: download_item.state,
              state_text: download_item.state_text,
              process: download_item.process
            })
          }
          break
      }
    })

    item.once('done', (event, state) => {
      console.log(event)
      download_item.state = state
      download_item.current = formatBytes(item.getReceivedBytes())
      download_item.total = formatBytes(item.getTotalBytes())
      download_item.process =
        item.getReceivedBytes() === 0 && item.getTotalBytes() === 0
          ? 0.0
          : item.getReceivedBytes() / item.getTotalBytes()

      switch (state) {
        case 'completed':
          download_item.process = 1
          download_item.speed = formatBytes(item.getCurrentBytesPerSecond()) + '/s'
          download_item.state_text = '下载完成'
          webContents.send('watch-download-file-state', state, {
            url: download_item.url,
            fileName: download_item.fileName,
            filePath: download_item.filePath,
            fingerPrint: download_item.fingerPrint,
            current: download_item.current,
            total: download_item.total,
            speed: download_item.speed,
            state: download_item.state,
            state_text: download_item.state_text,
            process: download_item.process
          })

          unzipFile(
            webContents,
            join(filePath, '\\', fileName),
            global.sharedAppConfig.backup_dir,
            fingerPrint
          )
          break
        case 'interrupted':
          download_item.speed = formatBytes(item.getCurrentBytesPerSecond()) + '/s'
          download_item.state_text = '下载中断'
          webContents.send('watch-download-file-state', state, {
            url: download_item.url,
            fileName: download_item.fileName,
            filePath: download_item.filePath,
            fingerPrint: download_item.fingerPrint,
            current: download_item.current,
            total: download_item.total,
            speed: download_item.speed,
            state: download_item.state,
            state_text: download_item.state_text,
            process: download_item.process
          })
          break
        case 'cancelled':
          download_item.current = formatBytes(0)
          download_item.total = formatBytes(0)
          download_item.process = 0
          download_item.speed = formatBytes(item.getCurrentBytesPerSecond()) + '/s'
          download_item.state_text = '下载取消'
          webContents.send('watch-download-file-state', state, {
            url: download_item.url,
            fileName: download_item.fileName,
            filePath: download_item.filePath,
            fingerPrint: download_item.fingerPrint,
            current: download_item.current,
            total: download_item.total,
            speed: download_item.speed,
            state: download_item.state,
            state_text: download_item.state_text,
            process: download_item.process
          })
          break
      }
    })
  })
}

// 关闭窗口通知
ipcMain.on('win-closed', () => {
  if (process.platform !== 'darwin') {
    mainWindow.hide()
  }
})

async function handleOpenDir(title: string) {
  const result = await dialog.showOpenDialog(mainWindow, {
    title: title,
    defaultPath: global.sharedAppConfig.work_dir,
    properties: ['openDirectory']
  })
  if (!result.canceled) {
    return result.filePaths[0]
  }
}

async function handleOpenFile(title: string, multiple: boolean, filters: FileFilter[]) {
  const result = await dialog.showOpenDialog(mainWindow, {
    title: title,
    defaultPath: global.sharedAppConfig.work_dir,
    properties: multiple ? ['openFile', 'multiSelections'] : ['openFile'],
    filters: filters
  })
  if (!result.canceled) {
    return result.filePaths[0]
  }
}

// 打开设置窗口
ipcMain.on('setting-window', () => { })

// 打开关于窗口
ipcMain.on('about-window', () => { })

// 创建服务
ipcMain.on('create-server', () => { })

// 更新服务
ipcMain.on('update-server', () => { })

// 保存服务
ipcMain.on('save-server', () => { })

// 停止服务
ipcMain.on('stop-server', () => { })

// 重启服务
ipcMain.on('reset-server', () => { })

// 删除服务
ipcMain.on('delete-server', () => { })

// 加载全局配置
ipcMain.on('load-config', () => { })

// 保存全局配置
ipcMain.on('save-config', () => { })

// 最小化窗口
ipcMain.on('window-min', () => {
  mainWindow.minimize()
})

// 最大化窗口
ipcMain.on('window-max', () => {
  if (mainWindow.isMaximized()) {
    mainWindow.restore()
  } else {
    mainWindow.maximize()
  }
})

// 退出应用
ipcMain.on('quit-app', () => {
  app.quit()
})
