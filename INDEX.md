# 📋 TerpHaus Project Index

## 🎯 Start Here

**New to the project?** Read in this order:
1. This file (you are here) - Overview
2. `PROJECT_SUMMARY.md` - What's built and what's next
3. `DEVELOPMENT_GUIDE.md` - How to build features
4. `README.md` - Full technical documentation

## 📦 Project Contents

### Documentation Files
| File | Purpose | Read When |
|------|---------|-----------|
| `PROJECT_SUMMARY.md` | High-level overview | Starting out |
| `DEVELOPMENT_GUIDE.md` | Implementation details | Building features |
| `README.md` | Technical docs | Need deep dive |
| `BRANDING_GUIDE.md` | Branding integration | Applying design |
| This file | Navigation help | Finding your way |

### Core Application Files

#### Configuration
- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.ts` - Styling configuration
- `next.config.js` - Next.js configuration
- `.env.local.example` - Environment variables template

#### App Directory (Next.js pages)
```
app/
├── page.tsx                    ✅ Homepage
├── layout.tsx                  ✅ Root layout
├── globals.css                 ✅ Global styles
├── providers.tsx               ✅ React Query setup
│
├── products/
│   ├── page.tsx               ✅ Products listing
│   └── [id]/page.tsx          ✅ Product detail
│
└── api/                        ✅ Backend API routes
    ├── products/route.ts       ✅ Get all products
    ├── products/[id]/route.ts  ✅ Get single product
    ├── inventory/route.ts      ✅ Check stock
    └── orders/route.ts         ✅ Create orders
```

#### Components
```
components/
├── layout/
│   ├── Header.tsx             ✅ Site header with nav
│   └── Footer.tsx             ✅ Site footer
│
└── product/
    ├── ProductCard.tsx        ✅ Product card
    ├── ProductGrid.tsx        ✅ Product grid + loading
    ├── ProductFilters.tsx     ✅ Advanced filtering
    └── TerpeneProfile.tsx     ✅ 🔥 Radar chart viz
```

#### Library Code
```
lib/
├── flowhub/
│   └── client.ts              ✅ Flowhub API wrapper
│
├── hooks/
│   └── useCart.ts             ✅ Cart state management
│
└── utils/
    └── (utility functions)
```

#### Type Definitions
```
types/
└── index.ts                   ✅ All TypeScript types
    - Product
    - Order
    - CartItem
    - FlowhubProduct
    - etc.
```

## 🎨 Design System

### Colors
Defined in `tailwind.config.ts`:
- `brand-primary` - Main brand color
- `brand-secondary` - Secondary color
- `brand-accent` - Accent highlights
- `brand-light` - Light backgrounds
- `brand-dark` - Dark text/UI
- `neutral-*` - Gray scale

### Typography
Defined in `app/globals.css`:
- Display sizes: `text-display-{sm|md|lg|xl}`
- Heading sizes: `text-heading-{sm|md|lg|xl}`
- Body text: Default Tailwind classes

### Component Classes
Reusable utility classes:
- `btn` - Base button
- `btn-primary` - Primary button
- `btn-secondary` - Secondary button
- `btn-lg` - Large button
- `card` - Card container
- `input` - Form input

## 🔧 Development Workflow

### Initial Setup
```bash
# 1. Install dependencies
npm install

# 2. Copy and configure environment
cp .env.local.example .env.local
# Edit .env.local with Flowhub credentials

# 3. Start development server
npm run dev
```

### Daily Development
```bash
npm run dev         # Start dev server (localhost:3000)
npm run type-check  # Check TypeScript errors
npm run lint        # Check code quality
npm run build       # Test production build
```

### Git Workflow
```bash
git checkout -b feature/your-feature
# Make changes
git add .
git commit -m "Description"
git push origin feature/your-feature
```

## 🚧 What to Build Next

### High Priority
1. **Checkout Flow**
   - Files: `app/checkout/page.tsx`
   - Components: `CheckoutForm`, `OrderSummary`, `AgeVerification`
   - See: `DEVELOPMENT_GUIDE.md` → Checkout section

2. **Cart UI**
   - Files: `components/layout/CartDrawer.tsx`
   - Components: `CartItem`, cart icon in Header
   - Note: Cart store already exists in `lib/hooks/useCart.ts`

3. **Age Verification**
   - Files: `components/checkout/AgeVerification.tsx`
   - Must check for 21+ before checkout

### Medium Priority
4. **Search**
   - Enhance products page with search
   - Use Flowhub search API

5. **Education Pages**
   - `app/about/page.tsx`
   - `app/education/thca/page.tsx`
   - `app/education/terpenes/page.tsx`

6. **SEO**
   - Add metadata to all pages
   - Create sitemap
   - Add Open Graph images

### Lower Priority
7. **Strain Finder Quiz**
8. **Customer Accounts**
9. **Admin Dashboard**

## 📚 Key Concepts

### Flowhub Integration
The app communicates with Flowhub like this:
```
User → Next.js Page → API Route → Flowhub Client → Flowhub API
                         ↓
                  Transform Data
                         ↓
                  Return to User
