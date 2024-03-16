import { defineConfig } from "astro/config";
import stylex from "astro-stylex";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react({
      include: ["**/react/*"],
    }),
    stylex({
      include: ["**/stylex/*"],
    }),
  ],
});
