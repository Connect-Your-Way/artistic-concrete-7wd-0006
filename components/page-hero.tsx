import { asset } from "@/lib/asset";

/** Compact, textured page header used across interior pages. */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  image = "/assets/concrete-texture.jpg",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
}) {
  return (
    <section
      className="texture-overlay text-white"
      style={
        { "--texture-image": `url(${asset(image)})` } as React.CSSProperties
      }
    >
      <div className="container py-16 md:py-20">
        {eyebrow && (
          <span className="eyebrow text-primary">
            <span className="h-px w-6 bg-primary" aria-hidden="true" />
            {eyebrow}
          </span>
        )}
        <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
