import airtable from '@/lib/airtable';

async function getWeeklijst() {
  try {
    const records = await airtable('Slimme Weeklijsten').select({
      maxRecords: 1,
      filterByFormula: "{Status} = 'Gereed'"
    }).firstPage();
    
    const record = records[0];
    if (!record) return null;

    return {
      title: record.get('Weeklijst titel'),
      ontbijt: record.get('Ontbijt'),
      lunch: record.get('Lunch'),
      avondeten: record.get('Avondeten'),
      snacks: record.get('Snacks'),
      prep: record.get('Prepmaaltijden'),
      boodschappen: record.get('Boodschappenlijst'),
      bespaartips: record.get('Bespaartips'),
    };
  } catch (error) {
    console.error('Error fetching weeklijst:', error);
    return null;
  }
}

export async function generateMetadata() {
  const data = await getWeeklijst();
  if (!data) return { title: 'Weeklijst niet gevonden' };

  return {
    title: `${data.title} | SUPRSLIM`,
    description: `Bekijk je persoonlijke SUPRSLIM weekmenu: gezonde recepten, een complete boodschappenlijst en slimme bespaartips.`,
  };
}

export default async function WeeklijstPage() {
  const data = await getWeeklijst();

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950">
        <p className="text-slate-400">Weeklijst niet gevonden.</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-12">
      {/* Schema.org Recipe/Menu for SEO/GEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Menu",
            "name": data.title,
            "description": "Een 5-daags gezond weekmenu met focus op soep en slim inkopen.",
            "provider": {
              "@type": "Organization",
              "name": "SUPRSLIM"
            }
          })
        }}
      />
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 border-b border-white/5 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{data.title}</h1>
          <div className="flex gap-4">
             <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-bold uppercase tracking-widest">Gratis Download</span>
             <span className="px-3 py-1 bg-slate-800 text-slate-400 rounded-full text-xs font-bold uppercase tracking-widest">5 Dagen</span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Menu Sections */}
          <div className="space-y-12">
            <section>
              <h2 className="text-xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center text-sm">🥞</span>
                Ontbijt
              </h2>
              <div className="bg-slate-900/50 p-6 rounded-3xl border border-white/5 whitespace-pre-wrap leading-relaxed text-slate-300">
                {data.ontbijt}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center text-sm">🥗</span>
                Lunch
              </h2>
              <div className="bg-slate-900/50 p-6 rounded-3xl border border-white/5 whitespace-pre-wrap leading-relaxed text-slate-300">
                {data.lunch}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center text-sm">🍲</span>
                Avondeten
              </h2>
              <div className="bg-slate-900/50 p-6 rounded-3xl border border-white/5 whitespace-pre-wrap leading-relaxed text-slate-300">
                {data.avondeten}
              </div>
            </section>
          </div>

          {/* Tips & List Sections */}
          <div className="space-y-12">
            <section className="bg-emerald-600/10 p-8 rounded-[2rem] border border-emerald-500/20 shadow-xl shadow-emerald-500/5">
              <h2 className="text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2">
                 <span className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center text-sm">🛒</span>
                 Boodschappenlijst
              </h2>
              <div className="text-slate-300 leading-relaxed">
                {data.boodschappen}
              </div>
            </section>

            <section className="bg-slate-900 p-8 rounded-[2rem] border border-white/5">
              <h3 className="font-bold text-white mb-4">Snacks</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{data.snacks}</p>
            </section>

            <section className="bg-slate-900 p-8 rounded-[2rem] border border-white/5">
              <h3 className="font-bold text-white mb-4">Prep-tips</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{data.prep}</p>
            </section>

            <section className="bg-green-500/5 p-8 rounded-[2rem] border border-green-500/20">
              <h3 className="font-bold text-green-400 mb-2">💡 Bespaartips</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{data.bespaartips}</p>
            </section>
          </div>
        </div>

        <footer className="mt-24 pt-12 border-t border-white/5 text-center text-slate-600 text-xs">
          SUPRSLIM &bull; Alle rechten voorbehouden &bull; Gebruik op eigen risico
        </footer>
      </div>
    </main>
  );
}
