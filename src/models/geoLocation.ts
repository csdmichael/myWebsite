export class GeoLocation {
    public latitude!: string;
    public longitude!: string;

    GeoLocation() {
    }
}

export interface LocationResultSet {
    results?: Result[];
}

export interface Result {
    formatted_address: string;
    geometry: Geometry;
}

export interface Geometry {
    location: Location;
}

export interface Location {
    lat: number;
    lng: number;
}
