import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    products: [
      { name: 'Flower', href: '/products?category=flower' },
      { name: 'Concentrates', href: '/products?category=concentrates' },
      { name: 'Edibles', href: '/products?category=edibles' },
      { name: 'Topicals', href: '/products?category=topicals' },
    ],
    education: [
      { name: 'About THCA', href: '/education/thca' },
      { name: 'Terpenes Guide', href: '/education/terpenes' },
      { name: 'Consumption Methods', href: '/education/consumption' },
      { name: 'Lab Results', href: '/education/labs' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
    ],
    legal: [
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Age Verification', href: '/age-verification' },
      { name: 'Compliance', href: '/compliance' },
    ],
  };

  return (
    <footer className="text-white" style={{ backgroundColor: 'var(--color-brand-ink)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Image
              src="/images/terp-haus-logo-mono.svg"
              alt="Terp Haus"
              width={120}
              height={40}
              className="h-8 w-auto mb-4"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Premium THCA products crafted with care. Serving Austin, Texas with 
              the finest selection of hemp-derived products.
            </p>
            <div className="mt-4">
              <p className="text-sm text-gray-300">
                <strong>Location:</strong><br />
                Austin, Texas<br />
                <strong>Hours:</strong><br />
                Mon-Sat: 10AM-8PM<br />
                Sun: 12PM-6PM
              </p>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Products
            </h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Education
            </h3>
            <ul className="space-y-2">
              {footerLinks.education.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400">
              © {currentYear} Terp Haus. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-sm text-gray-400">
                <strong>21+ Only.</strong> Must be 21 or older to purchase. 
                Products contain THCA derived from hemp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
