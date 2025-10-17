
/** components/Hero.tsx — Hero section using brand tokens */
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--brand-paper)]">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--brand-ink)]">
              Terp Haus
            </h1>
            <p className="mt-4 max-w-xl text-lg text-[var(--brand-ink)]/80">
              Premium THCA dispensary in Austin. Crafted products, real terpene science.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="/products" className="px-5 py-3 rounded-xl bg-[var(--brand-teal)] text-white font-semibold">
                Shop Products
              </a>
              <a href="/education/terpenes" className="px-5 py-3 rounded-xl border border-[var(--brand-teal)] text-[var(--brand-teal)] font-semibold">
                Learn Terpenes
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-10 -z-10 rounded-[40px] opacity-30" 
                 style={{background: "linear-gradient(135deg, var(--brand-terracotta), var(--brand-mustard), var(--brand-olive), var(--brand-teal), var(--brand-aubergine))"}} />
            <Image src="/images/terp-haus-logo-color.svg" alt="Terp Haus logo" width={640} height={480} className="w-full h-auto drop-shadow-xl"/>
          </div>
        </div>
      </div>
    </section>
  );
}
