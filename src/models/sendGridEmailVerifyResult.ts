export class SendGridEmailVerifyResult {
    result: Result
  }
  
  export class Result {
    email: string
    verdict: string
    score: number
    local: string
    host: string
    checks: Checks
    source: string
    ip_address: string
  }
  
  export class Checks {
    domain: Domain
    local_part: LocalPart
    additional: Additional
  }
  
  export class Domain {
    has_valid_address_syntax: boolean
    has_mx_or_a_record: boolean
    is_suspected_disposable_address: boolean
  }
  
  export class LocalPart {
    is_suspected_role_address: boolean
  }
  
  export class Additional {
    has_known_bounces: boolean
    has_suspected_bounces: boolean
  }
  