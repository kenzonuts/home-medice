import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const gridCols = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
} as const;

const gridGaps = {
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-8",
} as const;

export type GridCols = keyof typeof gridCols;
export type GridGap = keyof typeof gridGaps;

export type GridProps = HTMLAttributes<HTMLDivElement> & {
  cols?: GridCols;
  gap?: GridGap;
};

/**
 * Responsive CSS Grid helper.
 */
export function Grid({ className, cols = 3, gap = "md", ...props }: GridProps) {
  return (
    <div
      className={cn("grid", gridCols[cols], gridGaps[gap], className)}
      {...props}
    />
  );
}
