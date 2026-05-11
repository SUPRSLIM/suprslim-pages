import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="w-full py-6 px-6 md:px-12 bg-white/50 backdrop-blur-md border-b border-[#eeebe3] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo - Minimalist & Soft */}
        <Link href="/" className="flex items-center gap-3 group">
          <span className="text-2xl font-bold tracking-tight text-[#3d4a40] group-hover:text-primary transition-colors">
            SUPRS<span className="text-primary group-hover:text-accent">LIM</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          <Link href="/" className="text-sm font-semibold text-[#6a7a6e] hover:text-[#3d4a40] transition-colors tracking-wide">
            Overzicht
          </Link>
          <Link href="/weeklijst" className="text-sm font-semibold text-[#6a7a6e] hover:text-[#3d4a40] transition-colors tracking-wide">
            Weeklijst
          </Link>
          <Link href="/blog" className="text-sm font-semibold text-[#6a7a6e] hover:text-[#3d4a40] transition-colors tracking-wide">
            Tips & Inspiratie
          </Link>
          <Link href="/horeca" className="text-sm font-semibold text-[#6a7a6e] hover:text-[#3d4a40] transition-colors tracking-wide">
            Voor Ondernemers
          </Link>
        </nav>

        {/* CTA */}
        <Link 
          href="/#download" 
          className="px-8 py-3 bg-accent hover:bg-[#d89a52] text-white text-sm font-bold rounded-2xl transition-all shadow-sm active:scale-95"
        >
          Ontvang Weeklijst
        </Link>
      </div>
    </header>
  );
}
