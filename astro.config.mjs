// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

import netlify from "@astrojs/netlify";

// import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://poetic-brioche-ecf1d0.netlify.app/",
  integrations: [preact()],
  adapter: netlify({
    edgeMiddleware: true,
  }),
});
