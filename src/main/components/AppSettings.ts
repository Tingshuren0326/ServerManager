import fs from 'fs'
import ini from 'ini'
import { app } from 'electron'
import { mkdirPath } from '../utils'

export type SettingsType = {
    work_dir: string
    backup_dir: string
    server_dir: string
    steamCmd_dir: string
    mods_dir: string
    download_dir: string
    server_profile_dir: string
    server_list: {}
}

export function loadAppSettings(): SettingsType {

    const settings_path = app.getAppPath() + '\\settings.ini';

    let app_settings: SettingsType;

    if (fs.existsSync(settings_path)) {
        app_settings = ini.parse(fs.readFileSync(settings_path, 'utf8')) as SettingsType;
    } else {
        app_settings = setDefaultAppSettings();
    }

    global.sharedAppConfig.work_dir = app_settings.work_dir;
    global.sharedAppConfig.backup_dir = app_settings.backup_dir;
    global.sharedAppConfig.server_dir = app_settings.server_dir;
    global.sharedAppConfig.steamCmd_dir = app_settings.steamCmd_dir;
    global.sharedAppConfig.mods_dir = app_settings.mods_dir;
    global.sharedAppConfig.download_dir = app_settings.download_dir;
    global.sharedAppConfig.server_profile_dir = app_settings.server_profile_dir;
    global.sharedAppConfig.server_list = app_settings.server_list === undefined ? [] : app_settings.server_list;

    return app_settings;
}

export function setDefaultAppSettings(): SettingsType {
    const settings_path = app.getAppPath() + '\\settings.ini';

    const work_base_path = mkdirPath(app.getAppPath() + '\\AsaData')

    const app_settings: SettingsType = {
        work_dir: work_base_path,
        backup_dir: mkdirPath(work_base_path + '\\Backup'),
        server_dir: mkdirPath(work_base_path + '\\Server'),
        steamCmd_dir: mkdirPath(work_base_path + '\\SteamCMD'),
        mods_dir: mkdirPath(work_base_path + '\\Mods'),
        download_dir: mkdirPath(work_base_path + '\\Download'),
        server_profile_dir: mkdirPath(work_base_path + '\\Profile'),
        server_list: []
    }

    fs.writeFileSync(settings_path, ini.stringify(app_settings))
    return app_settings;
}

export function saveAppSettings(): void {
    const settings_path = app.getAppPath() + '\\settings.ini';

    const app_settings: SettingsType = {
        work_dir: global.sharedAppConfig.work_dir,
        backup_dir: global.sharedAppConfig.backup_dir,
        server_dir: global.sharedAppConfig.server_dir,
        steamCmd_dir: global.sharedAppConfig.steamCmd_dir,
        mods_dir: global.sharedAppConfig.mods_dir,
        download_dir: global.sharedAppConfig.download_dir,
        server_profile_dir: global.sharedAppConfig.server_profile_dir,
        server_list: global.sharedAppConfig.server_list
    }
    fs.writeFileSync(settings_path, ini.stringify(app_settings))
}