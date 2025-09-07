export class AvatarUrls {
    "48x48": string;
    "24x24": string;
    "16x16": string;
    "32x32": string;
}

export class ReqLinks {
    jiraRest!: string;
    avatarUrls: AvatarUrls = new AvatarUrls;
    self!: string;
    web!: string;
    agent!: string;
}

export class Author {
    accountId!: string;
    displayName!: string;
    active: boolean = false;
    timeZone!: string;
    _links: ReqLinks = new ReqLinks;
    emailAddress!: string;
}

export class Created {
    iso8601!: string;
    jira!: string;
    friendly!: string;
    epochMillis: any;
}

export class AtlassianRequestComments {
    _expands: string[] = [];
    size!: number;
    start!: number;
    limit!: number;
    isLastPage: boolean = false;
    _links: ReqLinks = new ReqLinks;
    values: Value[] = [];
}

export class Value {
    _expands: string[] = [];
    id!: string;
    body!: string;
    public: boolean = false;
    author: Author = new Author;
    created: Created = new Created;
    _links: ReqLinks = new ReqLinks;
}