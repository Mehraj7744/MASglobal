/** @type {import('next-sitemap').IConfig} */

module.exports = {

  siteUrl:
    "https://masglobalai.com",

  generateRobotsTxt: true,

  sitemapSize: 7000,

  changefreq: "weekly",

  priority: 0.7,

  exclude: [
    "/admin/*",
    "/login",
    "/api/*",
  ],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};

