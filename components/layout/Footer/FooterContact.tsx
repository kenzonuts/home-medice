import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

import { CONTACT, getWhatsAppUrl } from "@/constants/contact";

const linkClass =
  "inline-flex items-start gap-2.5 text-sm text-white/75 transition-colors hover:text-white focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:outline-none";

export function FooterContact() {
  return (
    <div>
      <h2 className="font-heading text-sm font-semibold tracking-wide text-white uppercase">
        Kontak
      </h2>
      <ul className="mt-4 space-y-3">
        <li>
          <Link
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            <MessageCircle className="mt-0.5 size-4 shrink-0" aria-hidden />
            <span>
              <span className="block text-white/50">{CONTACT.whatsapp.label}</span>
              {CONTACT.whatsapp.display}
            </span>
          </Link>
        </li>
        <li>
          <a href={CONTACT.email.href} className={linkClass}>
            <Mail className="mt-0.5 size-4 shrink-0" aria-hidden />
            <span>
              <span className="block text-white/50">{CONTACT.email.label}</span>
              {CONTACT.email.display}
            </span>
          </a>
        </li>
        <li>
          <a href={CONTACT.phone.href} className={linkClass}>
            <Phone className="mt-0.5 size-4 shrink-0" aria-hidden />
            <span>
              <span className="block text-white/50">{CONTACT.phone.label}</span>
              {CONTACT.phone.display}
            </span>
          </a>
        </li>
        <li className={linkClass}>
          <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden />
          <span>
            <span className="block text-white/50">{CONTACT.address.label}</span>
            {CONTACT.address.display}
          </span>
        </li>
      </ul>
    </div>
  );
}
