"use client";

import React, { forwardRef } from "react";
import Image from "next/image";
import { motion, HTMLMotionProps } from "framer-motion";

export type CardVariant =
  | "default"
  | "subtle"
  | "dark"
  | "highlight"
  | "imageBg";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  interactive?: boolean;
  imageSrc?: string;
  imageAlt?: string;
  overlayClassName?: string;
  className?: string;
  children: React.ReactNode;
}

const variantStyles: Record<CardVariant, string> = {
  default:
    "bg-bg-surface text-text-primary shadow-xs",
  subtle:
    "bg-bg-subtle/80 text-text-primary",
  dark:
    "bg-dark-bg text-white shadow-xl",
  highlight:
    "bg-[#FEF9C3] text-text-primary",
  imageBg:
    "relative shadow- xl",
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = "default",
      interactive = false,
      imageSrc = "/colourful_blur.jpg",
      imageAlt = "",
      overlayClassName = "bg-black/65",
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    // const isImageBg = variant === "imageBg" || variant === "image_bg";
    const baseClasses = "transition-all overflow-hidden relative isolate";
    const interactiveClasses = interactive
      ? "hover:border-border-strong hover:shadow-md cursor-pointer"
      : "";
    const combinedClasses = `${baseClasses} ${variantStyles[variant]} ${interactiveClasses} ${className}`.trim();

    const backgroundLayers = variant === "imageBg" && (
      <>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority={false}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover pointer-events-none -z-20 select-none"
        />
        {/* Darkening overlay layer */}
        <div
          className={`absolute inset-0 pointer-events-none -z-10 ${overlayClassName}`}
          aria-hidden="true"
        />
      </>
    );

    if (interactive) {
      const motionProps: HTMLMotionProps<"div"> = {
        whileHover: { y: -4, transition: { duration: 0.2 } },
        whileTap: { scale: 0.99 },
      };

      return (
        <motion.div
          ref={ref}
          className={combinedClasses}
          {...motionProps}
          {...(props as HTMLMotionProps<"div">)}
        >
          {backgroundLayers}
          {children}
        </motion.div>
      );
    }

    return (
      <div ref={ref} className={combinedClasses} {...props}>
        {backgroundLayers}
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export function CardHeader({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`flex flex-col space-y-1.5 ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={`font-bold text-inherit text-lg leading-tight ${className}`.trim()}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={`text-sm text-inherit opacity-85 leading-relaxed ${className}`.trim()}
      {...props}
    >
      {children}
    </p>
  );
}

export function CardContent({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`flex items-center pt-4 border-t border-border-subtle ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
}
