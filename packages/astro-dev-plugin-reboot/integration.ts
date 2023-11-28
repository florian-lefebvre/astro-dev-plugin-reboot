import type { AstroIntegration } from "astro";
import { reboot } from "@napi-rs/system-shutdown";

export default function AstroDevOverlayPluginIntegration(): AstroIntegration {
  return {
    name: "astro-dev-plugin-reboot",
    hooks: {
      "astro:config:setup": ({ addDevOverlayPlugin }) => {
        addDevOverlayPlugin("astro-dev-plugin-reboot/plugin");
      },
      "astro:server:setup": ({ server }) => {
        server.ws.on("astro-dev-overlay:astro-dev-plugin-reboot:reboot", () => {
          reboot();
        });
      },
    },
  };
}
