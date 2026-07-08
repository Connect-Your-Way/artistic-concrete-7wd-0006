import { cn } from "@/lib/utils";

/** Consistent section heading block: optional eyebrow + title + lead subcopy. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  invert = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <span className={cn("eyebrow", invert && "text-primary")}>
          <span className="h-px w-6 bg-primary" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "mt-3 text-3xl leading-tight sm:text-4xl",
          invert ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            invert ? "text-white/80" : "text-muted-foreground"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
