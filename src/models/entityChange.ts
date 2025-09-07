export class EntityChange {
    Id!: number;
    EntityId!: string;
    EntityType!: string;
    EntityChange!: string;
    CreatedAt!: string;
    APITypeId!: number;
    UserIdentity!: string;
    UserIdentityJSON!: UserIdentity;
}


export class UserIdentity {
    Name!: string;
    PreferredName!: string;
    IdentityId!: string;
    UserInAppId!: string;
}