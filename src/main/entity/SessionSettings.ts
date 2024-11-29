
export class SessionSettings {
    // 服务器端口
    Port: number
    // 服务器查询端口
    QueryPort: number
    // 服务器名称
    SessionName: string

    constructor() {
        this.Port = 7777;
        this.QueryPort = 27015;
        this.SessionName = "Server";
    }
}