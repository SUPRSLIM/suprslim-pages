import airtable from '@/lib/airtable';

export const metadata = {
  title: "Rules Engine | SUPRSLIM Central Intelligence",
  robots: { index: false, follow: false },
};

async function getRules() {
  const records = await airtable('Project Context SUPRSLIM').select({
    sort: [{ field: 'Prioriteit', direction: 'desc' }]
  }).all();

  return records.map(r => ({
    id: r.id,
    name: r.get('Context naam'),
    type: r.get('Type'),
    content: r.get('Inhoud'),
    priority: r.get('Prioriteit'),
    status: r.get('Status')
  }));
}

export default async function RulesPage({ searchParams }) {
  const { token } = await searchParams;
  if (token !== 'sander_boss_mode_2026') {
    return <div className="p-20 text-center text-red-500 font-bold uppercase tracking-widest">Toegang Beperkt.</div>;
  }

  const rules = await getRules();

  return (
    <main className="min-h-screen bg-[#1a1c1e] text-white py-24 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="mb-20">
          <div className="inline-block px-4 py-1.5 bg-primary/20 text-primary border border-primary/30 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
            Central Intelligence Layer
          </div>
          <h1 className="text-6xl font-bold tracking-tighter mb-6">
            The <span className="text-primary italic">Rules Engine.</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl font-medium leading-relaxed">
            Beheer de centrale logica van SUPRSLIM. Elke regel hieronder is een directe instructie voor de AI-medewerker.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6">
          {rules.map((rule) => (
            <div key={rule.id} className="group bg-[#25282c] p-10 rounded-[2.5rem] border border-white/5 hover:border-primary/30 transition-all duration-500 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity">
                <span className="text-8xl font-black">{rule.priority}</span>
              </div>
              
              <div className="flex flex-col md:flex-row gap-10 items-start">
                <div className="w-full md:w-1/4">
                  <div className="inline-block px-3 py-1 bg-white/5 text-white/40 border border-white/10 rounded-lg text-[10px] font-bold uppercase tracking-widest mb-4">
                    {rule.type}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{rule.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${rule.status === 'Actief' ? 'bg-emerald-500' : 'bg-red-500'}`}></span>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{rule.status}</span>
                  </div>
                </div>

                <div className="flex-1">
                   <p className="text-slate-400 leading-relaxed font-medium text-lg bg-black/20 p-8 rounded-3xl border border-white/5">
                     {rule.content}
                   </p>
                   <div className="mt-8 flex gap-4">
                     <button className="px-6 py-2 bg-white/5 hover:bg-white/10 text-white/60 rounded-xl text-xs font-bold transition-all border border-white/10">Bewerken</button>
                     <button className="px-6 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-xl text-xs font-bold transition-all border border-primary/20">Test met AI</button>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <footer className="mt-20 pt-10 border-t border-white/5 flex justify-between items-center text-slate-500">
          <p className="text-sm">Totaal actieve regels: {rules.length}</p>
          <button className="bg-primary text-white px-10 py-4 rounded-2xl font-bold shadow-2xl shadow-primary/20 hover:scale-105 transition-all">
            + Nieuwe Regel Toevoegen
          </button>
        </footer>
      </div>
    </main>
  );
}
