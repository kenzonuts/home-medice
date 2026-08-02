import type { Metadata, Viewport } from "next";

import { SiteShell } from "@/components/layout/SiteShell";
import { COLORS } from "@/constants/design";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/constants/site";
import { inter, manrope } from "@/lib/fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: COLORS.primary,
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${manrope.variable} ${inter.variable}`}>
      <body className="min-h-dvh bg-background font-body text-foreground antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
