// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://djblackberry64.github.io",
  base: "/space-tutorial-java/",
  integrations: [
    starlight({
      title: "Programming language introduction",
      customCss: ["./src/styles/custom.css"],

      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "Python",
          items: [{ autogenerate: { directory: "python" } }],
          collapsed: true,
        },
        {
          label: "Java",
          items: [{ autogenerate: { directory: "java" } }],
          collapsed: true,
        },
        {
          label: "Kotlin",
          items: [{ autogenerate: { directory: "kotlin" } }],
          collapsed: true,
        },
        {
          label: "Reference",
          items: [{ autogenerate: { directory: "reference" } }],
        },
      ],
    }),
  ],
});
