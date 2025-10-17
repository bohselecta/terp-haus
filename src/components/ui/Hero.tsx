import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: 'var(--color-brand-paper)' }}>
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight" style={{ color: 'var(--color-brand-ink)' }}>
              Terp Haus
            </h1>
            <p className="mt-4 max-w-xl text-lg opacity-80" style={{ color: 'var(--color-brand-ink)' }}>
              Premium THCA dispensary in Austin. Crafted products, real terpene science.
            </p>
            <div className="mt-8 flex gap-3">
              <Link 
                href="/products" 
                className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-semibold text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ backgroundColor: 'var(--color-brand-primary)' }}
              >
                Shop Products
              </Link>
              <Link 
                href="/education/terpenes" 
                className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-semibold border transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ 
                  borderColor: 'var(--color-brand-primary)', 
                  color: 'var(--color-brand-primary)' 
                }}
              >
                Learn Terpenes
              </Link>
            </div>
          </div>
          <div className="relative">
            <div 
              className="absolute -inset-10 -z-10 rounded-[40px] opacity-30" 
              style={{
                background: "linear-gradient(135deg, var(--color-brand-terracotta), var(--color-brand-mustard), var(--color-brand-olive), var(--color-brand-primary), var(--color-brand-aubergine))"
              }}
            />
            <Image 
              src="/images/terp-haus-logo-color.svg" 
              alt="Terp Haus logo" 
              width={640} 
              height={480} 
              className="w-full h-auto drop-shadow-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
