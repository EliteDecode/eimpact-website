"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

type MotionSectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export function MotionSection({ id, className, children }: MotionSectionProps) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

type MotionStaggerProps = {
  className?: string;
  children: ReactNode;
};

export function MotionStagger({ className, children }: MotionStaggerProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type MotionItemProps = {
  as?: "div" | "li";
  className?: string;
  children: ReactNode;
};

export function MotionItem({
  as = "div",
  className,
  children,
}: MotionItemProps) {
  const Component = motion[as];
  return (
    <Component
      variants={fadeInUp}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </Component>
  );
}
