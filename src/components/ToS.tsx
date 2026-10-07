import { ArrowLeft } from '@/components/slab'
import { useNavigate } from 'react-router-dom'
import { profile } from '@/data/profile'

export default function ToS() {
  const navigate = useNavigate()

  return (
    <main className="legal-page" aria-label="Terms of Service">
      <div className="legal-page__card">
        <button
          className="legal-page__back"
          onClick={() => navigate('/')}
          aria-label="Back to home"
        >
          <ArrowLeft weight="bold" size={15} aria-hidden="true" />
          Back to home
        </button>

        <h1 className="legal-page__title">Terms of Service</h1>
        <p className="legal-page__updated">Last updated: September 30, 2026</p>

        <div className="legal-page__body">
          <h2>Using this site</h2>
          <p>This site is a personal portfolio for Zarneth Layoso. You may browse the pages and follow the public links provided for projects, profiles, and learning resources.</p>

          <h2>Work and payment</h2>
          <p>The site describes personal projects and learning work. A portfolio page is not a project agreement, service quote, or guarantee of availability.</p>

          <h2>Ownership</h2>
          <p>Project names, technologies, and linked materials belong to their respective owners. Portfolio copy and original site implementation are presented for personal and professional purposes.</p>

          <h2>Liability</h2>
          <p>Information is provided as a current portfolio snapshot and may change as projects develop. Check the linked project or profile for the most current public information.</p>

          <h2>Contact</h2>
          <p>
            Questions about these terms: <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
        </div>
      </div>
    </main>
  )
}
