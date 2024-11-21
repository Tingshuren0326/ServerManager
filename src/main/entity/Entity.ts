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
    cover: string
    map: string
    mod_map: boolean
    use_api: boolean
    port: number
    query_port: number
    rconPort: number
    password: string
    observe_password: string
    cluster_id: string
    cluster_path: string
    language: string
    mod_ids: number[]
    mod_names: string[]
    mods: serverModEntity[]
    args: string[]
    user_config: serverUserConfigEntity
    game_config: serverGameConfigEntity
    state: string
    state_text: string
    server_download: boolean
    runtime_state: serverRuntimeStateEntity
    back_up: serverBackupEntity
}

export type serverRuntimeStateEntity = {
    state: string
    state_text: string
    max_player_count: number
    player_cont: number
    days: number
    players: []
    tribes: []
}

export type serverBackupEntity = {
    enable: boolean
    type: 'fixed' | 'interval'
    time_hour: number
    time_minute: number
    max_reserve_day: number
    backup_path: string
    backup_world_path: string
    backup_tribe_path: string
    backup_player_path: string
}

export type serverModEntity = {}

export type serverGameConfigEntity = {}

export type serverUserConfigEntity = {}
