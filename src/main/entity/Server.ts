import { Game } from './Game'
import { GameUserSettings } from './GameUserSettings'
import { Mod } from './Mod'
import { Backup } from './Backup'
import { CommandConfig } from './CommandConfig'

import fs from 'fs'
import ini from 'ini'
import { v4 } from 'uuid'
import { join } from 'path'
import { mkdirPath } from '../utils'

let game_user_settings_path = '\\ShooterGame\\Saved\\Config\\WindowsServer\\GameUserSettings.ini'
let game_settings_path = '\\ShooterGame\\Saved\\Config\\WindowsServer\\Game.ini'

let game_config_dir = '\\ShooterGame\\Saved\\Config\\WindowsServer'

let api_dir = '\\ShooterGame\\Binaries\\Win64\\'
let api_plugin_dir = '\\ShooterGame\\Binaries\\Win64\\ArkApi\\Plugins\\'
let save_dir = '\\ShooterGame\\Saved\\SavedArks\\'

let origin_exe = '\\ShooterGame\\Binaries\\Win64\\ArkAscendedServer.exe'
let api_exe = '\\ShooterGame\\Binaries\\Win64\\AsaApiLoader.exe'

export class Server {
    uuid: string
    name: string | 'Server'
    server_path: string
    profile_path: string
    map: string | 'TheIsLand_WP'
    use_api: boolean | 'true'
    port: number | 7777
    query_port: number | 27015
    rcon_port: number | 5000
    password: string | 'riruark'
    observe_password: string | 'riruark'
    mods: Mod[]
    args: string[]
    game_user_settings: GameUserSettings
    game_settings: Game
    state: number | string
    state_text: string
    server_download: boolean
    backup: Backup
    conmand_config: CommandConfig

    constructor(name: string, root: string) {
        this.uuid = v4()
        this.name = name
        this.server_path = root + '\\Server\\' + this.name
        this.profile_path = root + '\\Profile'
        this.map = 'TheIsLand_WP'
        this.use_api = true
        this.port = 7777
        this.query_port = 27015
        this.rcon_port = 5000
        this.password = 'riruark'
        this.observe_password = 'riruark'
        this.mods = []
        this.args = []
        this.game_user_settings = new GameUserSettings()
        this.game_settings = new Game()
        this.state = -1
        this.state_text = 'None'
        this.server_download = false
        this.backup = new Backup()
        this.conmand_config = new CommandConfig()

        mkdirPath(this.dirGameConfig());
    }

    getRunCommand(): string {
        return 'start "'.concat(
            this.name,
            '" /normal "',
            this.pathRunExe(),
            '" ',
            this.map,
            this.conmand_config.getCommand(),
            this.args.length > 0 ? ' ' + this.args.map(String).join(' ') : ''
        )
    }

    pathRunExe(): string {
        return this.use_api ? this.pathApiExe() : this.pathOriginExe()
    }

    pathOriginExe(): string {
        return join(this.server_path, origin_exe)
    }

    pathApiExe(): string {
        return join(this.server_path, api_exe)
    }

    pathServerSave(): string {
        return join(this.server_path, save_dir)
    }

    pathServerApi(): string {
        return join(this.server_path, api_dir)
    }

    pathServerApiPlugin(): string {
        return join(this.server_path, api_plugin_dir)
    }

    pathProfile(): string {
        return join(this.profile_path, this.uuid) + '.ini'
    }

    loadConfig(): Server {
        if (fs.existsSync(this.pathProfile())) {
            let obj = ini.parse(fs.readFileSync(this.pathProfile(), 'utf8')) as Server

            this.uuid = obj.uuid
            this.name = obj.name
            this.server_path = obj.server_path
            this.map = obj.map
            this.use_api = obj.use_api
            this.port = obj.port
            this.query_port = obj.query_port
            this.rcon_port = obj.rcon_port
            this.password = obj.password
            this.observe_password = obj.observe_password
            this.mods = obj.mods
            this.args = obj.args
            this.backup = obj.backup
            this.conmand_config = obj.conmand_config

            if (fs.existsSync(join(this.server_path, origin_exe))) {
                this.server_download = true
                this.state = 0
                this.state_text = '准备就绪'
            } else {
                this.server_download = false
                this.state = -1
                this.state_text = '未下载'
            }

            this.loadGameUserSettings()
            this.loadGameSettings()
        } else {
            this.saveConfig()
        }

        return this
    }

    saveConfig(): void {
        let config = {
            uuid: this.uuid,
            name: this.name,
            server_path: this.server_path,
            map: this.map,
            use_api: this.use_api,
            port: this.port,
            query_port: this.query_port,
            rcon_port: this.rcon_port,
            password: this.password,
            observe_password: this.observe_password,
            mods: this.mods,
            args: this.args,
            backup: this.backup,
            conmand_config: this.conmand_config
        }

        fs.writeFileSync(this.pathProfile(), ini.stringify(config))

        this.saveGameUserSettings()
        this.saveGameSettings()
    }

    pathGameUserSettings(): string {
        return join(this.server_path, game_user_settings_path)
    }

    dirGameConfig(): string {
        return join(this.server_path, game_config_dir)
    }

    loadGameUserSettings(): GameUserSettings {
        if (fs.existsSync(this.pathGameUserSettings())) {
            this.game_user_settings = ini.parse(
                fs.readFileSync(this.pathGameUserSettings(), 'utf8')
            ) as GameUserSettings
        } else {
            this.game_user_settings = new GameUserSettings()
        }
        return this.game_user_settings
    }

    saveGameUserSettings(): void {
        if (this.game_user_settings == null) {
            this.game_user_settings = new GameUserSettings()
        }

        fs.writeFileSync(this.pathGameUserSettings(), ini.stringify(this.game_user_settings), {
            encoding: 'utf-8',
            mode: 438,
            flag: 'w+'
        })
    }

    pathGameSettings(): string {
        return join(this.server_path, game_settings_path)
    }

    loadGameSettings(): Game {
        if (fs.existsSync(this.pathGameSettings())) {
            this.game_settings = ini.parse(fs.readFileSync(this.pathGameSettings(), 'utf8')) as Game
        } else {
            this.game_settings = new Game()
        }
        return this.game_settings
    }

    saveGameSettings(): void {
        if (this.game_settings == null) {
            this.game_settings = new Game()
        }

        fs.writeFileSync(this.pathGameSettings(), ini.stringify(this.game_settings, {section:'/script/shootergame.shootergamemode'}), {
            encoding: 'utf8',
            mode: 438,
            flag: 'w+'
        })
    }
}
