/**
 * Design System — barrel exports for common imports.
 * Prefer importing from specific folders when tree-shaking matters.
 */

export * from "@/components/ui";
export {
  Flex,
  FlexWrapper,
  Grid,
  Section,
  Stack,
  type FlexProps,
  type GridCols,
  type GridGap,
  type GridProps,
  type SectionElementProps,
  type SectionSpacing,
  type StackAlign,
  type StackGap,
  type StackProps,
} from "@/components/layout";
export * from "@/components/animations";
