export class UserStats {
    UserId!: string;
    TransactionsCount!: number;
    SuccessCount!: number;
    FailCount!: number;
    CancelCount!: number;
    SuccessPercent!: number;
    PayMethodsAll!: number;
    PayMethodsActive!: number;
    PayMethodsDeleted!: number;
    CardProvisionFailures!: number;
    CardProvisionsTotal!: number;
    CardProvisionsSuccessPercent!: number;
    //FraudKPI!: string;
    TrustedCustomerScore!: number;
}