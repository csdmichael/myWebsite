// Pre-populated resume data (sourced from uploaded PDF).
import { Resume } from '../models/resume.model';

export const RESUME_DATA: Resume = {
  name: 'Michael Yaacoub',
  headline: 'Principal Full-Stack & AI Software Engineer / Architect',
  contact: {
    email: 'csdmichael@gmail.com',
    phone: '860-706-2742',
    location: 'San Francisco Bay, CA (Danville, CA)',
    linkedin: 'https://www.linkedin.com/in/michael-yaacoub-7a46436',
    github: 'https://www.github.com/csdmichael'
  },
  summary: `21+ years of professional experience in architecture, analysis, design, and development of applications 
  across Cloud, Mobility, Web, Databases, and AI/ML. Expertise leading onshore and offshore teams, delivering 
  enterprise solutions for Fortune 500 clients. Proven track record in AI (chatbots, fraud detection, customer segmentation, 
  agentic AI), full-stack (Angular, React, ASP.NET Core, Ionic), and cloud (Azure, AWS, GCP). Strong focus on 
  performance, scalability, security, and user experience. Skilled in CI/CD, DevOps automation, and modernizing 
  legacy platforms to cloud-native, AI-powered systems.`,
  
  skills: [
    // Cloud
    'Microsoft Azure', 'Amazon AWS', 'Google GCP',
    // Programming Languages
    'Python', 'C#', 'Java', 'C++',
    // Web & Frontend
    'Angular', 'React', 'TypeScript', 'Node.js', 'HTML5', 'Ionic', 'React Native',
    // AI & ML
    'Azure OpenAI Service', 'LangChain', 'LangGraph', 'TensorFlow', 'PyTorch',
    'Agentic AI (AutoGen, CrewAI)', 'Azure ML Studio', 'AWS SageMaker', 'AWS Bedrock',
    'Generative AI & Prompt Engineering', 'Azure Cognitive Services',
    // Databases
    'SQL Azure', 'SQL Server (SSIS, SSRS, SSAS)', 'Oracle', 'MongoDB',
    'Databricks', 'Apache Spark', 'HDFS', 'Amazon RDS (pgvector)', 'Pinecone',
    // Frameworks
    'ASP.NET Core', 'ASP.NET', 'Flask', 'Django', 'Sitecore', 'SharePoint',
    // DevOps & Automation
    'Azure DevOps', 'Ansible', 'CloudFormation', 'CI/CD Pipelines',
    // Other
    'Agile (Scrum, Kanban)', 'Waterfall', 'UX Design', 'Microservices Architecture'
  ],

  certifications: [
    'UC Berkeley – Professional Certificate in AI & Machine Learning (In Progress)',
    'AWS Certified AI Practitioner',
    'MSc in Computer Science and Engineering',
    'Bachelor’s in Computer Science and Engineering',
    'MCSE – Azure Cloud',
    'MCSD for .NET',
    'MCITP – BI Developer & Maintenance',
    'MCAD for .NET',
    'MCTS – SharePoint Administration',
    'MCTS – SQL Server 2005',
    'MCDBA – SQL 2005',
    'MCP – Web Development',
    'AngularJS Certified',
    'Fundamentals of Azure OpenAI Service',
    'PMP – Project Management Professional',
    'Sitecore Developer Certified'
  ],

  experiences: [
    {
      title: 'Principal Full Stack & AI Software Engineer (Mobility & Cloud)',
      company: 'Wipro Technologies / TechMahindra – Client: Chevron',
      companyLogo: '../../assets/icon/companies/Chevron.png',
      startDate: 'Oct 2019',
      endDate: 'Present',
      summary: 'Led enterprise mobility and AI initiatives at Chevron, building mobile, web, and AI/ML applications.',
      bullets: [
        'Built and supported Chevron consumer mobile apps (Pay at Pump, Terminal Check-in, COCO, Engineering Toolkit, Pump Price OCR, CBP).',
        'Implemented fraud detection, customer segmentation, and chatbots using Azure OpenAI, Python, TensorFlow, LangChain.',
        'Designed multi-agent AI systems with AutoGen for workflow automation (code generation, data analysis, summarization).',
        'Built reusable Ionic/Angular components, authentication services, Google Maps integrations.',
        'Developed admin portals with ASP.NET Core, SQL Azure, Redis Cache, Azure Functions.',
        'Implemented CI/CD with Azure DevOps, pipelines for mobile (iOS/Android) and backend deployments using Ansible.'
      ],
      technologies: [
        'Azure OpenAI', 'Python', 'TensorFlow', 'LangChain', 'LangGraph', 'AutoGen',
        'Angular', 'React', 'Ionic', 'ASP.NET Core', 'SQL Azure', 'Databricks',
        'Azure Functions', 'Azure FrontDoor', 'Redis Cache', 'Azure DevOps', 'Ansible'
      ]
    },
    {
      title: 'Senior Technical Architect (Cloud, Mobility, Data, BI, SharePoint)',
      company: 'Virtusa – Client: Pratt & Whitney',
      companyLogo: '../../assets/icon/companies/PrattAndWhitney.png',
      startDate: 'Jun 2016',
      endDate: 'Oct 2019',
      summary: 'Architected and developed mobile apps and led SharePoint cloud migration projects.',
      bullets: [
        'Developed mobile apps (LineSheets, HR Onboarding, MyApprovals, Travel & Expense) using Ionic, Xamarin, ASP.NET Core.',
        'Migrated multiple SharePoint portals to Azure Cloud, introducing microservices and Docker containers.',
        'Built distributed ETL pipelines with Apache Spark, Hadoop, and Azure Data Factory.',
        'Designed BI dashboards and reporting systems using SSRS, SSAS, PerformancePoint.'
      ],
      technologies: ['Ionic', 'Xamarin', 'AngularJS', 'ASP.NET Core', 'Azure Data Factory', 'Databricks', 'Apache Spark', 'SharePoint']
    },
    {
      title: 'Senior Technical Architect / Developer',
      company: 'KaizenTek – Client: Day Pitney LLP',
      companyLogo: '../../assets/icon/companies/DayPitney.png',
      startDate: 'May 2015',
      endDate: 'Jun 2016',
      summary: 'Led Sitecore public website and SharePoint portal development.',
      bullets: [
        'Architected and delivered Sitecore-based public website on Azure Cloud.',
        'Supported internal SharePoint portal and custom workflows.',
        'Migrated IIS and classic ASP apps to Azure Cloud.',
        'Built BI and reporting for HR and law case apps.'
      ],
      technologies: ['Sitecore', 'Azure Cloud', 'SQL Azure', 'SharePoint', 'FusionCharts', 'ASP.NET MVC']
    },
    {
      title: 'Senior Technical Architect / Developer',
      company: 'KaizenTek – Client: State of Connecticut (CJIS)',
      companyLogo: '../../assets/icon/companies/CJIS.png',
      startDate: 'Jan 2014',
      endDate: 'Apr 2015',
      summary: 'Built and maintained Connecticut Information Sharing System.',
      bullets: [
        'Implemented SharePoint Online + Azure-based CISS system.',
        'Built ETL pipelines and data warehouse for offender records.',
        'Configured SharePoint farm, FAST search topology, BI stack.',
        'Developed dashboards and maps for incidents reporting.'
      ],
      technologies: ['Azure Cloud', 'SQL Azure', 'SharePoint 2013', 'SSIS', 'SSAS', 'PowerPivot', 'IBM FileNet']
    },
    {
      title: 'Senior Technical Architect / Developer',
      company: 'KaizenTek – Client: Merck Pharmaceutical',
      companyLogo: '../../assets/icon/companies/Merck.png',
      startDate: 'Sep 2012',
      endDate: 'Dec 2014',
      summary: 'Delivered BI dashboards, migrated portals to Azure, built ETL pipelines.',
      bullets: [
        'Built Merck IT Generic Scorecard System with SQL Server and SharePoint.',
        'Implemented Expense Dashboard integrating SAP, Project Server, and SSIS.',
        'Developed PowerPivot templates for HR analytics.',
        'Migrated Sitecore and databases to Azure and AWS.'
      ],
      technologies: ['Azure Cloud', 'SQL Server', 'SSRS', 'SSAS', 'SharePoint', 'SSIS', 'PowerPivot']
    },
    {
      title: 'Senior Developer',
      company: 'ITWorx – Client: Somers School District (NY)',
      companyLogo: '../../assets/icon/companies/SomersSchoolDistrict.png',
      startDate: 'Jun 2011',
      endDate: 'Aug 2012',
      summary: 'Built education dashboards and migrated Connected Learning Gateway to Azure.',
      bullets: [
        'Developed Education Analytics Dashboard on SharePoint Online.',
        'Migrated Connected Learning Gateway to Azure Cloud with auto-scaling.',
        'Built dashboards (maps, charts, KPIs) for school productivity.'
      ],
      technologies: ['Azure Cloud', 'SQL Azure', 'SharePoint Online', 'Silverlight', 'WCF Services']
    },
    {
      title: 'Senior Developer',
      company: 'ITWorx – Client: United Technologies (UTC)',
      companyLogo: '../../assets/icon/companies/UTC.png',
      startDate: 'Sep 2006',
      endDate: 'May 2011',
      summary: 'Developed BI dashboards, Sarbanes-Oxley tools, and supported SharePoint/SQL environments.',
      bullets: [
        'Built HR & Legal BI dashboards with SSRS, SSAS, and PerformancePoint.',
        'Implemented Sarbanes-Oxley Assessment tools for 20,000+ users.',
        'Migrated Otis portal to SharePoint 2010 with improved UX.',
        'Managed ETL pipelines, cubes, and enterprise reporting.'
      ],
      technologies: ['SharePoint 2007/2010', 'SQL Server', 'SSRS', 'SSAS', 'ProClarity', 'ASP.NET']
    },
    {
      title: 'Software Engineer',
      company: 'ITWorx – Clients: POET EMS & RMS Insurance',
      companyLogo: '../../assets/icon/companies/ITWorx.png',
      startDate: 'Aug 2004',
      endDate: 'Aug 2006',
      summary: 'Developed CMS and insurance workflow systems.',
      bullets: [
        'Built CMS for legal publications at POET EMS.',
        'Developed RiskClick workflow for RMS Insurance to handle McDonald’s franchise insurance.',
        'Implemented reports, PDFs, workflow automation, and UI enhancements.'
      ],
      technologies: ['Java', 'JSP', 'Oracle', 'ASP.NET', 'SQL Server']
    }
  ]
};