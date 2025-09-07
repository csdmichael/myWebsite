///////////////////////////////////////////////////////////////////////////////////////////////
///////// AUTHOR: MICHAEL YAACOUB /////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

import { Injectable } from '@angular/core';
import { AppVersion } from '@ionic-native/app-version/ngx';

@Injectable({
  providedIn: 'root'
})
export class AppVersionService {

  constructor(private appVersion: AppVersion) { }

  public getAppName(): Promise<any> {
    return this.appVersion.getAppName();
  }

  public getPackageName(): Promise<any> {
    return this.appVersion.getPackageName();
  }

  public getVersionCode(): Promise<any> {
    return this.appVersion.getVersionCode();
  }

  public getVersionNumber(): Promise<any> {
    return this.appVersion.getVersionNumber();
  }

  public getWindowHref(): string {
    if (window !== null && window!== undefined) {
      if (window.location !== null && window.location!== undefined) {
        return window.location.origin;
      } else {
        return '';
      }
    } else {
      return '';
    }
  }
    
}
