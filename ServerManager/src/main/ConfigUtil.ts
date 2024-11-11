import * as fs from 'fs';
import { parse, stringify } from 'ini';
import { app } from 'electron';

global.work_dir = "";
global.backup_dir = "";
global.steam_dir = "";
global.download_dir = "";

export function loadConfig(): any {
    let path = app.getAppPath();
    let config_path = path.concat("/config/config.ini");
    let config = readIniConfig(config_path);

    global.work_dir = config ["default"].work_dir;
    global.backup_dir = config ["default"].backup_dir;
    global.steam_dir = config ["default"].steam_dir;
    global.download_dir = config ["default"].steam_dir;
}

export function saveConfig(data: any): any {
    let path = app.getAppPath();
    let config_path = path.concat("/config/config.ini");

    writeIniConfig(config_path, data);
}

// 读取INI配置
function readIniConfig(configPath: string): any {
    try {
        const data = fs.readFileSync(configPath, 'utf-8');
        return parse(data);
    } catch (e) {
        console.error(`Error reading INI config: ${e}`);
        return {};
    }
}

// 写入INI配置
function writeIniConfig(configPath: string, data: any): void {
    try {
        const iniData = stringify(data);
        fs.writeFileSync(configPath, iniData, 'utf-8');
    } catch (e) {
        console.error(`Error writing INI config: ${e}`);
    }
}

