export class StationsMobilePayDisabled {
    LocationExternalId!: string;
    DisabledAt!: string;
    EnabledAt!: string | null;
    ReasonToDisable!: string;
    IssueWithStation!: string;
    Comments!: string;
    LastSiteHeartBeat!: Date;
    LastSiteHeartBeatStr!: string;
    POSType!: string;
    
    SuccessTransactions30D!: number;
    FailTransactions30D!: number;
    CancelTransactions30D!: number;
    
    SuccessTxnsUniqueCust30D!: number;
    FailTxnsUniqueCust30D!: number;
    CancelTxnsUniqueCust30D!: number;

    IsToEnable!: boolean;
    Address!: string;
    City!: string;
    State!: string;
    ZipCode!: string;
    showStationDetails!: boolean;
    showStationStats!: boolean;

}