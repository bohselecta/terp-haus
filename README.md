# Terp Haus - Premium THCA Dispensary Website

A modern, high-performance e-commerce website for Terp Haus dispensary in Austin, Texas. Built with Next.js 15, TypeScript, Tailwind CSS, and integrated with Flowhub POS system.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Flowhub account with API access

### Installation

```bash
# Clone the repository
git clone https://github.com/bohselecta/terp-haus.git
cd terp-haus

# Install dependencies
npm install

# Copy environment variables
cp env.example .env.local

# Edit .env.local with your Flowhub credentials
# Get these from Flowhub by emailing help@flowhub.com

# Start development server
npm run dev
```

Visit http://localhost:3000

## 🎨 Brand System

The application uses the Terp Haus brand system with:

- **Primary Colors**: Teal (#1E7A83), Sage (#6C8C74), Terracotta (#B4643E)
- **Typography**: Inter font family
- **Logo Assets**: SVG logos in multiple variants (color, mono, outline, white)
- **Design Tokens**: CSS custom properties for consistent theming

### Brand Assets
- `public/images/terp-haus-logo-color.svg` - Main logo
- `public/images/terp-haus-logo-mono.svg` - Monochrome version
- `public/images/terp-haus-logo-outline.svg` - Outline version
- `public/images/terp-haus-logo-white.svg` - White version
- `public/images/og/og-image.svg` - Open Graph image

## 🏗️ Architecture

### Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand (cart), React Query (server state)
- **Animation**: Framer Motion
- **POS Integration**: Flowhub API
- **Deployment**: Vercel (recommended)

### Project Structure
```
src/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   ├── products/      # Product endpoints
│   │   ├── inventory/     # Inventory endpoints
│   │   └── orders/        # Order endpoints
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── layout/           # Layout components
│   ├── ui/               # UI components
│   └── product/          # Product components
├── lib/                  # Utilities and libraries
│   ├── flowhub/          # Flowhub API client
│   ├── hooks/            # Custom React hooks
│   └── utils/            # Helper functions
└── types/                # TypeScript type definitions
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file with:

```env
# Flowhub API Configuration
FLOWHUB_API_KEY=your_api_key_here
FLOWHUB_CLIENT_ID=your_client_id_here
FLOWHUB_LOCATION_ID=your_location_id_here
FLOWHUB_API_URL=https://api.flowhub.com/v2

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_DISPENSARY_NAME=Terp Haus
NEXT_PUBLIC_LOCATION=Austin, TX
```

### Getting Flowhub Credentials

1. Email help@flowhub.com to request API access
2. Provide your dispensary information
3. You'll receive:
   - API Key
   - Client ID
   - Location ID

## 🛠️ Features

### Implemented ✅
- Modern homepage with hero section
- Responsive header and footer
- Terp Haus brand integration
- Flowhub API client
- Shopping cart with Zustand
- TypeScript type safety
- SEO optimization
- Mobile-responsive design

### To Implement 🔲
- Product catalog pages
- Product detail pages with terpene visualization
- Checkout flow with age verification
- Order tracking
- Customer accounts
- Educational content pages
- Search functionality
- Admin dashboard

## 📊 API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/[id]` - Get single product

### Inventory
- `GET /api/inventory` - Get inventory status
- `PUT /api/inventory` - Update inventory

### Orders
- `POST /api/orders` - Create new order
- `GET /api/orders` - Get orders
- `PATCH /api/orders` - Update order status

## 🎯 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

### Development Workflow
1. Make changes to components
2. Test in browser (hot reload enabled)
3. Run `npm run type-check` to verify types
4. Run `npm run build` to test production build
5. Commit changes

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

### Environment Variables for Production
Set these in your deployment platform:
- `FLOWHUB_API_KEY`
- `FLOWHUB_CLIENT_ID`
- `FLOWHUB_LOCATION_ID`
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_DISPENSARY_NAME`
- `NEXT_PUBLIC_LOCATION`

## 🔐 Security & Compliance

- Age verification required (21+)
- API keys stored server-side only
- HTTPS enforced in production
- Rate limiting recommended for API routes

## 📱 Responsive Design

The application is fully responsive with:
- Mobile-first design approach
- Touch-friendly interface
- Optimized images
- Fast loading times

## 🎨 Customization

### Colors
Update CSS custom properties in `src/app/globals.css`:
```css
:root {
  --color-brand-primary: #1E7A83;
  --color-brand-secondary: #6C8C74;
  --color-brand-accent: #B4643E;
  /* ... */
}
```

### Typography
Fonts are configured in `src/app/layout.tsx`:
```typescript
const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});
```

### Logo
Replace logo files in `public/images/`:
- `terp-haus-logo-color.svg`
- `terp-haus-logo-mono.svg`
- `terp-haus-logo-outline.svg`
- `terp-haus-logo-white.svg`

## 📈 Performance

Target metrics:
- Lighthouse Score: 95+
- First Contentful Paint: <1s
- Time to Interactive: <2s
- Bundle Size: <200kb (gzipped)

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📞 Support

- **Flowhub API**: help@flowhub.com
- **Technical Issues**: Create an issue in this repository
- **Documentation**: Check the code comments and type definitions

## 📄 License

Private - All rights reserved

---

Built with ❤️ for Terp Haus in Austin, Texas

**Status**: Foundation Complete ✅  
**Ready for**: Feature Development  
**Next Steps**: Implement product catalog and checkout flow