import { HealthCheckAPI } from "./healthCheckAPI";

export class HealthCheckAPIMinute {
    public  HealthCheckList: any;
    public AtHour!: number;
    public AtDateTimeUST!: string;
    public FromDateTimePST!: string;
    public ToDateTimePST!: string;
    public EstimatedLossNumOfReceipts!: number;
    public AtMinute!: number;
    public HealthCheckListJSON!: string;
}