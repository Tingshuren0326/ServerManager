
export class Backup {
    enable: boolean
    type: 'fixed' | 'interval'
    time_hour: number | 0
    time_minute: number | 0
    max_reserve_day: number | 7
    backup_path: string | 'C:/'
    backup_world_path: string | 'C:/'
    backup_tribe_path: string | 'C:/'
    backup_player_path: string | 'C:/'

    constructor() {
        this.enable = false;
        this.type = 'fixed';
        this.time_hour = 0;
        this.time_minute = 0;
        this.max_reserve_day = 7;
        this.backup_path = '';
        this.backup_world_path = '';
        this.backup_tribe_path = '';
        this.backup_player_path = '';
    }
}