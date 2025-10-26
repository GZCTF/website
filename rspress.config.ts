import * as path from "path";
import { defineConfig } from "rspress/config";
import pluginSitemap from "rspress-plugin-sitemap";
import { pluginOpenGraph } from "rsbuild-plugin-open-graph";
import katex from "rspress-plugin-katex";

const PUBLIC_URL = process.env.PUBLIC_URL || "https://gzctf.gzti.me";

export default defineConfig({
  root: path.join(__dirname, "docs"),
  title: "GZ::CTF",
  lang: "en",
  description: "GZ::CTF Project Documentation",
  icon: "/favicon.webp",
  plugins: [
    pluginSitemap({
      domain: PUBLIC_URL,
    }),
    katex(),
  ],
  route: {
    cleanUrls: true,
  },
  search: {
    codeBlocks: true,
  },
  markdown: {
    codeHighlighter: "prism",
    mdxRs: false,
  },
  ssg: false,
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
    locales: [
      {
        lang: "en",
        label: "English",
        outlineTitle: "Table of Contents",
        prevPageText: "Previous",
        nextPageText: "Next",
        lastUpdatedText: "Last Updated",
        searchPlaceholderText: "Search Docs",
        searchNoResultsText: "No results for",
        searchSuggestedQueryText: "Please try again with a different keyword",
        editLink: {
          text: "Edit this page on GitHub",
          docRepoBaseUrl: "https://github.com/GZCTF/website/tree/main/docs",
        },
      },
      {
        lang: "zh",
        label: "简体中文",
        outlineTitle: "目录",
        prevPageText: "上一页",
        nextPageText: "下一页",
        lastUpdatedText: "最后更新于",
        searchPlaceholderText: "搜索文档",
        searchNoResultsText: "没有找到有关内容",
        searchSuggestedQueryText: "建议更换不同的关键字后重试",
        editLink: {
          text: "在 GitHub 上编辑此页",
          docRepoBaseUrl: "https://github.com/GZCTF/website/tree/main/docs",
        },
      },
      {
        lang: "ja",
        label: "日本語",
        outlineTitle: "目次",
        prevPageText: "前へ",
        nextPageText: "次へ",
        lastUpdatedText: "最終更新",
        searchPlaceholderText: "ドキュメントを検索",
        searchNoResultsText: "関連する結果がありません",
        editLink: {
          text: "GitHub でこのページを編集",
          docRepoBaseUrl: "https://github.com/GZCTF/website/tree/main/docs",
        },
      },
    ],
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
