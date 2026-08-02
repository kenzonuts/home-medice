import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export type DividerProps = HTMLAttributes<HTMLHRElement> & {
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
};

export function Divider({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: DividerProps) {
  return (
    <hr
      aria-orientation={orientation}
      aria-hidden={decorative || undefined}
      role={decorative ? "presentation" : "separator"}
      className={cn(
        "shrink-0 border-0 bg-border",
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
        className,
      )}
      {...props}
    />
  );
}
