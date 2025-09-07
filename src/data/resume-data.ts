// Pre-populated resume data (sourced from uploaded PDF).
import { Resume } from '../models/resume.model';

export const RESUME_DATA: Resume = {
  name: 'Michael Yaacoub',
  headline: 'Principal Full-Stack & AI Software Engineer / Architect',
  contact: {
    email: 'csdmichael@gmail.com',
    phone: '860-706-2742',
    location: 'San Francisco Bay, CA',
    linkedin: 'https://www.linkedin.com/in/michael-yaacoub-7a46436',
    github: 'https://www.github.com/csdmichael'
  },
  summary: '21 years of professional experience in architecture, analysis, design, and development of applications across Cloud, Mobility, Web, Databases, AI and ML.',
  skills: ['Angular','TypeScript','Ionic','Python','Azure','AWS','Azure OpenAI'],
  certifications: ['AWS Certified AI Practitioner', 'MCSE - Azure'],
  experiences: [
    {
      title: 'Principal Full Stack & AI Software Engineer (Mobility & Cloud)',
      company: 'Wipro / TechMahindra – Client: Chevron',
      startDate: 'Oct 2019',
      endDate: 'Present',
      summary: 'Lead architect & developer for enterprise mobility and AI initiatives.',
      bullets: ['Built admin website and reusable Ionic/Angular components','Implemented ML models for fraud detection','Built chatbot using Azure OpenAI'],
      technologies: ['Angular','Ionic','Azure OpenAI','Python']
    }
  ]
};
