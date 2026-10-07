import { Link } from 'react-router-dom'
import { CaretRight, FolderOpen, Stack, Coffee } from '@/components/slab'
import { profile } from '@/data/profile'
import QuickMenu from './QuickMenu'

/**
 * Home on a phone, the parts the rail and the bento used to carry:
 *
 *   HomeProfile  avatar, name, verified mark, handle and the QuickMenu
 *                (theme + accessibility) - the rail's identity block, laid flat
 *   HomeStats    three proof facts (profile.stats), each named by a glyph so
 *                it reads at a glance
 *   HomeExplore  one shelf card per rail view in a snap row, then the first
 *                testimonial as a video stage
 */

export function HomeProfile() {
  return (
    <header className="hprofile">
      <img className="hprofile__avatar" src={profile.avatarSrc} alt={profile.hero.portraitAlt} width={56} height={56} />
      <div className="hprofile__who">
        <span className="hprofile__name">
          {profile.name}
        </span>
        <span className="hprofile__handle">
          {profile.handle} · {profile.role}
        </span>
      </div>
      <QuickMenu className="hprofile__menu" />
    </header>
  )
}

export function HomeStats() {
  return (
    <ul className="hstats" role="list">
      {profile.stats.map(({ value, label, Icon }, i) => (
        <li key={i}>
          <Icon className="hstats__icon" size={18} weight="duotone" aria-hidden="true" />
          <b className="hstats__value">{value}</b>
          <span className="hstats__label">{label}</span>
        </li>
      ))}
    </ul>
  )
}

const TILES = [
  { n: '01', label: 'Projects', to: '/projects', title: 'GenHub and Portfolio V2', desc: 'Explore the projects currently representing my development work.', Icon: FolderOpen },
  { n: '02', label: 'Tech Stack', to: '/services', title: 'Tools I use to build web systems', desc: 'Frontend, backend, database, deployment, and supporting tools.', Icon: Stack },
  { n: '03', label: 'Showcase', to: '/showcase', title: 'Cinematic 7 Chapters of Us', desc: 'A creative personal website currently in development.', Icon: Coffee, accent: true },
  { n: '04', label: 'Credentials', to: '/testimonials', title: 'Learning and completed certificates', desc: 'Current freeCodeCamp paths and Cisco certifications.', Icon: Stack },
  { n: '05', label: 'About', to: '/about', title: `Hi, I'm ${profile.firstName}.`, desc: 'A 3rd Year IT student growing from frontend toward full-stack development.', Icon: FolderOpen },
] as const

export function HomeExplore() {
  return (
    <>
      <div className="hsec">
        <h2 className="hsec__title">Explore</h2>
      </div>
      <ul className="htiles" role="list">
        {TILES.map((t) => (
          <li key={t.to}>
            <Link to={t.to} className={`htile${'accent' in t && t.accent ? ' htile--accent' : ''}`}>
              <span className="htile__media htile__glyph"><t.Icon size={52} weight="duotone" aria-hidden="true" /></span>
              <span className="htile__body">
                <span className="htile__n">{t.n} {t.label}</span>
                <span className="htile__title">{t.title}</span>
                <span className="htile__desc">{t.desc}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* A header that links carries its chevron on the title itself. */}
      <div className="hsec">
        <h2 className="hsec__title">
          <Link to="/projects" className="hsec__link">
            Current focus
            <CaretRight size={16} weight="bold" aria-hidden="true" />
          </Link>
        </h2>
      </div>
      <Link to="/projects" className="hproof" aria-label="GenHub, the current build">
        <span className="hproof__stage">
          <span className="hproof__project-mark" aria-hidden="true">GH</span>
          <span className="hproof__dur" aria-hidden="true">Active development</span>
        </span>
        <span className="hproof__copy">
          <span className="hproof__title">GenHub — Web-Based Barangay Information and Concern Management System</span>
          <span className="hproof__meta">Capstone project · Full-stack web application</span>
        </span>
      </Link>
    </>
  )
}
