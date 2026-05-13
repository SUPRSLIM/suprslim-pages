import airtable from '@/lib/airtable';
import Link from 'next/link';

async function getBlogPost(id) {
  try {
    const record = await airtable('ARCHIEF - Blogs').find(id);
    return {
      id: record.id,
      title: record.get('Blog titel'),
      intro: record.get('Intro'),
      content: record.get('Blog content'),
      keyword: record.get('Hoofd zoekwoord'),
    };
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) return { title: 'Blog niet gevonden' };

  return {
    title: `${post.title} | SUPRSLIM`,
    description: post.intro || `Inspiratie over ${post.title} op SUPRSLIM.`,
    keywords: post.keyword,
    openGraph: {
      title: post.title,
      description: post.intro,
      type: 'article',
    },
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params; 
  const post = await getBlogPost(slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f6f2]">
        <p className="text-[#6a7a6e]">Dit verhaal is momenteel niet beschikbaar.</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8f6f2] py-32 px-6">
      {/* Schema.org JSON-LD for SEO/GEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.intro,
            "author": {
              "@type": "Organization",
              "name": "SUPRSLIM"
            },
            "publisher": {
              "@type": "Organization",
              "name": "SUPRSLIM",
              "logo": {
                "@type": "ImageObject",
                "url": "https://suprslim.nl/logo.png"
              }
            }
          })
        }}
      />
      
      <article className="max-w-3xl mx-auto">
        <header className="mb-24">
          <Link 
            href="/blog" 
            className="text-primary font-bold text-xs uppercase tracking-widest mb-12 inline-block hover:text-accent transition-colors"
          >
            ← Terug naar inspiratie
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-[#3d4a40] mb-12 tracking-tight leading-[1.1]">
            {post.title}
          </h1>
          <p className="text-xl md:text-2xl text-[#6a7a6e] font-medium leading-relaxed italic border-l-2 border-accent/30 pl-8">
            {post.intro}
          </p>
        </header>

        <div className="prose prose-slate max-w-none">
          {post.content ? (
            <div className="text-[#3d4a40]/90 text-lg md:text-xl leading-[1.8] space-y-10 whitespace-pre-wrap font-medium">
              {post.content}
            </div>
          ) : (
            <p className="text-[#6a7a6e] italic">De inhoud van dit artikel wordt momenteel met zorg samengesteld...</p>
          )}
        </div>

        <footer className="mt-32 pt-20 border-t border-[#eeebe3]">
          <div className="bg-white p-12 md:p-20 rounded-[4rem] border border-[#eeebe3] text-center relative overflow-hidden shadow-sm">
            {/* Subtle brand signatuur detail */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full -mr-24 -mt-24 blur-3xl"></div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-[#3d4a40] mb-6">Breng meer rust in je week</h3>
            <p className="text-[#6a7a6e] mb-12 max-w-lg mx-auto font-medium text-lg">
              Schrijf je in voor onze gratis weeklijst en ontdek hoe eenvoudig gezond eten kan zijn.
            </p>
            <Link 
              href="/#download" 
              className="inline-block px-10 py-5 bg-accent hover:bg-[#d89a52] text-white font-bold rounded-[2rem] transition-all shadow-xl shadow-accent/10 active:scale-95"
            >
              Ja, stuur mij de weeklijst
            </Link>
          </div>
        </footer>
      </article>
    </main>
  );
}
