import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const stackGaps = {
  none: "gap-0",
  xs: "gap-1",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-8",
  "2xl": "gap-12",
} as const;

const stackAlign = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
} as const;

export type StackGap = keyof typeof stackGaps;
export type StackAlign = keyof typeof stackAlign;

export type StackProps = HTMLAttributes<HTMLDivElement> & {
  gap?: StackGap;
  align?: StackAlign;
  horizontal?: boolean;
};

/**
 * Vertical (default) or horizontal stack with consistent gaps.
 */
export function Stack({
  className,
  gap = "md",
  align = "stretch",
  horizontal = false,
  ...props
}: StackProps) {
  return (
    <div
      className={cn(
        "flex",
        horizontal ? "flex-row" : "flex-col",
        stackGaps[gap],
        stackAlign[align],
        className,
      )}
      {...props}
    />
  );
}
