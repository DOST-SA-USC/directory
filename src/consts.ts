import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Directory',
  description: 'A collection of resources for the DOST SA USC community.',
  href: 'https://directory.dostsausc.org',
  author: 'dost-sa-usc',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/',
    label: 'home',
  },
  {
    href: '/resources',
    label: 'resources',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://dostsausc.org',
    label: 'Website',
  },
  {
    href: 'https://github.com/DOST-SA-USC',
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/company/dost-scholars-association-in-the-university-of-san-carlos/',
    label: 'LinkedIn',
  },
  {
    href: 'https://www.facebook.com/dostsausc',
    label: 'Facebook',
  },
  {
    href: 'https://www.instagram.com/dostsausc',
    label: 'Instagram',
  },
  {
    href: 'mailto:uscdostsa@gmail.com',
    label: 'Email',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Facebook: 'lucide:facebook',
  Email: 'lucide:mail',
  Instagram: 'lucide:instagram',
}
