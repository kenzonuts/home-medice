import type { Variants, Transition } from "framer-motion";

import { TRANSITION } from "@/constants/design";

const easeOut: Transition["ease"] = [0.22, 1, 0.36, 1];

const baseTransition: Transition = {
  duration: TRANSITION.slow / 1000,
  ease: easeOut,
};

/** Fade + translate up */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: baseTransition,
  },
};

/** Fade + translate down */
export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: baseTransition,
  },
};

/** Fade + translate from left */
export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: baseTransition,
  },
};

/** Fade + translate from right */
export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: baseTransition,
  },
};

/** Soft scale-in */
export const scale: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: baseTransition,
  },
};

/** Emphasized zoom-in */
export const zoom: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: TRANSITION.slower / 1000,
      ease: easeOut,
    },
  },
};

/** Parent for staggered children */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

/** Child item used with staggerContainer */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: baseTransition,
  },
};

export const motionPresets = {
  fadeUp,
  fadeDown,
  fadeLeft,
  fadeRight,
  scale,
  zoom,
  staggerContainer,
  staggerItem,
} as const;

export type MotionPresetName = keyof typeof motionPresets;
