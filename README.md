# astro-dev-plugin-reboot

Reboot your computer, right from the Astro dev overlay.

## Usage

### Installation

Install using the astro cli

```sh
npm astro add astro-dev-plugin-reboot
```

or manually:

```sh
npm install astro-dev-plugin-reboot
```

```diff
// astro.config.mjs
import { defineConfig } from 'astro/config';
+ import AstroDevPluginRebootIntegration from "astro-dev-plugin-reboot";

export default defineConfig({
+     integrations: [AstroDevPluginRebootIntegration()],
})
```

**Enable `devOverlay`**

```diff
// astro.config.mjs
import { defineConfig } from 'astro/config';
import AstroDevPluginRebootIntegration from "astro-dev-plugin-reboot";

export default defineConfig({
    integrations: [AstroDevPluginRebootIntegration()],
+     experimental: {
+         devOverlay: true
+     }
})
```

### Rebooting

You'll see a new icon in the devtools overlay, click it!

### Licensing

[MIT Licensed](./LICENSE).

Inspired by https://github.com/Brooooooklyn/server-action-system-reboot.
