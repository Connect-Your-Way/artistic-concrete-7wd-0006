/**
 * Single source of truth for verbatim business facts and contact details.
 * Every value here comes straight from the brief — no invented facts.
 */
export const SITE = {
  name: "Artistic Concrete",
  legalName: "Artistic Concrete Pty Ltd",
  tagline: "Quality Concreting Across Canberra",
  region: "Canberra & the wider ACT",
  base: "Fyshwick, ACT",

  phoneDisplay: "0417 488 648",
  phoneHref: "tel:0417488648",
  emailDisplay: "sales@artisticconcrete.com.au",
  emailHref: "mailto:sales@artisticconcrete.com.au",

  address: {
    line: "Unit 3/18-20 Maryborough St",
    suburb: "Fyshwick ACT 2609",
  },
  payment: "Cash and EFT accepted",

  suburbs: ["Fyshwick", "Narrabundah", "Symonston", "Pialligo", "Griffith"],

  builder: {
    name: "Connect Your Way",
    url: "https://connectyourway.au",
    domain: "connectyourway.au",
  },
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services/", label: "Services" },
  { href: "/about/", label: "About" },
  { href: "/areas/", label: "Areas Served" },
  { href: "/contact/", label: "Contact" },
] as const;
