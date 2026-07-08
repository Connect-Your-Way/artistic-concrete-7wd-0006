/** @type {import('next').NextConfig} */

// Support hosting under a GitHub Pages project subpath (e.g. /repo-name) without
// breaking local builds. The publish step can set NEXT_PUBLIC_BASE_PATH.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  // Static HTML export so GitHub Pages can host a real Next.js codebase as flat files.
  output: "export",
  // The export target has no image optimisation server.
  images: { unoptimized: true },
  // Emit /about/index.html etc. so Pages serves clean directory URLs.
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
