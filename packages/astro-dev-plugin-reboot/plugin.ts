import type { DevOverlayPlugin } from "astro";

export default {
  id: "astro-dev-plugin-reboot",
  name: "Reboot",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m3.935-16.408a.75.75 0 0 1 .467.694v2.715a.75.75 0 0 1-.75.75H13a.75.75 0 0 1-.537-1.274l.762-.78a4.17 4.17 0 0 0-4.224 1.089c-1.668 1.707-1.668 4.483 0 6.19a4.169 4.169 0 0 0 5.998 0a4.394 4.394 0 0 0 1.208-2.472c.058-.418.39-.77.812-.77c.406 0 .742.325.703.729a5.897 5.897 0 0 1-1.65 3.562a5.669 5.669 0 0 1-8.144 0c-2.237-2.29-2.237-5.997 0-8.287a5.666 5.666 0 0 1 6.437-1.208l.75-.768a.75.75 0 0 1 .82-.17" clip-rule="evenodd"/></svg>`,
  init(canvas, eventTarget) {
    eventTarget.addEventListener("plugin-toggled", (event) => {
      if ((event as CustomEvent).detail.state === true) {
        const confirmation = window.confirm(
          "Are you sure to reboot your computer?"
        );
        if (confirmation) {
          // @ts-ignore
          if (import.meta.hot) {
            // @ts-ignore
            import.meta.hot.send(
              "astro-dev-overlay:astro-dev-plugin-reboot:reboot"
            );
          }
        } else {
          eventTarget.dispatchEvent(
            new CustomEvent("toggle-plugin", {
              detail: {
                state: false,
              },
            })
          );
        }
      }
    });
  },
} satisfies DevOverlayPlugin;
