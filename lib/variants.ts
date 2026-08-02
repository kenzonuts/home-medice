import { cn } from "@/lib/utils";

type VariantMap<T extends string> = Record<T, string>;

/**
 * Resolve a typed variant class string with an optional override.
 */
export function variantClass<T extends string>(
  variants: VariantMap<T>,
  value: T,
  className?: string,
) {
  return cn(variants[value], className);
}
