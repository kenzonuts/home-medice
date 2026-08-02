import type { HTMLAttributes, ReactNode } from "react";

import { Caption } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

export type SectionTitleProps = HTMLAttributes<HTMLDivElement> & {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  titleAs?: "h1" | "h2" | "h3";
};

/**
 * Consistent section heading block — eyebrow, title, optional description.
 */
export function SectionTitle({
  className,
  eyebrow,
  title,
  description,
  align = "left",
  titleAs: TitleTag = "h2",
  ...props
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "flex max-w-2xl flex-col gap-3",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
      {...props}
    >
      {eyebrow ? (
        <Caption className="font-medium tracking-wider text-primary uppercase">
          {eyebrow}
        </Caption>
      ) : null}
      <TitleTag className="font-heading text-3xl font-bold tracking-tight text-balance text-foreground md:text-4xl">
        {title}
      </TitleTag>
      {description ? (
        <p className="font-body text-base leading-relaxed text-pretty text-muted-foreground md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
