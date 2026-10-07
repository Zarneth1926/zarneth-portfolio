import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { ArrowUpRight, CheckCircle, Code, CursorClick, FolderOpen, X, type Icon } from '@/components/slab'
import { portfolioProjects, type PortfolioProject } from '@/data/projects'
import { useIsPhone } from '@/hooks/useMediaQuery'

type Project = PortfolioProject & {
  Icon: Icon
  span?: 2
}

const PROJECTS: Project[] = portfolioProjects.map((project) => ({
  ...project,
  Icon: project.category === 'flagship' ? FolderOpen : Code,
  span: project.category === 'flagship' ? 2 : undefined,
}))

const FILTERS: { key: Project['category'] | 'all'; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'flagship', label: 'Flagship' },
  { key: 'portfolio', label: 'Portfolio' },
]

function ProjectPreview({ project }: { project: Project }) {
  return (
    <div className="bento__media bento__project-preview" aria-hidden="true">
      <span className="bento__project-preview-mark">{project.name === 'GenHub' ? 'GH' : 'PV2'}</span>
      <span className="bento__project-preview-title">{project.name}</span>
      <span className="bento__project-preview-status">{project.status}</span>
      <span className="bento__project-preview-line" />
      <span className="bento__project-preview-line bento__project-preview-line--short" />
    </div>
  )
}

function ProjectDetails({ project }: { project: Project }) {
  const grouped = [
    ['Frontend', project.frontend],
    ['Backend', project.backend],
    ['Database', project.database],
    ['Deployment', project.deployment],
  ].filter(([, values]) => values?.length) as [string, string[]][]

  return (
    <article className="project-detail ppanel ppanel--window">
      <div className="ppanel__bar">
        <span className="ppanel__dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ppanel__url"><span className="ppanel__url-host">{project.name}</span></span>
      </div>
      <div className="project-detail__body">
        <header className="project-detail__head">
          <span className="project-detail__eyebrow">{project.type}</span>
          <h2 className="project-detail__title">{project.fullTitle}</h2>
          <p className="project-detail__status"><CheckCircle size={15} weight="fill" aria-hidden="true" /> {project.status}</p>
          <p className="project-detail__description">{project.description}</p>
        </header>

        {project.problem && (
          <section className="project-detail__section">
            <h3>Problem being explored</h3>
            <p>{project.problem}</p>
          </section>
        )}

        {project.users && (
          <section className="project-detail__section">
            <h3>Main users</h3>
            <ul className="project-detail__chips" role="list">
              {project.users.map((user) => <li key={user}>{user}</li>)}
            </ul>
          </section>
        )}

        <section className="project-detail__section">
          <h3>Technology</h3>
          <ul className="project-detail__chips" role="list">
            {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
          </ul>
        </section>

        {grouped.length > 0 && (
          <div className="project-detail__groups">
            {grouped.map(([label, values]) => (
              <section className="project-detail__section" key={label}>
                <h3>{label}</h3>
                <p>{values.join(' · ')}</p>
              </section>
            ))}
          </div>
        )}

        <div className="project-detail__actions">
          {project.liveDemo && (
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="project-detail__link">
              Open live demo <ArrowUpRight size={15} weight="bold" aria-hidden="true" />
            </a>
          )}
          {project.repository && (
            <a href={project.repository} target="_blank" rel="noopener noreferrer" className="project-detail__link">
              View repository <ArrowUpRight size={15} weight="bold" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

function ProjectModal({ project, onClose, children }: { project: Project; onClose: () => void; children: ReactNode }) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    requestAnimationFrame(() => closeRef.current?.focus())
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return createPortal(
    <div className="pmodal" role="dialog" aria-modal="true" aria-label={project.fullTitle} onClick={(event) => {
      if (event.target === event.currentTarget) onClose()
    }}>
      <button ref={closeRef} type="button" className="pmodal__close" onClick={onClose} aria-label="Close project details">
        <X size={18} weight="bold" />
      </button>
      <div className="pmodal__stage">{children}</div>
    </div>,
    document.body,
  )
}

export default function ProjectsGrid() {
  const [open, setOpen] = useState<Project | null>(null)
  const [category, setCategory] = useState<Project['category'] | 'all'>('all')
  const phone = useIsPhone()
  const triggerRef = useRef<HTMLElement | null>(null)
  const projects = PROJECTS.filter((project) => category === 'all' || project.category === category)

  const show = useCallback((project: Project, element: HTMLElement) => {
    triggerRef.current = element
    setOpen(project)
  }, [])
  const close = useCallback(() => {
    setOpen(null)
    requestAnimationFrame(() => triggerRef.current?.focus())
  }, [])

  return (
    <section className="pgrid" aria-labelledby="projects-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Projects</span>
        <h1 className="pgrid__title" id="projects-title">Projects that show how I build.</h1>
        <p className="pgrid__lede">Real work in progress, with the problem, stack, and current status made clear.</p>
      </header>

      {phone && (
        <div className="pfilter" role="group" aria-label="Filter projects">
          {FILTERS.map((filter) => (
            <button key={filter.key} type="button" className="pfilter__btn" aria-pressed={category === filter.key} onClick={() => setCategory(filter.key)}>
              {filter.label}
            </button>
          ))}
        </div>
      )}

      <div className="home__glass pgrid__glass">
        <span className="pgrid__hint" aria-hidden="true"><CursorClick size={14} weight="duotone" /> Click a card to open it</span>
        <div className="bento bento--projects">
          {projects.map((project) => (
            <button
              key={project.id}
              type="button"
              className={`bento__card bento__card--btn${project.span === 2 ? ' bento__card--wide' : ''}`}
              onClick={(event) => show(project, event.currentTarget)}
              aria-haspopup="dialog"
            >
              <span className="bento__head">
                <span className="bento__icon"><project.Icon size={22} weight="duotone" /></span>
                <span className="bento__title">{project.name}</span>
                <span className="bento__desc">{project.description}</span>
                <ArrowUpRight size={15} weight="bold" aria-hidden="true" className="bento__arrow" />
              </span>
              <ProjectPreview project={project} />
            </button>
          ))}
        </div>
      </div>

      {open && <ProjectModal project={open} onClose={close}><ProjectDetails project={open} /></ProjectModal>}
    </section>
  )
}
