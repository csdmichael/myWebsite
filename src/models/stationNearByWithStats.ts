import { GeoLocation } from "./geoLocation";

export class StationNearByWithStats {
    StoreCode!: string;
    DistanceFromOrigin!: number | null;
    Location!: GeoLocation;
    
    Address!: string;
    City!: string;
    State!: string;
    ZipCode!: string;
    SuccessTransactions7D!: number;
    FailTransactions7D!: number;
    CancelTransactions7D!: number;
    SuccessPercent7D!: number;
    SuccessTransactions30D!: number;
    FailTransactions30D!: number;
    CancelTransactions30D!: number;
    SuccessPercent30D!: number;
    TotalTransactions7D!: number;
    TotalTransactions30D!: number;
    IsLoyalty!: boolean | null;
    MobilePayEnabled!: boolean | null;
    CTRAvailable!: boolean | null;
    Relevance!: number;
}