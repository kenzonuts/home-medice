import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

type TextOwnProps = {
  className?: string;
  children?: ReactNode;
};

const headingBase =
  "font-heading font-bold tracking-tight text-foreground text-balance";

export function HeadingXL({
  as: Component = "h1",
  className,
  children,
  ...props
}: TextOwnProps &
  ComponentPropsWithoutRef<"h1"> & {
    as?: ElementType;
  }) {
  return (
    <Component
      className={cn(
        headingBase,
        "text-4xl leading-tight md:text-5xl lg:text-6xl",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function HeadingLG({
  as: Component = "h2",
  className,
  children,
  ...props
}: TextOwnProps &
  ComponentPropsWithoutRef<"h2"> & {
    as?: ElementType;
  }) {
  return (
    <Component
      className={cn(
        headingBase,
        "text-3xl leading-tight md:text-4xl",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function HeadingMD({
  as: Component = "h3",
  className,
  children,
  ...props
}: TextOwnProps &
  ComponentPropsWithoutRef<"h3"> & {
    as?: ElementType;
  }) {
  return (
    <Component
      className={cn(
        headingBase,
        "text-2xl leading-snug md:text-3xl",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function HeadingSM({
  as: Component = "h4",
  className,
  children,
  ...props
}: TextOwnProps &
  ComponentPropsWithoutRef<"h4"> & {
    as?: ElementType;
  }) {
  return (
    <Component
      className={cn(headingBase, "text-xl leading-snug md:text-2xl", className)}
      {...props}
    >
      {children}
    </Component>
  );
}

export function Paragraph({
  className,
  ...props
}: ComponentPropsWithoutRef<"p">) {
  return (
    <p
      className={cn(
        "font-body text-base leading-relaxed text-pretty text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}

export function Caption({
  className,
  ...props
}: ComponentPropsWithoutRef<"p">) {
  return (
    <p
      className={cn(
        "font-body text-sm leading-normal text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}

export function Label({
  className,
  ...props
}: ComponentPropsWithoutRef<"label">) {
  return (
    <label
      className={cn(
        "font-body text-sm leading-none font-medium text-foreground",
        className,
      )}
      {...props}
    />
  );
}

export function SmallText({
  className,
  ...props
}: ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className={cn(
        "font-body text-xs leading-normal text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}
