import {
	app,
	shell,
	BrowserWindow,
	ipcMain,
	Tray,
	Menu,
	globalShortcut,
	webContents
} from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'

import icon from '../../resources/icon.png?asset'
import home from '../../resources/tray/home.png?asset'
import start from '../../resources/tray/start.png?asset'
import reset from '../../resources/tray/reset.png?asset'
import stop from '../../resources/tray/stop.png?asset'
import setting from '../../resources/tray/setting.png?asset'
import info from '../../resources/tray/info.png?asset'
import exit from '../../resources/tray/exit.png?asset'

import { getVersion, getPublicIP } from './utils'
import * as remoteMain from '@electron/remote/main'
import { webContents } from 'electron'

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'

let mainWindow
let appTray
let showTaryMenu = false
let contentMenu

type downloadItem = {
	url: string
	filePath: string
	fileName: string
	item: any
	fingerPrint: string
	current: number
	total: number
	speed: string
	state: string
	process: number
}

let downloadItems: downloadItem[] = []

global.sharedAppConfig = {
	version: getVersion(),
	publicIP: '127.0.0.1',
	work_dir: '',
	backup_dir: '',
	server_dir: '',
	steamCmd_dir: '',
	mods_dir: '',
	downloadF_dir: ''
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
			nodeIntegration: false,
			contextIsolation: true,
			webSecurity: false,
			devTools: is.dev ? true : false
		}
	})

	mainWindow.on('ready-to-show', () => {
		mainWindow.show()
	})

	mainWindow.webContents.on('did-finish-load', () => {
		mainWindow.webContents.insertCSS(`
		  ::-webkit-scrollbar {
			display: none;
		  }
		`)
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
	app.on('second-instance', (event, commandLine, workingDirectory, additionalData) => {
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

function downloadFile(filePath: string, url: string, fileName, fingerPrint: string): void {
	mainWindow.webContents.downloadURL(url)

	mainWindow.webContents.sessions.once('will-download', (evevt, item, webContents) => {
		item.setSavePath(filePath)

		let download_item ={
			url: url,
			filePath: filePath,
			fileName: fileName,
			item: item,
			fingerPrint: fingerPrint,
			current: 0,
			total: 0,
			speed: '0KB/s',
			state: '开始下载',
			process: 0.0
		}

		downloadItems.push(download_item)

		let last_current = 0;
		let last_time = 0;

		item.on('update', (evevt, state) => {
			download_item.current = item.getReceivedBytes();
			download_item.total = item.getTotalBytes();
			download_item.process = (download_item.current ===0 && download_item.total === 0) ? 0.0 : download_item.current / download_item.total;

			switch (state) {
				case 'interrupted':
					download_item.state = '下载中断';
					download_item.speed = '0KB/s';
					mainWindow.webContents.send('watch-download-file-state', state, download_item);
					break;
				case 'progressing':
					if(item.isPaused()){
						download_item.state = '下载暂停';
						download_item.speed = '0KB/s';
						mainWindow.webContents.send('watch-download-file-state', state, download_item);
					}
					else
					{
						download_item.state = '下载中';
						download_item.speed = '0KB/s';
						mainWindow.webContents.send('watch-download-file-state', state, download_item);
					}
					break;
			}
			last_current = download_item.current;
			last_time = window.performance.now();
		})
	})
}

// 关闭窗口通知
ipcMain.on('win-closed', () => {
	if (process.platform !== 'darwin') {
		mainWindow.hide()
	}
})

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
