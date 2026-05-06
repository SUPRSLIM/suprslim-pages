import HorecaForm from '../components/HorecaForm';
import Image from 'next/image';

export const metadata = {
  title: "Horeca Engine | Slimmere Menu's & Hogere Marges | SUPRSLIM",
  description: "De SUPRSLIM Engine optimaliseert je horeca-concept met data-gedreven menu's, soeprotatie en slimme inkoopstrategieën.",
};

export default function HorecaPage() {
  return (
    <main className="min-h-screen bg-[#040d08] text-white">
      {/* Schema.org Service for SEO/GEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Horeca Menu Optimalisatie",
            "provider": {
              "@type": "Organization",
              "name": "SUPRSLIM"
            },
            "description": "Analyse en optimalisatie van menukaarten voor hogere marges en efficiëntere keukenprocessen.",
            "areaServed": "NL"
          })
        }}
      />
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-500/5 blur-[120px] rounded-full -z-10"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-block px-4 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-semibold mb-8 border border-emerald-500/20">
              SUPRSLIM B2B Engine
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight tracking-tight">
              Slimmere menu's. <br />
              <span className="text-emerald-500 italic">Hogere marges.</span>
            </h1>
            <p className="text-slate-400 text-xl md:text-2xl mb-12 leading-relaxed max-w-xl">
              De SUPRSLIM Engine analyseert je huidige menukaart, inkoop en operationele kaders om een optimaal maandconcept te genereren. 
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/5">
                   <span className="text-xl">📊</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Data-gedreven menu's</h3>
                  <p className="text-slate-500">Optimaliseer op basis van inkoopkosten en populaire smaken.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/5">
                   <span className="text-xl">🍲</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Subtiele Soeprotatie</h3>
                  <p className="text-slate-500">Verhoog je bonwaarde zonder de keuken te overbelasten.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <HorecaForm />
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 px-6 bg-slate-950/50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-sm font-bold text-slate-500 uppercase tracking-[0.3em] mb-12">Partners in Horeca Innovatie</h2>
          <div className="flex flex-wrap justify-center gap-16 opacity-40 grayscale contrast-125">
             {/* Logo placeholders */}
             <span className="text-2xl font-bold italic">La Cafetera</span>
             <span className="text-2xl font-bold">HANOS</span>
             <span className="text-2xl font-bold">Lightspeed</span>
             <span className="text-2xl font-bold">QR-Order</span>
          </div>
        </div>
      </section>
    </main>
  );
}
