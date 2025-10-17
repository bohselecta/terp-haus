'use client';
import { useState } from 'react';
import Image from 'next/image';

type Img = { src: string; alt?: string };

export default function Gallery({ images }: { images: Img[] }) {
  const [active, setActive] = useState<Img | null>(null);
  return (
    <div>
      <div className="grid grid-cols-3 gap-3">
        {images.map((img, i) => (
          <button key={i} onClick={() => setActive(img)} className="group">
            <Image src={img.src} alt={img.alt || ''} width={200} height={150} className="rounded-xl aspect-[4/3] object-cover group-hover:opacity-90" />
          </button>
        ))}
      </div>
      {active && (
        <div className="fixed inset-0 bg-black/70 grid place-items-center z-50" onClick={() => setActive(null)}>
          <Image src={active.src} alt={active.alt || ''} width={1200} height={800} className="max-w-[90vw] max-h-[85vh] rounded-xl shadow-2xl" />
        </div>
      )}
    </div>
  );
}
