"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

import { NavLink } from "@/components/layout/Navbar/NavLink";
import { NAV_CTA, NAV_ITEMS } from "@/constants/navigation";
import { getWhatsAppUrl } from "@/constants/contact";
import { cn } from "@/lib/utils";

type DesktopNavProps = {
  className?: string;
};

export function DesktopNav({ className }: DesktopNavProps) {
  return (
    <div className={cn("hidden items-center gap-1 lg:flex", className)}>
      <nav aria-label="Navigasi utama" className="flex items-center gap-0.5">
        {NAV_ITEMS.map((item) => (
          <NavLink key={item.href} href={item.href}>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
        <Link
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "ml-3 inline-flex h-11 items-center justify-center gap-2 rounded-lg px-5",
            "bg-primary text-sm font-medium text-primary-foreground shadow-sm",
            "transition-colors duration-200 hover:bg-primary-hover active:bg-primary-active",
            "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none",
          )}
        >
          <MessageCircle className="size-4" aria-hidden />
          <span>{NAV_CTA.label}</span>
        </Link>
      </motion.div>
    </div>
  );
}
