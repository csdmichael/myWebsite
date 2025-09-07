import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  constructor() { }

  public isMobile(): boolean {
    let isMobile: boolean;
    //If on Mobile Device (not web) -> use Azure AD Plugin to authenticate user
    isMobile = (document.URL.indexOf('http://localhost') === 0 || 
      document.URL.indexOf('ionic') === 0 || 
      document.URL.indexOf('https://localhost') === 0)
      && document.URL.indexOf('http://localhost:8100') !== 0;
    return isMobile;
  }
}
