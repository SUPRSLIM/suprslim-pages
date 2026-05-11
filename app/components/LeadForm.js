'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LeadForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus('success');
        setEmail('');
        // We stay on the success screen a bit longer to let them read it
        setTimeout(() => {
          router.push('/weeklijst');
        }, 3000);
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      {status === 'success' ? (
        <div className="p-12 bg-primary/5 border border-primary/10 rounded-[3.5rem] text-center shadow-sm animate-reveal">
          <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="text-3xl">✨</span>
          </div>
          <h3 className="text-3xl font-bold text-foreground mb-4 tracking-tight">Je bent er bijna!</h3>
          <p className="text-[#6a7a6e] font-medium text-lg leading-relaxed max-w-xs mx-auto">
            Check je inbox voor je eerste <span className="text-primary italic">slimme weeklijst.</span> We sturen je nu door naar het overzicht...
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3 p-3 bg-white border border-[#eeebe3] rounded-[3.5rem] shadow-xl shadow-[#ece8dd]/30 group transition-all hover:border-primary/20">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Vul je e-mailadres in"
            required
            className="flex-1 bg-transparent px-10 py-6 outline-none text-xl text-foreground placeholder:text-[#9ba99f] font-medium"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="bg-accent hover:bg-[#d89a52] text-white font-bold py-6 px-12 rounded-[2.8rem] transition-all active:scale-[0.98] disabled:opacity-50 tracking-tight shadow-lg shadow-accent/10 text-lg"
          >
            {status === 'loading' ? (
              <span className="flex items-center gap-3">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Bezig...
              </span>
            ) : 'Krijg meer overzicht'}
          </button>
        </form>
      )}
      {status === 'error' && (
        <div className="mt-8 p-4 bg-red-50 border border-red-100 rounded-3xl text-red-500 text-sm text-center font-bold animate-reveal">
          Oeps! Er is iets misgegaan. Probeer het over een momentje nog eens.
        </div>
      )}
    </div>
  );
}
