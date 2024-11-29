import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {
  getPublicIP: () => ipcRenderer.send('get-public-ip'),
  onUpdateVersion: (callback) => ipcRenderer.on('update-version', callback),
  onUpdatePublicIP: (callback) => ipcRenderer.on('update-public-ip', callback),
  mainDownloadCallback: (callback) => ipcRenderer.on('watch-download-file-state',callback),
  mainUnzipCallback: (callback) => ipcRenderer.on('watch-unzip-file-state', callback),
  openDirectoryDialog : (callback) => ipcRenderer.on('open-directory-dialog', callback),
  openFileDialog : (callback) => ipcRenderer.on('open-file-dialog', callback),
  
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('mainApi', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
