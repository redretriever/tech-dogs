module.exports = {
  base: "/tech-dogs/",
  dest: 'docs/',
  title: "tech-dogs",
  description: "個人的なWEB開発メモのまとめ",
  locales: {
    "/": { lang: "ja" },
  },
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.6.1/css/all.css",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
      },
    ],
    ["script", {}],
  ],
  globalUIComponents: ["Footer"],
  themeConfig: {
    sidebar: "auto",
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about/" },
      { text: "Blog", link: "/blog/" },
    ],
  },
  markdown: {
    anchor: { permalink: false },
    extendMarkdown: (md) => {
      md.set({
        breaks: true,
        linkify: true,
      });
    },
  },
  plugins: [
    "@vuepress/plugin-blog",
    "@vuepress/last-updated",
    "@vuepress/google-analytics",
    {
      ga: "UA-93586235-5",
    },
  ],
};
