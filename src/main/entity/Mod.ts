
import fs from 'fs';

export class Mod {
    id: number | string;
    name: string;
    size: number;
    lastModified: number;
    download_count: number;
    follow_count: number;
    des: string;
    state: number;
    path: string;

    constructor(_id: number) {
        this.id = _id
        this.name = ''
        this.size = 0;
        this.lastModified = 0;
        this.download_count = 0;
        this.follow_count = 0;
        this.des = '';
        this.state = -1;
        this.path = '';
    }

    delete() {
        if (fs.existsSync(this.path)) {
            fs.rmSync(this.path, { recursive: true, force: true });
            this.state = -1
            this.path = '';
        }
    }
}