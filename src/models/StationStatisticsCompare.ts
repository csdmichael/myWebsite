import { StationAPI } from "./stationAPI";

export class StationStatisticsCompare {
    LocationExternalId!: string;
    RefStation!: StationAPI;
    SuccessRateBeforeP97Str!: string;
    SuccessRateBeforeP97!: number;
    SuccessTransactionsBeforeP97!: number;
    FailTransactionsBeforeP97!: number;
    
    SuccessRateAfterP97Str!: string;
    SuccessRateAfterP97!: number;
    SuccessTransactionsAfterP97!: number;
    FailTransactionsAfterP97!: number;
    TotalBeforeP97!: number;
    TotalAfterP97!: number;
    MPPA!: string;
    LastSwitchedToP97At!: string | null;
}