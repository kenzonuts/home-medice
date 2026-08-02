import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const tagVariants = {
  default: "bg-muted text-foreground",
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  soft: "bg-primary/10 text-primary",
  outline: "border border-border text-foreground",
} as const;

export type TagVariant = keyof typeof tagVariants;

export type TagProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: TagVariant;
};

export function Tag({ className, variant = "default", ...props }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md px-2 py-1",
        "font-body text-xs leading-none font-medium",
        tagVariants[variant],
        className,
      )}
      {...props}
    />
  );
}
