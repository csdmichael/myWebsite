import { Injectable } from '@angular/core';
import { GeoLocation } from 'src/models/geoLocation';
import { HttpService } from '../http/http';
import { env } from 'process';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeocodingService {

  constructor(
    private httpSvc: HttpService
    ) { }

  getCoordinates(
    address: string
    , city: string
    , state: string
    , zipCode: string): Observable<any> {
      let geoLoc: GeoLocation;
      geoLoc = new GeoLocation();

      let apiUrl = environment.googleMapsAPIUrl 
        + '?address=' + address + ', ' + city + ', ' + state + ' ' + zipCode
        + '&key=' + environment.googleMapsAPIKey; 

      return this.httpSvc.get(apiUrl, true);
  }
}
