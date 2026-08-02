/**
 * Design System + Global Layout — barrel exports.
 * Prefer importing from specific folders when tree-shaking matters.
 */

export * from "@/components/ui";
export {
  Flex,
  FlexWrapper,
  Grid,
  Section,
  Stack,
  Logo,
  Navbar,
  DesktopNav,
  MobileNav,
  NavLink,
  Footer,
  FooterContact,
  FooterLinks,
  FooterSocial,
  FooterBackToTop,
  ScrollTopButton,
  WhatsAppButton,
  PageLayout,
  SiteShell,
  type FlexProps,
  type GridCols,
  type GridGap,
  type GridProps,
  type SectionElementProps,
  type SectionSpacing,
  type StackAlign,
  type StackGap,
  type StackProps,
  type LogoProps,
  type NavLinkProps,
  type PageLayoutProps,
  type SiteShellProps,
} from "@/components/layout";
export * from "@/components/animations";
