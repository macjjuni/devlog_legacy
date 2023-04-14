/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://kku.dev',
  generateRobotsTxt: true, // (optional)
  // ...other options
  siteUrl: 'https://kku.dev',
  exclude: ['/server-sitemap.xml'], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://kku.dev/server-sitemap.xml', // <==== Add here
    ],
  },
}
