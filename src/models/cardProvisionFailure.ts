export class CardProvisionFailure {
    public operationId!: string;
    public timestamp!: string;
    public PayMethodName!: string;
    public cardLast4!: string;
    public cardBin!: string;
    public failReasonCode!: string;
    public errorKey!: string;
    public errorMessage!: string;
    public deviceIdentifier!: string;
    public latitude!: string;
    public longitude!: string;
    public exceptionMessage!: string;
    public appInsightsList: any;
    public showRL!: boolean;
}