import {
    BrowserWindow,
    session,
    WebContents,
} from 'electron'

import { formatBytes } from '../utils';
import { join } from 'path';

type downloadItem = {
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

const downloadItems: downloadItem[] = []


export function getDownloadList(): downloadItem[] {
    return downloadItems;
}

export function downloadFile(
    currentWindow: BrowserWindow,
    filePath: string,
    url: string,
    fileName: string,
    fingerPrint: string
) {
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

