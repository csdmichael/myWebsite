
import { StationAPI } from "./stationAPI";
import { StationCache } from "./stationCache";

export class Station {
    public id!: string;
    public stationAPI!: StationAPI;
    public stationCache!: StationCache;
}