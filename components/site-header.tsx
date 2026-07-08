"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE, NAV_LINKS } from "@/lib/site";
import { CallLink } from "@/components/cta-buttons";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/80">
      <div className="container flex h-16 items-center justify-between gap-4 md:h-20">
        {/* Brand */}
        <Link
          href="/"
          className="group flex items-center gap-2 rounded-sm"
          aria-label={`${SITE.name} — home`}
        >
          <span
            className="flex h-9 w-9 items-center justify-center rounded bg-primary text-primary-foreground shadow-sm"
            aria-hidden="true"
          >
            <span className="font-display text-lg font-bold">AC</span>
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold tracking-tight text-foreground">
              {SITE.name}
            </span>
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Canberra &amp; ACT
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(pathname, link.href) ? "page" : undefined}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-semibold transition-colors duration-base ease-standard",
                "hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                isActive(pathname, link.href)
                  ? "text-primary"
                  : "text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Call CTA (always visible) + mobile menu trigger */}
        <div className="flex items-center gap-2">
          <CallLink
            size="sm"
            className="hidden sm:inline-flex"
            label={SITE.phoneDisplay}
          />
          <a
            href={SITE.phoneHref}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-sm transition-colors duration-base ease-standard hover:bg-primary-hover active:bg-primary-active focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:hidden"
            aria-label={`Call ${SITE.phoneDisplay}`}
          >
            <Phone className="size-5" aria-hidden="true" />
          </a>

          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-surface text-foreground transition-colors duration-base ease-standard hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="size-6" aria-hidden="true" />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-foreground/60 data-[state=open]:animate-fade-in" />
              <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-[85%] max-w-sm flex-col bg-surface shadow-xl data-[state=open]:animate-slide-in-right">
                <div className="flex h-16 items-center justify-between border-b border-border px-5">
                  <Dialog.Title className="font-display text-lg font-bold">
                    Menu
                  </Dialog.Title>
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground transition-colors duration-base ease-standard hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      aria-label="Close menu"
                    >
                      <X className="size-6" aria-hidden="true" />
                    </button>
                  </Dialog.Close>
                </div>
                <nav
                  className="flex flex-col gap-1 p-4"
                  aria-label="Mobile"
                >
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={
                        isActive(pathname, link.href) ? "page" : undefined
                      }
                      className={cn(
                        "rounded-md px-4 py-3 text-base font-semibold transition-colors duration-base ease-standard",
                        "hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                        isActive(pathname, link.href)
                          ? "bg-muted text-primary"
                          : "text-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto border-t border-border p-4">
                  <CallLink block label={`Call ${SITE.phoneDisplay}`} />
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}
