import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: unknown
    mainApi: {
      getPublicIP
      onUpdateVersion
      onUpdatePublicIP
      mainDownloadCallback
      mainUnzipCallback
      openDirectoryDialog
      openFileDialog
    }
  }
}

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
