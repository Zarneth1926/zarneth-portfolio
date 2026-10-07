import type React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  FolderOpen,
  User,
  Code,
  Medal,
  Stack,
  EnvelopeSimple,
  Briefcase,
} from '@/components/slab'
import { profile } from '@/data/profile'

/**
 * Home's desktop index. Each card points to a real portfolio area and keeps
 * the original bento layout so the content replacement does not disturb the
 * shell's motion or responsive behavior.
 */

const PROJECT_MARKS = [
  { name: 'GenHub', status: 'Active development' },
  { name: 'Portfolio V2', status: 'In development' },
]

const STACK_GROUPS = [
  { Icon: Code, title: 'Frontend', note: 'React · Vite · CSS' },
  { Icon: Briefcase, title: 'Backend', note: 'Node.js · Express' },
  { Icon: Stack, title: 'Database', note: 'MySQL' },
  { Icon: FolderOpen, title: 'Deployment', note: 'Vercel · Railway · Aiven' },
] as const

const CONTACT_LINKS = [
  { name: 'Email', role: profile.email, work: 'Primary contact', logo: undefined },
  { name: 'GitHub', role: 'Zarneth1926', work: 'Projects and source', logo: '/icons/ai/github.svg' },
  { name: 'LinkedIn', role: 'Zarneth Layoso', work: 'Professional profile', logo: '/icons/linkedin.svg' },
]

function CardHead({
  Icon,
  title,
  desc,
}: {
  Icon: typeof FolderOpen
  title: string
  desc: string
}) {
  return (
    <header className="bento__head">
      <span className="bento__label">
        <span className="bento__icon">
          <Icon size={20} weight="fill" aria-hidden="true" />
        </span>
        <h3 className="bento__title">{title}</h3>
      </span>
      <p className="bento__desc">{desc}</p>
      <ArrowUpRight size={15} weight="bold" aria-hidden="true" className="bento__arrow" />
    </header>
  )
}

export default function HomeBento() {
  return (
    <nav className="bento" aria-label="Explore the portfolio">
      <Link to="/projects" className="bento__card bento__card--projects">
        <CardHead Icon={FolderOpen} title="Projects" desc="Real systems, capstone work, and the portfolio itself." />
        <div className="bento__media bento__reel" aria-hidden="true">
          <div className="bento__reel-track">
            {[...PROJECT_MARKS, ...PROJECT_MARKS].map((project, i) => (
              <span key={`${project.name}-${i}`} className="bento__shot bento__shot--label">
                <span className="bento__project-label">{project.name}</span>
                <span className="bento__project-status">{project.status}</span>
              </span>
            ))}
          </div>
        </div>
      </Link>

      <Link to="/about" className="bento__card bento__card--about">
        <CardHead Icon={User} title="About" desc="A 3rd Year IT student growing from frontend toward full-stack development." />
        <div className="bento__media bento__fan" aria-hidden="true">
          {[profile.avatarSrc, '/avatar.svg?2', '/avatar.svg?3'].map((src, i) => (
            <span key={src} className="bento__photo" style={{ ['--i' as string]: i }}>
              <img src={src} alt="" loading="lazy" decoding="async" />
            </span>
          ))}
        </div>
      </Link>

      <Link to="/projects" className="bento__card bento__card--ai">
        <CardHead Icon={Code} title="Current Focus" desc="Building GenHub while strengthening frontend and backend foundations." />
        <div className="bento__media bento__chips" aria-hidden="true">
          {[...PROJECT_MARKS, ...PROJECT_MARKS].map((project, i) => (
            <span key={`${project.name}-${i}`} className="bento__chip" data-status="Internal">
              <Code size={15} weight="duotone" />
              {project.name}
            </span>
          ))}
        </div>
      </Link>

      <Link to="/testimonials" className="bento__card bento__card--creds">
        <CardHead Icon={Medal} title="Credentials" desc="Current learning paths and completed Cisco certificates." />
        <div className="bento__media bento__badge" aria-hidden="true">
          <span className="bento__badge-ring">
            <Medal size={44} weight="duotone" />
          </span>
          <span className="bento__badge-tag">Cisco certifications</span>
        </div>
      </Link>

      <Link to="/services" className="bento__card bento__card--services">
        <CardHead Icon={Stack} title="Tech Stack" desc="Tools used across frontend, backend, data, and deployment." />
        <ul className="bento__media bento__offers" role="list">
          {STACK_GROUPS.map(({ Icon, title, note }, i) => (
            <li key={title} className="bento__offer" style={{ '--i': i } as React.CSSProperties}>
              <span className="bento__offer-tile">
                <Icon size={15} weight="duotone" aria-hidden="true" />
              </span>
              <span className="bento__offer-text">
                <span className="bento__offer-title">{title}</span>
                <span className="bento__offer-note">{note}</span>
              </span>
              <span className="bento__offer-num" aria-hidden="true">0{i + 1}</span>
            </li>
          ))}
        </ul>
      </Link>

      <Link to="/contact" className="bento__card bento__card--quotes">
        <CardHead Icon={EnvelopeSimple} title="Contact" desc="Open to opportunities, projects, and ideas." />
        <div className="bento__media bento__reviews" aria-hidden="true">
          <div className="bento__reviews-track">
            {[...CONTACT_LINKS, ...CONTACT_LINKS].map((contact, i) => (
              <span key={`${contact.name}-${i}`} className="bento__review">
                <span className="bento__review-top">
                  {contact.logo ? <img src={contact.logo} alt="" width={18} height={18} /> : <EnvelopeSimple size={14} weight="fill" />}
                  <b>{contact.name}</b>
                </span>
                <span className="bento__review-role">{contact.role}</span>
                <span className="bento__review-work">{contact.work}</span>
              </span>
            ))}
          </div>
        </div>
      </Link>
    </nav>
  )
}
