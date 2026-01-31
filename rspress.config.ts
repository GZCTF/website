import { defineConfig } from "@rspress/core";
import pluginSitemap from "rspress-plugin-sitemap";
import { pluginOpenGraph } from "rsbuild-plugin-open-graph";
import katex from "./plugins/katex";

const PUBLIC_URL = process.env.PUBLIC_URL || "https://gzctf.gzti.me";

export default defineConfig({
  root: "docs",
  title: "GZ::CTF",
  lang: "en",
  description: "GZ::CTF Project Documentation",
  icon: "/favicon.webp",
  llms: true,
  plugins: [
    katex(),
    pluginSitemap({
      domain: PUBLIC_URL,
    }),
  ],
  route: {
    cleanUrls: true,
  },
  search: {
    codeBlocks: true,
  },
  ssg: true,
  mediumZoom: true,
  locales: [
    {
      lang: "en",
      label: "English",
      description: "Docs for GZ::CTF Project",
    },
    {
      lang: "zh",
      label: "简体中文",
      description: "GZ::CTF 使用文档",
    },
    {
      lang: "ja",
      label: "日本語",
      description: "GZ::CTF プロジェクトのドキュメント",
    },
  ],
  themeConfig: {
    socialLinks: [
      {
        icon: "github",
        mode: "link",
        content: "https://github.com/GZTimeWalker/GZCTF",
      },
      {
        icon: "discord",
        mode: "link",
        content: "https://discord.gg/dV9A6ZjVhC",
      },
    ],
    lastUpdated: true,
    enableScrollToTop: true,
    enableContentAnimation: true,
    enableAppearanceAnimation: false,
    footer: {
      message: "© 2022 - present By GZTimeWalker. All Rights Reserved.",
    },
    hideNavbar: "auto",
  },
  builderConfig: {
    plugins: [
      pluginOpenGraph({
        title: "GZ::CTF Project Documentation",
        type: "website",
        url: PUBLIC_URL,
        image: `${PUBLIC_URL}/favicon.webp`,
        description:
          "GZ::CTF is a powerful CTF platform designed for high performance, security, and flexibility. It offers dynamic scoring, robust security features, and a rich set of tools for both organizers and participants.",
      }),
    ],
    html: {
      tags: [
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: "/favicon.webp",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "keywords",
            content:
              "GZ::CTF, CTF, GZTimeWalker, GZCTF, GZCTF Docs, GZCTF Project",
          },
        },
      ],
    },
  },
});
