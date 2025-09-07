import { SmartLogEntryField } from "./smartLogEntryField";

export class SmartLogEntry {
    public StepTime!: string;
    public StepTitle!: string;
    public IsSuccess!: boolean;
    public Fields!: SmartLogEntryField;
}