"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg";

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
};

const baseButton =
  "inline-flex items-center justify-center rounded-full font-medium transition-transform transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#9034e9]/70";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[#9034e9] text-white shadow-lg shadow-[#9034e9]/30 hover:bg-[#7c22d8]",
  secondary:
    "bg-white/10 text-white border border-white/40 backdrop-blur-xl hover:bg-white/20",
  ghost:
    "bg-white text-[#9034e9] border border-[#9034e9]/20 hover:bg-[#9034e9]/5",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  children,
  href,
  target,
  rel,
  className,
}: ButtonProps) {
  const classes = `${baseButton} ${variantClasses[variant]} ${
    sizeClasses[size]
  } ${className ?? ""}`;

  const content = (
    <motion.span
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.97 }}
      className="inline-flex items-center gap-2"
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={rel}>
        {content}
      </a>
    );
  }

  return <button className={classes}>{content}</button>;
}

type BadgeProps = {
  children: ReactNode;
};

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full bg-[#9034e9]/10 text-[#9034e9] px-3 py-1 text-xs font-medium border border-[#9034e9]/20">
      {children}
    </span>
  );
}

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function GlassCard({ children, className }: CardProps) {
  return (
    <div
      className={`rounded-2xl bg-white/70 backdrop-blur-xl border border-white/60 shadow-[0_18px_45px_rgba(15,23,42,0.12)] ${className}`}
    >
      {children}
    </div>
  );
}
