export type ProjectStatus = 'Active Development' | 'In Development'

export type PortfolioProject = {
  id: string
  name: string
  fullTitle: string
  type: string
  status: ProjectStatus
  description: string
  problem?: string
  users?: string[]
  frontend?: string[]
  backend?: string[]
  database?: string[]
  deployment?: string[]
  technologies: string[]
  repository?: string
  liveDemo?: string
  category: 'flagship' | 'portfolio'
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'genhub',
    name: 'GenHub',
    fullTitle: 'GenHub — Web-Based Barangay Information and Concern Management System',
    type: 'Capstone Project / Full-Stack Web Application',
    status: 'Active Development',
    description:
      'GenHub is a web-based barangay information and concern management system designed to make barangay services more accessible to residents while helping barangay personnel manage service requests, resident information, announcements, events, and administrative workflows.',
    problem:
      'Many barangay transactions require residents to visit the barangay office for document requests, updates, and other services. GenHub aims to provide a more convenient digital workflow for residents while giving barangay personnel a centralized system for managing requests and community information.',
    users: ['Residents', 'Barangay Staff', 'Barangay Secretary', 'Barangay Captain'],
    frontend: ['React', 'Vite', 'Tailwind CSS'],
    backend: ['Node.js', 'Express'],
    database: ['MySQL'],
    deployment: ['Vercel — Frontend', 'Railway — Backend', 'Aiven — Production MySQL Database'],
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MySQL'],
    liveDemo: 'https://genhub-umber.vercel.app',
    category: 'flagship',
  },
  {
    id: 'portfolio-v2',
    name: 'Zarneth Portfolio V2',
    fullTitle: 'Zarneth Portfolio V2',
    type: 'Personal Developer Portfolio',
    status: 'In Development',
    description:
      'A modern developer portfolio designed to present my projects, technical skills, development journey, learning progress, and credentials through a responsive and interactive web experience.',
    technologies: ['React', 'TypeScript', 'Vite', 'React Router', 'Three.js', 'GSAP', 'Lenis', 'CSS'],
    repository: 'https://github.com/Zarneth1926/zarneth-portfolio',
    category: 'portfolio',
  },
]
