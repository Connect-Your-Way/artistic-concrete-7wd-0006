/** Copy content sourced verbatim from brief.md. No facts added. */

export type ServiceSnapshot = {
  slug: string;
  title: string;
  blurb: string;
  image?: string;
  imageAlt?: string;
};

/** Home page "services snapshot" cards. */
export const SERVICES_SNAPSHOT: ServiceSnapshot[] = [
  {
    slug: "driveways-paths",
    title: "Driveways & paths",
    blurb:
      "Plain, coloured or decorative concrete driveways, footpaths and walkways.",
    image: "/assets/hero-driveway.jpg",
    imageAlt: "A concrete driveway leading to a home",
  },
  {
    slug: "slabs",
    title: "Slabs",
    blurb: "Shed, garage and house slabs prepared and poured to spec.",
    image: "/assets/slab-pour.jpg",
    imageAlt: "Fresh concrete being poured and worked on site",
  },
  {
    slug: "decorative-concrete",
    title: "Decorative concrete",
    blurb:
      "Exposed aggregate and pattern/stencil finishes for a standout look.",
    image: "/assets/exposed-aggregate.jpg",
    imageAlt: "Exposed aggregate concrete finish showing stone texture",
  },
  {
    slug: "paving-kerbing",
    title: "Paving & kerbing",
    blurb:
      "Paving, concrete kerbs and edging to finish off outdoor areas.",
    image: "/assets/paving-interlock.jpg",
    imageAlt: "Interlocking paving in an outdoor area",
  },
  {
    slug: "resurfacing",
    title: "Resurfacing",
    blurb: "Refreshing and resurfacing tired existing concrete.",
    image: "/assets/pattern-pavement.jpg",
    imageAlt: "Patterned concrete surface",
  },
  {
    slug: "retaining-walls",
    title: "Retaining walls",
    blurb: "Concrete retaining walls and groundwork.",
    image: "/assets/retaining-wall.jpg",
    imageAlt: "A concrete retaining wall alongside a landscaped slope",
  },
];

/** Home page "why choose us" points. */
export const WHY_POINTS = [
  {
    title: "Local to Canberra",
    body: "Based in Fyshwick, working right across the ACT.",
    icon: "MapPin",
  },
  {
    title: "Full-service",
    body: "One team from site prep and formwork through to finishing.",
    icon: "Wrench",
  },
  {
    title: "Residential & commercial",
    body: "Jobs for homeowners, builders and businesses.",
    icon: "Building2",
  },
  {
    title: "Quality finish",
    body: "Careful preparation and attention to detail on every pour.",
    icon: "BadgeCheck",
  },
] as const;

/** Full detailed service list for the Services page. */
export const SERVICES_DETAIL: ServiceSnapshot[] = [
  {
    slug: "concrete-driveways",
    title: "Concrete driveways",
    blurb:
      "New driveways in plain, coloured or decorative concrete, prepared and poured to handle everyday use.",
    image: "/assets/hero-driveway.jpg",
    imageAlt: "A finished concrete driveway in a residential setting",
  },
  {
    slug: "paths-footpaths",
    title: "Paths & footpaths",
    blurb:
      "Walkways, garden paths and footpaths that are neat, level and hard-wearing.",
    image: "/assets/concrete-path.jpg",
    imageAlt: "A clean, level concrete path",
  },
  {
    slug: "slabs",
    title: "Shed, garage & house slabs",
    blurb:
      "Properly prepared and formed slabs for sheds, garages and home builds.",
    image: "/assets/slab-pour.jpg",
    imageAlt: "A concrete slab being poured and worked",
  },
  {
    slug: "exposed-aggregate",
    title: "Exposed aggregate",
    blurb:
      "A textured, decorative finish that reveals the stone in the mix — popular for driveways and outdoor areas.",
    image: "/assets/exposed-aggregate.jpg",
    imageAlt: "Close-up of an exposed aggregate concrete finish",
  },
  {
    slug: "pattern-stencil",
    title: "Pattern & stencil concrete",
    blurb:
      "Patterned finishes that add character to driveways, paths and courtyards.",
    image: "/assets/pattern-pavement.jpg",
    imageAlt: "A patterned concrete surface",
  },
  {
    slug: "pool-surrounds",
    title: "Pool surrounds & outdoor areas",
    blurb:
      "Concrete for pool surrounds, patios and entertaining spaces.",
    image: "/assets/paving-interlock.jpg",
    imageAlt: "Concrete paving in an outdoor entertaining area",
  },
  {
    slug: "paving",
    title: "Paving",
    blurb:
      "Paving to complement driveways, paths and outdoor living areas.",
    image: "/assets/paving-interlock.jpg",
    imageAlt: "Interlocking concrete paving",
  },
  {
    slug: "kerbs-edging",
    title: "Concrete kerbs & edging",
    blurb:
      "Clean kerbs and edges to define driveways, gardens and paths.",
    image: "/assets/concrete-path.jpg",
    imageAlt: "Concrete edging alongside a path",
  },
  {
    slug: "resurfacing",
    title: "Concrete resurfacing",
    blurb: "Refreshing and resurfacing existing concrete surfaces.",
    image: "/assets/pattern-pavement.jpg",
    imageAlt: "A resurfaced concrete area",
  },
  {
    slug: "retaining-walls",
    title: "Retaining walls",
    blurb: "Concrete retaining walls and associated groundwork.",
    image: "/assets/retaining-wall.jpg",
    imageAlt: "A concrete retaining wall",
  },
];

/** About page "how we work" points. */
export const HOW_WE_WORK = [
  "Clear, straightforward communication from quote to completion",
  "Careful site prep and formwork for a lasting result",
  "A tidy, professional finish on residential and commercial jobs",
  "Local knowledge of Canberra conditions and sites",
] as const;
