'use client';

import { useState } from 'react';

export default function GenerateButton({ token }) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleGenerate = async () => {
    setLoading(true);
    setMessage('');
    
    try {
      const response = await fetch('/api/dashboard/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, targetGroup: 'Gezin' })
      });

      const data = await response.json();
      
      if (data.success) {
        setMessage('✅ Gelukt! Het menu staat in Airtable.');
        window.location.reload(); // Ververs de lijst
      } else {
        setMessage('❌ Fout: ' + (data.error || 'Onbekende fout'));
      }
    } catch (error) {
      setMessage('❌ Netwerkfout. Probeer het later opnieuw.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-start gap-4">
      <button
        onClick={handleGenerate}
        disabled={loading}
        className={`px-8 py-4 rounded-2xl font-bold text-white transition-all shadow-xl ${
          loading 
            ? 'bg-slate-400 cursor-not-allowed' 
            : 'bg-primary hover:scale-105 active:scale-95 shadow-primary/20'
        }`}
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            AI is aan het smeden...
          </span>
        ) : (
          '✨ Genereer Nieuw Weekmenu'
        )}
      </button>
      {message && <p className={`text-xs font-bold uppercase tracking-widest ${message.includes('✅') ? 'text-emerald-400' : 'text-red-400'}`}>{message}</p>}
    </div>
  );
}
