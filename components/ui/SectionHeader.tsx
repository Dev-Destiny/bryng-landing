"use client";

import React from "react";
import { Badge } from "./Badge";

export interface SectionHeaderProps {
  kicker?: string;
  kickerVariant?: "kicker" | "kicker-brand";
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  as?: "h1" | "h2";
}

export function SectionHeader({
  kicker,
  kickerVariant = "kicker",
  title,
  subtitle,
  align = "center",
  className = "",
  titleClassName = "",
  subtitleClassName = "",
  as: HeadingTag = "h2",
}: SectionHeaderProps) {
  const isCenter = align === "center";
  return (
    <div
      className={`flex flex-col ${
        isCenter ? "items-center text-center max-w-3xl mx-auto" : "items-start text-left"
      } ${className}`.trim()}
    >
      {kicker && (
        <Badge variant={kickerVariant} className="mb-4">
          {kicker}
        </Badge>
      )}

      <HeadingTag
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight leading-tight mb-4 ${titleClassName}`.trim()}
      >
        {title}
      </HeadingTag>

      {subtitle && (
        <p
          className={`text-text-secondary text-base sm:text-lg leading-relaxed max-w-2xl font-normal ${subtitleClassName}`.trim()}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
