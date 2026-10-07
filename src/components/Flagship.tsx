import { useCallback, useEffect, useRef, useState, type ComponentType, type ReactNode } from 'react'
import {
  BookOpen,
  CaretLeft,
  CaretRight,
  CheckCircle,
  House,
  ImageSquare,
  MagnifyingGlass,
  Pause,
  Play,
  Sparkle,
  SquaresFour,
  Stack,
  UsersThree,
} from '@/components/slab'
import type { Icon } from '@/components/slab'

type TabId = 'overview' | 'chapters' | 'media' | 'responsive' | 'interaction'

type FlagshipTab = {
  id: TabId
  label: string
  path: string
  pageTitle: string
  nav: string
  caption: string
  Icon: Icon
}

const TABS: FlagshipTab[] = [
  { id: 'overview', label: 'Overview', path: '/overview', pageTitle: 'Overview', nav: 'overview', caption: 'A cinematic, chapter-based personal website that presents memories and milestones through photos, videos, storytelling, and custom interactions.', Icon: House },
  { id: 'chapters', label: 'Chapters', path: '/chapters', pageTitle: 'Chapters', nav: 'chapters', caption: 'The experience is organized around chapter-based storytelling so memories and milestones have a clear narrative structure.', Icon: BookOpen },
  { id: 'media', label: 'Media', path: '/media', pageTitle: 'Media', nav: 'media', caption: 'Photo and video presentation are central to the build, with the visual direction designed to support the story rather than compete with it.', Icon: ImageSquare },
  { id: 'responsive', label: 'Responsive', path: '/responsive', pageTitle: 'Responsive', nav: 'responsive', caption: 'Responsive design keeps the personal story usable across screen sizes while the site remains in development.', Icon: SquaresFour },
  { id: 'interaction', label: 'Interactions', path: '/interactions', pageTitle: 'Interactions', nav: 'interaction', caption: 'Custom animations and interactions give the chapters a cinematic feel without changing the project status: it is still in development.', Icon: Stack },
]

const NAV: { id: string; label: string; Icon: Icon; sub?: boolean }[] = [
  { id: 'overview', label: 'Overview', Icon: House },
  { id: 'chapters', label: 'Chapters', Icon: BookOpen, sub: true },
  { id: 'media', label: 'Media', Icon: ImageSquare, sub: true },
  { id: 'responsive', label: 'Responsive', Icon: SquaresFour, sub: true },
  { id: 'interaction', label: 'Interactions', Icon: Stack, sub: true },
]

function Shell({ tab, children }: { tab: FlagshipTab; children: ReactNode }) {
  return (
    <div className="flagship__app">
      <aside className="flagship__side" style={{ ['--i' as string]: 0 }}>
        <div className="flagship__side-head">
          <span className="flagship__logo"><Sparkle weight="fill" size="1.05em" /></span>
          <span className="flagship__wordmark">7 Chapters<span className="flagship__wordmark-accent"> of Us</span></span>
          <span className="flagship__collapse"><CaretLeft weight="bold" size="0.8em" /></span>
        </div>
        <div className="flagship__clock">
          <span className="flagship__clock-row"><span className="flagship__clock-time">In<span className="flagship__clock-meridiem"> DEV</span></span><span className="flagship__clock-zone">Current status</span></span>
          <span className="flagship__clock-row"><span className="flagship__clock-time">React<span className="flagship__clock-meridiem"> + Vite</span></span><span className="flagship__clock-zone">Project stack</span></span>
        </div>
        <div className="flagship__nav">
          {NAV.map((item) => {
            const NavIcon = item.Icon
            const active = item.id === tab.nav
            return <span key={item.id} className={`flagship__navrow${active ? ' is-active' : ''}`}><NavIcon weight={active ? 'fill' : 'regular'} size="1em" /><span className="flagship__navrow-label">{item.label}</span>{item.sub && <CaretRight weight="bold" size="0.7em" className="flagship__navrow-caret" />}</span>
          })}
        </div>
        <div className="flagship__side-foot">
          <span className="flagship__side-link"><UsersThree weight="regular" size="1em" />Story</span>
          <span className="flagship__side-link"><Stack weight="regular" size="1em" />Build notes</span>
        </div>
      </aside>

      <div className="flagship__main">
        <div className="flagship__chrome" style={{ ['--i' as string]: 1 }}>
          <span className="flagship__page-title">{tab.pageTitle}</span>
          <div className="flagship__chrome-right">
            <span className="flagship__search"><MagnifyingGlass weight="bold" size="1em" /><span>Explore</span></span>
            <span className="flagship__fx"><span className="flagship__fx-dot" />In development</span>
          </div>
        </div>
        <div className="flagship__canvas">{children}</div>
      </div>
    </div>
  )
}

