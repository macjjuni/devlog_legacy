/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://kku.dev',
  generateRobotsTxt: true, // (optional)
  // ...other options
  siteUrl: 'https://kku.dev',
  sitemapSize: 7000,
  exclude: [], // <= exclude here
  changefreq: "daily",
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://kku.dev/server-sitemap.xml', // <==== Add here
    ],
  },
  priority: 0.5,
}
