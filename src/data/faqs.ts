export type QA = { q: string; a: string }

/**
 * The questions people ask before they email. One list, used by the FAQ
 * accordion on the Contact view (and the legacy long-scroll FAQ section).
 * Five questions, two or three sentences each: the accordion sits in a
 * fixed panel and more than that pushes the email row off the plate.
 */
export const FAQS: QA[] = [
  {
    q: 'What do you do?',
    a: 'I build practical web applications and digital systems while developing toward frontend and full-stack roles. My current work includes GenHub, a barangay information and concern management system.',
  },
  {
    q: 'What are you currently looking for?',
    a: 'I am open to opportunities that help me grow through real software development work, especially frontend, web development, and junior full-stack roles.',
  },
  {
    q: 'What are you learning now?',
    a: 'I am improving TypeScript, React architecture and component design, full-stack application architecture, and AI-powered web application concepts.',
  },
  {
    q: 'Where are you based?',
    a: 'I am based in Central Luzon, Philippines.',
  },
  {
    q: 'What can I send you?',
    a: 'You can share an opportunity, project idea, or question through the form. The current contact flow opens your mail client with the message addressed to me.',
  },
]
