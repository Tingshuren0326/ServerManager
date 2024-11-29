import { net } from 'electron'
import fs from 'fs'

const publicIPCheckUrl = 'http://whatismyip.akamai.com/'

const getVersion = () => {
  return 'v1.0.1'
}

const getPublicIP = () => {
  const request = net.request(publicIPCheckUrl)
  request
    .on('response', (response) => {
      response.on('data', (chunk) => {
        console.log(`PublicIP: ${chunk}`)
        return chunk
      })
      response.on('end', () => { })
    })
    .on('error', (err) => {
      console.log(`Get PublicIP1 Error : ${err}`)
      return '0.0.0.0'
    })

  request.end()
}

function mkdirPath(pathStr: string): string {
  if (!fs.existsSync(pathStr)) {
    fs.mkdir(pathStr, { recursive: true }, (err) => {
      if (err) {
        console.log('mkdir ' + pathStr + ' failed: ' + err)
      } else {
        console.log('mkdir ' + pathStr + ' success!')
      }
    })
  } else {
    console.log('mkdir ' + pathStr + ' failed the path exists!')
  }
  return pathStr
}

function formatBytes(bytes: number): string {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB']

  if (bytes === 0) {
    return '0 Bytes'
  }

  const i = Math.floor(Math.log(bytes) / Math.log(1024))

  return parseFloat((bytes / Math.pow(1024, i)).toFixed(2)) + ' ' + sizes[i]
}

export { getVersion, getPublicIP, mkdirPath, formatBytes }
