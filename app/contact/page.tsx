import type { Metadata } from "next";
import { Phone, Mail, MapPin, CreditCard } from "lucide-react";
import { SITE } from "@/lib/site";
import { PageHero } from "@/components/page-hero";
import { CallLink, EmailLink } from "@/components/cta-buttons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Call 0417 488 648 or email sales@artisticconcrete.com.au to discuss your concreting project. Based at Unit 3/18-20 Maryborough St, Fyshwick ACT 2609.",
};

const mapSrc =
  "https://www.google.com/maps?q=Maryborough+St+Fyshwick+ACT+2609&z=14&output=embed";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in Touch"
        subtitle="Call or email to discuss your concreting project — driveways, slabs, decorative finishes and more."
      />

      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Details + CTA */}
          <div>
            <h2 className="font-display text-2xl font-bold">Contact details</h2>

            <dl className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Phone className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Phone
                  </dt>
                  <dd>
                    <a
                      href={SITE.phoneHref}
                      className="rounded-sm font-display text-2xl font-bold text-foreground transition-colors duration-base ease-standard hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      {SITE.phoneDisplay}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Mail className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Email
                  </dt>
                  <dd>
                    <a
                      href={SITE.emailHref}
                      className="rounded-sm text-lg font-medium text-foreground underline underline-offset-4 transition-colors duration-base ease-standard hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      {SITE.emailDisplay}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <MapPin className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Address
                  </dt>
                  <dd className="text-lg text-foreground">
                    {SITE.address.line}, {SITE.address.suburb}
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <CreditCard className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Payment
                  </dt>
                  <dd className="text-lg text-foreground">{SITE.payment}</dd>
                </div>
              </div>
            </dl>

            <div className="mt-10 rounded-lg border border-border bg-muted p-6">
              <p className="font-display text-lg font-bold">
                Prefer to talk it through?
              </p>
              <p className="mt-1 text-muted-foreground">
                Tap below to call us now — we&apos;re happy to chat about your
                job.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <CallLink block label={`Call ${SITE.phoneDisplay}`} />
                <EmailLink block label="Email us" />
              </div>
            </div>
          </div>

          {/* Map */}
          <div>
            <h2 className="font-display text-2xl font-bold">Find us</h2>
            <p className="mt-2 text-muted-foreground">
              Based in Fyshwick, ACT — serving Canberra and the wider region.
            </p>
            <div className="mt-6 overflow-hidden rounded-lg border border-border shadow-md">
              <iframe
                src={mapSrc}
                title="Map showing Artistic Concrete's location in Fyshwick, ACT"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-80 w-full border-0 md:h-[28rem]"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
