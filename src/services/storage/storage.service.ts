///////////////////////////////////////////////////////////////////////////////////////////////
///////// AUTHOR: MICHAEL YAACOUB /////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage'

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private deviceStorage: Storage/*, private keychain: Keychain*/) {
    this.deviceStorage.create();
   }

  
  ///////////////////////////////////////////////////////////////////////////
  // PRIVATE METHODS /////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////
  private async clearSessionStorage(): Promise<any> {
    return await localStorage.removeItem('ACCESS_TOKEN');  
  }

  private setSessionStorage(itemName: string, value: string) {
    localStorage.setItem(itemName, value);
  }

  private getSessionStorage(itemName: string): string {
    return localStorage.getItem(itemName);
  }

  private getDeviceStorage(itemName: string): Promise<any> {
    return this.deviceStorage.get(itemName);
  }

  private setDeviceStorage(itemName: string, value: any) {
    return this.deviceStorage.set(itemName, value);
  }

  ///////////////////////////////////////////////////////////////////////////
  // PUBLIC METHODS /////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////
  /*
  public setAppAccessToken(value: string) {
    this.setSessionStorage('AppAccessToken', value);
  }

  public getAppAccessToken(): string {
    return this.getSessionStorage('AppAccessToken');
  }
  */
  //----------------------------------------------------------
  public setUserName(value: string) {
    this.setSessionStorage('UserName', value);
  }

  public getUserName(): string {
    return this.getSessionStorage('UserName');
  }

  //----------------------------------------------------------
  public setUserId(value: string) {
    this.setSessionStorage('UserId', value);
  }

  public getUserId(): string {
    return this.getSessionStorage('UserId');
  }

  //----------------------------------------------------------
  public setDeviceId(value: string) {
    this.setSessionStorage('DeviceId', value);
  }

  public getDeviceId(): string {
    return this.getSessionStorage('DeviceId');
  }

  //----------------------------------------------------------
  public setUserRole(value: string) {
    this.setSessionStorage('UserRole', value);
  }

  public getUserRole(): string {
    return this.getSessionStorage('UserRole');
  }

  //----------------------------------------------------------
  public setUserAccessToken(value: string) {
    this.setSessionStorage('UserToken', value);
  }

  public clearUserAccessToken() {
    this.setUserAccessToken(null);
    this.setUserName(null);
    this.setUserRole(null);
  }

  public getUserAccessToken(): string {
    return this.getSessionStorage('UserToken');
  }

  //----------------------------------------------------------
  public setSiteName(value: any) {
    this.setDeviceStorage('SiteName', value);
  }

  public getSiteName(): Promise<any> {
    return this.getDeviceStorage('SiteName');
  }

  //----------------------------------------------------------
  public setSiteId(value: any) {
    this.setDeviceStorage('SiteId', value);
  }

  public getSiteId(): Promise<any> {
    return this.getDeviceStorage('SiteId');
  }

  //----------------------------------------------------------
  public setDeviceInfo(value: any) {
    this.setDeviceStorage('DeviceInfo', value);
  }

  public getDeviceInfo(): Promise<any> {
    return this.getDeviceStorage('DeviceInfo');
  }

  //----------------------------------------------------------
  public setAreaId(value: any) {
    this.setDeviceStorage('AreaId', value);
  }

  public getAreaId(): Promise<any> {
    return this.getDeviceStorage('AreaId');
  }

  //----------------------------------------------------------
  public setCounties(value: any) {
    this.setDeviceStorage('Counties', value);
  }

  public getCounties(): Promise<any> {
    return this.getDeviceStorage('Counties');
  }


  //----------------------------------------------------------
  public setAreaName(value: any) {
    this.setDeviceStorage('AreaName', value);
  }

  public getAreaName(): Promise<any> {
    return this.getDeviceStorage('AreaName');
  }

  //----------------------------------------------------------
  public setVisitorsInArea(value: any) {
    this.setDeviceStorage('VisitorsInArea', value);
  }

  public getVisitorsInArea(): Promise<any> {
    return this.getDeviceStorage('VisitorsInArea');
  }

  //----------------------------------------------------------
  public setSupportGroups(value: any) {
    this.setDeviceStorage('SupportGroups', value);
  }

  public getSupportGroups(): Promise<any> {
    return this.getDeviceStorage('SupportGroups');
  }

  //----------------------------------------------------------
  public setUserTypes(value: any) {
    this.setDeviceStorage('UserTypes', value);
  }

  public getUserTypes(): Promise<any> {
    return this.getDeviceStorage('UserTypes');
  }

  //----------------------------------------------------------
  public setRelIncStatuses(value: any) {
    this.setDeviceStorage('RelIncStatuses', value);
  }

  public getRelIncStatuses(): Promise<any> {
    return this.getDeviceStorage('RelIncStatuses');
  }

  //----------------------------------------------------------
  public setTimezones(value: any) {
    this.setDeviceStorage('Timezones', value);
  }

  public getTimezones(): Promise<any> {
    return this.getDeviceStorage('Timezones');
  }

  //----------------------------------------------------------
  public setAreas(value: any) {
    this.setDeviceStorage('Areas', value);
  }

  public getAreas(): Promise<any> {
    return this.getDeviceStorage('Areas');
  }
  
  //----------------------------------------------------------
  public setCvxRewardsRegions(value: any) {
    this.setDeviceStorage('CvxRewardsRegions', value);
  }

  public getCvxRewardsRegions(): Promise<any> {
    return this.getDeviceStorage('CvxRewardsRegions');
  }

  
  
  //----------------------------------------------------------
  public setStates(value: any) {
    this.setDeviceStorage('States', value);
  }

  public getStates(): Promise<any> {
    return this.getDeviceStorage('States');
  }

  //----------------------------------------------------------
  public setSearchTerms(value: any) {
    this.setDeviceStorage('SearchTerms', value);
  }

  public getSearchTerms(): Promise<any> {
    return this.getDeviceStorage('SearchTerms');
  }
  //----------------------------------------------------------
 
  public setSites(value: any) {
    this.setDeviceStorage('Sites', value);
  }

  public getSites(): Promise<any> {
    return this.getDeviceStorage('Sites');
  }

  //----------------------------------------------------------
 
  public setStationsAPI(value: any) {
    this.setDeviceStorage('StationsAPI', value);
  }

  public getStationsAPI(): Promise<any> {
    return this.getDeviceStorage('StationsAPI');
  }

  //----------------------------------------------------------
 
  public setCities(value: any) {
    this.setDeviceStorage('Cities', value);
  }

  public getCities(): Promise<any> {
    return this.getDeviceStorage('Cities');
  }

  //----------------------------------------------------------
 
  public setStationsCache(value: any) {
    this.setDeviceStorage('StationsCache', value);
  }

  public getStationsCache(): Promise<any> {
    return this.getDeviceStorage('StationsCache');
  }

  //----------------------------------------------------------
 
  public setPaymentMethodTypes(value: any) {
    this.setDeviceStorage('PaymentMethodTypes', value);
  }

  public getPaymentMethodTypes(): Promise<any> {
    return this.getDeviceStorage('PaymentMethodTypes');
  }

  //----------------------------------------------------------
 
  public setTransactionStatuses(value: any) {
    this.setDeviceStorage('TransactionStatuses', value);
  }

  public getTransactionStatuses(): Promise<any> {
    return this.getDeviceStorage('TransactionStatuses');
  }

  //----------------------------------------------------------
 
  public setP97TransactionStatuses(value: any) {
    this.setDeviceStorage('P97TransactionStatuses', value);
  }

  public getP97TransactionStatuses(): Promise<any> {
    return this.getDeviceStorage('P97TransactionStatuses');
  }

  //----------------------------------------------------------
 
  public setPaydiantTransactionStatuses(value: any) {
    this.setDeviceStorage('PaydiantTransactionStatuses', value);
  }

  public getPaydiantTransactionStatuses(): Promise<any> {
    return this.getDeviceStorage('PaydiantTransactionStatuses');
  }

  //--------------------------------------------------------

  public setDateRangeObjs(value: any) {
    this.setDeviceStorage('DateRanges', value);
  }

  public getDateRangeObjs(): Promise<any> {
    return this.getDeviceStorage('DateRanges');
  }
}
