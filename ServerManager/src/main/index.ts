import { app, shell, BrowserWindow, ipcMain, Tray, Menu } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
import { loadConfig, saveConfig } from './ConfigUtil';

let mainWindow;
let tray;
let trayIcon;

function createWindow(): void {
  // 创建 browser window.
  const mainWindow = new BrowserWindow({
    // 窗口宽度
    width: 900,
    // 窗口高度
    height: 670,
    // 窗口缩放
    resizable: false,
    // 是否显示窗口
    show: false,
    // 是否自动隐藏菜单栏
    autoHideMenuBar: true,
    // 窗口标题栏样式
    titleBarStyle: 'hidden',
    // 窗口背景色
    backgroundColor: '#fff',
    // 是否显示窗口边框
    frame: false,
    // 是否窗口透明
    transparent: false,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
      nodeIntegration: false,
      contextIsolation: true
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }

  trayManager();
}

app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.electron')

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // IPC test
  ipcMain.on('ping', () => console.log('pong'))

  createWindow()

  loadConfig();

  let data = {
    "default": {
      "work_dir": global.work_dir,
      "backup_dir": global.backup_dir,
      "steam_dir": global.steam_dir,
      "download_dir": global.download_dir,
    }
  }
  saveConfig(data);

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

process.on('uncaughtException', error => {
  console.error('未捕获的异常：', error)
})

function trayManager(): void {
  trayIcon = join(__dirname, './')
  tray = new Tray(join(trayIcon, 'tray.png'))

  let show = false;
  let timer;

  const contentMenu = Menu.buildFromTemplate(
    [
      {
        label:"打开主界面",
        icon : join(__dirname,'resources/tray-win.png'),
        click: () => {

        }
      },
      {
        label:"启动所有服务器",
        icon : join(__dirname,'resources/tray-win.png'),
        click: () => {

        }
      },
      {
        label:"关闭所有服务器",
        icon : join(__dirname,'resources/tray-win.png'),
        click: () => {

        }
      },
      {
        label:"重启所有服务器",
        icon : join(__dirname,'resources/tray-win.png'),
        click: () => {

        }
      },
      {
        label:"设置",
        icon : join(__dirname,'resources/tray-win.png'),
        click: () => {

        }
      },
      {
        label:"关于",
        icon : join(__dirname,'resources/tray-win.png'),
        click: () => {

        }
      },
      {
        label:"退出程序",
        icon : join(__dirname,'resources/tray-win.png'),
        click: () => {

        }
      }
    ]
  )

  tray.on('click', () => {
    mainWindow.show();
    tray.setContentMenu(contentMenu);

  });
}