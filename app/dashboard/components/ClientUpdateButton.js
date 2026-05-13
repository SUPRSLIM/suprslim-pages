'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ClientUpdateButton({ recordId, table, newStatus, token, label, className }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleUpdate = async () => {
    if (!confirm(`Weet je het zeker? Status wordt: ${newStatus}`)) return;
    
    setLoading(true);
    try {
      const response = await fetch('/api/dashboard/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ recordId, table, newStatus, token }),
      });

      if (response.ok) {
        router.refresh(); // Refresh the server component data
      } else {
        alert('Oeps! Er ging iets mis bij de update.');
      }
    } catch (error) {
      console.error('Update Error:', error);
      alert('Technische fout opgetreden.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button 
      onClick={handleUpdate}
      disabled={loading}
      className={`${className} disabled:opacity-50 active:scale-95`}
    >
      {loading ? 'Bezig...' : label}
    </button>
  );
}
