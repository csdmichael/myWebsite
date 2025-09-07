export class LoginAttemptsStats {
    UserId!: string | null;
    UserFullName!: string;
    UserLogin!: string;
    Email!: string;
    IsAzureAD!: boolean;
    Success!: number;
    Failure!: number;
    LastLoginAt!: string;
    GroupId!: string;
    GroupName!: string;
}