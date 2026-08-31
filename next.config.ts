import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export - this site has no server-side features (no API routes,
  // middleware, or server actions - confirmed before choosing this), so it
  // can be built to plain static files and served from GitHub Pages, which
  // can't run a Node server at all. `next build` now produces a static
  // `out/` folder directly instead of a server build.
  output: "export",
};

export default nextConfig;
