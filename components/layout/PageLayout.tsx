import type { ReactNode } from "react";

import {
  Container,
  type ContainerSize,
} from "@/components/ui/container";
import { cn } from "@/lib/utils";

export type PageLayoutProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  /** Wrap children in the responsive container */
  contained?: boolean;
  containerSize?: ContainerSize;
  spacing?: "none" | "sm" | "md" | "lg";
  /** Extra top offset under sticky navbar */
  withNavOffset?: boolean;
};

const spacingClass: Record<NonNullable<PageLayoutProps["spacing"]>, string> = {
  none: "",
  sm: "section-spacing-sm",
  md: "section-spacing",
  lg: "section-spacing-lg",
};

/**
 * Reusable page shell — consistent content width, padding, and vertical rhythm.
 */
export function PageLayout({
  children,
  className,
  containerClassName,
  contained = true,
  containerSize = "default",
  spacing = "md",
  withNavOffset = false,
}: PageLayoutProps) {
  const content = contained ? (
    <Container size={containerSize} className={containerClassName}>
      {children}
    </Container>
  ) : (
    children
  );

  return (
    <div
      className={cn(
        "w-full",
        spacingClass[spacing],
        withNavOffset && "pt-2",
        className,
      )}
    >
      {content}
    </div>
  );
}
