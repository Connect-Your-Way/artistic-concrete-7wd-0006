import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { SERVICES_DETAIL } from "@/lib/content";
import { PageHero } from "@/components/page-hero";
import { ServiceCard } from "@/components/service-card";
import { CtaBand } from "@/components/cta-band";
import { CallLink } from "@/components/cta-buttons";

export const metadata: Metadata = {
  title: "Services",
  description:
    "A full range of concreting and groundwork services for Canberra homes and businesses — driveways, slabs, exposed aggregate, pattern concrete, paving, kerbing, resurfacing and retaining walls.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Concreting & groundwork services"
        subtitle="A full range of concreting and groundwork services for Canberra homes and businesses. Not sure what you need? Give us a call and we'll talk it through."
        image="/assets/pattern-pavement.jpg"
      />

      <section className="section">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES_DETAIL.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          <div className="mt-14 flex flex-col items-center gap-4 rounded-lg border border-border bg-muted p-8 text-center">
            <h2 className="font-display text-2xl font-bold">
              Ready to get started?
            </h2>
            <p className="max-w-xl text-muted-foreground">
              Give us a call and we&apos;ll talk through your job — driveways,
              slabs, decorative finishes and more.
            </p>
            <CallLink label={`Call ${SITE.phoneDisplay}`} />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
