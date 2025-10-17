import SpecialsRotator from "@/components/ui/SpecialsRotator";
import MapSection from "@/components/ui/MapSection";
import Gallery from "@/components/ui/Gallery";
import Image from "next/image";

export default async function Home() {
  // Server fetch to seed SSR specials (falls back to /data/specials.json)
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? ''}/api/specials`, { cache: 'no-store' }).catch(() => null);
  const specials = res ? await res.json() : [];

  return (
    <main>
      {/* HERO / SPECIALS */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/header-background.png')"
        }}
      >
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <div className="mb-6 flex justify-center md:justify-start">
                <Image 
                  src="/images/terp-haus-logo.svg" 
                  alt="Terp Haus" 
                  width={400} 
                  height={180} 
                  className="h-24 md:h-32 w-auto"
                  priority
                />
              </div>
              <p className="mt-3 text-lg font-bold text-white text-center md:text-left">Daily Specials. Order online.</p>
              <div className="mt-6 flex justify-center">
                <a href="https://terphaus.dispensary.shop" target="_blank" className="px-8 py-4 md:px-12 md:py-4 text-lg rounded-xl text-white font-semibold" style={{ backgroundColor: '#98D835' }}>Shop Online</a>
              </div>
            </div>
            <div className="flex-1 min-w-[320px]">
              <SpecialsRotator initialSpecials={specials} />
            </div>
          </div>
        </div>
      </section>

      {/* MAP + CONTACT */}
      <section id="map" className="bg-white border-t border-black/10">
        <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl font-bold mb-2">Visit Us</h2>
            <p className="opacity-80">11525 Menchaca Road, #104</p>
            <p className="opacity-80">Austin, TX 78748</p>
            <p className="opacity-80">Open daily 10am – 9pm</p>
            <div className="mt-4 flex gap-3">
              <a href="https://www.google.com/maps/dir/?api=1&destination=11525+Menchaca+Road+%23104,+Austin,+TX+78748" target="_blank" className="px-4 py-2 rounded-lg bg-black text-white">Get Directions</a>
              <a href="tel:+15125519016" className="px-4 py-2 rounded-lg border">Call (512) 551-9016</a>
            </div>
            <div className="mt-6">
              <MapSection lat={30.15211018930975} lng={-97.83297701936215} label="Terp Haus - 11525 Menchaca Road, #104" />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Storefront</h2>
            <Gallery images={[
              { src: "/images/storefront.jpg", alt: "Storefront" },
              { src: "/images/interior-1.jpg", alt: "Interior 1" },
              { src: "/images/interior-2.jpg", alt: "Interior 2" }
            ]} />
          </div>
        </div>
      </section>
    </main>
  );
}
