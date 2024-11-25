import { Mod } from './Mod'

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

    constructor() {
        this.name = 'Server'
        this.cover = ''
        this.map = 'TheIsLand_WP'
        this.use_api = true
        this.port = 7777
        this.query_port = 27015
        this.rcon_port = 5000
        this.password = 'riruark'
        this.observe_password = 'riruark'
        this.mods = []
        this.args = []
    }
}
