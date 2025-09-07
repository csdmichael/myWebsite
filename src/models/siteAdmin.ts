import { SupportUser } from './supportUser';
import { Site } from './site';

export class SiteAdminView {
    id!: string;
    isDeleted!: boolean;
    siteId!: string;
    site!: Site;
    userId!: string;
    user!: SupportUser;
    usersecret!: Usersecret;
}

export class SiteAdmin {
    id!: string;
    siteId!: string;
    userId!: string;
    isDeleted!: boolean;
}

export class SiteAdminPost extends SupportUser {
    siteId!: string;
    pin!: number;
}

export class Usersecret {
    pin!: number;
}


