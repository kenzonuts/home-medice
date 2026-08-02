import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

/**
 * Responsive page container — max-width + horizontal padding.
 */
export function Container<T extends ElementType = "div">({
  as,
  children,
  className,
  ...props
}: ContainerProps<T>) {
  const Component = as ?? "div";

  return (
    <Component className={cn("container-app", className)} {...props}>
      {children}
    </Component>
  );
}
