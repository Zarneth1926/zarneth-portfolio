import type { CSSProperties } from 'react'
import { MapPin } from '@/components/slab'
import { profile } from '@/data/profile'

type Capability = {
  index: string
  title: string
  marks: { src: string; name: string }[]
}

const CAPABILITIES: Capability[] = [
  {
    index: '01',
    title: 'Frontend foundations',
    marks: [
      { src: '/icons/ai/react.svg', name: 'React' },
      { src: '/icons/ai/vite.svg', name: 'Vite' },
      { src: '/icons/ai/tailwindcss.svg', name: 'Tailwind CSS' },
    ],
  },
  {
    index: '02',
    title: 'Backend and APIs',
    marks: [
      { src: '/icons/ai/nodedotjs.svg', name: 'Node.js' },
      { src: '/icons/ai/react.svg', name: 'Express and React integration' },
    ],
  },
  {
    index: '03',
    title: 'Practical software building',
    marks: [
      { src: '/icons/ai/github.svg', name: 'GitHub' },
      { src: '/icons/vscode.svg', name: 'VS Code' },
    ],
  },
  {
    index: '04',
    title: 'Growing toward full-stack',
    marks: [
      { src: '/icons/ai/nodedotjs.svg', name: 'Node.js' },
      { src: '/icons/ai/vite.svg', name: 'Vite' },
      { src: '/icons/ai/github.svg', name: 'GitHub' },
    ],
  },
]

export default function AboutGrid() {
  return (
    <section className="pgrid agrid" aria-labelledby="about-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">About</span>
        <h1 className="pgrid__title" id="about-title">Hi, I&apos;m {profile.firstName}.</h1>
        <p className="pgrid__lede">A BS Information Technology student focused on web development and growing toward full-stack development.</p>
      </header>

      <div className="home__glass agrid__glass">
        <div className="agrid__copy">
          <p className="agrid__lead">
            I enjoy building practical digital systems and solving logical and technical problems.
            <span> I care about both the implementation and the user experience.</span>
          </p>

          <p className="agrid__note">
            I am a <strong>3rd Year BS Information Technology student</strong> at Our Lady of Lourdes College. My current focus is strengthening frontend and backend foundations through projects that help me understand APIs, databases, deployment, and how complete web systems connect.
          </p>

          <ul className="agrid__caps" role="list">
            {CAPABILITIES.map((capability) => (
              <li key={capability.index} className="agrid__cap">
                <span className="agrid__cap-marks">
                  {capability.marks.map((mark, i) => (
                    <span key={mark.name} className="agrid__mark" style={{ '--i': capability.marks.length - i } as CSSProperties}>
                      <img src={mark.src} alt={mark.name} loading="lazy" decoding="async" />
                    </span>
                  ))}
                </span>
                <span className="agrid__cap-title">{capability.title}</span>
                <span className="agrid__cap-index" aria-hidden="true">{capability.index}</span>
              </li>
            ))}
          </ul>

          <div className="agrid__bar">
            <span className="agrid__cell">
              <span className="agrid__cell-mark"><MapPin size={16} weight="fill" aria-hidden="true" /></span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">{profile.location}</span>
                <span className="agrid__cell-meta">Based in Central Luzon</span>
              </span>
            </span>

            <span className="agrid__cell">
              <span className="agrid__cell-mark"><span aria-hidden="true">3Y</span></span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">Our Lady of Lourdes College</span>
                <span className="agrid__cell-meta">BS Information Technology · 3rd Year</span>
              </span>
            </span>

            <span className="agrid__cell agrid__cell--wide">
              <span className="agrid__cell-mark agrid__cell-mark--plain"><span aria-hidden="true">→</span></span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">Frontend → Full-Stack Development</span>
                <span className="agrid__cell-meta">Current direction</span>
              </span>
            </span>
          </div>
        </div>

        <div className="agrid__portrait">
          <img src={profile.hero.portraitSrc} alt={profile.hero.portraitAlt} loading="eager" decoding="async" width={400} height={400} />
        </div>
      </div>
    </section>
  )
}
