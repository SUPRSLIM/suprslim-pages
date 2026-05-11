import LeadForm from './components/LeadForm';
import { getFeaturedWeekmenu, getBespaartips } from '@/lib/airtable';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "SUPRSLIM | Lichter eten. Rustiger plannen.",
  description: "Breng balans in je eetweek met een simpele routine, gezonde recepten en slimme boodschappenlijsten. Geen stress, gewoon overzicht.",
};

export default async function Home() {
  const menu = await getFeaturedWeekmenu();
  const tips = await getBespaartips();

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
      <section id="download" className="w-full py-48 md:py-64 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10" style={{ backgroundImage: 'linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>
        
        <div className="max-w-5xl mx-auto reveal">
          <div className="inline-block px-6 py-2.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-[10px] font-bold uppercase tracking-[0.25em] mb-12 animate-float">
            Slimmer plannen. Lichter leven.
          </div>
          <h1 className="text-5xl md:text-8xl font-bold text-foreground mb-12 leading-[1.05] tracking-tight">
            Gezond eten. <br />
            <span className="text-primary italic">Zonder het gedoe.</span>
          </h1>
          <p className="text-[#6a7a6e] text-xl md:text-2xl mb-20 max-w-2xl mx-auto leading-relaxed font-medium">
            Wij geloven dat een gezonde routine niet ingewikkeld hoeft te zijn. Ontvang gratis slimme weeklijsten die rust in je keuken én je hoofd brengen.
          </p>
          
          <LeadForm />
          
          <div className="mt-24 flex flex-wrap justify-center gap-16 text-[#9ba99f] font-bold text-[10px] uppercase tracking-[0.3em]">
            <span className="flex items-center gap-3">Kirsten Approved</span>
            <span className="flex items-center gap-3">Budgetbewust</span>
            <span className="flex items-center gap-3">100% Praktisch</span>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="w-full py-48 px-6 bg-soft">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-20 items-start">
          <div className="group flex flex-col glass-card rounded-[4rem] transition-all p-3 shadow-sm reveal" style={{ animationDelay: '0.2s' }}>
            <div className="relative h-80 w-full rounded-[3.5rem] overflow-hidden">
              <Image src="/cooking.png" alt="Gezond koken" fill className="object-cover group-hover:scale-105 transition-transform duration-1000 opacity-95" />
            </div>
            <div className="p-12">
              <h3 className="text-2xl font-bold text-foreground mb-6 tracking-tight">Echt haalbaar</h3>
              <p className="text-[#6a7a6e] leading-relaxed text-lg font-medium">
                Geen exotische ingrediënten of uren in de keuken. Gewoon goede maaltijden die passen in een drukke werkweek.
              </p>
            </div>
          </div>

          <div className="group flex flex-col glass-card rounded-[4rem] transition-all p-3 shadow-sm lg:mt-24 reveal" style={{ animationDelay: '0.4s' }}>
            <div className="relative h-80 w-full rounded-[3.5rem] overflow-hidden">
              <Image src="/shopping.png" alt="Slim boodschappen doen" fill className="object-cover group-hover:scale-105 transition-transform duration-1000 opacity-95" />
            </div>
            <div className="p-12">
              <h3 className="text-2xl font-bold text-foreground mb-6 tracking-tight">Slimme boodschappen</h3>
              <p className="text-[#6a7a6e] leading-relaxed text-lg font-medium">
                Onze lijsten zijn geoptimaliseerd voor je budget. We laten je zien hoe je bespaart zonder in te leveren op kwaliteit.
              </p>
            </div>
          </div>

          <div className="group flex flex-col glass-card rounded-[4rem] transition-all p-3 shadow-sm lg:mt-12 reveal" style={{ animationDelay: '0.6s' }}>
            <div className="relative h-80 w-full rounded-[3.5rem] overflow-hidden">
              <Image src="/peace.png" alt="Minder keuzestress" fill className="object-cover group-hover:scale-105 transition-transform duration-1000 opacity-95" />
            </div>
            <div className="p-12">
              <h3 className="text-2xl font-bold text-foreground mb-6 tracking-tight">Mentale rust</h3>
              <p className="text-[#6a7a6e] leading-relaxed text-lg font-medium">
                Stop met de dagelijkse "wat eten we?"-stress. Wij doen het denkwerk, jij geniet van de resultaten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Quality Section (Kirsten Focus) */}
      <section className="w-full py-48 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="relative reveal">
            <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>
            <div className="relative h-[600px] w-full rounded-[5rem] overflow-hidden border-2 border-white shadow-2xl">
              <Image src="/logo.png" alt="SUPRSLIM kwaliteitscontrole" fill className="object-contain p-16 grayscale-[0.2] hover:grayscale-0 transition-all duration-1000 bg-[#eef2ea]" />
              <div className="absolute bottom-12 left-12 right-12 bg-white/80 backdrop-blur-xl p-8 rounded-[3rem] border border-white/50">
                 <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">Kwaliteitscontrole</p>
                 <p className="text-[#3d4a40] text-lg font-medium italic leading-relaxed">
                   "Elke weeklijst gaat persoonlijk door mijn handen. Als het niet simpel, gezond én budgetbewust is, komt het niet op SUPRSLIM."
                 </p>
              </div>
            </div>
          </div>
          <div className="reveal" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-10 tracking-tight leading-tight">
              Met zorg <span className="text-primary italic">geselecteerd.</span>
            </h2>
            <p className="text-[#6a7a6e] text-xl mb-12 leading-relaxed font-medium">
              Achter elke weeklijst zit een proces van zorgvuldige selectie. We kijken niet alleen naar de calorieën, maar ook naar de haalbaarheid in een druk gezinsleven en de prijzen in de supermarkt.
            </p>
            <ul className="space-y-8">
              {[
                { icon: "✅", title: "Handmatig gecheckt", desc: "Geen random AI-output, maar door mensen geteste combinaties." },
                { icon: "💰", title: "Budgetvriendelijk", desc: "We gebruiken ingrediënten die op dat moment slim in te kopen zijn." },
                { icon: "⏱️", title: "Minimale prep", desc: "Maximale smaak met een voorbereidingstijd die écht klopt." }
              ].map((item, i) => (
                <li key={i} className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-soft rounded-2xl flex items-center justify-center flex-shrink-0 border border-[#eeebe3]">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-[#3d4a40] text-lg mb-1">{item.title}</h4>
                    <p className="text-[#6a7a6e] text-sm font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Bespaartips Section */}
      <section className="w-full py-48 px-6 bg-[#3d4a40] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] -mr-64 -mt-64"></div>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12 reveal">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-bold mb-10 tracking-tight leading-tight">
                Slim koken is <span className="text-primary italic">geld besparen.</span>
              </h2>
              <p className="text-white/70 text-xl font-medium leading-relaxed">
                Wij laten je zien hoe je je wekelijkse boodschappenkosten met wel 30% verlaagt zonder in te leveren op de kwaliteit van je eten.
              </p>
            </div>
            <Link href="/blog" className="px-10 py-5 bg-white text-[#3d4a40] font-bold rounded-[2rem] hover:bg-primary hover:text-white transition-all shadow-xl active:scale-95">
              Alle bespaartips
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {tips.length > 0 ? tips.map((tip, i) => (
              <div key={i} className="p-12 rounded-[4rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all reveal" style={{ animationDelay: `${0.2 * i}s` }}>
                <div className="text-4xl mb-8">{tip.icon}</div>
                <h3 className="text-2xl font-bold mb-6 tracking-tight">{tip.title}</h3>
                <p className="text-white/60 leading-relaxed font-medium line-clamp-3">{tip.desc}</p>
              </div>
            )) : (
              // Fallback if no tips in Airtable
              [
                { title: "Seizoensgebonden", desc: "Eet met de natuur mee. Goedkoper, verser en veel meer smaak.", icon: "🍎" },
                { title: "Slimme Prep", desc: "Voorkom impulsaankopen door precies te weten wat je nodig hebt.", icon: "📦" },
                { title: "No-Waste", desc: "Wij laten je zien hoe je elk ingrediënt optimaal benut deze week.", icon: "♻️" }
              ].map((tip, i) => (
                <div key={i} className="p-12 rounded-[4rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all reveal" style={{ animationDelay: `${0.2 * i}s` }}>
                  <div className="text-4xl mb-8">{tip.icon}</div>
                  <h3 className="text-2xl font-bold mb-6 tracking-tight">{tip.title}</h3>
                  <p className="text-white/60 leading-relaxed font-medium">{tip.desc}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Airtable Live Component */}
      <section className="w-full py-48 px-6 relative">
         <div className="max-w-4xl mx-auto text-center mb-32 reveal">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-10 tracking-tight">Begin met overzicht</h2>
          <p className="text-[#6a7a6e] text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-medium">
            Ontdek hoe een kleine verandering in je routine een groot verschil maakt in je energie en portemonnee.
          </p>
        </div>

        {menu && (
          <div className="max-w-xl mx-auto group reveal" style={{ animationDelay: '0.3s' }}>
            <div className="p-16 bg-soft rounded-[5rem] border border-[#eeebe3] shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-700 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-30"></div>
              
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
                <div>
                  <h4 className="text-[10px] font-bold text-primary uppercase tracking-[0.4em] mb-6">Gratis Preview</h4>
                  <h3 className="text-4xl md:text-5xl font-bold text-foreground tracking-tighter leading-tight">{menu.name}</h3>
                </div>
                <div className="bg-white px-8 py-6 rounded-[2.5rem] shadow-sm border border-slate-100 min-w-[140px] text-center">
                  <span className="text-4xl font-bold text-primary block">{menu.kcal}</span>
                  <p className="text-[10px] text-[#9ba99f] uppercase tracking-[0.2em] mt-3 font-bold">kcal/dag</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="flex items-center gap-5 text-[#6a7a6e] font-semibold">
                   <div className="w-12 h-12 bg-white rounded-3xl flex items-center justify-center shadow-sm border border-slate-100">🥗</div>
                   <span className="text-lg italic">{menu.goal}</span>
                </div>
                <div className="flex items-center gap-5 text-[#6a7a6e] font-semibold">
                   <div className="w-12 h-12 bg-white rounded-3xl flex items-center justify-center shadow-sm border border-slate-100">💰</div>
                   <span className="text-lg italic">Budget Focus</span>
                </div>
              </div>
              
              <button className="w-full py-6 bg-accent hover:bg-[#d89a52] text-white font-bold rounded-[2.5rem] transition-all shadow-xl shadow-accent/10 active:scale-[0.98] text-xl tracking-tight">
                Meld je aan voor de lijst
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
