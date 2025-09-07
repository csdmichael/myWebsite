import { P97HeatBeatFile } from "./p97HeatBeatFile";

export class P97HeartBeatData {
    Mppa!: string;
    IsPilot!: boolean;
    PosType!: string;
    IsLoyalty!: boolean;
    Address!: string;
    City!: string;
    State!: string;
    ZipCode!: string;
    StoreId!: string;
    StoreName!: string;
    StoreNum!: number | null;
    TenantName!: string;
    LastSiteHeartBeat!: string | null;
    LastLoyaltyHeartbeat!: string | null;
    LastLoyaltyReverseHeartbeat!: string | null;
    IsSiteOnline!: boolean | null;
    IsSiteLoyaltyOnline!: boolean | null;
    CreatedAt!: string;
    LastSwitchedToP97At!: string | null;
    LastSwitchedToP97ByUserName!: string | null;
    LastSwitchedToP97ByEmail!: string | null;
    LastSwitchedToP97By!: string | null;
    SwitchStatus!: number | null;
    P97HeatBeatFileId!: number | null;
    P97HeatBeatFile!: P97HeatBeatFile;
    LastSwitchedToP97AtPST!: string;
}