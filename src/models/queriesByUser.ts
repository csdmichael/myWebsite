import { QueryLog } from "./queryLog";

export class QueriesByUser {

    constructor() {
        this.QueryLogList = [];
        this.ShowQueries = false;
    }

    UserId!: string | null;
    UserFullName!: string;
    Email!: string;
    NumOfQueries!: number;
    LastQueryAt!: string;
    ShowQueries: boolean;
    QueryLogList: QueryLog[];
}