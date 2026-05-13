import HorecaForm from '../components/HorecaForm';
import Image from 'next/image';

export const metadata = {
  title: "Binnenkort Beschikbaar | SUPRSLIM voor Ondernemers",
  description: "We werken aan een nieuw concept voor horecaondernemers. Binnenkort meer informatie.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function HorecaPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f2] flex items-center justify-center px-6 py-32 text-center">
      <div className="max-w-2xl mx-auto bg-white p-16 md:p-24 rounded-[4rem] border border-[#eeebe3] shadow-sm">
        <div className="inline-block px-5 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-bold uppercase tracking-widest mb-10">
          In Ontwikkeling
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-[#3d4a40] mb-10 tracking-tight leading-tight">
          Lichter ondernemen <br />
          <span className="text-primary italic">komt eraan.</span>
        </h1>
        <p className="text-[#6a7a6e] text-lg md:text-xl leading-relaxed font-medium mb-12">
          We leggen momenteel de laatste hand aan een uniek concept om horecaondernemers te helpen bij het vereenvoudigen van hun aanbod en operatie. 
        </p>
        <div className="pt-10 border-t border-[#eeebe3]">
          <p className="text-[#3d4a40] font-bold mb-6">Wil je op de hoogte blijven?</p>
          <a 
            href="mailto:info@suprslim.nl" 
            className="inline-block px-10 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-accent transition-all active:scale-95"
          >
            Stuur ons een bericht
          </a>
        </div>
      </div>
    </main>
  );
}
