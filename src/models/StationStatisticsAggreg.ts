import { StationAPI } from "./stationAPI";

export class StationStatisticsAggreg {
    LocationExternalId!: string;
    POSType: string;
    Brand: string;
    RefStation!: StationAPI;
    SuccessRateStr!: string;
    SuccessRate!: number;
    SuccessTransactions!: number;
    FailTransactions!: number;
    CancelTransactions!: number;
    Total!: number;
    MPPA!: string;
    State!: string;
    IsLoyalty!: boolean;
    ExtraMile!: boolean;
    MobilePayEnabled!: boolean;
    CvxRewards!: boolean;
    LastSwitchedToP97At!: string | null;
    showStationDetails!: boolean;
    showStationStats!: boolean;
    CTROfflineReceipts!: number;
    CTRNotAvailReceipts!: number;
    CTRHasPointsReceipts!: number;
    CTRNoPointsReceipts!: number;
    TotalReceipts!: number;
    CTRSuccessRateStr!: string;
    CTRSuccessRate!: number;
    LastSiteHeartBeat!: Date;
    IsHBHealthy!: boolean;
    DisabledAt!: Date;
    ReasonToDisable!: string;
    IssueWithStation!: string;
}