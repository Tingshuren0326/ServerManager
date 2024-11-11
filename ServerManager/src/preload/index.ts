import { contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import { loadConfig } from '../main/ConfigUtil';

let app = loadConfig();

// Custom APIs for renderer
const api = {
  work_dir: app["default"].work_dir,
  backup_dir: app["default"].backup_dir,
  steam_dir: app["default"].steam_dir,
  download_dir: app["default"].download_dir
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}