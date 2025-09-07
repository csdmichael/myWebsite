import { AddressInfo } from "./addressInfo";
import { LocationInfo } from "./locationInfo";
import { FeaturesInfo } from "./featuresInfo";

//https://csharptotypescript.azurewebsites.net/
export class  StationCache
{
    Id!: string;
    Name!: string;
    CheckinLocationId!: string;
    Address!: AddressInfo;
    Location!: LocationInfo;
    Features!: FeaturesInfo;
    AddressStr!: string;
    LocationStr!: string;
    FeaturesStr!: string;
    DistanceInMiles!: number;
    Brand!: number;
    Phone!: string;
    Mppa!: number;
    Conexxus!: number;

    public StationCache() {
        this.Address = new AddressInfo();
        this.Location = new LocationInfo();
        this.Features = new FeaturesInfo();
    }
}