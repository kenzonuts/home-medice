"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export type NavLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  href: string;
  onNavigate?: () => void;
};

function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function NavLink({
  href,
  className,
  children,
  onNavigate,
  ...props
}: NavLinkProps) {
  const pathname = usePathname();
  const active = isActivePath(pathname, href);

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      onClick={onNavigate}
      className={cn(
        "relative inline-flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none",
        active
          ? "text-primary"
          : "text-foreground/80 hover:text-primary",
        className,
      )}
      {...props}
    >
      {children}
      <span
        aria-hidden
        className={cn(
          "absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-primary transition-transform duration-200",
          active ? "scale-x-100" : "scale-x-0",
        )}
      />
    </Link>
  );
}
