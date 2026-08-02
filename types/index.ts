/**
 * Shared application types.
 * Extend this module as features are added.
 */

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type SeoMeta = {
  title: string;
  description: string;
  image?: string;
};

export type { PolymorphicProps } from "./ui";
