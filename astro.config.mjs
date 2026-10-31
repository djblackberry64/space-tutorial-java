// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightGiscus from "starlight-giscus";

// https://astro.build/config
export default defineConfig({
  site: "https://djblackberry64.github.io",
  base: "/space-tutorial-java/",
  integrations: [
    starlight({
      title: "Programming language introduction",
      customCss: ["./src/styles/custom.css"],
      plugins: [
        starlightGiscus({
          repo: "djblackberry64/space-tutorial-java",
          repoId: "R_kgDOTHpy7A",
          category: "General",
          categoryId: "DIC_kwDOTHpy7M4DKFv5",
        }),
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/djblackberry64",
        },
        {
          icon: "heart",
          label: "Kofi",
          href: "https://ko-fi.com/djblackberry64",
        },
        {
          icon: "discord",
          label: "Discord",
          href: "https://discord.gg/h24Szhf2tN",
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
