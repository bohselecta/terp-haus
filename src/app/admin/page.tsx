'use client';
import { useEffect, useState } from 'react';

export default function Admin() {
  const [authorized, setAuthorized] = useState(false);
  const [pin, setPin] = useState('');

  useEffect(() => {
    if (localStorage.getItem('th_admin_ok') === '1') setAuthorized(true);
  }, []);

  const handleAuth = () => {
    if (pin === process.env.NEXT_PUBLIC_ADMIN_PIN) {
      localStorage.setItem('th_admin_ok', '1');
      setAuthorized(true);
    } else alert('Invalid PIN');
  };

  if (!authorized) {
    return (
      <main className="max-w-md mx-auto p-10">
        <h1 className="text-2xl font-bold mb-2">Admin</h1>
        <p className="opacity-70 mb-4">Enter your PIN to manage specials and images.</p>
        <div className="flex gap-2">
          <input value={pin} onChange={e=>setPin(e.target.value)} placeholder="PIN" className="flex-1 border rounded-lg px-3 py-2" />
          <button onClick={handleAuth} className="px-4 py-2 rounded-lg bg-black text-white">Enter</button>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto p-10">
      <h1 className="text-2xl font-bold mb-6">Admin Controls</h1>
      <section className="mb-10">
        <h2 className="font-semibold">Daily Specials</h2>
        <p className="text-sm opacity-70 mb-3">Edit and save; site reads from `/api/specials`.</p>
        <SpecialsForm />
      </section>

      <section>
        <h2 className="font-semibold">Gallery Images</h2>
        <p className="text-sm opacity-70 mb-3">Paste URLs or use public/images folder.</p>
        <GalleryForm />
      </section>
    </main>
  );
}

function SpecialsForm() {
  const [data, setData] = useState<{ items: Array<{ title: string; price?: string; note?: string; category?: string }> }>({ items: [] });

  useEffect(() => {
    fetch('/api/specials').then(r=>r.json()).then(setData).catch(()=>setData({ items: [] }));
  }, []);

  const save = async () => {
    await fetch('/api/specials', { method:'POST', body: JSON.stringify(data) });
    alert('Saved');
  };

  return (
    <div className="border rounded-xl p-4">
      <textarea
        className="w-full h-48 border rounded-lg p-2 font-mono text-sm"
        value={JSON.stringify(data, null, 2)}
        onChange={(e)=>setData(JSON.parse(e.target.value || '{"items":[]}'))}
      />
      <button onClick={save} className="mt-3 px-4 py-2 rounded-lg bg-[#1E7A83] text-white">Save Specials</button>
    </div>
  );
}

function GalleryForm() {
  const images = [
    { src: "/images/storefront.jpg", alt: "Storefront" },
    { src: "/images/interior-1.jpg", alt: "Interior 1" },
    { src: "/images/interior-2.jpg", alt: "Interior 2" },
  ];

  return (
    <div className="border rounded-xl p-4">
      <p className="text-sm opacity-70 mb-2">Update image paths in code or upload via your hosting panel.</p>
      <ul className="list-disc pl-5 text-sm">
        {images.map((img, i)=> <li key={i}>{img.src} — {img.alt}</li>)}
      </ul>
    </div>
  );
}
