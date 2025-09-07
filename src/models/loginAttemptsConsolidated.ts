export class LoginAttemptsConsolidated {
    UserId!: string | null;
    UserFullName!: string;
    //LoginIDUsed: string;
    Email!: string;
    //CAI: string;
    SuccessSSO!: number;
    FailSSO!: number;
    LastLoginAtSSO!: string;
    SuccessManual!: number;
    FailManual!: number;
    LastLoginAtManual!: string;
    GroupId!: string;
    GroupName!: string;
}