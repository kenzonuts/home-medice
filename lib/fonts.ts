import { Inter, Manrope } from "next/font/google";

/**
 * Heading font — Manrope
 */
export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

/**
 * Body font — Inter
 */
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});
