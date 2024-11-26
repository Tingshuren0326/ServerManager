import { Game } from './Game'
import { GameUserSettings } from './GameUserSettings'
import { Mod } from './Mod'
import { Backup } from './Backup'
import { CommandConfig } from './CommandConfig'

export class Server {
    name: string | 'Server'
    cover: string | ''
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

    constructor() {
        this.name = 'Server';
        this.cover = '';
        this.map = 'TheIsLand_WP';
        this.use_api = true;
        this.port = 7777;
        this.query_port = 27015;
        this.rcon_port = 5000;
        this.password = 'riruark';
        this.observe_password = 'riruark';
        this.mods = [];
        this.args = [];
        this.game_user_settings = new GameUserSettings;
        this.game_settings = new Game;
        this.state = -1;
        this.state_text = 'None';
        this.server_download = false;
        this.backup = new Backup;
        this.conmand_config = new CommandConfig
    }
}
