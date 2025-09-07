import { SupportGroup } from "./supportGroup";
import { User } from "./user";
import { UserSecret } from "./userSecret";
import { UserType } from "./userType";

export class SupportUser {
    Id!: string;
    FirstName!: string;
    LastName!: string;
    Email!: string;
    Phone!: string;
    UserTypeId!: string;
    CAI!: string;
    CreateDate!: string;
    UpdateDate!: string;
    CreatedBy!: string;
    IsActive!: boolean;
    UpdatedBy!: string;
    IsDeleted!: boolean;
    SupportGroupId!: string;
    SupportGroup!: SupportGroup;
    ByDeviceId!: number;
    UserType!: UserType;
    UserSecret!: UserSecret;
    ShowPin!: boolean;
    ToggleIcon!: string;

    SupportUser() {
        this.SupportGroup = new SupportGroup();
        this.UserType = new UserType();
        this.UserSecret = new UserSecret();
        this.ShowPin = false;
        this.ToggleIcon = 'eye';
    }
}

export class SupportUserExport {
    FirstName!: string;
    LastName!: string;
    Email!: string;
    Phone!: string;
    UserTypeId!: string;
    CAI!: string;
    CreateDate!: string;
    UpdateDate!: string;
    CreatedBy!: string;
    IsActive!: boolean;
    UpdatedBy!: string;
    IsDeleted!: boolean;
    SupportGroupName!: string;
    UserType!: string;

    constructor(su: SupportUser) {
        this.CAI = su.CAI;
        this.CreateDate = su.CreateDate;
        this.CreatedBy = su.CreatedBy;
        this.Email = su.Email;
        this.Phone = su.Phone;
        this.FirstName = su.FirstName;
        this.LastName = su.LastName;
        this.IsActive = su.IsActive;
        this.IsDeleted = su.IsDeleted;
        this.UpdateDate = su.UpdateDate;
        this.UpdatedBy = su.UpdatedBy;
        if (su.SupportGroup != null && su.SupportGroup != undefined) {
            this.SupportGroupName = su.SupportGroup.Name;
        }
        if (su.UserType != null && su.UserType != undefined) {
            this.UserType = su.UserType.Name;
        }
    }
}