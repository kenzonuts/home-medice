import type { ReactNode } from "react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import {
  ScrollTopButton,
  WhatsAppButton,
} from "@/components/layout/Floating";
import { cn } from "@/lib/utils";

export type SiteShellProps = {
  children: ReactNode;
  className?: string;
  /** Hide floating actions on specific routes if needed later */
  showFloatingActions?: boolean;
};

/**
 * Global site chrome — Navbar, main landmark, Footer, floating actions.
 */
export function SiteShell({
  children,
  className,
  showFloatingActions = true,
}: SiteShellProps) {
  return (
    <div className={cn("flex min-h-dvh flex-col", className)}>
      <a
        href="#main-content"
        className={cn(
          "sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[600]",
          "focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground",
          "focus:outline-none",
        )}
      >
        Lewati ke konten utama
      </a>

      <Navbar />

      <main id="main-content" className="flex-1" tabIndex={-1}>
        {children}
      </main>

      <Footer />

      {showFloatingActions ? (
        <>
          <ScrollTopButton />
          <WhatsAppButton />
        </>
      ) : null}
    </div>
  );
}
