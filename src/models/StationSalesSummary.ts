import { StationAPI } from "./stationAPI";

export class StationSalesSummary {
    LocationExternalId!: string;
    RefStation!: StationAPI;
    Gallons!: number;
    TotalSale!: number;
    TotalSaleStr!: string;
    GallonsStr!: string;
    MPPA!: string;
}