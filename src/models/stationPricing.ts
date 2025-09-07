import { FuelProduct } from "./p97StoreDetails";
import { StationAPI } from "./stationAPI";

export class ProductsPricing {
    fuelProducts!: FuelProduct[];
}

export class StationPricing {
    StoreCode!: string;
    ScheduledJobRunId!: number;
    CreateTime!: Date;
    PricingConfig!: ProductsPricing;
    RefStation!: StationAPI;
    IsDiscount!: boolean;
    PricingData!: string;
}