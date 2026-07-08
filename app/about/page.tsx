import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { asset } from "@/lib/asset";
import { SITE } from "@/lib/site";
import { HOW_WE_WORK } from "@/lib/content";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { CtaBand } from "@/components/cta-band";
import { CallLink } from "@/components/cta-buttons";

export const metadata: Metadata = {
  title: "About",
  description:
    "Artistic Concrete is a Fyshwick-based concrete contractor serving homeowners, builders and businesses across Canberra and the ACT — handling each job from site prep through to the final finish.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="About Artistic Concrete"
        subtitle="A Fyshwick-based concrete contractor serving homeowners, builders and businesses across Canberra and the ACT."
        image="/assets/house-driveway.jpg"
      />

      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Who we are"
              title="Full-scope concreting across Canberra"
            />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                Artistic Concrete is a concrete contractor based in Fyshwick,
                serving homeowners, builders and businesses across Canberra and
                the ACT. We take on the full range of concreting work — from
                driveways, slabs and paths to decorative finishes, paving,
                kerbing and retaining walls — and we handle each job from site
                preparation through to the final finish.
              </p>
            </div>
            <div className="mt-8">
              <CallLink label={`Call ${SITE.phoneDisplay}`} />
            </div>
          </div>

          <div className="overflow-hidden rounded-lg shadow-md">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/assets/house-driveway.jpg")}
              alt="A home with a concrete driveway"
              loading="lazy"
              className="h-full min-h-64 w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section bg-muted">
        <div className="container">
          <SectionHeading eyebrow="How we work" title="A tidy, professional approach" />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {HOW_WE_WORK.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 rounded-lg border border-border bg-surface p-5 shadow-sm"
              >
                <CheckCircle2
                  className="mt-0.5 size-6 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span className="text-base font-medium text-foreground">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Talk to us about your project"
        subtitle={`Call ${SITE.phoneDisplay} to talk about your concreting job.`}
      />
    </>
  );
}
