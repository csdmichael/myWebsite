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

export interface Resume {
  name: string;
  headline: string;
  contact: Contact;
  summary: string;
  skills: string[];
  certifications: string[];
  experiences: ExperienceItem[];
}
