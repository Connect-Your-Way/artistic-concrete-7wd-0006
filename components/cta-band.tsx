import { asset } from "@/lib/asset";
import { SITE } from "@/lib/site";
import { CallLink, EmailLink } from "@/components/cta-buttons";

/**
 * Closing call-to-action band with a dark, textured concrete background.
 * Appears near the foot of every page — phone is the hero action.
 */
export function CtaBand({
  title = "Planning a concreting project?",
  subtitle = "Get in touch for a chat about your job.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section
      className="section texture-overlay text-white"
      style={
        {
          "--texture-image": `url(${asset("/assets/concrete-texture.jpg")})`,
        } as React.CSSProperties
      }
    >
      <div className="container flex flex-col items-center text-center">
        <h2 className="max-w-2xl text-3xl font-bold sm:text-4xl">{title}</h2>
        <p className="mt-4 max-w-xl text-lg text-white/80">{subtitle}</p>
        <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
          <CallLink label={`Call ${SITE.phoneDisplay}`} />
          <EmailLink
            variant="outline-inverse"
            label={SITE.emailDisplay}
          />
        </div>
      </div>
    </section>
  );
}
