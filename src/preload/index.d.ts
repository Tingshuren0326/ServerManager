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
    }
  }
}
