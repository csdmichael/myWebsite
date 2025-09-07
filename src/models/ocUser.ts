export class OCUser {
    PhoneNumber!: string;
    OCEnrollmentBonusReceived!: boolean;
    OCEnrollmentBonusReceivedAt!: string | null;
    Id!: string;
    FirstName!: string;
    LastName!: string;
    Email!: string;
    RewardProviderJSON!: string;
    LoyaltyWhitelist!: string;
    RewardProvider!: RewardProviderObj;
    showMore!: boolean;
}

export class RewardProviderObj {
    actual!: number;
    previous!: number;
}