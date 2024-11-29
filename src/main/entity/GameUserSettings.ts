
import { ServerSettings } from "./ServerSettings";
import { SessionSettings } from './SessionSettings';
import { MessageOfTheDay } from './MessageOfTheDay';

export class GameUserSettings {
    ServerSettings: ServerSettings;
    SessionSettings: SessionSettings;
    MessageOfTheDay: MessageOfTheDay;

    constructor() {
        this.ServerSettings = new ServerSettings;
        this.SessionSettings = new SessionSettings;
        this.MessageOfTheDay = new MessageOfTheDay;
    }
}