export interface Contact {
  email: string;
  phone?: string;
  location?: string;
  workAuthorization?: string;
  linkedin?: string;
  github?: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  companyLogo: string;
  startDate?: string;
  endDate?: string;
  summary?: string;
  bullets?: string[];
  technologies?: string[];
}

export interface AIMLProject {
  title: string;
  company: string;
  problem: string;
  solutionImpact: string;
  whatIBuilt: string[];
  challengesOvercome: string[];
  reference: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  graduationMonthYear: string;
  referenceUrl: string;
  logoUrl: string;
}

export interface CertificateItem {
  degree: string;
  institution: string;
  graduationMonthYear: string;
  referenceUrl?: string;
  logoUrl?: string;
}

export interface Resume {
  name: string;
  headline: string;
  contact: Contact;
  summary: string[];
  skills: any;
  education: EducationItem[];
  certifications: CertificateItem[];
  experiences: ExperienceItem[];
  aiMlProjects: AIMLProject[];
}
