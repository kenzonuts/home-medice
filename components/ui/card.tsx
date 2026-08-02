import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

export type CardProps = HTMLAttributes<HTMLElement> & {
  as?: "article" | "div" | "section" | "li" | "figure" | "blockquote";
  padded?: boolean;
  interactive?: boolean;
};

/**
 * Default surface card — clean, elevated, healthcare-friendly.
 */
export function Card({
  as: Component = "div",
  className,
  padded = true,
  interactive = false,
  ...props
}: CardProps) {
  return (
    <Component
      className={cn(
        "rounded-2xl border border-border bg-surface text-surface-foreground shadow-card",
        "transition-shadow duration-200",
        padded && "card-spacing",
        interactive &&
          "focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 hover:shadow-lg",
        className,
      )}
      {...props}
    />
  );
}

export function CardHeader({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("text-spacing flex flex-col gap-1.5", className)}
      {...props}
    />
  );
}

export function CardTitle({
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "font-heading text-lg font-semibold tracking-tight text-foreground",
        className,
      )}
      {...props}
    />
  );
}

export function CardDescription({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "font-body text-sm leading-relaxed text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}

export function CardContent({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mt-4", className)} {...props} />;
}

export function CardFooter({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mt-6 flex items-center gap-3", className)} {...props} />
  );
}

export type ServiceCardProps = HTMLAttributes<HTMLElement> & {
  icon?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  children?: ReactNode;
};

/**
 * Service card base — icon + title + description slots. No hardcoded content.
 */
export function ServiceCard({
  className,
  icon,
  title,
  description,
  action,
  children,
  ...props
}: ServiceCardProps) {
  return (
    <Card
      as="article"
      className={cn("flex h-full flex-col", className)}
      interactive
      {...props}
    >
      {icon ? <div className="mb-4">{icon}</div> : null}
      {(title || description) && (
        <CardHeader>
          {title ? <CardTitle>{title}</CardTitle> : null}
          {description ? (
            <CardDescription>{description}</CardDescription>
          ) : null}
        </CardHeader>
      )}
      {children ? (
        <CardContent className="flex-1">{children}</CardContent>
      ) : null}
      {action ? <CardFooter>{action}</CardFooter> : null}
    </Card>
  );
}

export type DoctorCardBaseProps = HTMLAttributes<HTMLElement> & {
  media?: ReactNode;
  name?: ReactNode;
  role?: ReactNode;
  meta?: ReactNode;
  children?: ReactNode;
};

/**
 * Doctor card base — media + identity slots.
 */
export function DoctorCardBase({
  className,
  media,
  name,
  role,
  meta,
  children,
  ...props
}: DoctorCardBaseProps) {
  return (
    <Card
      as="article"
      padded={false}
      className={cn("overflow-hidden", className)}
      interactive
      {...props}
    >
      {media ? (
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted">
          {media}
        </div>
      ) : null}
      <div className="card-spacing flex flex-col gap-1">
        {name ? (
          <h3 className="font-heading text-lg font-semibold text-foreground">
            {name}
          </h3>
        ) : null}
        {role ? (
          <p className="font-body text-sm font-medium text-primary">{role}</p>
        ) : null}
        {meta ? (
          <p className="font-body text-sm text-muted-foreground">{meta}</p>
        ) : null}
        {children}
      </div>
    </Card>
  );
}

export type GalleryCardBaseProps = HTMLAttributes<HTMLElement> & {
  media?: ReactNode;
  caption?: ReactNode;
  children?: ReactNode;
};

/**
 * Gallery card base — media-first frame with optional caption.
 */
export function GalleryCardBase({
  className,
  media,
  caption,
  children,
  ...props
}: GalleryCardBaseProps) {
  return (
    <Card
      as="figure"
      padded={false}
      className={cn("overflow-hidden", className)}
      interactive
      {...props}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
        {media}
      </div>
      {(caption || children) && (
        <figcaption className="card-spacing-sm">
          {caption}
          {children}
        </figcaption>
      )}
    </Card>
  );
}

export type ArticleCardBaseProps = HTMLAttributes<HTMLElement> & {
  media?: ReactNode;
  eyebrow?: ReactNode;
  title?: ReactNode;
  excerpt?: ReactNode;
  meta?: ReactNode;
  children?: ReactNode;
};

/**
 * Article card base — media + editorial text slots.
 */
export function ArticleCardBase({
  className,
  media,
  eyebrow,
  title,
  excerpt,
  meta,
  children,
  ...props
}: ArticleCardBaseProps) {
  return (
    <Card
      as="article"
      padded={false}
      className={cn("overflow-hidden", className)}
      interactive
      {...props}
    >
      {media ? (
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
          {media}
        </div>
      ) : null}
      <div className="card-spacing flex flex-col gap-2">
        {eyebrow}
        {title ? (
          <h3 className="font-heading text-xl font-semibold tracking-tight text-balance text-foreground">
            {title}
          </h3>
        ) : null}
        {excerpt ? (
          <p className="font-body text-sm leading-relaxed text-pretty text-muted-foreground">
            {excerpt}
          </p>
        ) : null}
        {meta ? (
          <div className="mt-2 font-body text-xs text-muted-foreground">
            {meta}
          </div>
        ) : null}
        {children}
      </div>
    </Card>
  );
}

export type TestimonialCardBaseProps = HTMLAttributes<HTMLElement> & {
  quote?: ReactNode;
  author?: ReactNode;
  role?: ReactNode;
  avatar?: ReactNode;
  rating?: ReactNode;
  children?: ReactNode;
};

/**
 * Testimonial card base — quote + attribution slots.
 */
export function TestimonialCardBase({
  className,
  quote,
  author,
  role,
  avatar,
  rating,
  children,
  ...props
}: TestimonialCardBaseProps) {
  return (
    <Card
      as="blockquote"
      className={cn("flex h-full flex-col", className)}
      {...props}
    >
      {rating ? <div className="mb-3">{rating}</div> : null}
      {quote ? (
        <p className="font-body text-base leading-relaxed text-pretty text-foreground">
          {quote}
        </p>
      ) : null}
      {children}
      {(author || role || avatar) && (
        <footer className="mt-6 flex items-center gap-3">
          {avatar ? (
            <div className="size-11 shrink-0 overflow-hidden rounded-full bg-muted">
              {avatar}
            </div>
          ) : null}
          <div className="min-w-0">
            {author ? (
              <cite className="font-heading text-sm font-semibold text-foreground not-italic">
                {author}
              </cite>
            ) : null}
            {role ? (
              <p className="font-body text-xs text-muted-foreground">{role}</p>
            ) : null}
          </div>
        </footer>
      )}
    </Card>
  );
}
