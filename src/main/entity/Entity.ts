export type downloadEntity = {
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

export type unzipEntity = {
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


export type serverEntity = {
    name: string
    map: string
    port: number
    query_port: number
    rconPort: number
    password: string
    observe_password: string
    cluster_id: string
    cluster_path: string
    mods: string[]
    user_config:serverUserConfigEntity
    game_config:serverGameConfigEntity
    state:string
    state_text:string
}

export type serverGameConfigEntity = {

}

export type serverUserConfigEntity = {

}