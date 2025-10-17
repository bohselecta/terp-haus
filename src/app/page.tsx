import { Hero } from '@/components/ui/Hero';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-brand-paper)' }}>
      <Header />
      <main>
        <Hero />
        
        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-brand-ink)' }}>
                Why Choose Terp Haus?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We&apos;re committed to providing the highest quality THCA products with 
                transparent lab testing and expert guidance.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'var(--color-brand-primary)' }}>
                  <span className="text-2xl">🧪</span>
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-brand-ink)' }}>
                  Lab Tested
                </h3>
                <p className="text-gray-600">
                  Every product is tested by third-party labs for potency, purity, and safety.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'var(--color-brand-secondary)' }}>
                  <span className="text-2xl">🌿</span>
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-brand-ink)' }}>
                  Premium Quality
                </h3>
                <p className="text-gray-600">
                  Carefully curated selection of the finest hemp-derived products available.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'var(--color-brand-accent)' }}>
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-brand-ink)' }}>
                  Expert Guidance
                </h3>
                <p className="text-gray-600">
                  Our knowledgeable staff helps you find the perfect products for your needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section 
          className="py-16 text-white"
          style={{
            background: "linear-gradient(135deg, var(--color-brand-primary), var(--color-brand-secondary), var(--color-brand-accent))"
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Explore Our Products?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Browse our premium selection of THCA products
            </p>
            <a
              href="/products"
              className="inline-flex items-center px-6 py-3 bg-white font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              style={{ color: 'var(--color-brand-primary)' }}
            >
              Shop Now
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
