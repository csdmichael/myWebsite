// Pre-populated resume data (sourced from uploaded PDF).
import { Resume } from '../models/resume.model';

export const RESUME_DATA: Resume = {
  name: 'Michael Yaacoub',
  headline: 'Principal Full-Stack & AI Software Engineer / Architect',
  location: 'San Francisco Bay, CA',
  workAuthorization: 'US Citizen',
  linkedin: 'https://www.linkedin.com/in/michael-yaacoub-7a46436',
  github: 'https://www.github.com/csdmichael',
  contact: {
    email: 'csdmichael@gmail.com',
    phone: '860-706-2742'
  },
  summary: [
    'Higly experienced in architecture, analysis, design, and development of applications across Cloud, Mobility, Web, Databases, and AI/ML.',
  'Expertise leading onshore and offshore teams, delivering enterprise solutions for Fortune 500 clients.',
  'Proven track record in AI (chatbots, fraud detection, customer segmentation, agentic AI), full-stack (Angular, React, ASP.NET Core, Ionic), and cloud (Azure, AWS, GCP).', 
  'Strong focus on performance, scalability, security, and user experience.',
  'Skilled in CI/CD, DevOps automation, and modernizing legacy platforms to cloud-native, AI-powered systems.'
  ],  
  
  skills: {
    'Cloud': [
    'Microsoft Azure',
    'Amazon AWS',
    'Google GCP'
  ],
  'Programming Languages': [
    'Python',
    'C#',
    'Java',
    'C++'
  ],
  'Web & Frontend': [
    'Angular',
    'React',
    'TypeScript',
    'Node.js',
    'HTML5',
    'Ionic',
    'React Native'
  ],
  'AI & ML': [
    'Azure OpenAI Service',
    'Azure AI Foundry',
    'Agentic AI (AutoGen, CrewAI)',
    'Azure ML Studio',
    'Azure Cognitive Services',
    'Google Vertex AI',
    'LangChain',
    'LangGraph',
    'TensorFlow',
    'PyTorch',
    'AWS SageMaker',
    'AWS Bedrock',
    'Generative AI & Prompt Engineering',
  ],
  'Databases': [
    'SQL Azure',
    'SQL Server (SSIS, SSRS, SSAS)',
    'Redis Cache',
    'Oracle',
    'MongoDB',
    'Databricks',
    'Apache Spark',
    'HDFS',
    'Amazon RDS (pgvector)',
    'Pinecone'
  ],
  'Frameworks': [
    'ASP.NET Core',
    'ASP.NET',
    'Flask',
    'Django',
    'Sitecore',
    'SharePoint'
  ],
  'DevOps & Automation': [
    'Azure DevOps',
    'Ansible',
    'CloudFormation',
    'CI/CD Pipelines',
    'Git/GitHub',
    'Terraform'
  ],
  'Other': [
    'Agile (Scrum, Kanban)',
    'Waterfall',
    'UX Design',
    'Microservices Architecture',
    'RESTful APIs',
    'GraphQL',
    'Docker',
    'Kubernetes',
    'Apache Kafka'
  ]},
  education: [
    {
      degree: 'Professional Certificate in Artifical Intelligence (AI) and Machine Learning (ML)',
      institution: 'Berkeley University of California (UC Berkeley) - School of Information',
      graduationMonthYear: 'Mar 2026 (In Progress)',
      referenceUrl: 'https://em-executive.berkeley.edu/professional-certificate-machine-learning-artificial-intelligence',
      logoUrl: '../../assets/icon/education/berkeleyUniv.png'
    },
    {
      degree: 'Master of Science in Computer Science and Engineering',
      institution: 'Alexandria University, Faculty of Engineering, Computer Science Department, Egypt',
      graduationMonthYear: 'Feb 2008',
      referenceUrl: '',
      logoUrl: '../../assets/icon/education/alexUniv.png'
    },
    {
      degree: 'Bachelor of Science in Computer Science and Engineering',
      institution: 'Alexandria University, Faculty of Engineering, Computer Science Department, Egypt',
      graduationMonthYear: 'June 2004',
      referenceUrl: '',
      logoUrl: '../../assets/icon/education/alexUniv.png'
    }
  ],
  certifications: 
    [
      {
        "degree": "AWS Certified AI Practitioner",
        "institution": "Amazon Web Services",
        "graduationMonthYear": "Aug 2025",
        "referenceUrl": "https://www.credly.com/badges/15381a33-6b27-49f6-8f4f-2beae0076582/linked_in_profile",
        "logoUrl": "../../assets/icon/institutions/AWS.png"
      },
      {
        "degree": "Google Cloud - GenAI Agents",
        "institution": "Google",
        "graduationMonthYear": "Aug 2025",
        "referenceUrl": "https://drive.google.com/file/d/1KDsWSsQF0DjfN1QBJJuqUaLm_6YaPCJ3/view?usp=sharing",
        "logoUrl": "../../assets/icon/institutions/Google.png"
      },
      {
        "degree": "Apache Kafka",
        "institution": "Apache",
        "graduationMonthYear": "Aug 2025",
        "referenceUrl": "https://drive.google.com/file/d/1FycwKojTbB2ghRRLQibNHSFpytSH174f/view?usp=sharing",
        "logoUrl": "../../assets/icon/institutions/Apache.png"
      },
      {
        "degree": "Azure OpenAI for Pharma",
        "institution": "Microsoft - Wipro",
        "graduationMonthYear": "Aug 2025",
        "referenceUrl": "https://drive.google.com/file/d/1SwpYqP0vQFYT9DIZlt-yy725MQKCLAxD/view?usp=sharing",
        "logoUrl": "../../assets/icon/institutions/Wipro.png"
      },
      {
        "degree": "Azure OpenAI for Healthcare",
        "institution": "Microsoft - Wipro",
        "graduationMonthYear": "Aug 2025",
        "referenceUrl": "https://drive.google.com/file/d/1VaL3eCXvLCv-Fc8_tDYNTNwnCYmjGfy6/view?usp=sharing",
        "logoUrl": "../../assets/icon/institutions/Wipro.png"
      },
      {
        "degree": "Best D&C Consultant Award in Energy Domain FY 2024/2025",
        "institution": "Wipro",
        "graduationMonthYear": "Apr 2025",
        "referenceUrl": "https://drive.google.com/file/d/1k1piw3SZ1-3k95lz4xol9sUCLOpwyBhD/view?usp=sharing",
        "logoUrl": "../../assets/icon/institutions/Wipro.png"
      },
      {
        "degree": "Fundamentals of Azure OpenAI Service",
        "institution": "Microsoft",
        "graduationMonthYear": "May 2024",
        "referenceUrl": "https://drive.google.com/file/d/1pLGCuTUC4HBKhy2SyiOgbaK-bPqi4LoB/view?usp=sharing",
        "logoUrl": "../../assets/icon/institutions/Microsoft.png"
      },
      {
        "degree": "Scrum Fundamentals",
        "institution": "TechMahindra",
        "graduationMonthYear": "Oct 2019",
        "referenceUrl": "https://drive.google.com/file/d/1jhkDmdUy25VcYqso2ALRObBnbbI8TSIT/view?usp=sharing",
        "logoUrl": "../../assets/icon/institutions/Techmahindra.png"
      },
      {
        "degree": "Microsoft® Certified Solutions Expert (MCSE) – Azure Cloud",
        "institution": "Microsoft",
        "graduationMonthYear": "Dec 2018",
        "referenceUrl": "https://drive.google.com/file/d/1Qr8AkaPcKq6Vh5LEQtLiGub7I5p84SRD/view?usp=sharing",
        "logoUrl": "../../assets/icon/institutions/Microsoft.png"
      },
      {
        "degree": "Sitecore Developer Certified",
        "institution": "Sitecore",
        "graduationMonthYear": "Mar 2016",
        "referenceUrl": "https://drive.google.com/file/d/1tFMCKryTbpPi4m6bW0Zu1ztbBEF5gt2f/view?usp=sharing",
        "logoUrl": "../../assets/icon/institutions/Sitecore.png"
      },
      {
        "degree": "AngularJS Certified",
        "institution": "Google",
        "graduationMonthYear": "Apr 2017",
        "referenceUrl": "https://drive.google.com/file/d/1Byz0COsaHQDdDSjBN7cBZfRJCZtuMHum/view?usp=sharing",
        "logoUrl": "../../assets/icon/institutions/Google.png"
      },
      
      {
        "degree": "PMP – Project Management Professional",
        "institution": "Project Management Institute",
        "graduationMonthYear": "May 2013",
        "referenceUrl": "https://drive.google.com/file/d/12NTGDNkZfv3jrSJNKCtGef2vHUX2ni33/view?usp=sharing",
        "logoUrl": "../../assets/icon/institutions/PMI.png"
      },
      {
        "degree": "Microsoft Certified IT Professional – BI Developer & Maintenance",
        "institution": "Microsoft",
        "graduationMonthYear": "Apr 2011",
        "referenceUrl": "https://drive.google.com/file/d/1S7u6KdG2Y4XAhldgQ_H3GtSJeP_azUke/view?usp=sharing",
        "logoUrl": "../../assets/icon/institutions/Microsoft.png"
      },
      {
        "degree": "Microsoft Certified Tehnology Specialist (MCTS) – SQL Server 2005",
        "institution": "Microsoft",
        "graduationMonthYear": "Jul 2008",
        "referenceUrl": "https://drive.google.com/file/d/1S7u6KdG2Y4XAhldgQ_H3GtSJeP_azUke/view?usp=sharing",
        "logoUrl": "../../assets/icon/institutions/Microsoft.png"
      },
      {
        "degree": "Microsoft Certified Tehnology Specialist (MCTS) – SharePoint Administration",
        "institution": "Microsoft",
        "graduationMonthYear": "Jun 2007",
        "referenceUrl": "",
        "logoUrl": "../../assets/icon/institutions/Microsoft.png"
      },
      {
        "degree": "Microsoft Certified Database Administrator (MCDBA) – SQL 2005",
        "institution": "Microsoft",
        "graduationMonthYear": "May 2006",
        "referenceUrl": "https://drive.google.com/file/d/1S7u6KdG2Y4XAhldgQ_H3GtSJeP_azUke/view?usp=sharing",
        "logoUrl": "../../assets/icon/institutions/Microsoft.png"
      },
      {
        "degree": "Microsoft Certified Solutions Developer (MCSD) – .NET",
        "institution": "Microsoft",
        "graduationMonthYear": "Mar 2006",
        "referenceUrl": "https://drive.google.com/file/d/1S7u6KdG2Y4XAhldgQ_H3GtSJeP_azUke/view?usp=sharing",
        "logoUrl": "../../assets/icon/institutions/Microsoft.png"
      },
      {
        "degree": "Microsoft Certified Application Developer (MCAD) - .NET",
        "institution": "Microsoft",
        "graduationMonthYear": "Jan 2006",
        "referenceUrl": "https://drive.google.com/file/d/1S7u6KdG2Y4XAhldgQ_H3GtSJeP_azUke/view?usp=sharing",
        "logoUrl": "../../assets/icon/institutions/Microsoft.png"
      },
      {
        "degree": "Microsoft Certified Professional (MCP) – Web Development",
        "institution": "Microsoft",
        "graduationMonthYear": "Dec 2005",
        "referenceUrl": "https://drive.google.com/file/d/1S7u6KdG2Y4XAhldgQ_H3GtSJeP_azUke/view?usp=sharing",
        "logoUrl": "../../assets/icon/institutions/Microsoft.png"
      }
  ],

  experiences: [
    {
      title: 'Principal Full Stack & AI Software Engineer (Mobility & Cloud)',
      company: 'Wipro Technologies / TechMahindra – Client: Chevron',
      companyLogo: '../../assets/icon/institutions/Chevron.png',
      location: 'San Ramon, CA',
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
        'Azure OpenAI', 'Python', 'TensorFlow', 'LangChain', 'LangGraph', 'AutoGen', 'Azure AI Foundry',
        'Ionic', 'Angular', 'TypeScript', 'React', 'ASP.NET Core', 'SQL Azure', 'Databricks',
        'Azure Functions', 'Azure FrontDoor', 'Redis Cache', 'Azure DevOps', 'Ansible', 'C#', 'Python'
      ]
    },
    {
      title: 'Senior Technical Architect (Cloud, Mobility, Data, BI, SharePoint)',
      company: 'Virtusa – Client: Pratt & Whitney',
      companyLogo: '../../assets/icon/institutions/PrattAndWhitney.png',
      location: 'Windsor, CT',
      startDate: 'Jun 2016',
      endDate: 'Oct 2019',
      summary: 'Architected and developed mobile apps and led SharePoint cloud migration projects.',
      bullets: [
        'Developed mobile apps (LineSheets, HR Onboarding, MyApprovals, Travel & Expense) using Ionic, Xamarin, ASP.NET Core.',
        'Migrated multiple SharePoint portals to Azure Cloud, introducing microservices and Docker containers.',
        'Built distributed ETL pipelines with Apache Spark, Hadoop, and Azure Data Factory.',
        'Designed BI dashboards and reporting systems using SSRS, SSAS, PerformancePoint.'
      ],
      technologies: ['Ionic', 'Xamarin', 'AngularJS', 'React', 'ASP.NET Core', 'C#', 'SQL Azure', 'Azure Data Factory', 'Databricks', 'Apache Spark', 'SharePoint']
    },
    {
      title: 'Senior Technical Architect / Developer',
      company: 'KaizenTek – Client: Day Pitney LLP',
      companyLogo: '../../assets/icon/institutions/DayPitney.png',
      location: 'Hartford, CT',
      startDate: 'May 2015',
      endDate: 'Jun 2016',
      summary: 'Led Sitecore public website and SharePoint portal development.',
      bullets: [
        'Architected and delivered Sitecore-based public website on Azure Cloud.',
        'Supported internal SharePoint portal and custom workflows.',
        'Migrated IIS and classic ASP apps to Azure Cloud.',
        'Built BI and reporting for HR and law case apps.'
      ],
      technologies: ['Sitecore', 'Azure Cloud', 'SQL Azure', 'SharePoint', 'FusionCharts', 'ASP.NET MVC', 'C#']
    },
    {
      title: 'Senior Technical Architect / Developer',
      company: 'KaizenTek – Client: State of Connecticut (CJIS)',
      companyLogo: '../../assets/icon/institutions/CJIS.png',
      location: 'Hartford, CT',
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
      companyLogo: '../../assets/icon/institutions/Merck.png',
      location: 'Whitehouse Station, NJ',
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
      companyLogo: '../../assets/icon/institutions/SomersSchoolDistrict.png',
      location: 'Farmington, CT',
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
      companyLogo: '../../assets/icon/institutions/UTC.png',
      location: 'Farmington, CT',
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
      companyLogo: '../../assets/icon/institutions/ITWorx.png',
      location: 'Cairo, Egypt',
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
  ], 
  aiMlProjects: [
  {
    "title": "Generative AI Chatbot for Support",
    "company": "Chevron – Knowledge Automation",
    "problem": "Customers of Chevron / Texaco Gas Stations & ExtraMile Stores needed fast responses when using Mobile Payment at the Pump and C-Stores, as well as when asking about Loyalty / Rewards Programs. Manual support caused long delays and high costs.",
    "solutionImpact": "Built a Generative AI chatbot using Azure OpenAI Services and Azure AI Search with RAG architecture to ground GPT-4 Turbo on Chevron support data. Customers and Level 1 agents could instantly retrieve contextual answers. Result: 60% fewer incident escalations (support calls reduced from 3000+ to 1200 daily), SLA for escalations reduced by 80%, and annual support cost savings of $2M–$4M.",
    "whatIBuilt": [
      "Integrated 28 data sources (POS, Mobile Payments, Fraud System, Loyalty System, logs, transactional DBs).",
      "Developed ETL pipelines for cleansing, preparation, and transformation into a data warehouse.",
      "Provisioned Azure OpenAI Service, Azure AI Search, and configured search indexes (RAG).",
      "Integrated the chatbot with Chevron Support Website and Mobile Apps.",
      "Implemented feedback loops for reinforcement learning with human feedback (customers & support agents)."
    ],
    "challengesOvercome": [
      "Built 28+ ETL integrations in a cost-effective, scalable way.",
      "Added safeguards and guardrails to Azure OpenAI Chatbot to prevent jail-breaking and ensure customer PII protection."
    ],
    "reference": "https://www.wipro.com/oil-and-gas/articles/harnessing-ai-and-genai-to-transform-mobility-fuel-and-convenience-retail/"
  },
  {
    "title": "Customer Segmentation for Personalized Promotions and Loyalty Offers",
    "company": "Chevron",
    "problem": "All customers were treated the same in loyalty campaigns, missing opportunities to target high-value customers while nurturing lower-value ones.",
    "solutionImpact": "Built a customer segmentation model in Python categorizing users into Platinum, Gold, Silver, and Bronze tiers. Data was stored in Azure Data Lake and integrated into Salesforce Marketing Cloud. Personalized promotions improved engagement, retention, and boosted fuel + convenience store sales.",
    "whatIBuilt": [
      "Designed segmentation pipeline using Pandas, Scikit-learn, SQL preprocessing.",
      "Applied clustering and rule-based thresholds for tiering customers.",
      "Built ETL pipelines to Azure Data Lake for downstream marketing use.",
      "Integrated segmentation outputs with Salesforce Marketing Cloud.",
      "Developed dashboards for Chevron marketing teams to track KPIs."
    ],
    "challengesOvercome": [
      "Resolved inconsistencies in mobile transaction data (duplicates, missing values).",
      "Optimized pipelines to process millions of transactions monthly at scale.",
      "Handled schema mismatches between Azure Data Lake and Salesforce Marketing Cloud.",
      "Balanced machine-driven clustering with intuitive business tiers."
    ],
    "reference": ""
  },
  {
    "title": "Real-Time Fraud & Anomaly Detection for Mobile Payments",
    "company": "Chevron / Texaco / ExtraMile",
    "problem": "Fuel and convenience store mobile payments required real-time fraud detection to prevent revenue leakage and compliance risks.",
    "solutionImpact": "Integrated anomaly detection models and Azure OpenAI reasoning agents to flag suspicious activity in milliseconds. Reduced fraud losses and improved compliance with financial standards.",
    "whatIBuilt": [
      "Developed low-latency AI service layer connected to mobile/web apps.",
      "Implemented APIs, real-time event streams, and Azure-based microservices."
    ],
    "challengesOvercome": [
      "Balanced detection accuracy with sub-second response requirements.",
      "Used vector databases (pgvector) and caching for scalable, low-latency performance."
    ],
    "reference": ""
  },
  {
    "title": "AI-Driven Predictive Maintenance for Aerospace Engines",
    "company": "Pratt & Whitney",
    "problem": "Aircraft engines produce massive telemetry data requiring predictive insights to minimize unplanned downtime.",
    "solutionImpact": "Deployed ML models (Spark + PyTorch) for anomaly detection and Remaining Useful Life (RUL) predictions. Improved fleet readiness and reduced unplanned maintenance.",
    "whatIBuilt": [
      "Built ingestion pipelines (Kafka, Hadoop, Spark) for telemetry streams.",
      "Implemented ML scoring and anomaly detection models.",
      "Developed BI dashboards with Power BI and SSRS for engineering analysis."
    ],
    "challengesOvercome": [
      "Processed terabytes of time-series data with minimal lag.",
      "Tuned distributed Spark jobs for efficiency.",
      "Optimized feature engineering pipelines across multi-node clusters."
    ],
    "reference": ""
  },
  {
    "title": "Intelligent Knowledgebase Assistant for Internal Applications",
    "company": "Chevron",
    "problem": "Support teams wasted time searching across SharePoint, Confluence, JIRA, and ServiceNow, slowing issue resolution and increasing support costs.",
    "solutionImpact": "Built an AI-powered knowledge assistant using Azure OpenAI + RAG to unify fragmented knowledge. Enabled natural language Q&A for support staff, cutting resolution time and improving consistency.",
    "whatIBuilt": [
      "Built RAG pipeline with Azure OpenAI for contextual question answering.",
      "Indexed SharePoint, Confluence, JIRA, and ServiceNow with Cognitive Search.",
      "Integrated with Azure Storage Accounts for secure data and embeddings.",
      "Connected APIs to internal support portals for real-time answers.",
      "Implemented monitoring to track accuracy, latency, and adoption."
    ],
    "challengesOvercome": [
      "Standardized unstructured data while preserving role-based permissions.",
      "Reduced hallucinations with fine-tuned embeddings and prompt engineering.",
      "Scaled for concurrent queries without latency issues.",
      "Drove adoption with workshops and feedback loops for trust-building."
    ],
    "reference": ""
  },
  {
    "title": "Conduct Inspections of Equipment at Refineries using Cognitive Services",
    "company": "Chevron",
    "problem": "Manual inspection of refinery equipment was costly and labor-intensive, costing millions annually.",
    "solutionImpact": "Developed a mobile + wearable-enabled app to capture equipment images and videos, uploaded to cloud storage, and analyzed with Azure Cognitive Services. Predicted maintenance schedules from visual cues (e.g., rust, discoloration). Saved millions yearly in inspection costs.",
    "whatIBuilt": [
      "Implemented backend APIs for uploading media into cloud storage.",
      "Provisioned and configured Azure Cognitive Services for image/video analysis.",
      "Developed an inspector-facing admin portal for reviewing results."
    ],
    "challengesOvercome": [
      "Integrated mobile app with wearable devices for seamless data capture.",
      "Scaled processing for massive high-resolution images and long videos.",
      "Improved model accuracy by fine-tuning Cognitive Services for refinery conditions.",
      "Converted raw outputs into actionable predictive maintenance insights.",
      "Enforced Chevron’s strict security and compliance requirements.",
      "Overcame resistance to digital transition through user-focused design and ROI demonstration."
    ],
    "reference": ""
  }
]

};