export type TechStackGroup = {
  title: string
  items: string[]
}

export const techStackGroups: TechStackGroup[] = [
  { title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'Tailwind CSS'] },
  { title: 'Backend', items: ['Node.js', 'Express'] },
  { title: 'Database', items: ['MySQL'] },
  { title: 'Development Tools', items: ['Git', 'GitHub', 'VS Code', 'XAMPP', 'MySQL Workbench', 'Thunder Client'] },
  { title: 'Deployment / Cloud', items: ['Vercel', 'Railway', 'Aiven'] },
  { title: 'Supporting Tools / Technologies', items: ['Axios', 'Nodemon', 'VirtualBox', 'Cisco Packet Tracer'] },
]

export const learningFocus = [
  'TypeScript',
  'Full-stack application architecture',
  'React architecture and component design',
  'AI-powered web application concepts',
]
