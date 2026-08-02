import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

const iconSizes = {
  sm: "size-8 [&_svg]:size-4",
  md: "size-11 [&_svg]:size-5",
  lg: "size-14 [&_svg]:size-6",
  xl: "size-16 [&_svg]:size-7",
} as const;

const iconVariants = {
  soft: "bg-primary/10 text-primary",
  solid: "bg-primary text-primary-foreground",
  secondary: "bg-secondary/10 text-secondary",
  muted: "bg-muted text-muted-foreground",
  outline: "border border-border bg-surface text-foreground",
} as const;

const iconRadii = {
  md: "rounded-lg",
  lg: "rounded-xl",
  full: "rounded-full",
} as const;

export type IconWrapperSize = keyof typeof iconSizes;
export type IconWrapperVariant = keyof typeof iconVariants;
export type IconWrapperRadius = keyof typeof iconRadii;

export type IconWrapperProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
  size?: IconWrapperSize;
  variant?: IconWrapperVariant;
  radius?: IconWrapperRadius;
};

/**
 * Standardizes icon presentation — size, padding, radius, background, color.
 */
export function IconWrapper({
  children,
  className,
  size = "md",
  variant = "soft",
  radius = "lg",
  ...props
}: IconWrapperProps) {
  return (
    <span
      aria-hidden={props["aria-label"] ? undefined : true}
      className={cn(
        "inline-flex shrink-0 items-center justify-center",
        iconSizes[size],
        iconVariants[variant],
        iconRadii[radius],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
