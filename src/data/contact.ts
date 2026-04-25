/**
 * Social links — URLs stay off-screen; only icons are shown.
 * Replace Instagram/Facebook/WhatsApp `href` values with your real profiles.
 * WhatsApp: https://wa.me/COUNTRY_AND_NUMBER (digits only, no + or spaces).
 */
export type SocialId = 'github' | 'linkedin' | 'instagram' | 'facebook' | 'whatsapp'

export const EMAIL = 'mo7.dawly@gmail.com'

export const SOCIAL_LINKS: { id: SocialId; label: string; href: string }[] = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/Mo7Ati' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohammed-ati/' },
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/mohammed_abd_alati/' },
  { id: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/mohammed.abd.alati.98150' },
  { id: 'whatsapp', label: 'WhatsApp', href: 'https://wa.me/970592381441' },
]
