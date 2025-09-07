export class HealthCheckEntry {
    public Id: string;
    public SystemName: string;
    public HealthCheckPoint: string;
    public SuccessPercent!: number;
    public TotalChecks!: number;
    public Success!: number;
    public IsAlertEnabled!: boolean;
    
    constructor(id: string, systemName: string, hcPoint: string) {
        this.Id = id;
        this.SystemName = systemName;
        this.HealthCheckPoint = hcPoint;
    }
}