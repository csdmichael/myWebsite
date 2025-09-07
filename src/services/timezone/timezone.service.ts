import { Injectable } from '@angular/core';
import { Timezone } from 'src/models/timezone';
import { HttpService } from '../http/http';
import { StorageService } from '../storage/storage.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimezoneService {

  private appAccessToken: string;
  
  constructor(private http: HttpService, private storage: StorageService) { 
    this.appAccessToken = this.storage.getUserAccessToken();
  }

  private getTimezones(): Observable<any> {
    this.appAccessToken = this.storage.getUserAccessToken();
    return this.http.getSecure('Timezones', this.appAccessToken);
  }

  public clearTimezones() {
    this.storage.setTimezones(null);
  }

  public loadTimezones() {
    this.getTimezones().subscribe(
      (res: Timezone[]) => {
        console.log('Timezones Result', res);
        
        let timezones: Timezone[];
        timezones = res;
        
        console.log('Timezones ', timezones);
        this.storage.setTimezones(timezones);
      },
      (err: Error) => {
        console.log('Error in getTimezones', err.message);
      }
    );
  }

  public fetchTimezones(): Promise<any> {
    return this.storage.getTimezones();
  }

  public getTimezoneById(timezones: Timezone[], timezoneId: string): Timezone {
    return timezones.find(
      ut => ut.id == timezoneId
    );
  }
}
