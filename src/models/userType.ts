export class UserType {
    public Id!: string;
    public Name!: string;
    public numOfRows!: number;

    UserType() {
        this.numOfRows = 0;
    }
}