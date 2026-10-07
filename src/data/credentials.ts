export type Credential = {
  title: string
  issuer: string
  status: 'In Progress' | 'Completed'
  focus?: string[]
  profileUrl?: string
}

export const currentLearning: Credential[] = [
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    status: 'In Progress',
    focus: ['HTML', 'CSS', 'Responsive Web Design', 'Accessibility', 'Web Page Layout'],
    profileUrl: 'https://www.freecodecamp.org/zarneth19',
  },
  {
    title: 'JavaScript Algorithms and Data Structures',
    issuer: 'freeCodeCamp',
    status: 'In Progress',
    focus: ['JavaScript fundamentals', 'Functions', 'Arrays', 'Objects', 'Algorithms', 'Problem solving'],
    profileUrl: 'https://www.freecodecamp.org/zarneth19',
  },
]

export const completedCertifications: Credential[] = [
  {
    title: 'Getting Started with Cisco Packet Tracer',
    issuer: 'Cisco Networking Academy',
    status: 'Completed',
  },
  {
    title: 'Exploring Networking with Cisco Packet Tracer',
    issuer: 'Cisco Networking Academy',
    status: 'Completed',
  },
]
