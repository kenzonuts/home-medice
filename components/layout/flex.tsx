import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const justifyMap = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
} as const;

const alignMap = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
  baseline: "items-baseline",
} as const;

const directionMap = {
  row: "flex-row",
  col: "flex-col",
  "row-reverse": "flex-row-reverse",
  "col-reverse": "flex-col-reverse",
} as const;

const wrapMap = {
  true: "flex-wrap",
  false: "flex-nowrap",
  reverse: "flex-wrap-reverse",
} as const;

const gapMap = {
  none: "gap-0",
  xs: "gap-1",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-8",
} as const;

export type FlexProps = HTMLAttributes<HTMLDivElement> & {
  direction?: keyof typeof directionMap;
  justify?: keyof typeof justifyMap;
  align?: keyof typeof alignMap;
  wrap?: keyof typeof wrapMap | boolean;
  gap?: keyof typeof gapMap;
  inline?: boolean;
};

/**
 * Flexbox layout helper.
 */
export function Flex({
  className,
  direction = "row",
  justify = "start",
  align = "stretch",
  wrap = false,
  gap = "none",
  inline = false,
  ...props
}: FlexProps) {
  const wrapKey = typeof wrap === "boolean" ? (wrap ? "true" : "false") : wrap;

  return (
    <div
      className={cn(
        inline ? "inline-flex" : "flex",
        directionMap[direction],
        justifyMap[justify],
        alignMap[align],
        wrapMap[wrapKey],
        gapMap[gap],
        className,
      )}
      {...props}
    />
  );
}

/** Alias matching Design System naming. */
export const FlexWrapper = Flex;
