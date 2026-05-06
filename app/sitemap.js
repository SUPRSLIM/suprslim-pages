import airtable from '@/lib/airtable';

export default async function sitemap() {
  const baseUrl = 'https://suprslim.nl';

  // Fetch blogs for dynamic paths
  let blogs = [];
  try {
    const records = await airtable('Blogs').select({
      fields: ['Blog titel'],
    }).all();
    blogs = records.map(record => ({
      url: `${baseUrl}/blog/${record.id}`,
      lastModified: new Date(),
    }));
  } catch (error) {
    console.error('Sitemap Error:', error);
  }

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/weeklijst`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/horeca`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...blogs,
  ];
}
