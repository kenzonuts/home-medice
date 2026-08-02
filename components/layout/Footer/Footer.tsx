"use client";

import { motion } from "framer-motion";

import { Logo } from "@/components/layout/Logo";
import { FooterBackToTop } from "@/components/layout/Footer/FooterBackToTop";
import { FooterContact } from "@/components/layout/Footer/FooterContact";
import { FooterLinks } from "@/components/layout/Footer/FooterLinks";
import { FooterSocial } from "@/components/layout/Footer/FooterSocial";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { SITE_TAGLINE } from "@/constants/contact";
import { SITE_NAME } from "@/constants/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="mt-auto bg-secondary-active text-white"
      role="contentinfo"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <Container className="section-spacing-sm">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo inverted />
            <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-white/75">
              {SITE_TAGLINE}
            </p>
          </div>

          <FooterLinks />
          <FooterContact />
          <FooterSocial />
        </div>

        <Divider className="my-8 bg-white/15" />

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body text-xs text-white/60">
            © {year} {SITE_NAME}. Hak cipta dilindungi.
          </p>
          <FooterBackToTop />
        </div>
      </Container>
    </motion.footer>
  );
}
