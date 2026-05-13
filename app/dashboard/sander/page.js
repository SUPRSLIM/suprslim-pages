import { getMenusByStatus } from '@/lib/airtable';
import Link from 'next/link';
import ClientUpdateButton from '../components/ClientUpdateButton';

export const metadata = {
  robots: { index: false, follow: false },
};

export default async function SanderDashboard({ searchParams }) {
  const { token } = await searchParams;
  
  if (token !== 'sander_boss_mode_2026') {
    return <div className="p-20 text-center">Toegang Beperkt.</div>;
  }

  // Jij keurt menu's die Kirsten al heeft goedgekeurd (Goedgekeurd)
  const approvedByKirsten = await getMenusByStatus('Goedgekeurd');

  return (
    <main className="min-h-screen bg-[#3d4a40] py-24 px-6 text-white">
      <div className="max-w-5xl mx-auto">
        <header className="mb-20">
          <div className="inline-block px-4 py-1.5 bg-white/10 text-white border border-white/20 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
            Approval Cockpit
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            De <span className="text-primary italic">Finale Klap.</span>
          </h1>
          <p className="text-white/60 mt-6 text-xl font-medium max-w-xl">
            Hieronder zie je de menu's die door Kirsten zijn goedgekeurd. Na jouw akkoord gaat de communicatie naar het team direct de deur uit.
          </p>
        </header>

        <div className="space-y-10">
          {approvedByKirsten.length === 0 ? (
            <div className="bg-white/5 p-20 rounded-[4rem] border border-white/10 text-center">
              <span className="text-4xl mb-6 block">🕯️</span>
              <p className="text-white/60 font-medium italic">Wachten op groen licht van Kirsten...</p>
            </div>
          ) : (
            approvedByKirsten.map((menu) => (
              <div key={menu.id} className="bg-white/10 p-12 md:p-16 rounded-[4rem] border border-white/10 backdrop-blur-xl shadow-2xl flex flex-col md:flex-row justify-between items-center gap-12">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">Gereed voor publicatie</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">{menu.title}</h3>
                  <p className="text-white/60 text-lg leading-relaxed font-medium line-clamp-3">
                    {menu.bespaartips}
                  </p>
                </div>
                <div className="flex flex-col gap-4 w-full md:w-auto">
                  <ClientUpdateButton 
                    recordId={menu.id} 
                    table="Slimme Weeklijsten"
                    newStatus="Publicatie akkoord"
                    token={token}
                    label="ACCORDEER & PUBLICEER 🚀"
                    className="bg-emerald-600 hover:bg-emerald-500 text-white px-12 py-6 rounded-[2rem] font-bold text-lg transition-all shadow-2xl shadow-emerald-600/30 whitespace-nowrap"
                  />
                  <ClientUpdateButton 
                    recordId={menu.id} 
                    table="Slimme Weeklijsten"
                    newStatus="AI output klaar"
                    token={token}
                    label="Terug naar Kirsten (Aanpassen)"
                    className="bg-white/5 hover:bg-white/10 text-white/60 px-8 py-4 rounded-2xl font-bold text-xs transition-all border border-white/10"
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
