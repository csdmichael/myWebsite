export class CvxRewardsCustomer {
    public FirstName!: string;
    public LastName!: string;
    public Name!: string;
    public Phone!: string;
    public Email!: string;
    public UserId!: string;
    public Devices!: DeviceInfo[];
    public showRewardsData!: boolean;
}

export class DeviceInfo {
    public Identifier!: string;
    public DeviceTypeName!: string;
}

export class CvxRewardsCustomerCounts {
    public DevicesCount!: number;
    public UsersCount!: number;
}