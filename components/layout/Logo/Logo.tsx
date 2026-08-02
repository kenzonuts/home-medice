import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

import { SITE_NAME, SITE_NAME_SHORT } from "@/constants/site";
import { cn } from "@/lib/utils";

export type LogoProps = Omit<ComponentPropsWithoutRef<typeof Link>, "href"> & {
  href?: string;
  /** Compact mark for tight spaces (e.g. mobile header) */
  compact?: boolean;
  /** Invert text for dark surfaces (footer) */
  inverted?: boolean;
};

/**
 * Text logo placeholder — swap for an Image/SVG mark later without API changes.
 */
export function Logo({
  className,
  compact = false,
  inverted = false,
  href = "/",
  ...props
}: LogoProps) {
  return (
    <Link
      href={href}
      aria-label={`${SITE_NAME} — beranda`}
      className={cn(
        "inline-flex max-w-full items-center gap-2 rounded-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none",
        className,
      )}
      {...props}
    >
      <span
        aria-hidden
        className={cn(
          "flex size-9 shrink-0 items-center justify-center rounded-lg text-sm font-bold",
          inverted
            ? "bg-white/15 text-white"
            : "bg-primary text-primary-foreground",
        )}
      >
        RS
      </span>
      <span
        className={cn(
          "font-heading font-bold tracking-tight",
          compact ? "text-sm" : "text-base md:text-lg",
          inverted ? "text-white" : "text-foreground",
        )}
      >
        <span className="block leading-tight">
          {compact ? SITE_NAME_SHORT : SITE_NAME}
        </span>
      </span>
    </Link>
  );
}
