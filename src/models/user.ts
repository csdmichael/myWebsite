//import { Device } from "./device";
//import { Transaction } from "./transaction";
//import { UserPaymentMethod } from "./userPaymentMethod";
//import { UserPreference } from "./userPreference";

export class User {
    IsDeleted: boolean;
    DeletedUserInfo: any;
    Id!: string;
    FirstName!: string;
    LastName!: string;
    Phone!: string;
    ZipCode!: string;
    BirthDate!: Date | null;
    //PhoneType: string;
    //PhoneCountryCode: string;
    //PhoneCarrier: string;
    Email!: string;
    PaydiantCustomerId!: string;
    IsSignupCompleted!: boolean | null;
    IsEmailVerified!: boolean | null;
    IsPhoneVerified!: boolean | null;
    AceptedTermsVersion!: number | null;
    CreatedAt!: string | null;
    UpdatedAt!: string | null;
    DeletedAt!: string | null;
    CreatedWithDeviceIdentifier!: string;
    UniqueSalt!: string;
    HashedPinCode!: string;
    AcceptedPrivacyPolicyVersion!: number | null;
    ClientAppType!: number | null;
    CompleteProfileShown!: boolean;
    PhoneCarrierType!: string;
    ExternalCarDevice!: number;
    ExternalWatchDevice!: number;
    Devices: any;
    Transactions: any;
    UserPaymentMethods: any;
    UserPreference: any;
    LastActiveAt!: Date | null;
    LastLoggedInAt!: Date | null;
    PhoneNumberData: any;
    
    IsAgeVerified!: boolean;
    IsIdentityVerified!: boolean;
    IgnoreRestrictions!: boolean;
    MembershipProductInterests!: string;
    EnrollmentStoreExternalId!: string;
}