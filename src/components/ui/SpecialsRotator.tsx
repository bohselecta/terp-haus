'use client';
import { useEffect, useState } from 'react';

type Special = { title: string; price?: string; note?: string; category?: string };

export default function SpecialsRotator({ initialSpecials = [] as Special[] }) {
  const [items, setItems] = useState<Special[]>(initialSpecials);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    // Refresh at runtime in case admin updates after SSR
    fetch('/api/specials').then(r=>r.json()).then(setItems).catch(()=>{});
  }, []);

  useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % Math.max(items.length || 1, 1)), 4000);
    return () => clearInterval(id);
  }, [items]);

  if (!items.length) {
    return (
      <div className="rounded-2xl p-6 bg-white shadow">
        <h3 className="text-xl font-bold">Today&apos;s Specials</h3>
        <p className="opacity-70">No specials posted yet. Check back soon.</p>
      </div>
    );
  }

  const current = items[idx];
  return (
    <div className="rounded-2xl p-6 bg-white shadow min-h-[180px]">
      <h3 className="text-xl font-bold mb-1">Today&apos;s Specials</h3>
      <div className="text-2xl font-extrabold">{current.title} {current.price ? `— ${current.price}` : ''}</div>
      {current.note && <div className="opacity-70">{current.note}</div>}
      {current.category && <div className="mt-1 text-xs uppercase tracking-wider opacity-60">{current.category}</div>}
      <div className="mt-4 text-sm opacity-70">Rotates every 4s • {idx+1}/{items.length}</div>
    </div>
  );
}
