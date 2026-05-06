import LeadForm from './components/LeadForm';
import airtable from '@/lib/airtable';

async function getFeaturedWeekmenu() {
  try {
    const records = await airtable('Weekmenu\'s').select({
      maxRecords: 1,
      filterByFormula: "{Status} = 'Genereren'"
    }).firstPage();
    
    return records.map(record => ({
      id: record.id,
      name: record.get('Naam weekmenu'),
      goal: record.get('Doel'),
      kcal: record.get('kcal per dag'),
    }))[0];
  } catch (error) {
    return null;
  }
}

export default async function Home() {
  const menu = await getFeaturedWeekmenu();

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section id="download" className="w-full py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-950 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent -z-10"></div>
        
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-semibold mb-6">
            Gratis SUPRSLIM weekmenu
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Nooit meer bedenken wat je <span className="text-emerald-500 underline decoration-emerald-500/30">deze week</span> moet eten.
          </h1>
          <p className="text-slate-400 text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Speciaal voor drukke gezinnen: ontvang een simpel, gezond en betaalbaar weekmenu met boodschappenlijst.
          </p>
          
          <LeadForm />
          
          <p className="text-slate-500 text-sm mt-6">
            Gratis download. Geen ingewikkelde diëten. Gewoon slimmer eten.
          </p>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="w-full py-24 px-6 bg-[#040d08]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-10 bg-slate-900/30 rounded-3xl border border-white/5 hover:border-emerald-500/20 transition-all">
            <h3 className="text-2xl font-bold text-white mb-4">Gezond zonder gedoe</h3>
            <p className="text-slate-400 leading-relaxed text-lg">
              Geen ingewikkelde recepten of dure producten. Gewoon makkelijke maaltijden voor een drukke week.
            </p>
          </div>
          <div className="p-10 bg-slate-900/30 rounded-3xl border border-white/5 hover:border-emerald-500/20 transition-all">
            <h3 className="text-2xl font-bold text-white mb-4">Slim boodschappen doen</h3>
            <p className="text-slate-400 leading-relaxed text-lg">
              Met een duidelijke boodschappenlijst koop je gerichter in en voorkom je onnodige impulsaankopen.
            </p>
          </div>
          <div className="p-10 bg-slate-900/30 rounded-3xl border border-white/5 hover:border-emerald-500/20 transition-all">
            <h3 className="text-2xl font-bold text-white mb-4">Minder keuzestress</h3>
            <p className="text-slate-400 leading-relaxed text-lg">
              Je weet vooraf wat je eet. Dat geeft rust, structuur en meer controle over je week.
            </p>
          </div>
        </div>
      </section>

      {/* Airtable Live Component */}
      <section className="w-full py-24 px-6 bg-slate-900/30">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Wat krijg je gratis?</h2>
          <p className="text-slate-400 text-lg">Een 5-daags SUPRSLIM weekmenu met ontbijt, lunch, diner, snacks en boodschappenlijst.</p>
        </div>

        {menu && (
          <div className="max-w-md mx-auto">
            <div className="p-10 bg-slate-900 rounded-[2.5rem] border border-orange-500/30 shadow-2xl shadow-orange-500/10">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h4 className="text-xs font-bold text-orange-400 uppercase tracking-[0.2em] mb-2">Featured Menu</h4>
                  <h3 className="text-3xl font-bold text-white">{menu.name}</h3>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-black text-white">{menu.kcal}</span>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest">kcal/dag</p>
                </div>
              </div>
              <p className="text-slate-400 mb-8 italic">Perfect voor: {menu.goal}</p>
              <button className="w-full py-4 bg-orange-600 rounded-2xl font-bold text-white hover:bg-orange-500 transition-all">
                Download direct
              </button>
            </div>
          </div>
        )}
      </section>

      <footer className="w-full py-12 px-6 text-center border-t border-white/5 text-slate-600 text-sm">
        SUPRSLIM — slim inkopen, slim voorbereiden, gezond eten zonder gedoe.
      </footer>
    </div>
  );
}
