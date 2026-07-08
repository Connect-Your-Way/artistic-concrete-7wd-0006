/**
 * Prefix a public asset path with the configured base path so images resolve
 * correctly whether the site is served from the domain root or a GitHub Pages
 * project subpath. Keep local builds clean by defaulting to an empty prefix.
 */
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  const normalised = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${normalised}`;
}
