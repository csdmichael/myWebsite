export class QueryLog {
    id!: number;
    report!: string;
    resultsetIds!: string;
    dateRange!: string;
    filterBy!: string;
    filterValues!: string;
    createdAt!: string | null;
    createdBy!: string;
}