function PageHead({ kicker, title, sub }: { kicker: string; title: string; sub: string }) {
  return <div className="flagship__pagehead" style={{ ['--i' as string]: 2 }}><span className="flagship__kicker">{kicker}</span><span className="flagship__greeting">{title}</span><span className="flagship__sub">{sub}</span></div>
}

function OverviewMock() {
  return <><PageHead kicker="Current showcase" title="Cinematic 7 Chapters of Us" sub="A creative personal website in development." /><div className="flagship__card" style={{ ['--i' as string]: 3 }}><div className="flagship__card-head"><span className="flagship__label">Project direction</span><span className="flagship__card-link">Personal build</span></div><div className="flagship__card-body"><CheckCircle weight="fill" size="1.15em" className="flagship__ok" /><span>Memories and milestones presented through chapters, photos, videos, storytelling, and custom interactions.</span></div><div className="flagship__card-foot"><span className="flagship__label">Status</span><span className="flagship__goto">In Development</span><span className="flagship__goto">React</span><span className="flagship__goto">Vite</span><span className="flagship__goto">Tailwind CSS</span></div></div><div className="flagship__news" style={{ ['--i' as string]: 4 }}><span className="flagship__news-title">What this build explores</span></div><div className="flagship__update" style={{ ['--i' as string]: 5 }}><div className="flagship__update-when"><span className="flagship__update-date">01</span><span className="flagship__update-year">Build</span><span className="flagship__update-ago">Current</span></div><div className="flagship__update-body"><span className="flagship__tag flagship__tag--new">Focus</span><span className="flagship__update-title">Story-led interaction</span><span className="flagship__update-text">A chapter-based structure keeps the visual experience connected to the memories it presents.</span></div></div></>
}

function ChaptersMock() {
  const items = ['Chapter-based storytelling', 'Photo and video presentation', 'Responsive design', 'Cinematic visual direction', 'Custom animations']
  return <><PageHead kicker="Story structure" title="A chapter-based experience." sub="The page is organized around memories and milestones." /><div className="flagship__grid">{items.map((item, index) => <div className="flagship__tile" key={item} style={{ ['--i' as string]: index + 3 }}><span className="flagship__tile-icon"><BookOpen weight="fill" size="1em" /></span><span className="flagship__tile-name">{item}</span><span className="flagship__tile-note">Story direction</span></div>)}</div></>
}

function MediaMock() {
  return <><PageHead kicker="Visual storytelling" title="Photos and videos with room to breathe." sub="Media presentation is one of the core parts of the experience." /><div className="flagship__board">{['Photos', 'Videos', 'Milestones', 'Memories'].map((item, index) => <div className="flagship__col" key={item} style={{ ['--i' as string]: index + 3 }}><div className="flagship__col-head"><span className="flagship__col-name">{item}</span><span className="flagship__col-count">{index + 1}</span></div><div className="flagship__col-list"><div className="flagship__task"><span className="flagship__task-title">Content direction</span><span className="flagship__task-foot"><span className="flagship__chip">In progress</span></span></div></div></div>)}</div></>
}

function ResponsiveMock() {
  return <><PageHead kicker="Implementation" title="Designed to travel across screens." sub="Responsive design is part of the project direction from the start." /><div className="flagship__list">{['React', 'Vite', 'Tailwind CSS', 'Responsive design'].map((item, index) => <div className="flagship__job" key={item} style={{ ['--i' as string]: index + 3 }}><span className="flagship__source flagship__source--olj">{index === 3 ? 'Design' : 'Stack'}</span><span className="flagship__job-main"><span className="flagship__job-title">{item}</span><span className="flagship__job-meta">Part of the current build</span></span><span className="flagship__state flagship__state--new">In development</span><CaretRight weight="bold" size="0.85em" className="flagship__job-caret" /></div>)}</div></>
}

function InteractionMock() {
  return <><PageHead kicker="Interaction direction" title="Custom animations support the story." sub="Motion is being used to shape the experience around each chapter." /><div className="flagship__card" style={{ ['--i' as string]: 3 }}><div className="flagship__card-head"><span className="flagship__label">Interaction notes</span><span className="flagship__card-link">In development</span></div><div className="flagship__card-body"><CheckCircle weight="fill" size="1.15em" className="flagship__ok" /><span>Cinematic visual direction and custom interactions are being explored alongside the content structure.</span></div></div></>
}

const MOCKS: Record<TabId, ComponentType> = { overview: OverviewMock, chapters: ChaptersMock, media: MediaMock, responsive: ResponsiveMock, interaction: InteractionMock }

