
export class MessageOfTheDay {
    // 公告显示时间
    Duration: number
    // 公告内容
    Message: string

    constructor() {
        this.Duration = 30;
        this.Message = '';
    }
}