import { PaymentMethodType } from "./paymentMethodType";

export class UserPaymentMethod {
    UserId!: string;
    PaymentMethod!: number;
    PaymentAccountUri!: string;
    PaymentMethodDetails!: string;
    CreatedAt!: string | null;
    IsDefault: boolean = false;
    UpdatedAt!: string | null;
    IsDeleted: boolean | null = false;
    DeletedAt!: string | null;
    Id!: string;
    EncryptedPin!: string;
    EncryptedPinIv!: string;
    ExpDate!: string | null;
    PhoneNumber!: string;
    ExpiringMessageShown: boolean = false;
    EncryptedPAN!: string;
    EncryptedPANIv!: string;
    BalanceMessageShown: boolean = false;
    ExpiredMessageShown: boolean = false;
    MPPAProviderId!: number;
    DeletedFromPaydiantAt!: string | null;
    DeletedFromP97At!: string | null;
    PaymentMethodType: PaymentMethodType = new PaymentMethodType;
    MPPAProviderSourceId!: number;
    FullCardNum!: string;
    CardPin!: string;
    CardStatus!: string;
    CardBalance!: number;
    DisplayCardNum: boolean = false;
}