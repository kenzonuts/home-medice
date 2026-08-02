import type { ComponentPropsWithoutRef, ElementType } from "react";

import { Container, type ContainerSize } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import type { PolymorphicProps } from "@/types/ui";

export type SectionSpacing = "none" | "sm" | "md" | "lg";

type SectionProps<T extends ElementType = "section"> = PolymorphicProps<T> & {
  spacing?: SectionSpacing;
  contained?: boolean;
  containerSize?: ContainerSize;
  containerClassName?: string;
};

const spacingClass: Record<SectionSpacing, string> = {
  none: "",
  sm: "section-spacing-sm",
  md: "section-spacing",
  lg: "section-spacing-lg",
};

/**
 * Page section shell with consistent vertical rhythm.
 */
export function Section<T extends ElementType = "section">({
  as,
  children,
  className,
  spacing = "md",
  contained = true,
  containerSize = "default",
  containerClassName,
  ...props
}: SectionProps<T>) {
  const Component = as ?? "section";

  const content = contained ? (
    <Container size={containerSize} className={containerClassName}>
      {children}
    </Container>
  ) : (
    children
  );

  return (
    <Component className={cn(spacingClass[spacing], className)} {...props}>
      {content}
    </Component>
  );
}

export type SectionElementProps = ComponentPropsWithoutRef<"section">;
