/**
 * Clinic contact & social channels.
 * Replace values when real clinic details are available.
 */

export const CONTACT = {
  phone: {
    label: "Telepon",
    display: "+62 812-0000-0000",
    href: "tel:+6281200000000",
  },
  email: {
    label: "Email",
    display: "info@rumahsunatmodernjati.com",
    href: "mailto:info@rumahsunatmodernjati.com",
  },
  whatsapp: {
    label: "WhatsApp",
    display: "+62 812-0000-0000",
    /** Digits only for wa.me links */
    number: "6281200000000",
    message: "Halo, saya ingin booking layanan di Rumah Sunat Modern Jati.",
  },
  address: {
    label: "Alamat",
    display: "Alamat klinik — segera diperbarui",
    mapUrl: undefined as string | undefined,
  },
} as const;

export const SOCIAL_LINKS = [
  {
    id: "instagram",
    label: "Instagram",
    href: "#",
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "#",
  },
  {
    id: "tiktok",
    label: "TikTok",
    href: "#",
  },
] as const;

export const SITE_TAGLINE =
  "Layanan sunat modern yang aman, nyaman, dan profesional." as const;

/**
 * Build a WhatsApp chat URL from clinic contact config.
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const text = encodeURIComponent(customMessage ?? CONTACT.whatsapp.message);
  return `https://wa.me/${CONTACT.whatsapp.number}?text=${text}`;
}
