import type { NavItem } from "@/types";

/**
 * Primary site navigation — single source of truth for Navbar & Footer.
 */
export const NAV_ITEMS: readonly NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "Layanan", href: "/layanan" },
  { label: "Tim Medis", href: "/tim-medis" },
  { label: "Galeri", href: "/galeri" },
  { label: "Artikel", href: "/artikel" },
  { label: "Kontak", href: "/kontak" },
] as const;

export const NAV_CTA = {
  label: "Booking WhatsApp",
  hrefKey: "whatsapp" as const,
} as const;
