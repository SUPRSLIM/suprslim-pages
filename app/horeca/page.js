import HorecaForm from '../components/HorecaForm';
import Image from 'next/image';

export const metadata = {
  title: "Voor Ondernemers | Een Rustige Keuken | SUPRSLIM",
  description: "Wij begeleiden horecaondernemers bij het vereenvoudigen van hun aanbod voor een rustigere keuken en meer persoonlijke balans.",
};

export default function HorecaPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f2] text-[#3d4a40]">
      {/* Schema.org Service for SEO/GEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Horeca Lifestyle Begeleiding",
            "provider": {
              "@type": "Organization",
              "name": "SUPRSLIM"
            },
            "description": "Begeleiding voor horecaondernemers bij het vereenvoudigen van hun aanbod en operatie.",
            "areaServed": "NL"
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-block px-5 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-bold uppercase tracking-widest mb-10">
              SUPRSLIM voor Horeca
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-10 leading-[1.1] tracking-tight">
              Een slimme menukaart <br />
              <span className="text-primary italic">voor een rustige zaak.</span>
            </h1>
            <p className="text-[#6a7a6e] text-xl md:text-2xl mb-12 leading-relaxed max-w-xl font-medium">
              Geen overbelaste keuken of complexe inkoop meer. Wij helpen je terug naar de essentie, zodat jij weer tijd hebt voor wat echt telt.
            </p>
            
            <div className="space-y-8 mt-12">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white rounded-3xl flex items-center justify-center flex-shrink-0 shadow-sm border border-[#eeebe3]">
                   <span className="text-2xl">🧘</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-[#3d4a40]">Persoonlijke balans</h3>
                  <p className="text-[#6a7a6e] font-medium leading-relaxed">Een beheersbare operatie geeft jou als ondernemer weer lucht en plezier in je werk.</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white rounded-3xl flex items-center justify-center flex-shrink-0 shadow-sm border border-[#eeebe3]">
                   <span className="text-2xl">🌿</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-[#3d4a40]">Subtiele eenvoud</h3>
                  <p className="text-[#6a7a6e] font-medium leading-relaxed">Verleid gasten met een compact, gezond aanbod dat makkelijk en foutloos te bereiden is.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-accent/5 blur-[100px] -z-10 rounded-full"></div>
            <HorecaForm />
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6 bg-[#faf8f4]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#3d4a40]">De kracht van weglaten</h2>
          <p className="text-[#6a7a6e] text-xl leading-relaxed italic font-medium">
            "Succes in de moderne horeca zit niet in een dikke menukaart, maar in de rust die je uitstraalt door te kiezen voor wat écht werkt. Voor jou, je team en je gasten."
          </p>
        </div>
      </section>
    </main>
  );
}