type Note = { label: string; title: string; body: string }
const NOTES: Note[] = [
  { label: 'Direction', title: 'Story before decoration', body: 'The project uses a cinematic visual direction to support the memories and milestones being presented.' },
  { label: 'Media', title: 'Photos and videos', body: 'Photo and video presentation are part of the approved concept for the site.' },
  { label: 'Stack', title: 'React, Vite, Tailwind CSS', body: 'The current implementation stack for this in-development creative website.' },
  { label: 'Status', title: 'Still in development', body: 'No live demo, public repository, or final screenshots are published yet.' },
]

const AUTO_ADVANCE_MS = 6000

type FlagshipProps = { eyebrow?: string }

export default function Flagship({ eyebrow = 'Current showcase' }: FlagshipProps = {}) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [inView, setInView] = useState(true)
  const [notesPaused, setNotesPaused] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.2 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (paused || !inView) return
    const id = window.setInterval(() => setActive((index) => (index + 1) % TABS.length), AUTO_ADVANCE_MS)
    return () => window.clearInterval(id)
  }, [paused, inView])

  const onTabKey = useCallback((event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return
    event.preventDefault()
    const next = (index + (event.key === 'ArrowRight' ? 1 : -1) + TABS.length) % TABS.length
    setActive(next)
    event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>('button[role="tab"]')[next]?.focus()
  }, [])

  const current = TABS[active]
  const Mock = MOCKS[current.id]

  return (
    <aside className="flagship" aria-labelledby="flagship-heading" ref={ref}>
      <header className="flagship__header">
        <span className="flagship__eyebrow">{eyebrow}</span>
        <h3 className="flagship__title" id="flagship-heading">Cinematic 7 Chapters of Us</h3>
        <p className="flagship__desc">A cinematic, chapter-based personal website that presents memories and milestones through photos, videos, storytelling, and custom interactions.</p>
        <span className="flagship__cta" role="status">In Development</span>
      </header>

      <div className="flagship__showcase" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
        <div className="flagship__device" aria-hidden="true">
          <div className="flagship__device-bar"><span className="flagship__dot flagship__dot--red" /><span className="flagship__dot flagship__dot--amber" /><span className="flagship__dot flagship__dot--green" /><span className="flagship__device-url"><span className="flagship__device-url-host">in-development</span><span className="flagship__device-url-path">{current.path}</span></span></div>
          <div className="flagship__device-screen"><div className="flagship__stage" key={current.id}><Shell tab={current}><Mock /></Shell></div></div>
        </div>

        <div className="flagship__panel">
          <div className="flagship__tabs" role="tablist" aria-label="Showcase views">
            {TABS.map((tab, index) => {
              const TabIcon = tab.Icon
              const selected = index === active
              return <button key={tab.id} type="button" role="tab" aria-selected={selected} tabIndex={selected ? 0 : -1} className={`flagship__tab${selected ? ' is-active' : ''}`} onClick={() => setActive(index)} onKeyDown={(event) => onTabKey(event, index)}><span className="flagship__tab-icon" aria-hidden="true"><TabIcon size={16} weight="bold" /></span><span>{tab.label}</span></button>
            })}
          </div>
          <p className="flagship__caption" key={current.id}>{current.caption}</p>
          <div className="flagship__progress" aria-hidden="true">{TABS.map((_, index) => <span key={index} className={`flagship__progress-bar${index === active ? ' is-active' : ''}${paused || !inView ? ' is-paused' : ''}`} />)}</div>
        </div>
      </div>

      <div className="flagship__feedback" aria-labelledby="flagship-feedback-heading">
        <header className="flagship__feedback-header"><span className="flagship__feedback-eyebrow">Build notes</span><h4 className="flagship__feedback-title" id="flagship-feedback-heading">What this showcase is exploring.</h4><button type="button" className="flagship__feedback-pause" onClick={() => setNotesPaused((value) => !value)} aria-pressed={notesPaused} aria-label={notesPaused ? 'Resume build notes' : 'Pause build notes'}>{notesPaused ? <Play weight="fill" size={14} aria-hidden="true" /> : <Pause weight="fill" size={14} aria-hidden="true" />}<span>{notesPaused ? 'Play' : 'Pause'}</span></button></header>
        <div className={`flagship__feedback-marquee${notesPaused ? ' is-paused' : ''}`}><div className="flagship__feedback-track" style={notesPaused ? { animationPlayState: 'paused' } : undefined}>{[...NOTES, ...NOTES].map((note, index) => <figure key={`${note.title}-${index}`} className="flagship__feedback-card"><CheckCircle className="flagship__feedback-quotemark" weight="fill" size={28} aria-hidden="true" /><span className="flagship__feedback-context">{note.label}</span><p className="flagship__feedback-quote">{note.body}</p><figcaption className="flagship__feedback-author"><span className="flagship__feedback-name">{note.title}</span><span className="flagship__feedback-meta"><span className="flagship__feedback-context">Portfolio V2 showcase</span></span></figcaption></figure>)}</div></div>
      </div>
    </aside>
  )
}
