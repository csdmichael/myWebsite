import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DateRangeObj } from 'src/models/dateRangeObj';
import { HttpService } from '../http/http';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class DateRangeObjService {

  constructor(private http: HttpService, private storage: StorageService) { }

  public getDateRangeObjs(): Observable<any> {
    let userAccessToken = this.storage.getUserAccessToken();
    return this.http.getSecure('DateRanges', userAccessToken);
  }


  public loadDateRangeObjs() {
    let userAccessToken = this.storage.getUserAccessToken();
    if (userAccessToken !== null && userAccessToken !== undefined) {
      this.getDateRangeObjs().subscribe(
        (res: any) => {
          console.log('DateRangeObjs ', res);
          let dateRangeObjsData = res.$values;
          console.log('DateRangeObjsData ', dateRangeObjsData);
          this.storage.setDateRangeObjs(dateRangeObjsData);
        },
        (err: Error) => {
          console.log('Error in getDateRangeObjs', err.message);
        }
      );
    }
  }

  public fetchDateRangeObjs(): Promise<any> {
    return this.storage.getDateRangeObjs();
  }

  public getDateRangeObjById(dateRangeObjs: DateRangeObj[], dateRangeObjId: string): DateRangeObj {
    return dateRangeObjs.find(
      t => t.Id == dateRangeObjId
    );
  }
}
