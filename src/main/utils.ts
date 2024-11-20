import { net } from 'electron'

const publicIPCheckUrl1 = 'http://api.ipify.org';
const publicIPCheckUrl2 = 'http://whatismyip.akamai.com/';

const getVersion = () => {
    return 'v1.0.1'
}

const getPublicIP = () => {
    const request = net.request(publicIPCheckUrl2);
    request.on('response', (response) => {

        response.on('data', (chunk) => {
            console.log(`PublicIP: ${chunk}`)
            return chunk;
        })
        response.on('end', () => {
        })
    }).on('error', (err) => {
        console.log(`Get PublicIP1 Error : ${err}`)
        return getPublicIP2();
    })

    request.end();
}
const getPublicIP2 = () => {
    const request = net.request(publicIPCheckUrl2);
    request.on('response', (response) => {
        response.on('data', (chunk) => {
            console.log(`PublicIP: ${chunk}`)
            return chunk.toString();
        })
        response.on('end', () => {
        })
    }).on('error', (err) => {
        console.log(`Get PublicIP2 Error : ${err}`)
        return "0.0.0.0";
    })
    request.end();
}

export { getVersion, getPublicIP }