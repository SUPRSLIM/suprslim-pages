'use client';

import { useState } from 'react';

export default function HorecaForm() {
  const [status, setStatus] = useState('idle');
  const [formData, setFormData] = useState({
    restaurant: '',
    website: '',
    goal: 'Marge verbeteren',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // In a real scenario, this would write to the 'Horeca klanten' table in Airtable
    // For now, we simulate a successful intake.
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {status === 'success' ? (
        <div className="p-12 bg-emerald-500/10 border border-emerald-500/20 rounded-[3rem] text-center">
          <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
             <span className="text-4xl">🚀</span>
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">Aanvraag ontvangen!</h3>
          <p className="text-slate-400 text-lg leading-relaxed">
            We gaan je menukaart en online aanwezigheid analyseren. Binnen 48 uur ontvang je een eerste 'Smart Scan' met verbeterpunten.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8 p-12 bg-slate-900/50 rounded-[3rem] border border-white/5 shadow-2xl">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-3 ml-1">Naam Horecazaak</label>
              <input
                type="text"
                required
                value={formData.restaurant}
                onChange={(e) => setFormData({...formData, restaurant: e.target.value})}
                placeholder="Bijv. La Cafetera"
                className="w-full bg-slate-950 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-emerald-500/50 transition-all text-white text-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-3 ml-1">Website of Instagram</label>
              <input
                type="text"
                required
                value={formData.website}
                onChange={(e) => setFormData({...formData, website: e.target.value})}
                placeholder="www.jouwzaak.nl"
                className="w-full bg-slate-950 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-emerald-500/50 transition-all text-white text-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-3 ml-1">Wat is je hoofddoel?</label>
              <select 
                value={formData.goal}
                onChange={(e) => setFormData({...formData, goal: e.target.value})}
                className="w-full bg-slate-950 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-emerald-500/50 transition-all text-white text-lg appearance-none cursor-pointer"
              >
                <option>Marge verbeteren</option>
                <option>Keuken efficiëntie</option>
                <option>Beter lunchconcept</option>
                <option>QR / Upsell strategie</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-3 ml-1">Menukaart (PDF / Foto)</label>
              <div className="w-full border-2 border-dashed border-white/10 rounded-2xl p-8 text-center hover:border-emerald-500/30 transition-all cursor-pointer bg-slate-950/50">
                <p className="text-slate-500 font-medium">Klik om een bestand te uploaden of sleep het hierheen</p>
                <p className="text-slate-600 text-xs mt-2">PDF, JPG of PNG (max 10MB)</p>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-5 rounded-2xl transition-all shadow-xl shadow-emerald-600/20 active:scale-[0.98] disabled:opacity-50 text-lg"
          >
            {status === 'loading' ? 'Bezig met verwerken...' : 'Start de Horeca Quickscan'}
          </button>
          
          <p className="text-center text-slate-500 text-xs">
            Door te starten ga je akkoord met onze voorwaarden voor horeca-advies.
          </p>
        </form>
      )}
    </div>
  );
}
