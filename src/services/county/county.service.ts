import { Injectable } from '@angular/core';
import { County } from 'src/models/county';
import { HttpService } from '../http/http';
import { StorageService } from '../storage/storage.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountyService {

  private appAccessToken: string;
  
  constructor(private http: HttpService, private storage: StorageService) { 
    this.appAccessToken = this.storage.getUserAccessToken();
  }

  private getCounties(): Observable<any> {
    this.appAccessToken = this.storage.getUserAccessToken();
    return this.http.getSecure('Counties', this.appAccessToken);
  }

  public clearCounties() {
    this.storage.setCounties(null);
  }

  public loadCounties() {
    this.getCounties().subscribe(
      (res: County[]) => {
        console.log('Counties Result', res);
        
        let counties: County[];
        counties = res;
        
        console.log('Counties ', counties);
        this.storage.setCounties(counties);
      },
      (err: Error) => {
        console.log('Error in getCounties', err.message);
      }
    );
  }

  public fetchCounties(): Promise<any> {
    return this.storage.getCounties();
  }

  public getCountyById(counties: County[], countyId: number): County {
    return counties.find(
      ut => ut.id == countyId
    );
  }
}
