import { getMenusByStatus } from '@/lib/airtable';
import airtable from '@/lib/airtable';
import Link from 'next/link';
import ClientUpdateButton from '../components/ClientUpdateButton';
import GenerateButton from '../components/GenerateButton';

export const metadata = {
  robots: { index: false, follow: false },
};

export default async function KirstenDashboard({ searchParams }) {
  const { token } = await searchParams;
  
  if (token !== 'kirsten_creative_hub_2026') {
    return <div className="p-20 text-center">Toegang Beperkt.</div>;
  }

  // Kirsten keurt menu's die de AI heeft klaargezet (AI output klaar)
  const pendingMenus = await getMenusByStatus('AI output klaar');

  return (
    <main className="min-h-screen bg-[#f8f6f2] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <header className="mb-16">
          <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
            Review Station
          </div>
          <h1 className="text-5xl font-bold text-[#3d4a40]">
            Kirsten's <span className="text-primary italic">Proeverij.</span>
          </h1>
          <p className="text-[#6a7a6e] mt-4 font-medium">Review de AI-voorstellen en stuur ze door naar Sander voor finale check.</p>
          <div className="mt-8">
            <GenerateButton token={token} />
          </div>
        </header>

        <div className="space-y-8">
          {pendingMenus.length === 0 ? (
            <div className="bg-white p-20 rounded-[3rem] border border-[#eeebe3] text-center">
              <span className="text-4xl mb-6 block">✨</span>
              <p className="text-[#6a7a6e] font-medium">Alle menu's zijn gekeurd. Tijd voor koffie!</p>
            </div>
          ) : (
            pendingMenus.map((menu) => (
              <div key={menu.id} className="bg-white p-12 rounded-[3rem] border border-[#eeebe3] shadow-sm flex flex-col md:flex-row justify-between items-center gap-10">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#3d4a40] mb-2">{menu.title}</h3>
                  <div className="flex gap-4 text-xs font-bold text-[#6a7a6e] uppercase tracking-widest">
                    <span>{menu.goal}</span>
                    <span className="text-primary">•</span>
                    <span>{menu.kcal} kcal</span>
                  </div>
                  <p className="mt-6 text-[#6a7a6e] text-sm leading-relaxed line-clamp-2">
                    {menu.bespaartips}
                  </p>
                </div>
                <ClientUpdateButton 
                  recordId={menu.id} 
                  table="Slimme Weeklijsten"
                  newStatus="Goedgekeurd"
                  token={token}
                  label="Akkoord & Naar Sander →"
                  className="bg-primary hover:bg-accent text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-lg shadow-primary/20"
                />
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
