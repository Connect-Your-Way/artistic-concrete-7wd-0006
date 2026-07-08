import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { SITE, NAV_LINKS } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container grid gap-10 py-14 md:grid-cols-3 md:py-16">
        {/* Brand + summary */}
        <div>
          <div className="flex items-center gap-2">
            <span
              className="flex h-9 w-9 items-center justify-center rounded bg-primary text-primary-foreground"
              aria-hidden="true"
            >
              <span className="font-display text-lg font-bold">AC</span>
            </span>
            <span className="font-display text-lg font-bold">{SITE.name}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-secondary-foreground/70">
            Concreting for homes and businesses across {SITE.region} — driveways,
            slabs, paths, decorative finishes and more.
          </p>
        </div>

        {/* Nav */}
        <nav aria-label="Footer">
          <h2 className="font-display text-sm font-bold uppercase tracking-wider text-secondary-foreground/60">
            Explore
          </h2>
          <ul className="mt-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-sm text-sm text-secondary-foreground/85 transition-colors duration-base ease-standard hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-wider text-secondary-foreground/60">
            Get in touch
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-2 rounded-sm font-semibold transition-colors duration-base ease-standard hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
              >
                <Phone className="size-4 text-primary" aria-hidden="true" />
                {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={SITE.emailHref}
                className="inline-flex items-center gap-2 rounded-sm transition-colors duration-base ease-standard hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
              >
                <Mail className="size-4 text-primary" aria-hidden="true" />
                {SITE.emailDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2 text-secondary-foreground/85">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <span>
                {SITE.address.line}
                <br />
                {SITE.address.suburb}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-2 py-6 text-xs text-secondary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
          </p>
          {/* Mandatory demo attribution (SPEC §5.5). */}
          <p>
            Demo prepared by{" "}
            <a
              href={SITE.builder.url}
              rel="noopener noreferrer nofollow"
              className="rounded-sm font-medium text-secondary-foreground/80 underline underline-offset-2 transition-colors duration-base ease-standard hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
            >
              {SITE.builder.name} — {SITE.builder.domain}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
