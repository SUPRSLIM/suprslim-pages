export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/dashboard/'],
    },
    sitemap: 'https://suprslim.nl/sitemap.xml',
  }
}
