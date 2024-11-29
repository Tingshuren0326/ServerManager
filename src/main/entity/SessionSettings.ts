
export class SessionSettings {
    Port: number
    QueryPort: number
    SessionName: string

    constructor() {
        this.Port = 7777;
        this.QueryPort = 27015;
        this.SessionName = "Server";
    }
}