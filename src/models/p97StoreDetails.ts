export class GeoLocation {
    latitude!: number;
    longitude!: number;
}

export class Address {
    streetAddress!: string;
    city!: string;
    stateCode!: string;
    postalCode!: string;
    countryIsoCode!: string;
}

export class MobilePaymentStatus {
    allowInsidePayment!: boolean;
    allowOutsidePayment!: boolean;
    paymentsOffline!: boolean;
    allowOrderAhead!: boolean;
    allowScan!: boolean;
    allowPostPay!: boolean;
}

export class FuelProduct {
    key!: string;
    gradeType!: string;
    name!: string;
    standardProductCode!: string;
    cashPrice!: number;
    creditPrice!: number;
    octaneRating!: number;
    productCode!: string;
    uom!: string;
    currencyCode!: string;
    formattedCreditPrice!: string;
}

export class FuelingPoint {
    pumpNumber!: number;
    serviceLevel!: string;
    pumpStatus!: string;
    fuelProducts!: FuelProduct[];
}

export class FuelService {
    status!: string;
    fuelProducts!: FuelProduct[];
    fuelingPoints!: FuelingPoint[];
}

export class CarWashService {
    status!: string;
}

export class PartnerStoreInfo {

}

export class LoyaltyService2 {
    programId!: string;
    programName!: string;
    status!: string;
}

export class LoyaltyService {
    loyaltyServices!: LoyaltyService[];
}

export class P97StoreDetails {
    storeId!: string;
    storeName!: string;
    storeNumber!: string;
    geoLocation!: GeoLocation;
    address!: Address;
    fuelBrand!: string;
    phone!: string;
    numberOfPumps!: number;
    tenantId!: string;
    mobilePaymentStatus!: MobilePaymentStatus;
    services!: string[];
    sitePasscodeEnforced!: boolean;
    isFullService!: boolean;
    tenantName!: string;
    fuelService!: FuelService;
    carWashService!: CarWashService;
    partnerStoreInfo!: PartnerStoreInfo;
    loyaltyService!: LoyaltyService;
    updatedOn!: string;
    geofenceDistanceMeters!: number;
    hardGeofenceEnforced!: boolean;
    customProperties!: any[];
}