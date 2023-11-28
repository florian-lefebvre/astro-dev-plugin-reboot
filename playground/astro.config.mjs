import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import AstroDevPluginRebootIntegration from "astro-dev-plugin-reboot";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap(), AstroDevPluginRebootIntegration()],
  experimental: {
    devOverlay: true,
  },
});
