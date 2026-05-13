import airtable from '@/lib/airtable';

export const metadata = {
  robots: { index: false, follow: false },
};

async function getProductionContent() {
  const socialRecords = await airtable('ACTIEVE - Social Content').select({
    filterByFormula: "OR({Status} = 'Publicatie akkoord', {Status} = 'Bezig')",
  }).all();

  return socialRecords.map(r => ({
    id: r.id,
    title: r.get('Titel'),
    platform: r.get('Platform'),
    hook: r.get('Hook'),
    script: r.get('Script'),
    status: r.get('Status'),
  }));
}

export default async function TeamDashboard({ searchParams }) {
  const { token } = await searchParams;
  const authorizedTokens = ['kirsten_creative_hub_2026', 'lizzy_lifestyle_hub_2026', 'sander_boss_mode_2026'];

  if (!authorizedTokens.includes(token)) {
    return <div className="p-20 text-center">Toegang Beperkt.</div>;
  }

  const tasks = await getProductionContent();

  return (
    <main className="min-h-screen bg-[#f8f6f2] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <div className="inline-block px-4 py-1.5 bg-accent/10 text-accent border border-accent/20 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
              Productie Monitor
            </div>
            <h1 className="text-5xl font-bold text-[#3d4a40]">
              Team <span className="text-accent italic">Aan de Bak.</span>
            </h1>
            <p className="text-[#6a7a6e] mt-4 font-medium">Overzicht van opnames voor Kirsten en vlogs voor Lizzy.</p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Kirsten's Video Section */}
          <section className="space-y-8">
            <h2 className="text-xl font-bold text-[#3d4a40] flex items-center gap-3">
              <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm">📸</span>
              Kirsten: Film & Edit
            </h2>
            {tasks.filter(t => t.platform !== 'Vlog').map(task => (
              <div key={task.id} className="bg-white p-10 rounded-[3rem] border border-[#eeebe3] shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 px-6 py-2 bg-primary/10 text-primary font-bold text-[10px] uppercase tracking-widest rounded-bl-2xl">
                  {task.platform}
                </div>
                <h3 className="text-xl font-bold text-[#3d4a40] mb-6">{task.title}</h3>
                
                <div className="space-y-6">
                  <div className="bg-[#f8f6f2] p-6 rounded-2xl border border-[#eeebe3]">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-2">The Hook:</span>
                    <p className="text-[#3d4a40] italic font-medium">"{task.hook}"</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[#6a7a6e] uppercase tracking-widest block mb-2">Script / Briefing:</span>
                    <p className="text-[#6a7a6e] text-sm leading-relaxed whitespace-pre-wrap">{task.script}</p>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* Lizzy's Vlog Section */}
          <section className="space-y-8">
            <h2 className="text-xl font-bold text-[#3d4a40] flex items-center gap-3">
              <span className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm">🤳</span>
              Lizzy: Lifestyle Vlogs
            </h2>
            <div className="bg-white/50 p-10 rounded-[3rem] border border-dashed border-[#eeebe3] text-center">
               <p className="text-[#6a7a6e] font-medium italic">Vlogs worden hier zichtbaar zodra de planning in Airtable is geactiveerd.</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
