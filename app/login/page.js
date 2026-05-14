'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, sent, error

  const handleLogin = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // We simuleren hier de verzending of koppelen dit later aan een mail-provider
      const response = await fetch('/api/auth/magic-link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('sent');
      } else {
        const errorData = await response.json();
        setStatus(errorData.error || 'error');
      }
    } catch (error) {
      console.error('Login Error:', error);
      setStatus('error');
    }
  };

  return (
    <main className="min-h-screen bg-[#f8f6f2] flex items-center justify-center px-6">
      <div className="max-w-md w-full bg-white p-12 md:p-16 rounded-[4rem] border border-[#eeebe3] shadow-2xl">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
            Team Access
          </div>
          <h1 className="text-3xl font-bold text-[#3d4a40]">SUPR<span className="text-primary italic">SLIM</span> Hub.</h1>
          <p className="text-[#6a7a6e] mt-4 font-medium">Log in via je persoonlijke Magic Link.</p>
        </div>

        {status === 'sent' ? (
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-2xl mx-auto">📧</div>
            <h3 className="text-xl font-bold text-[#3d4a40]">Check je inbox!</h3>
            <p className="text-[#6a7a6e] text-sm leading-relaxed">
              We hebben een magische link gestuurd naar <strong>{email}</strong>. Klik op de link in de mail om direct in te loggen.
            </p>
            <button 
              onClick={() => setStatus('idle')}
              className="text-primary font-bold text-xs uppercase tracking-widest mt-6 block mx-auto"
            >
              Opnieuw proberen
            </button>
          </div>
        ) : (
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 ml-1 text-center">Jouw E-mailadres</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="naam@suprslim.nl"
                className="w-full bg-[#f8f6f2] border border-[#eeebe3] rounded-2xl px-6 py-4 outline-none focus:border-primary/50 transition-all text-[#3d4a40] text-center"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-[#3d4a40] hover:bg-primary text-white font-bold py-5 rounded-2xl transition-all shadow-xl active:scale-95 disabled:opacity-50"
            >
              {status === 'loading' ? 'Bezig met sturen...' : 'Stuur Magic Link'}
            </button>

            {status !== 'idle' && status !== 'loading' && status !== 'sent' && (
              <p className="text-red-500 text-xs text-center font-medium">
                {status.includes('Unauthorized') 
                  ? `Oeps! ${status}. Check je spelling.` 
                  : 'Er ging iets mis. Probeer het later opnieuw.'}
              </p>
            )}
          </form>
        )}

        <div className="mt-12 pt-8 border-t border-[#eeebe3] text-center">
          <Link href="/" className="text-[#6a7a6e] text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">
            ← Terug naar de site
          </Link>
        </div>
      </div>
    </main>
  );
}
