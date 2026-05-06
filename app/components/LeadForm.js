'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LeadForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

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
        // Wait a second then redirect
        setTimeout(() => {
          router.push('/weeklijst');
        }, 1500);
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
        <div className="p-6 bg-green-500/20 border border-green-500/30 rounded-3xl text-center">
          <h3 className="text-xl font-bold text-green-400 mb-2">Gelukt! 🎉</h3>
          <p className="text-slate-300">Het weekmenu is onderweg naar je inbox.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 p-2 bg-slate-900 border border-white/5 rounded-[2rem] shadow-2xl">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Vul je e-mailadres in"
            required
            className="flex-1 bg-transparent px-6 py-4 outline-none text-lg text-white"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 px-8 rounded-2xl transition-all active:scale-95 disabled:opacity-50"
          >
            {status === 'loading' ? 'Bezig...' : 'Stuur mij het weekmenu'}
          </button>
        </form>
      )}
      {status === 'error' && (
        <p className="text-red-400 text-sm mt-4 text-center">Er ging iets mis. Probeer het later nog eens.</p>
      )}
    </div>
  );
}
