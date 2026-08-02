import Link from "next/link";

import { NAV_ITEMS } from "@/constants/navigation";

export function FooterLinks() {
  return (
    <nav aria-label="Navigasi cepat">
      <h2 className="font-heading text-sm font-semibold tracking-wide text-white uppercase">
        Navigasi
      </h2>
      <ul className="mt-4 space-y-2.5">
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="font-body text-sm text-white/75 transition-colors hover:text-white focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:outline-none"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
