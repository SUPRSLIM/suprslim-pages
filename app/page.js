import LeadForm from './components/LeadForm';
import airtable from '@/lib/airtable';
import Image from 'next/image';

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

export const metadata = {
  title: "SUPRSLIM | Nooit meer bedenken wat je moet eten",
  description: "Ontvang gratis weekmenu's met boodschappenlijsten. Gezond, simpel en betaalbaar eten voor drukke gezinnen.",
};

export default async function Home() {
  const menu = await getFeaturedWeekmenu();

  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      {/* Schema.org Organization for SEO/GEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SUPRSLIM",
            "url": "https://suprslim.nl",
            "logo": "https://suprslim.nl/logo.png",
            "description": "Slim koken, slim inkopen, gezond eten zonder gedoe.",
            "brand": "SUPRSLIM"
          })
        }}
      />
      {/* Hero Section */}
      <section id="download" className="w-full py-32 px-6 bg-gradient-to-b from-[#040d08] to-[#0a1f14] text-center relative overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent -z-10"></div>
        
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-semibold mb-8 border border-emerald-500/20">
            Gratis SUPRSLIM weekmenu
          </div>
          <h1 className="text-5xl md:text-8xl font-extrabold text-white mb-8 leading-[1.1] tracking-tight">
            Nooit meer bedenken wat je <span className="text-emerald-500 underline underline-offset-8 decoration-emerald-500/30">deze week</span> moet eten.
          </h1>
          <p className="text-slate-400 text-xl md:text-2xl mb-14 max-w-2xl mx-auto leading-relaxed">
            Speciaal voor drukke gezinnen: ontvang een simpel, gezond en betaalbaar weekmenu met boodschappenlijst.
          </p>
          
          <LeadForm />
          
          <p className="text-slate-500 text-sm mt-8 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
            Gratis download. Geen ingewikkelde diëten. Gewoon slimmer eten.
          </p>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="w-full py-32 px-6 bg-[#040d08]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group flex flex-col bg-slate-900/30 rounded-[2.5rem] border border-white/5 hover:border-emerald-500/20 transition-all overflow-hidden">
            <div className="relative h-64 w-full">
              <Image src="/cooking.png" alt="Gezond koken" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
            </div>
            <div className="p-10 -mt-8 relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">Gezond zonder gedoe</h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                Geen ingewikkelde recepten of dure producten. Gewoon makkelijke maaltijden voor een drukke week.
              </p>
            </div>
          </div>

          <div className="group flex flex-col bg-slate-900/30 rounded-[2.5rem] border border-white/5 hover:border-emerald-500/20 transition-all overflow-hidden">
            <div className="relative h-64 w-full">
              <Image src="/shopping.png" alt="Slim boodschappen doen" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
            </div>
            <div className="p-10 -mt-8 relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">Slim boodschappen doen</h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                Met een duidelijke boodschappenlijst koop je gerichter in en voorkom je onnodige impulsaankopen.
              </p>
            </div>
          </div>

          <div className="group flex flex-col bg-slate-900/30 rounded-[2.5rem] border border-white/5 hover:border-emerald-500/20 transition-all overflow-hidden">
            <div className="relative h-64 w-full">
              <Image src="/peace.png" alt="Minder keuzestress" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
            </div>
            <div className="p-10 -mt-8 relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">Minder keuzestress</h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                Je weet vooraf wat je eet. Dat geeft rust, structuur en meer controle over je week.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Airtable Live Component */}
      <section className="w-full py-32 px-6 bg-gradient-to-b from-[#040d08] to-slate-950">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Wat krijg je gratis?</h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Een 5-daags SUPRSLIM weekmenu met ontbijt, lunch, diner, snacks en boodschappenlijst.
          </p>
        </div>

        {menu && (
          <div className="max-w-md mx-auto group">
            <div className="p-12 bg-slate-900 rounded-[3rem] border border-orange-500/20 shadow-2xl shadow-orange-500/5 group-hover:border-orange-500/40 transition-all">
              <div className="flex justify-between items-start mb-10">
                <div>
                  <h4 className="text-xs font-bold text-orange-400 uppercase tracking-[0.25em] mb-3">Live uit Airtable</h4>
                  <h3 className="text-4xl font-bold text-white tracking-tight">{menu.name}</h3>
                </div>
                <div className="text-right">
                  <span className="text-4xl font-black text-white">{menu.kcal}</span>
                  <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] mt-1 font-bold">kcal/dag</p>
                </div>
              </div>
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3 text-slate-300">
                   <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                   <span>Geselecteerd voor: {menu.goal}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                   <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                   <span>5 Dagen compleet menu</span>
                </div>
              </div>
              <button className="w-full py-5 bg-orange-600 rounded-2xl font-bold text-white hover:bg-orange-500 transition-all shadow-xl shadow-orange-600/20 active:scale-[0.98]">
                Download direct
              </button>
            </div>
          </div>
        )}
      </section>

      <footer className="w-full py-20 px-6 text-center border-t border-white/5 text-slate-600 text-sm">
        <div className="flex justify-center gap-8 mb-8">
          <a href="#" className="hover:text-emerald-500 transition-colors">Instagram</a>
          <a href="#" className="hover:text-emerald-500 transition-colors">TikTok</a>
          <a href="#" className="hover:text-emerald-500 transition-colors">Contact</a>
        </div>
        <p>SUPRSLIM &copy; {new Date().getFullYear()} &mdash; Slim inkopen, slim voorbereiden, gezond eten zonder gedoe.</p>
      </footer>
    </div>
  );
}
