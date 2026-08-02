"use client";

import {
  motion,
  type HTMLMotionProps,
  type MotionProps,
  type Variants,
} from "framer-motion";
import type { ReactNode } from "react";

import {
  fadeDown,
  fadeLeft,
  fadeRight,
  fadeUp,
  motionPresets,
  scale,
  staggerContainer,
  staggerItem,
  zoom,
  type MotionPresetName,
} from "@/components/animations/variants";
import { cn } from "@/lib/utils";

type MotionDivProps = HTMLMotionProps<"div"> & {
  children?: ReactNode;
  className?: string;
  variants?: Variants;
  once?: boolean;
  amount?: number;
};

const viewportDefaults = {
  once: true,
  amount: 0.2,
} as const;

function MotionBlock({
  children,
  className,
  variants,
  once = true,
  amount = 0.2,
  ...props
}: MotionDivProps) {
  return (
    <motion.div
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeUp(props: Omit<MotionDivProps, "variants">) {
  return <MotionBlock variants={fadeUp} {...props} />;
}

export function FadeDown(props: Omit<MotionDivProps, "variants">) {
  return <MotionBlock variants={fadeDown} {...props} />;
}

export function FadeLeft(props: Omit<MotionDivProps, "variants">) {
  return <MotionBlock variants={fadeLeft} {...props} />;
}

export function FadeRight(props: Omit<MotionDivProps, "variants">) {
  return <MotionBlock variants={fadeRight} {...props} />;
}

export function ScaleIn(props: Omit<MotionDivProps, "variants">) {
  return <MotionBlock variants={scale} {...props} />;
}

export function ZoomIn(props: Omit<MotionDivProps, "variants">) {
  return <MotionBlock variants={zoom} {...props} />;
}

export function StaggerContainer({
  children,
  className,
  once = true,
  amount = 0.15,
  ...props
}: Omit<MotionDivProps, "variants">) {
  return (
    <motion.div
      className={cn(className)}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  ...props
}: Omit<MotionDivProps, "variants" | "once" | "amount">) {
  return (
    <motion.div className={cn(className)} variants={staggerItem} {...props}>
      {children}
    </motion.div>
  );
}

type MotionPresetProps = HTMLMotionProps<"div"> & {
  preset?: MotionPresetName;
  children?: ReactNode;
  className?: string;
  once?: boolean;
  amount?: number;
};

/**
 * Generic motion wrapper using a named preset from the design system.
 */
export function MotionPreset({
  preset = "fadeUp",
  children,
  className,
  once = viewportDefaults.once,
  amount = viewportDefaults.amount,
  ...props
}: MotionPresetProps) {
  return (
    <motion.div
      className={cn(className)}
      variants={motionPresets[preset]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export type { MotionProps, Variants };
