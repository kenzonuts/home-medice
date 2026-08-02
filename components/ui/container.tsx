import type { ComponentPropsWithoutRef, ElementType } from "react";

import { cn } from "@/lib/utils";
import type { PolymorphicProps } from "@/types/ui";

export type ContainerSize = "default" | "narrow" | "wide";

type ContainerProps<T extends ElementType = "div"> = PolymorphicProps<T> & {
  size?: ContainerSize;
};

const sizeClass: Record<ContainerSize, string> = {
  default: "container-app",
  narrow: "container-app container-narrow",
  wide: "container-app container-wide",
};

/**
 * Responsive page container — max-width + horizontal padding.
 */
export function Container<T extends ElementType = "div">({
  as,
  children,
  className,
  size = "default",
  ...props
}: ContainerProps<T>) {
  const Component = as ?? "div";

  return (
    <Component className={cn(sizeClass[size], className)} {...props}>
      {children}
    </Component>
  );
}

export type ContainerElementProps = ComponentPropsWithoutRef<"div">;
