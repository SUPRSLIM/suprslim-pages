import airtable from '@/lib/airtable';
import Link from 'next/link';

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

async function getBlogs() {
  try {
    const records = await airtable('Blogs').select({
      sort: [{ field: 'Blog titel', direction: 'asc' }]
    }).all();
    
    return records.map(record => ({
      id: record.id,
      title: record.get('Blog titel'),
      intro: record.get('Intro'),
      slug: slugify(record.get('Blog titel') || ''),
    }));
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}

export const metadata = {
  title: "Blog | Slimme Tips voor een Gezonder Leven | SUPRSLIM",
  description: "Ontdek tips over slim boodschappen doen, makkelijke maaltijden en hoe je gezond eten haalbaar maakt in een druk leven.",
};

export default async function BlogIndex() {
  const blogs = await getBlogs();

  return (
    <main className="min-h-screen bg-[#040d08] py-24 px-6">
      {/* Schema.org Blog for SEO/GEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "SUPRSLIM Blog",
            "description": "Artikelen over slim koken, gezond eten en besparen op boodschappen.",
            "publisher": {
              "@type": "Organization",
              "name": "SUPRSLIM"
            }
          })
        }}
      />
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center">
          <div className="inline-block px-4 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-semibold mb-6 border border-emerald-500/20">
            SUPRSLIM Blog
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Slimme tips voor <br /> <span className="text-emerald-500">gezonder leven.</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Lees alles over slim boodschappen doen, makkelijke maaltijden en hoe je gezond eten haalbaar maakt in een druk leven.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link 
              key={blog.id} 
              href={`/blog/${blog.id}`} // Using ID for now as primary key for fetching
              className="group flex flex-col bg-slate-900/30 rounded-[2.5rem] border border-white/5 hover:border-emerald-500/20 transition-all overflow-hidden"
            >
              <div className="p-10">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-slate-400 leading-relaxed mb-8 line-clamp-3">
                  {blog.intro}
                </p>
                <div className="flex items-center text-emerald-500 font-bold text-sm uppercase tracking-widest gap-2">
                  Lees meer 
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
