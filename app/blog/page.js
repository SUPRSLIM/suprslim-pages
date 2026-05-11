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
    console.error('Airtable Error [getBlogs]:', error.message || error);
    return [];
  }
}

export const metadata = {
  title: "Inspiratie & Tips voor een Rustige Week | SUPRSLIM",
  description: "Ontdek simpele gewoontes, gezonde routines en manieren om meer rust te creëren in je dagelijkse voeding.",
};

export default async function BlogIndex() {
  const blogs = await getBlogs();

  return (
    <main className="min-h-screen bg-[#f8f6f2] py-32 px-6">
      {/* Schema.org Blog for SEO/GEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "SUPRSLIM Lifestyle Blog",
            "description": "Een verzameling van rustige routines en slimme eetgewoontes.",
            "publisher": {
              "@type": "Organization",
              "name": "SUPRSLIM"
            }
          })
        }}
      />
      
      <div className="max-w-7xl mx-auto">
        <header className="mb-32 text-center">
          <div className="inline-block px-5 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-[10px] font-bold uppercase tracking-widest mb-10">
            Inspiratie & Begeleiding
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-[#3d4a40] mb-10 tracking-tight leading-[1.1]">
            Rust vinden in je <br /> <span className="text-primary italic">dagelijkse routines.</span>
          </h1>
          <p className="text-[#6a7a6e] text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            Lees meer over de kunst van het weglaten, slimme voorbereiding en hoe je meer mentale ruimte creëert rondom eten.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {blogs.map((blog, index) => (
            <Link 
              key={blog.id} 
              href={`/blog/${blog.id}`}
              className={`group flex flex-col bg-white rounded-[3.5rem] border border-[#eeebe3] hover:border-primary/30 transition-all p-2 shadow-sm hover:shadow-xl hover:shadow-[#95b89b]/5 ${index % 2 === 0 ? 'md:mt-8' : ''}`}
            >
              <div className="p-10">
                <h3 className="text-2xl font-bold text-[#3d4a40] mb-6 group-hover:text-primary transition-colors leading-tight">
                  {blog.title}
                </h3>
                <p className="text-[#6a7a6e] leading-relaxed mb-10 line-clamp-3 font-medium">
                  {blog.intro}
                </p>
                <div className="flex items-center text-accent font-bold text-xs uppercase tracking-widest gap-2">
                  Lees het verhaal
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Vlogs & Reels Section */}
        <section className="mt-48">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold text-[#3d4a40] mb-8 tracking-tight">
                Bekijk onze <br /> <span className="text-primary italic">dagelijkse vlogs.</span>
              </h2>
              <p className="text-[#6a7a6e] text-lg font-medium leading-relaxed">
                Volg ons op TikTok en Instagram voor snelle bespaartips, kijkjes achter de schermen en simpele recepten.
              </p>
            </div>
            <div className="flex gap-4">
               <div className="px-6 py-3 bg-white border border-[#eeebe3] rounded-2xl font-bold text-xs uppercase tracking-widest text-[#3d4a40]">@SUPRSLIM</div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group relative aspect-[9/16] bg-[#eeebe3] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                   <p className="text-white font-bold text-sm">Bekijk op Instagram</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform">
                     ▶
                   </div>
                </div>
                {/* Placeholder for video thumbnail */}
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10"></div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
