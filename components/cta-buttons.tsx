import { Phone, Mail } from "lucide-react";
import { buttonVariants, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site";

type CtaSize = ButtonProps["size"];
type CtaVariant = ButtonProps["variant"];

/** Prominent tap-to-call anchor — the hero action across the whole site. */
export function CallLink({
  variant = "primary",
  size = "lg",
  block,
  className,
  label = `Call ${SITE.phoneDisplay}`,
  showIcon = true,
}: {
  variant?: CtaVariant;
  size?: CtaSize;
  block?: boolean;
  className?: string;
  label?: string;
  showIcon?: boolean;
}) {
  return (
    <a
      href={SITE.phoneHref}
      className={cn(buttonVariants({ variant, size, block }), className)}
      aria-label={`Call Artistic Concrete on ${SITE.phoneDisplay}`}
    >
      {showIcon && <Phone aria-hidden="true" />}
      {label}
    </a>
  );
}

/** Secondary email (mailto) anchor. */
export function EmailLink({
  variant = "outline",
  size = "lg",
  block,
  className,
  label = "Email us",
  showIcon = true,
}: {
  variant?: CtaVariant;
  size?: CtaSize;
  block?: boolean;
  className?: string;
  label?: string;
  showIcon?: boolean;
}) {
  return (
    <a
      href={SITE.emailHref}
      className={cn(buttonVariants({ variant, size, block }), className)}
      aria-label={`Email Artistic Concrete at ${SITE.emailDisplay}`}
    >
      {showIcon && <Mail aria-hidden="true" />}
      {label}
    </a>
  );
}
