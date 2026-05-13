import { getSocialContent } from '@/lib/airtable';
import Link from 'next/link';

export const metadata = {
  title: "Content Hub | SUPRSLIM",
  description: "Centraal dashboard voor Kirsten's content creatie.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function ContentDashboard({ searchParams }) {
  const { token } = await searchParams;
  
  // Simple Magic Link Token Check
  if (token !== 'kirsten_creative_hub_2026') {
    return (
      <main className="min-h-screen bg-[#f8f6f2] flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center bg-white p-12 rounded-[3rem] border border-[#eeebe3] shadow-sm">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl mx-auto mb-8">🔒</div>
          <h1 className="text-2xl font-bold text-[#3d4a40] mb-4">Toegang Beperkt</h1>
          <p className="text-[#6a7a6e] font-medium leading-relaxed mb-8">
            Deze pagina is alleen toegankelijk via een persoonlijke Magic Link. Neem contact op met de beheerder voor toegang.
          </p>
          <Link href="/" className="text-primary font-bold text-sm uppercase tracking-widest hover:text-accent transition-colors">
            ← Terug naar Home
          </Link>
        </div>
      </main>
    );
  }

  const tasks = await getSocialContent();

  return (
    <main className="min-h-screen bg-[#f8f6f2] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <div>
            <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
              Content Hub
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#3d4a40] tracking-tight">
              Kirsten's <span className="text-primary italic">Creatieve Studio.</span>
            </h1>
          </div>
          <div className="flex gap-4">
            <div className="px-6 py-3 bg-white border border-[#eeebe3] rounded-2xl font-bold text-xs uppercase tracking-widest text-[#3d4a40] shadow-sm">
              Status: {tasks.length} Opdrachten
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Task List */}
          <div className="lg:col-span-2 space-y-10">
            {tasks.map((task) => (
              <div key={task.id} className="bg-white rounded-[3rem] border border-[#eeebe3] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="p-10 md:p-16">
                  <div className="flex flex-wrap justify-between items-start gap-6 mb-12">
                    <div>
                      <span className={`px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                        task.status === 'Gereed' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                      }`}>
                        {task.status || 'In afwachting'}
                      </span>
                      <h2 className="text-3xl font-bold text-[#3d4a40] mt-6">{task.title}</h2>
                    </div>
                    <div className="px-5 py-2 bg-soft rounded-2xl border border-[#eeebe3] font-bold text-xs text-[#6a7a6e]">
                      {task.platform}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                      <div>
                        <h4 className="text-[10px] font-bold text-primary uppercase tracking-widest mb-4">De Hook</h4>
                        <p className="text-xl text-[#3d4a40] font-semibold italic">"{task.hook}"</p>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-bold text-primary uppercase tracking-widest mb-4">Script / Shotlijst</h4>
                        <p className="text-[#6a7a6e] leading-relaxed whitespace-pre-wrap font-medium">
                          {task.script}
                        </p>
                      </div>
                    </div>

                    <div className="bg-soft p-10 rounded-[2.5rem] border border-[#eeebe3]">
                      <h4 className="text-[10px] font-bold text-accent uppercase tracking-widest mb-6">Social Caption</h4>
                      <p className="text-[#6a7a6e] text-sm leading-relaxed font-medium">
                        {task.caption}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* AI Feedback Section */}
                <div className="bg-[#3d4a40] p-10 md:p-12 text-white">
                   <div className="flex items-center gap-4 mb-6">
                     <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary text-xs">🤖</div>
                     <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-70">Agent Feedback & Strategie</h4>
                   </div>
                   <p className="text-white/80 text-sm leading-relaxed italic font-medium">
                     {task.feedback}
                   </p>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar / Stats */}
          <div className="space-y-12">
            <div className="bg-white p-12 rounded-[3.5rem] border border-[#eeebe3] shadow-sm">
              <h3 className="text-xl font-bold text-[#3d4a40] mb-8">Productie Tips</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="text-primary font-bold">01.</span>
                  <p className="text-sm text-[#6a7a6e] font-medium leading-relaxed">Houd het licht en rustig. Gebruik natuurlijk daglicht waar mogelijk.</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-bold">02.</span>
                  <p className="text-sm text-[#6a7a6e] font-medium leading-relaxed">Focus op de "simpelheid". Laat zien dat het écht weinig tijd kost.</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-bold">03.</span>
                  <p className="text-sm text-[#6a7a6e] font-medium leading-relaxed">De eerste 3 seconden (de hook) zijn cruciaal. Maak ze pakkend!</p>
                </li>
              </ul>
            </div>

            <div className="bg-primary p-12 rounded-[3.5rem] text-white shadow-xl shadow-primary/10">
               <h3 className="text-xl font-bold mb-6 italic">Klaar met filmen?</h3>
               <p className="text-white/80 text-sm mb-10 font-medium leading-relaxed">
                 Upload je beelden direct in de AI-editor en plaats de link in Airtable. De rest gaat vanzelf.
               </p>
               <button className="w-full py-4 bg-white text-primary font-bold rounded-2xl hover:bg-accent hover:text-white transition-all shadow-sm">
                 Ga naar Editor →
               </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
