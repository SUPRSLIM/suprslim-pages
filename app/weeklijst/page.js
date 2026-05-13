import airtable from '@/lib/airtable';

export const dynamic = 'force-dynamic';

async function getWeeklijst() {
  try {
    const records = await airtable('Slimme Weeklijsten').select({
      maxRecords: 1,
      filterByFormula: "{Status} = 'Gereed'"
    }).firstPage();
    
    console.log('Airtable Records Found:', records.length);

    const record = records[0];
    if (!record) {
      console.log('No record found with Status = Gereed');
      return null;
    }

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
    description: `Jouw overzicht voor deze week: gezonde routines, een rustige boodschappenlijst en simpele bespaartips.`,
  };
}

export default async function WeeklijstPage() {
  const data = await getWeeklijst();

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f6f2]">
        <p className="text-[#6a7a6e]">Weeklijst niet gevonden.</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8f6f2] text-[#3d4a40] p-6 md:p-20">
      <div className="max-w-6xl mx-auto">
        <header className="mb-24 text-center">
          <div className="inline-block px-5 py-2 bg-primary/10 text-primary rounded-full text-[10px] font-bold uppercase tracking-widest mb-8">
            Jouw week in balans
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">{data.title}</h1>
          <div className="flex justify-center gap-6">
             <span className="px-5 py-2 bg-accent text-white rounded-2xl text-[10px] font-bold uppercase tracking-widest shadow-sm">Persoonlijk overzicht</span>
             <span className="px-5 py-2 bg-white border border-[#eeebe3] text-[#6a7a6e] rounded-2xl text-[10px] font-bold uppercase tracking-widest">Rust in de keuken</span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          {/* Menu Sections */}
          <div className="lg:col-span-2 space-y-20">
            <section>
              <h2 className="text-2xl font-bold text-[#3d4a40] mb-10 flex items-center gap-5">
                <span className="w-12 h-12 bg-primary/10 rounded-3xl flex items-center justify-center text-2xl shadow-sm border border-primary/10">🥞</span>
                Ontbijt
              </h2>
              <div className="bg-white p-12 rounded-[4rem] border border-[#eeebe3] whitespace-pre-wrap leading-relaxed text-[#6a7a6e] font-medium text-lg shadow-sm">
                {data.ontbijt}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#3d4a40] mb-10 flex items-center gap-5">
                <span className="w-12 h-12 bg-primary/10 rounded-3xl flex items-center justify-center text-2xl shadow-sm border border-primary/10">🥗</span>
                Lunch
              </h2>
              <div className="bg-white p-12 rounded-[4rem] border border-[#eeebe3] whitespace-pre-wrap leading-relaxed text-[#6a7a6e] font-medium text-lg shadow-sm">
                {data.lunch}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#3d4a40] mb-10 flex items-center gap-5">
                <span className="w-12 h-12 bg-primary/10 rounded-3xl flex items-center justify-center text-2xl shadow-sm border border-primary/10">🍲</span>
                Avondeten
              </h2>
              <div className="bg-white p-12 rounded-[4rem] border border-[#eeebe3] whitespace-pre-wrap leading-relaxed text-[#6a7a6e] font-medium text-lg shadow-sm">
                {data.avondeten}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-16">
            <section className="bg-primary p-12 rounded-[4rem] shadow-xl shadow-primary/10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-4 text-white">
                 <span className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-2xl">🛒</span>
                 Boodschappen
              </h2>
              <div className="leading-relaxed font-semibold text-lg opacity-95">
                {data.boodschappen}
              </div>
            </section>

            <section className="bg-white p-10 rounded-[3.5rem] border border-[#eeebe3] shadow-sm">
              <h3 className="font-bold text-[#9ba99f] mb-6 uppercase text-[10px] tracking-widest">Tussendoor</h3>
              <p className="text-[#6a7a6e] font-medium leading-relaxed italic">{data.snacks}</p>
            </section>

            <section className="bg-white p-10 rounded-[3.5rem] border border-[#eeebe3] shadow-sm">
              <h3 className="font-bold text-[#9ba99f] mb-6 uppercase text-[10px] tracking-widest">Slimme prep</h3>
              <p className="text-[#6a7a6e] font-medium leading-relaxed">{data.prep}</p>
            </section>

            <section className="bg-accent/10 p-10 rounded-[3.5rem] border border-accent/20">
              <h3 className="font-bold text-[#3d4a40] mb-4 flex items-center gap-3">
                 <span className="text-2xl">💡</span> Bespaartips
              </h3>
              <p className="text-[#6a7a6e] text-sm font-medium leading-relaxed italic">{data.bespaartips}</p>
            </section>
          </div>
        </div>

        <footer className="mt-40 pt-20 border-t border-[#eeebe3] text-center text-[#9ba99f] text-[10px] font-bold uppercase tracking-[0.3em]">
          SUPRSLIM &bull; Een rustige routine voor je week &bull; {new Date().getFullYear()}
        </footer>
      </div>
    </main>
  );
}
