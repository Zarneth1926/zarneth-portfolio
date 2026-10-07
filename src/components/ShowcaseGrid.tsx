import Flagship from '@/components/Flagship'

/**
 * ShowcaseGrid - the /showcase view on one glass sheet.
 *
 * A page head and the preserved five-tab interactive showcase. The content is
 * an honest in-development project; no demo, repository, or screenshot is
 * shown until those assets are ready.
 */
export default function ShowcaseGrid() {
  return (
    <section className="pgrid ktools" aria-labelledby="showcase-title">
      <header className="pgrid__head ktools__head">
        <div className="ktools__head-copy">
          <span className="pgrid__eyebrow">Showcase</span>
        <h1 className="pgrid__title" id="showcase-title">
            A creative build in progress.
          </h1>
          <p className="pgrid__lede">
            Cinematic 7 Chapters of Us is a personal website concept built around chapter-based storytelling, photos, videos, and custom interactions.
          </p>
        </div>
        <div className="ktools__vote" role="status">
          <p className="ktools__vote-label">Project status</p>
          <div className="ktools__vote-frame ktools__vote-card">
            <span className="ktools__vote-dot" aria-hidden="true" />
            <span className="ktools__vote-text">In Development</span>
          </div>
        </div>
      </header>

      <div className="home__glass ktools__glass">
        <Flagship eyebrow="Current showcase" />
      </div>
    </section>
  )
}
