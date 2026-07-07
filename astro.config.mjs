// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://djblackberry64.github.io",
  base: "/space-tutorial-java/",
  integrations: [
    starlight({
      title: "My Docs",

      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "Course",
          items: [
            // Each item here is one entry in the navigation menu.
            { autogenerate: { directory: "lessons" } },
          ],
        },
        {
          label: "Reference",
          items: [{ autogenerate: { directory: "reference" } }],
        },
      ],
    }),
  ],
});
