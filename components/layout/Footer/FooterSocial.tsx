import Link from "next/link";

import { SOCIAL_LINKS } from "@/constants/contact";
import { cn } from "@/lib/utils";

export function FooterSocial() {
  return (
    <div>
      <h2 className="font-heading text-sm font-semibold tracking-wide text-white uppercase">
        Media Sosial
      </h2>
      <ul className="mt-4 flex flex-wrap gap-2">
        {SOCIAL_LINKS.map((social) => (
          <li key={social.id}>
            <Link
              href={social.href}
              aria-label={social.label}
              className={cn(
                "inline-flex h-10 items-center justify-center rounded-lg border border-white/15 px-3",
                "text-sm text-white/80 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white",
                "focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:outline-none",
              )}
            >
              {social.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
