import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { SITE } from "@/lib/site";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { CallLink } from "@/components/cta-buttons";

export const metadata: Metadata = {
  title: "Areas Served",
  description:
    "Based in Fyshwick, Artistic Concrete works across the Canberra region and the wider ACT, including Narrabundah, Symonston, Pialligo, Griffith and surrounding suburbs.",
};

export default function AreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Areas served"
        title="Concreting Across Canberra & the ACT"
        subtitle="Based in Fyshwick, we work across the Canberra region and the wider ACT."
        image="/assets/concrete-path.jpg"
      />

      <section className="section">
        <div className="container">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SITE.suburbs.map((suburb) => (
              <div
                key={suburb}
                className="flex items-center gap-3 rounded-lg border border-border bg-surface p-5 shadow-sm"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <MapPin className="size-5" aria-hidden="true" />
                </span>
                <span className="font-display text-lg font-bold">{suburb}</span>
              </div>
            ))}
            <div className="flex items-center gap-3 rounded-lg border border-dashed border-input bg-muted p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                <MapPin className="size-5" aria-hidden="true" />
              </span>
              <span className="text-base font-medium text-muted-foreground">
                &amp; surrounding suburbs across the ACT
              </span>
            </div>
          </div>

          <div className="mt-14 flex flex-col items-center gap-4 rounded-lg border border-border bg-secondary p-8 text-center text-white">
            <h2 className="font-display text-2xl font-bold">
              Not sure if we cover your area?
            </h2>
            <p className="max-w-xl text-white/80">
              Give us a call — if you&apos;re in Canberra or the wider ACT, we
              can most likely help.
            </p>
            <CallLink label={`Call ${SITE.phoneDisplay}`} />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
