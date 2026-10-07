import { ArrowUpRight, BookOpen, CheckCircle, Medal } from '@/components/slab'
import { currentLearning, completedCertifications, type Credential } from '@/data/credentials'

function CredentialCard({ credential, index }: { credential: Credential; index: number }) {
  const Icon = credential.status === 'Completed' ? Medal : BookOpen
  return (
    <li className="credential-card">
      <span className="credential-card__icon"><Icon size={22} weight="duotone" aria-hidden="true" /></span>
      <span className="credential-card__body">
        <span className="credential-card__topline">
          <span className="credential-card__title">{credential.title}</span>
          <span className="credential-card__index">{String(index + 1).padStart(2, '0')}</span>
        </span>
        <span className="credential-card__issuer">{credential.issuer}</span>
        <span className="credential-card__status"><CheckCircle size={13} weight="fill" aria-hidden="true" /> {credential.status}</span>
        {credential.focus && <span className="credential-card__focus">{credential.focus.join(' · ')}</span>}
        {credential.profileUrl && (
          <a className="credential-card__link" href={credential.profileUrl} target="_blank" rel="noopener noreferrer">
            View public profile <ArrowUpRight size={14} weight="bold" aria-hidden="true" />
          </a>
        )}
      </span>
    </li>
  )
}

function CredentialColumn({ title, items }: { title: string; items: Credential[] }) {
  return (
    <section className="credentials-column" aria-labelledby={`${title.toLowerCase().replaceAll(' ', '-')}-title`}>
      <header className="credentials-column__head">
        <span className="pgrid__eyebrow">{title}</span>
        <h2 id={`${title.toLowerCase().replaceAll(' ', '-')}-title`} className="credentials-column__title">
          {title === 'Current Learning' ? 'Paths I am working through.' : 'Certificates I have completed.'}
        </h2>
      </header>
      <ul className="credentials-column__list" role="list">
        {items.map((credential, index) => <CredentialCard key={credential.title} credential={credential} index={index} />)}
      </ul>
    </section>
  )
}

export default function TestimonialsGrid() {
  return (
    <section className="pgrid tgrid credentials-grid" aria-labelledby="credentials-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Credentials</span>
        <h1 className="pgrid__title" id="credentials-title">Learning progress and completed certificates.</h1>
        <p className="pgrid__lede">A clear record of what I am learning now and the Cisco certifications I have completed.</p>
      </header>

      <div className="home__glass tgrid__glass credentials-grid__glass">
        <CredentialColumn title="Current Learning" items={currentLearning} />
        <CredentialColumn title="Completed Certifications" items={completedCertifications} />
      </div>
    </section>
  )
}
