import airtable from '@/lib/airtable';
import Link from 'next/link';

async function getBlogPost(id) {
  try {
    const record = await airtable('Blogs').find(id);
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
    description: post.intro || `Lees meer over ${post.title} op SUPRSLIM.`,
    keywords: post.keyword,
    openGraph: {
      title: post.title,
      description: post.intro,
      type: 'article',
    },
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params; // slug here is the Airtable Record ID
  const post = await getBlogPost(slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#040d08]">
        <p className="text-slate-400">Blogbericht niet gevonden.</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#040d08] py-24 px-6">
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
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://suprslim.nl/blog/${post.id}`
            }
          })
        }}
      />
      <article className="max-w-3xl mx-auto">
        <header className="mb-16">
          <Link 
            href="/blog" 
            className="text-emerald-500 font-bold text-sm uppercase tracking-widest mb-8 inline-block hover:text-emerald-400 transition-colors"
          >
            ← Terug naar overzicht
          </Link>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight leading-tight">
            {post.title}
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed italic border-l-4 border-emerald-500 pl-6">
            {post.intro}
          </p>
        </header>

        <div className="prose prose-invert prose-emerald max-w-none">
          {post.content ? (
            <div className="text-slate-400 text-lg leading-relaxed space-y-6 whitespace-pre-wrap">
              {post.content}
            </div>
          ) : (
            <p className="text-slate-500 italic">De inhoud van dit artikel wordt momenteel gegenereerd door onze AI-specialisten...</p>
          )}
        </div>

        <footer className="mt-20 pt-10 border-t border-white/5">
          <div className="bg-slate-900/50 p-10 rounded-[2.5rem] border border-emerald-500/20 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Klaar om slimmer te gaan eten?</h3>
            <p className="text-slate-400 mb-8">
              Ontvang onze gratis weeklijst met boodschappenhulp en bespaartips direct in je inbox.
            </p>
            <Link 
              href="/#download" 
              className="inline-block px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-2xl transition-all shadow-xl shadow-orange-600/20 active:scale-95"
            >
              Ja, stuur mij de weeklijst
            </Link>
          </div>
        </footer>
      </article>
    </main>
  );
}
