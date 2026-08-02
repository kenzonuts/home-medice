import type { Metadata, Viewport } from "next";

import { Container } from "@/components/layout/Container";
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
  themeColor: "#0d9488",
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
      <body className="min-h-dvh font-body antialiased">
        <Container as="main" className="min-h-dvh py-8">
          {children}
        </Container>
      </body>
    </html>
  );
}
