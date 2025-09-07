import { DeviceInfo } from './deviceInfo';
//import { inherits } from 'util';

export class DeviceDetails extends DeviceInfo {
    
    public siteName!: string;
    public siteStateId!: string;
    public setupByName!: string;
    public setupByEmail!: string;

    public lastConnected!: Date;
    public lastConnectedDate!: string;
    public lastConnectedTime!: string;
    public isActive!: boolean;
   
    public createDate!: Date;
    public updateDate!: Date;
    public isDeleted!: boolean;

}