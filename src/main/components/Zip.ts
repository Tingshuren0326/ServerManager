import {
    WebContents,
} from 'electron'

import fs from 'fs'
import { archiver } from 'archiver'
import StreamZip from 'node-stream-zip'
import { join } from 'path'
import { formatBytes } from '../utils'

type unzipItem = {
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

type zipItem = {
    file_list: string[],
    zip_path: string,
    total: string,
    state: string,
    state_text: string
}

export async function zipFile(webContents: WebContents, file_list: string[], zip_path: string) {

    return new Promise((reslove, reject) => {

        if (file_list.length === 0) {
            reject(false);
        }

        const zip_item: zipItem = {
            file_list: file_list,
            zip_path: zip_path,
            total: formatBytes(0),
            state: 'readly',
            state_text: '准备解压中'
        }

        webContents.send('watch-zip-file-state', zip_item.state, zip_item)

        const zip_fs = fs.createReadStream(zip_path);

        const zip = archiver('zip', {
            zlib: {
                level: 9
            }
        });

        zip.pipe(zip_fs);

        for (const item in file_list) {
            if (fs.statSync(item).isDirectory()) {
                const files = fs.readdirSync(item);
                if (files.length === 0) {
                    continue;
                }

                for (const file in files) {
                    const subcata = join(item, file);
                    const stats = fs.statSync(subcata);
                    if (stats.isDirectory()) {
                        zip.directory(subcata, file);
                    }
                    else {
                        zip.file(subcata, { name: file });
                    }
                }
            } else {
                zip.file(item);
            }
        }

        zip_fs.on('close', () => {
            zip_item.total = formatBytes(zip.pointer());
            zip_item.state = 'complete';
            zip_item.state_text = "压缩完成";
            webContents.send('watch-zip-file-state', zip_item.state, zip_item)
            reslove(true);
        })

        zip.on('warning', (err) => {
            if (err.code === 'ENOENT') {
                console.log("Warning : " + err);
                zip_item.state = 'warning';
                zip_item.state_text = err;
            } else {
                console.log("Throw error : " + err);
                zip_item.state = 'throw-error';
                zip_item.state_text = err;
            }
            webContents.send('watch-zip-file-state', zip_item.state, zip_item)
            reject(false);
        })

        zip.on('error', (err) => {
            console.log("Error : " + err);
            zip_item.state = 'error';
            zip_item.state_text = err;
            webContents.send('watch-zip-file-state', zip_item.state, zip_item)
            reject(false);
        })

        zip.finalize();
    })
}

const unzipItems: unzipItem[] = []

export function getZipList(): unzipItem[] {
    return unzipItems;
}

export async function unzipFile(
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

            let unzip_item = {
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

            unzipItems.push(unzip_item)

            webContents.send('watch-unzip-file-state', unzip_item.state, unzip_item)

            zip.on('entry', (entry) => {
                if (entry.isFile) {
                    unzip_item.total += 1
                }
            })

            zip.on('ready', () => {
                unzip_item.state = 'extract'
                unzip_item.state_text = '解压中'
                unzip_item.currentFile = ''
                unzip_item.current = 0
                unzip_item.process = 0
                zip.extract(null, extractPath, (err, count) => {
                    if (err) {
                        console.log('extract ' + zipPath + ' failed: ' + err)
                        reject(err)
                    } else {
                        console.log('extract  files count :' + count)
                        unzip_item.state = 'complete'
                        unzip_item.state_text = '解压完成'
                        unzip_item.currentFile = ''
                        unzip_item.current = count as number
                        unzip_item.process = 1
                        webContents.send('watch-unzip-file-state', unzip_item.state, unzip_item)
                        zip.close()
                        resolve(count)
                    }
                })
            })

            zip.on('extract', (entry) => {
                unzip_item.state = 'extract'
                unzip_item.state_text = '解压中'
                unzip_item.currentFile = entry.name
                unzip_item.current += 1
                unzip_item.process = unzip_item.current / unzip_item.total
                webContents.send('watch-unzip-file-state', unzip_item.state, unzip_item)
            })

            zip.on('error', (err) => {
                console.log('unzip ' + zipPath + ' failed: ' + err)
                webContents.send('watch-unzip-file-state', 'error', unzip_item)
                reject(err)
            })
        } catch (err) {
            console.log('unzip ' + zipPath + ' failed: ' + err)
        }
    })
}