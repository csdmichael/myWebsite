export class SupportGroup {
    Id!: string;
    Name!: string;
    ProjectId!: number | null;
    Primary_Responsibilities!: string;
    Phone!: string;
    Email!: string;
    EscalatePhone!: string;
    EscalateEmail!: string;
    TicketLink!: string;
    AdditionalInfo!: string;
    UpdatedBy!: string;
    IsDeleted!: boolean;
    CreateDate!: string;
    UpdateDate!: string;
    CreatedBy!: string;
    IsTicketSystemIntegrated!: boolean;
    AdoIncIdsList!: number[]; 

    SupportGroup() {
        this.AdoIncIdsList = [];
    }
}