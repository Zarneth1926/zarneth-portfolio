/**
 * Public profile data shared by the rail, Home, About, and Contact views.
 * Keep private contact details out of this file and only add links approved
 * for public display in the portfolio content master list.
 */

import { Briefcase, SealCheck, Clock, type Icon } from '@/components/slab'

export type SocialLink = {
  label: string
  href: string
  iconPath: string
}

/** A factual item shown on the phone Home under the hero copy. */
export type Stat = { value: string; label: string; Icon: Icon }

export type Profile = {
  name: string
  firstName: string
  handle: string
  role: string
  avatarSrc: string
  email: string
  location: string
  github: string
  linkedin: string
  freeCodeCamp: string
  stats: Stat[]
  displayName: { line1: string; line2: string }
  hero: {
    body: string
    portraitSrc: string
    portraitAlt: string
  }
  socials: SocialLink[]
}

export const profile: Profile = {
  name: 'Zarneth Layoso',
  firstName: 'Zarneth',
  handle: '@Zarneth1926',
  role: 'BS Information Technology Student | Aspiring Full-Stack Developer',
  avatarSrc: '/avatar.svg',
  email: 'zarnethl@gmail.com',
  location: 'Central Luzon, Philippines',
  github: 'https://github.com/Zarneth1926',
  linkedin: 'https://www.linkedin.com/in/zarneth-layoso-282416401/',
  freeCodeCamp: 'https://www.freecodecamp.org/zarneth19',
  stats: [
    { value: '3rd Year', label: 'BS Information Technology', Icon: Briefcase },
    { value: 'GenHub', label: 'Current Build', Icon: SealCheck },
    { value: 'Open', label: 'Opportunities', Icon: Clock },
  ],
  displayName: { line1: 'I build useful digital products', line2: 'for the web.' },
  hero: {
    body: "I'm Zarneth, a BS Information Technology student focused on building practical, user-friendly web applications and digital systems. I enjoy turning real-world problems into usable software while continuing to improve across frontend and backend development.",
    portraitSrc: '/avatar.svg',
    portraitAlt: 'Profile image not added yet',
  },
  socials: [
    { label: 'GitHub profile', href: 'https://github.com/Zarneth1926', iconPath: '/icons/ai/github.svg' },
    { label: 'LinkedIn profile', href: 'https://www.linkedin.com/in/zarneth-layoso-282416401/', iconPath: '/icons/linkedin.svg' },
  ],
}
