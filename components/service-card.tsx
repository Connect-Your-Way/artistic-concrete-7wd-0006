import { asset } from "@/lib/asset";
import { cn } from "@/lib/utils";
import type { ServiceSnapshot } from "@/lib/content";

/**
 * Service card. `href` makes the whole card an accessible link (used on Home,
 * pointing to the Services page). Without `href` it renders as static content
 * (used on the Services page itself).
 */
export function ServiceCard({
  service,
  href,
  className,
}: {
  service: ServiceSnapshot;
  href?: string;
  className?: string;
}) {
  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      href={href}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface shadow-sm",
        "transition-all duration-base ease-standard",
        href &&
          "hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )}
    >
      {service.image && (
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset(service.image)}
            alt={service.imageAlt ?? ""}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 ease-standard group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-bold text-foreground">
          {service.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {service.blurb}
        </p>
        {href && (
          <span
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary"
            aria-hidden="true"
          >
            Learn more
            <span className="transition-transform duration-base ease-standard group-hover:translate-x-1">
              &rarr;
            </span>
          </span>
        )}
      </div>
    </Wrapper>
  );
}
