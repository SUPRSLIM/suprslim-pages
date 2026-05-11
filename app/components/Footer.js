import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-24 px-6 border-t border-[#eeebe3] bg-soft">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-foreground mb-6 tracking-tight italic">SUPRSLIM</h3>
            <p className="text-[#6a7a6e] max-w-sm mb-8 font-medium leading-relaxed">
              Minder nadenken. Meer rust. <br />
              Een slimme routine voor een gezonder en lichter leven.
            </p>
            <div className="flex gap-6">
              <a href="https://instagram.com/suprslim" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all border border-slate-100 grayscale hover:grayscale-0">
                <span className="text-xs font-bold">IG</span>
              </a>
              <a href="https://tiktok.com/@suprslim" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all border border-slate-100 grayscale hover:grayscale-0">
                <span className="text-xs font-bold">TT</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-8">Platform</h4>
            <ul className="space-y-4 text-sm font-bold text-[#9ba99f] uppercase tracking-widest">
              <li><Link href="/weeklijst" className="hover:text-primary transition-colors">Weekmenu's</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Lifestyle</Link></li>
              <li><Link href="/horeca" className="hover:text-primary transition-colors">Horeca</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-8">Contact</h4>
            <ul className="space-y-4 text-sm font-bold text-[#9ba99f] uppercase tracking-widest">
              <li><a href="mailto:hallo@suprslim.nl" className="hover:text-primary transition-colors">hallo@suprslim.nl</a></li>
              <li><Link href="/over-ons" className="hover:text-primary transition-colors">Over SUPRSLIM</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-16 border-t border-[#eeebe3] flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9ba99f] space-y-2">
            <p>&copy; {new Date().getFullYear()} SUPRSLIM &mdash; Alle rechten voorbehouden.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-primary">Privacy</Link>
              <Link href="/voorwaarden" className="hover:text-primary">Voorwaarden</Link>
            </div>
          </div>
          
          <div className="max-w-md text-[9px] leading-relaxed text-[#9ba99f] font-medium uppercase tracking-[0.15em] border-l-2 border-primary/20 pl-6 italic">
            <p className="mb-2"><strong>Disclaimer:</strong> SUPRSLIM geeft geen medisch advies. De geboden informatie is voor algemeen informatieve doeleinden.</p>
            <p><strong>Belasting:</strong> Dieetkosten kunnen in sommige gevallen aftrekbaar zijn. SUPRSLIM geeft geen belastingadvies. Controleer actuele voorwaarden bij de Belastingdienst.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
