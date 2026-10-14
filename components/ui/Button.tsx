"use client";

import React, { forwardRef } from "react";
import Link from "next/link";
import { motion, HTMLMotionProps } from "framer-motion";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "dark";
export type ButtonSize = "sm" | "md" | "lg" | "icon";

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  type?: "button" | "submit" | "reset";
  "aria-label"?: string;
  "aria-expanded"?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand text-white hover:bg-brand-hover shadow-xs border border-transparent",
  secondary:
    "bg-bg-subtle text-text-primary hover:bg-border-subtle border border-border-subtle",
  outline:
    "bg-transparent text-text-primary border border-border-strong hover:bg-bg-surface",
  ghost:
    "bg-transparent text-text-secondary hover:text-text-primary hover:bg-bg-subtle border border-transparent",
  dark:
    "bg-dark-bg text-white hover:bg-dark-surface border border-dark-border",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "text-xs font-semibold px-3.5 py-1.5 rounded-pill gap-1.5",
  md: "text-sm font-semibold px-5 py-2.5 rounded-pill gap-2",
  lg: "text-sm sm:text-base font-semibold px-7 py-3.5 rounded-pill gap-2.5",
  icon: "p-2 rounded-pill",
};

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      className = "",
      children,
      disabled = false,
      onClick,
      type = "button",
      "aria-label": ariaLabel,
      "aria-expanded": ariaExpanded,
    },
    ref
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center font-medium transition-colors cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed";
    const combinedClasses = `${baseClasses} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim();

    const motionProps: HTMLMotionProps<"button"> & HTMLMotionProps<"a"> = {
      whileHover: disabled ? undefined : { scale: 1.01 },
      whileTap: disabled ? undefined : { scale: 0.97 },
      transition: { duration: 0.15 },
    };

    if (href) {
      return (
        <motion.div
          whileHover={disabled ? undefined : { scale: 1.01 }}
          whileTap={disabled ? undefined : { scale: 0.97 }}
          className="inline-block"
        >
          <Link
            href={href}
            ref={ref as React.Ref<HTMLAnchorElement>}
            className={combinedClasses}
            onClick={onClick}
            aria-label={ariaLabel}
          >
            {children}
          </Link>
        </motion.div>
      );
    }

    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={combinedClasses}
        aria-label={ariaLabel}
        aria-expanded={ariaExpanded}
        {...motionProps}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
