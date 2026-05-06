import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="w-full py-4 px-6 md:px-12 bg-slate-950/80 backdrop-blur-md border-b border-white/5 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 overflow-hidden rounded-lg">
            <Image 
              src="/logo.png" 
              alt="SUPRSLIM Logo" 
              fill 
              className="object-contain"
            />
          </div>
          <span className="text-xl font-black tracking-tighter text-white group-hover:text-emerald-500 transition-colors">
            SUPRS<span className="text-emerald-500 group-hover:text-white">LIM</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/weeklijst" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
            Weeklijst
          </Link>
          <Link href="/horeca" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
            Horeca Engine
          </Link>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link 
            href="/#download" 
            className="px-5 py-2 bg-orange-600 hover:bg-orange-500 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-orange-600/20 active:scale-95"
          >
            Gratis Weeklijst
          </Link>
        </div>
      </div>
    </header>
  );
}
