export class PaymentMethodTypeSuccessRate {
    AccountType!: string;
    AccountTypeId!: number;
    Platform!: string;
    MPPA!: number;
    StatusId!: number | null;
    StatusName!: string;
    TransactionsCount!: number;
    CustomersCount!: number;
    UniqueCustomersCount!: number;
    MPPATransactionOrigin!: number;
}