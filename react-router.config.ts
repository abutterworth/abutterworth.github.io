import type { Config } from "@react-router/dev/config";

export default {
  // Static build for GitHub Pages (no Node server)
  ssr: false,
  prerender: true,
} satisfies Config;
