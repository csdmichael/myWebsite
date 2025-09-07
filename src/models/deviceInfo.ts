export class DeviceInfo {
    public id!: number;
    public uuid!: string;
    public manufacturer!: string;
    public model!: string;
    public platform!: string;
    public serial!: string;
    public userId!: string; 
    public siteId!: string; 
    public isIOS: boolean = false;
    public isAndroid: boolean = false;
    public isWindows: boolean = false;
    public isBrowser: boolean = false;
    
    DeviceInfo() {
        this.isBrowser = false;
        this.isIOS = false;
        this.isAndroid = false;
        this.isWindows = false;
    }
}