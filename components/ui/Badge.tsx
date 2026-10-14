import React from "react";

export type BadgeVariant =
  | "brand"
  | "success"
  | "neutral"
  | "kicker"
  | "kicker-brand"
  | "outline";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  className?: string;
  children: React.ReactNode;
}

const variantStyles: Record<BadgeVariant, string> = {
  brand:
    "bg-brand-subtle text-brand border border-brand-border px-3 py-1 rounded-pill text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5",
  success:
    "bg-success-subtle text-success px-2.5 py-1 rounded-pill text-xs font-bold inline-flex items-center gap-1.5",
  neutral:
    "bg-bg-subtle text-text-secondary border border-border-subtle px-2 py-0.5 rounded-pill text-[11px] font-semibold inline-flex items-center gap-1",
  outline:
    "bg-white border border-border-subtle text-text-secondary px-2 py-0.5 rounded-pill text-[10px] font-semibold inline-flex items-center gap-1",
  kicker:
    "text-xs font-bold text-text-muted uppercase tracking-widest inline-block",
  "kicker-brand":
    "text-xs font-bold text-brand uppercase tracking-wider inline-block",
};

export function Badge({
  variant = "brand",
  className = "",
  children,
  ...props
}: BadgeProps) {
  const combined = `${variantStyles[variant]} ${className}`.trim();
  return (
    <span className={combined} {...props}>
      {children}
    </span>
  );
}