```

**Why?**
- Keeps API keys secure (server-only)
- Adds caching layer
- Transforms Flowhub data to app types
- Better error handling

### State Management
- **Server State**: React Query (products, inventory)
- **Client State**: Zustand (shopping cart)
- **URL State**: Next.js searchParams (filters)

### Data Caching
- API routes: 5 minute cache (`revalidate = 300`)
- React Query: 5 minute stale time
- Cart: localStorage persistence

## 🎨 Branding Checklist

When branding is ready:

- [ ] Update `tailwind.config.ts` with brand colors
- [ ] Update `app/globals.css` with CSS variables
- [ ] Import fonts in `app/layout.tsx`
- [ ] Add logo to `public/images/`
- [ ] Update `components/layout/Header.tsx` with logo
- [ ] Update all copy throughout the app
- [ ] Update meta descriptions
- [ ] Add favicon and Open Graph image

## 🔍 Finding Things

**"Where do I find...?"**

| Item | Location |
|------|----------|
| Product types | `types/index.ts` |
| Flowhub API calls | `lib/flowhub/client.ts` |
| Cart logic | `lib/hooks/useCart.ts` |
| Product display | `components/product/` |
| API endpoints | `app/api/` |
| Styling config | `tailwind.config.ts`, `app/globals.css` |
| Environment vars | `.env.local.example` (template) |
| Homepage | `app/page.tsx` |
| Products page | `app/products/page.tsx` |

## 🐛 Troubleshooting

**Common issues:**

| Problem | Solution | Details |
|---------|----------|---------|
| "Missing Flowhub config" | Check `.env.local` | Must have API_KEY, CLIENT_ID, LOCATION_ID |
| Products not loading | Check Flowhub credentials | Verify in Flowhub dashboard |
| TypeScript errors | Run `npm run type-check` | See all errors at once |
| Styles not applying | Clear `.next` folder | Delete `.next/` and restart |
| Dependencies error | Delete `node_modules` | Run `npm install` again |

## 📊 Project Stats

- **Lines of Code**: ~3,000+
- **Components**: 10+
- **API Routes**: 5
- **Pages**: 5+
- **Dependencies**: 15 core packages
- **TypeScript Types**: Fully typed
- **Test Coverage**: Ready for tests

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import in Vercel
3. Add environment variables
4. Deploy!

### Environment Variables
Set these in Vercel:
- `FLOWHUB_API_KEY`
- `FLOWHUB_CLIENT_ID`
- `FLOWHUB_LOCATION_ID`
- All `NEXT_PUBLIC_*` variables

## 📞 Support Resources

**Documentation:**
- Next.js: https://nextjs.org/docs
- Tailwind: https://tailwindcss.com/docs
- React Query: https://tanstack.com/query/latest
- Zustand: https://github.com/pmndrs/zustand

**Flowhub:**
- Help: help@flowhub.com
- API Docs: (from Flowhub after API access granted)

## 🎯 Success Metrics

Track these to measure success:
- [ ] Page load time < 1s
- [ ] Lighthouse score > 95
- [ ] Checkout completion rate
- [ ] Mobile traffic performance
- [ ] SEO rankings for "THCA Austin"

## 💡 Pro Tips

1. **Read DEVELOPMENT_GUIDE.md first** - It has all the patterns
2. **Start with checkout** - That's your revenue driver
3. **Test on mobile constantly** - Most traffic is mobile
4. **Keep commits small** - Easy to debug
5. **Use TypeScript strictly** - It saves debugging time
6. **Check Flowhub logs** - If data issues arise

## ✅ Quick Checklist

Before starting development:
- [ ] Read PROJECT_SUMMARY.md
- [ ] Read DEVELOPMENT_GUIDE.md
- [ ] Install dependencies (`npm install`)
- [ ] Configure `.env.local`
- [ ] Get Flowhub API credentials
- [ ] Run dev server (`npm run dev`)
- [ ] Verify products load

Before deploying:
- [ ] Test checkout flow end-to-end
- [ ] Run `npm run build` locally
- [ ] Check mobile responsive
- [ ] Verify Flowhub integration
- [ ] Add all env vars to Vercel
- [ ] Test on staging first

## 🎉 You're Ready!

Everything is organized and ready for you to jump in with Cursor. The foundation is solid, the architecture is clean, and the path forward is clear.

**Start with checkout, ship fast, iterate often.**

Let's build the best dispensary experience in Texas! 💚

---

**Questions?** Check the docs. Everything you need is here.

**Stuck?** Refer to DEVELOPMENT_GUIDE.md for detailed patterns.

**Ready?** Open in Cursor and start coding!

Good luck! 🚀