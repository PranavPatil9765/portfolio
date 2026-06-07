import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {

  public readonly portfolioData = {
    hero: {
      name: 'Pranav Patil',
      title: 'Full Stack Software Engineer',
      tagline: 'Smart India Hackathon 2024 Winner | 4-Star CodeChef | Building scalable systems with AI & modern web technologies'
    },
    about: {
      bio: 'Computer Engineering student at Pimpri Chinchwad College of Engineering with strong expertise in full-stack development, system design, and AI/ML. Currently a Software Engineering Intern at Quick Heal Technologies, leading frontend development for multi-tenant architecture. Passionate about building scalable, high-performance systems with clean code principles. Top-ranked competitive programmer with 500+ DSA problems solved.'
    },
    skills: {
      technical: [
        { category: 'Frontend', items: ['Angular', 'React', 'TypeScript', 'Next.js'] },
        { category: 'Backend', items: ['Node.js', 'Express.js', 'Spring Boot', 'Java', 'REST APIs', 'GraphQL', 'FastAPI', 'Python'] },
        { category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Pinecone', 'Vector Databases'] },
        { category: 'Core', items: ['Data Structures', 'Algorithms', 'System Design', 'RAG', 'LLMs', 'Embeddings', 'LangChain'] }
      ]
    },
    experience: [
      {
        company: 'Quick Heal Technologies',
        position: 'Software Engineering Intern',
        duration: 'Aug 2025 – Present',
        description: 'Led frontend development of multi-tenant architecture for Seqrite Threat Intelligence (STI) using Angular, ensuring secure data isolation for 10+ tenants and seamless experience for 100+ users. Designed and enforced RBAC across 5+ roles. Owned DRMS development enabling 200+ detection rules. Integrated REST/GraphQL APIs with RxJS, reducing page load time by 20% and delivering 8+ features in Agile sprints.'
      }
    ],
    education: [
      {
        institution: 'Pimpri Chinchwad College of Engineering, Pune',
        degree: 'B.Tech in Computer Engineering',
        duration: 'Nov 2022 – May 2026',
        location: 'Pune, India'
      }
    ],
    projects: [
      {
        title: 'DocHub – Document Management System',
        description: 'Scalable Spring Boot microservices platform for document management handling 10K+ files. Implemented event-driven architecture with RabbitMQ improving API response time by 25%. Built high-performance search using PostgreSQL GIN with sub-second retrieval and secured APIs with JWT/OAuth2 across 15+ endpoints.',
        technologies: ['Angular', 'Java', 'Spring Boot', 'PostgreSQL', 'RabbitMQ', 'Elasticsearch', 'System Design'],
        link: 'https://github.com',
        githubLink: 'https://github.com/PranavPatil9765/DocHub',
        liveLink: 'https://dochub976.netlify.app/'
      },
      {
        title: 'DevDoc Assistant – RAG-based AI System',
        description: 'AI-powered RAG assistant enabling contextual querying over 5K+ documents with improved response relevance. Engineered vector embedding pipelines with semantic search achieving sub-second latency. Architected scalable FastAPI backend with streaming and session-based context, reducing latency by 30%.',
        technologies: ['LangGraph', 'FastAPI', 'Vector DB', 'RAG', 'Python', 'Embeddings', 'LangChain'],
        link: 'https://github.com',
        githubLink: 'https://github.com/PranavPatil9765/Dev-Doc-Assistant',
        liveLink: 'https://dev-doc-assistant.netlify.app/'
      },
      {
        title: 'Sahakar – Collaboration Platform',
        description: 'Scalable collaboration platform using React and Node.js. Designed efficient backend systems with graph/queue-based algorithms for workflow and task scheduling. Engineered real-time communication pipelines with optimized backend processing for improved responsiveness and scalability.',
        technologies: ['React', 'Node.js', 'MongoDB', 'System Design', 'Real-time Communication', 'Graph Algorithms'],
        link: 'https://sahakargov.netlify.app/',
        githubLink: 'https://github.com/PranavPatil9765/Sahakar-Draft1',
        liveLink: 'https://sahakargov.netlify.app/'
      }
    ],
    contact: {
      email: 'pranavp1608@gmail.com',
      phone: '+91-9529846876',
      location: 'Pune, India',
      links: [
        { label: 'GitHub', url: 'https://github.com' },
        { label: 'LinkedIn', url: 'https://linkedin.com' },
        { label: 'LeetCode', url: 'https://leetcode.com' },
        { label: 'CodeChef', url: 'https://codechef.com' }
      ]
    },
    achievements: [
      'Winner, Smart India Hackathon 2024 (National Level)',
      '4-Star CodeChef (Max Rating: 1816) – Top 2% globally',
      'Knight on LeetCode – Top 4% globally',
      'Solved 500+ DSA problems across platforms'
    ]
  };

  constructor() { }
}
