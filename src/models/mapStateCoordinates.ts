import { Coordinates } from "./coordinates";

export class MapStateCoordinates {
    public polygonCoordinates: Coordinates[];
    public stateCenter: Coordinates;
    public stateName: string;
    public zoomLevel: number;
}