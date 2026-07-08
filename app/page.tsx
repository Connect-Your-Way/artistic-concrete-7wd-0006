import Link from "next/link";
import {
  MapPin,
  Wrench,
  Building2,
  BadgeCheck,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import { asset } from "@/lib/asset";
import { SITE } from "@/lib/site";
import { SERVICES_SNAPSHOT, WHY_POINTS } from "@/lib/content";
import { buttonVariants } from "@/components/ui/button";
import { CallLink, EmailLink } from "@/components/cta-buttons";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { CtaBand } from "@/components/cta-band";
import { cn } from "@/lib/utils";

const WHY_ICONS: Record<string, LucideIcon> = {
  MapPin,
  Wrench,
  Building2,
  BadgeCheck,
};

export default function HomePage() {
  return (
    <>
      {/* ---- Hero ---- */}
      <section className="relative isolate overflow-hidden bg-secondary text-white">
        <div className="absolute inset-0 -z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("/assets/hero-driveway.jpg")}
            alt="A freshly finished concrete driveway at a Canberra home"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-secondary/40" />
        </div>

        <div className="container flex min-h-[560px] flex-col justify-center py-20 md:min-h-[640px] md:py-28">
          <div className="max-w-2xl">
            <span className="eyebrow text-primary">
              <span className="h-px w-6 bg-primary" aria-hidden="true" />
              Concrete contractor · {SITE.base}
            </span>
            <h1 className="mt-4 text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
              {SITE.tagline}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
              Artistic Concrete is a Fyshwick-based concrete contractor
              delivering durable, well-finished concrete for driveways, slabs,
              paths and decorative outdoor areas — for homes and businesses
              right across the ACT.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <CallLink label={`Call ${SITE.phoneDisplay}`} />
              <EmailLink variant="outline-inverse" label="Email us" />
            </div>
          </div>
        </div>
      </section>

      {/* ---- Intro / what we do ---- */}
      <section className="section">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="What we do"
              title="Concrete done properly, start to finish"
              subtitle="From preparation and formwork to the final finish, we handle the whole job so your concrete is laid right, looks good and lasts. Whether it's a new driveway, a shed slab or a decorative outdoor space, we bring a tidy, professional approach to every pour."
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/services/"
                className={cn(buttonVariants({ variant: "primary" }))}
              >
                See our services
              </Link>
              <Link
                href="/about/"
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                About us
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-lg shadow-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset("/assets/exposed-aggregate.jpg")}
                alt="Exposed aggregate concrete finish"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="mt-8 overflow-hidden rounded-lg shadow-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset("/assets/slab-pour.jpg")}
                alt="Fresh concrete being poured and finished on site"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---- Services snapshot ---- */}
      <section className="section bg-muted">
        <div className="container">
          <SectionHeading
            eyebrow="Our services"
            title="A full range of concreting"
            subtitle="From everyday driveways and slabs to decorative finishes and groundwork — one team for the whole job."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES_SNAPSHOT.map((service) => (
              <ServiceCard
                key={service.slug}
                service={service}
                href="/services/"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---- Why choose us ---- */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Why choose us"
            title="Reliable concreting, done right"
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_POINTS.map((point) => {
              const Icon = WHY_ICONS[point.icon] ?? CheckCircle2;
              return (
                <div
                  key={point.title}
                  className="rounded-lg border border-border bg-surface p-6 shadow-sm"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {point.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---- Service-area strip ---- */}
      <section className="section bg-muted">
        <div className="container grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-lg shadow-md">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/assets/concrete-path.jpg")}
              alt="A clean, level concrete path"
              loading="lazy"
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Service area"
              title="Serving Canberra & the ACT"
              subtitle="Fyshwick and suburbs across Canberra including Narrabundah, Symonston, Pialligo and Griffith — and the wider ACT."
            />
            <div className="mt-6 flex flex-wrap gap-2">
              {SITE.suburbs.map((suburb) => (
                <span
                  key={suburb}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 text-sm font-medium text-foreground"
                >
                  <MapPin className="size-3.5 text-primary" aria-hidden="true" />
                  {suburb}
                </span>
              ))}
            </div>
            <Link
              href="/areas/"
              className={cn(buttonVariants({ variant: "outline" }), "mt-8")}
            >
              View areas served
            </Link>
          </div>
        </div>
      </section>

      {/* ---- Closing CTA ---- */}
      <CtaBand />
    </>
  );
}
