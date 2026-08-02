/**
 * Design system constants — spacing, motion, z-index, radii.
 * Prefer Tailwind token classes in components; use these for JS/TS logic.
 */

export const COLORS = {
  primary: "#16A34A",
  secondary: "#0EA5E9",
  accent: "#22C55E",
  background: "#F8FAFC",
  white: "#FFFFFF",
  text: "#0F172A",
} as const;

export const SPACING = {
  section: {
    sm: "section-spacing-sm",
    md: "section-spacing",
    lg: "section-spacing-lg",
  },
  component: "component-spacing",
  card: {
    sm: "card-spacing-sm",
    md: "card-spacing",
    lg: "card-spacing-lg",
  },
  text: {
    sm: "text-spacing",
    lg: "text-spacing-lg",
  },
} as const;

export const Z_INDEX = {
  dropdown: 50,
  sticky: 100,
  overlay: 200,
  modal: 300,
  toast: 400,
  tooltip: 500,
} as const;

export const TRANSITION = {
  fast: 150,
  normal: 200,
  slow: 300,
  slower: 500,
} as const;

export const CONTAINER = {
  default: "container-app",
  narrow: "container-app container-narrow",
  wide: "container-app container-wide",
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;
