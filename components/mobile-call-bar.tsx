import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

/**
 * Fixed bottom tap-to-call bar for phones — most trade traffic is mobile, so the
 * primary action stays thumb-reachable at all times. Hidden on lg+.
 */
export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-secondary/95 p-3 backdrop-blur lg:hidden">
      <a
        href={SITE.phoneHref}
        className="flex h-12 w-full items-center justify-center gap-2 rounded-md bg-primary text-base font-semibold text-primary-foreground shadow-md transition-colors duration-base ease-standard hover:bg-primary-hover active:bg-primary-active focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
        aria-label={`Call Artistic Concrete on ${SITE.phoneDisplay}`}
      >
        <Phone className="size-5" aria-hidden="true" />
        Call {SITE.phoneDisplay}
      </a>
    </div>
  );
}
