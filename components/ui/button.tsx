import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Button (component layer). Every variant specifies the full interaction-state
 * set: default / hover / focus-visible / active / disabled. Transitions run at the
 * standard token duration + easing. `buttonVariants` is exported so anchors
 * (tel:/mailto:/Link) can share the exact same treatment.
 */
export const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap select-none",
    "rounded-md font-semibold",
    "transition-colors duration-base ease-standard",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
  ].join(" "),
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-sm hover:bg-primary-hover active:bg-primary-active",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary-hover active:bg-secondary-hover",
        outline:
          "border-2 border-border bg-surface text-foreground hover:bg-muted hover:border-input active:bg-muted",
        "outline-inverse":
          "border-2 border-white/40 bg-transparent text-white hover:bg-white/10 hover:border-white/70 active:bg-white/20",
        ghost:
          "bg-transparent text-foreground hover:bg-muted active:bg-muted",
      },
      size: {
        sm: "h-9 px-4 text-sm [&_svg]:size-4",
        md: "h-11 px-5 text-base [&_svg]:size-5",
        lg: "h-14 px-7 text-lg [&_svg]:size-6",
      },
      block: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      block: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, block, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size, block }), className)}
      {...props}
    />
  )
);
Button.displayName = "Button";
