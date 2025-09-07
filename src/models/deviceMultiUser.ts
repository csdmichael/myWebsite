import { User } from "./user";

export class DeviceMultiUser {
  Identifier: string;
  NumOfUsers: number;
  LastUserSignUpAt: string;
  LatestUserId: string;
  DeviceId: string;
  DeviceTypeId: number;
  Latitude: number;
  Longitude: number;
  CreatedAt: string;
  LastUpdatedAt: string;
  UserIds: string;
  showAccounts: boolean;
  UsersSummary: User[] = null;
}

export class DeviceMultiUserXLS {
  public constructor (dmu: DeviceMultiUser) {
    this.CreatedAt = dmu.CreatedAt;
    this.DeviceId = dmu.DeviceId;
    this.DeviceType = (dmu.DeviceTypeId == 1)?'Android':'iOS';
    this.Identifier = dmu.Identifier;
    //this.UserIds = dmu.UserIds;
    this.LastUpdatedAt = dmu.LastUpdatedAt;
    this.LastUserSignUpAt = dmu.LastUserSignUpAt;
    this.LatestUserId = dmu.LatestUserId;
    this.Latitude = dmu.Latitude;
    this.Longitude = dmu.Longitude;
    this.NumOfUsers = dmu.NumOfUsers;
    /*
    this.UserEmails = '';
    if (dmu.UsersSummary != null) {
      for(let i = 0; i < dmu.UsersSummary.length; i++){
        let currEmail = dmu.UsersSummary[i].Email;
        if (this.UserEmails == '') {
          this.UserEmails = currEmail;
        }
        else {
          this.UserEmails += ',' + currEmail;
        }
      }
    }
    */
  }

  
  Identifier: string;
  NumOfUsers: number;
  LastUserSignUpAt: string;
  LatestUserId: string;
  DeviceId: string;
  DeviceType: string;
  Latitude: number;
  Longitude: number;
  CreatedAt: string;
  LastUpdatedAt: string;
  //UserIds: string;
  //UserEmails: string;
}