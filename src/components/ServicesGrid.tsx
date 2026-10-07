import { Code, Database, Cloud, Wrench, BookOpen, Stack } from '@/components/slab'
import { learningFocus, techStackGroups } from '@/data/tech-stack'
import type { Icon } from '@/components/slab'

const GROUP_ICONS: Record<string, Icon> = {
  Frontend: Code,
  Backend: Stack,
  Database,
  'Development Tools': Wrench,
  'Deployment / Cloud': Cloud,
  'Supporting Tools / Technologies': Stack,
}

export default function ServicesGrid() {
  return (
    <section className="pgrid sgrid tech-stack-page" aria-labelledby="services-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Tech Stack</span>
        <h1 className="pgrid__title" id="services-title">Tools I use to build web systems.</h1>
        <p className="pgrid__lede">A practical stack gathered through coursework, real projects, and ongoing learning.</p>
      </header>

      <div className="home__glass sgrid__glass tech-stack-page__glass">
        <div className="tech-stack-page__intro">
          <span className="sgrid__method-eyebrow">Used in practice</span>
          <h2 className="tech-stack-page__title">Organized by the part of the system they support.</h2>
          <p className="tech-stack-page__copy">These are technologies I have worked with while building web applications and learning how frontend, APIs, databases, and deployment fit together.</p>
        </div>

        <div className="tech-stack-page__groups">
          {techStackGroups.map((group, index) => {
            const GroupIcon = GROUP_ICONS[group.title] ?? Stack
            return (
              <article className="tech-stack-page__group" key={group.title}>
                <div className="tech-stack-page__group-head">
                  <span className="tech-stack-page__icon"><GroupIcon size={20} weight="duotone" aria-hidden="true" /></span>
                  <span className="tech-stack-page__index">0{index + 1}</span>
                </div>
                <h2>{group.title}</h2>
                <ul role="list">
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            )
          })}
        </div>

        <section className="tech-stack-page__learning" aria-labelledby="learning-title">
          <div className="tech-stack-page__learning-head">
            <span className="tech-stack-page__icon"><BookOpen size={20} weight="duotone" aria-hidden="true" /></span>
            <div>
              <span className="sgrid__method-eyebrow">Currently learning / improving</span>
              <h2 id="learning-title">Next areas of focus.</h2>
            </div>
          </div>
          <ul role="list">
            {learningFocus.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>
      </div>
    </section>
  )
}
