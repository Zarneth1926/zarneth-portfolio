import { ArrowLeft } from '@/components/slab'
import { useNavigate } from 'react-router-dom'
import { profile } from '@/data/profile'

export default function Privacy() {
  const navigate = useNavigate()

  return (
    <main className="legal-page" aria-label="Privacy Policy">
      <div className="legal-page__card">
        <button
          className="legal-page__back"
          onClick={() => navigate('/')}
          aria-label="Back to home"
        >
          <ArrowLeft weight="bold" size={15} aria-hidden="true" />
          Back to home
        </button>

        <h1 className="legal-page__title">Privacy Policy</h1>
        <p className="legal-page__updated">Last updated: September 30, 2026</p>

        <div className="legal-page__body">
          <h2>Who this covers</h2>
          <p>This portfolio is maintained by Zarneth Layoso and applies to this personal portfolio website.</p>

          <h2>What is collected</h2>
          <p>If you use the contact form, the site reads the name, email address, and message you enter. The form also includes a hidden anti-spam field. No personal phone number or home address is requested.</p>

          <h2>How it is used</h2>
          <p>With the default configuration, the site opens your mail client with the message addressed to Zarneth. The site does not publish the information you enter. External profile and project links are governed by their own services.</p>

          <h2>How long it is kept</h2>
          <p>The default contact flow does not store form submissions on this website. If you contact Zarneth by email, the message remains subject to the email provider used by you and Zarneth.</p>

          <h2>Contact</h2>
          <p>
            Questions about this policy: <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
        </div>
      </div>
    </main>
  )
}
