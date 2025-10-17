# TerpHaus Development Guide

## 🎯 Quick Start for Cursor Development

This project is **production-ready** for you to pick up in Cursor and continue development. Here's everything you need to know.

## ✅ What's Already Built

### Core Infrastructure
- ✅ **Next.js 15** project with TypeScript, App Router, Tailwind
- ✅ **Flowhub API client** with full type safety and error handling
- ✅ **Type system** - Complete TypeScript types for all data models
- ✅ **API routes** - Products, inventory, orders endpoints
- ✅ **Cart system** - Zustand store with localStorage persistence

### UI Components
- ✅ **ProductCard** - Beautiful product cards
- ✅ **ProductGrid** - Responsive grid with loading states
- ✅ **ProductFilters** - Advanced filtering UI
- ✅ **TerpeneProfile** - Radar chart visualization (THIS IS 🔥)
- ✅ **Header/Footer** - Layout components with nav

### Pages
- ✅ **Homepage** - Hero, features, CTA sections
- ✅ **Products listing** - With filters, search, grid
- ✅ **Product detail** - Individual product pages with full info

## 🚧 What to Build Next (Priority Order)

### 1. Checkout Flow (HIGH PRIORITY)
**Files to create:**
- `app/checkout/page.tsx` - Main checkout page
- `components/checkout/CheckoutForm.tsx` - Customer info form
- `components/checkout/OrderSummary.tsx` - Cart review
- `components/checkout/AgeVerification.tsx` - 21+ check

**API work:**
- Enhance `app/api/orders/route.ts` - Add order creation logic
- Add email notifications (consider Resend or SendGrid)

**Key features:**
- Age verification modal (required by law!)
- Customer info form (name, email, phone, DOB)
- Pickup time selection
- Order confirmation page
- SMS notifications

### 2. Cart UI (HIGH PRIORITY)
**Files to create:**
- `components/layout/CartDrawer.tsx` - Sliding cart panel
- `components/cart/CartItem.tsx` - Individual cart item
- Add cart icon to Header with item count badge

### 3. Search Functionality (MEDIUM)
**Files to enhance:**
- Add search to `app/products/page.tsx`
- Create search API endpoint or use Flowhub search
- Add autocomplete/suggestions

### 4. About/Education Pages (MEDIUM)
**Files to create:**
- `app/about/page.tsx` - About TerpHaus
- `app/education/thca/page.tsx` - THCA education (critical for Texas!)
- `app/education/terpenes/page.tsx` - Terpene guide
- `app/education/consumption/page.tsx` - Consumption methods

### 5. Strain Finder Quiz (MEDIUM - but COOL)
**Files to create:**
- `app/quiz/page.tsx` - Interactive quiz
- `components/quiz/QuizQuestion.tsx`
- `lib/quiz/questions.ts` - Quiz logic
- Algorithm to match answers → strain recommendations

### 6. SEO & Metadata (MEDIUM)
**Files to enhance:**
- Add metadata to all pages
- Create `app/sitemap.ts`
- Create `app/robots.txt`
- Add Open Graph images
- Schema.org markup for products

### 7. Admin Dashboard (LOW - but useful)
**Files to create:**
- `app/admin/page.tsx` - Dashboard
- `app/admin/products/page.tsx` - Product management
- `app/admin/orders/page.tsx` - Order management
- Add auth (NextAuth.js recommended)

### 8. Customer Accounts (LOW)
**Files to create:**
- Auth system (NextAuth.js)
- `app/account/page.tsx` - Account dashboard
- `app/account/orders/page.tsx` - Order history
- Loyalty program integration with Flowhub

## 🎨 Branding Integration Checklist

Once you finish the branding:

### Colors
1. Update `tailwind.config.ts`:
```typescript
colors: {
  brand: {
    primary: "YOUR_PRIMARY_COLOR",
    secondary: "YOUR_SECONDARY_COLOR", 
    accent: "YOUR_ACCENT_COLOR",
    light: "YOUR_LIGHT_COLOR",
    dark: "YOUR_DARK_COLOR",
  },
}
```

2. Update CSS variables in `app/globals.css`:
```css
:root {
  --color-brand-primary: YOUR_RGB_VALUES;
  --color-brand-primary-rgb: R, G, B;
}
```

### Typography
1. Import fonts in `app/layout.tsx`:
```typescript
import { YourFont, YourHeadingFont } from "next/font/google";
```

2. Apply to Tailwind config

### Logo & Images
1. Add logo to `public/images/`
2. Update `components/layout/Header.tsx`
3. Add favicon, Open Graph image

### Copy
1. Update all text in components
2. Update store info in `.env.local`
3. Write product descriptions (or pull from Flowhub)

## 🔧 Development Workflow

### 1. Environment Setup (CRITICAL)

Before running anything:

```bash
# Copy env file
cp .env.local.example .env.local

# Edit with your Flowhub credentials
code .env.local  # or vim, nano, etc.
```

**Get Flowhub credentials:**
- Email help@flowhub.com
- Or fill out: [Flowhub API request form]
- You need: API Key, Client ID, Location ID

### 2. Daily Development

```bash
# Install dependencies (first time only)
npm install

# Start dev server
npm run dev

# Type checking (run frequently!)
npm run type-check

# Linting
npm run lint

# Build (test before deploying)
npm run build
```

### 3. Testing Your Changes

**Manual testing checklist:**
- [ ] Homepage loads and looks good
- [ ] Products page loads with real Flowhub data
- [ ] Filters work correctly
- [ ] Product detail pages load
- [ ] Add to cart works
- [ ] Cart persists on refresh
- [ ] Mobile responsive on all pages
- [ ] No console errors

### 4. Git Workflow

```bash
# Create feature branch
git checkout -b feature/checkout-flow

# Make changes, commit often
git add .
git commit -m "Add checkout page"

# Push and create PR
git push origin feature/checkout-flow
```

## 📝 Code Patterns & Best Practices

### Component Structure

```typescript
"use client"; // Only if using hooks/interactivity

import { ComponentProps } from "@/types";

interface MyComponentProps {
  // Props here
}

export function MyComponent({ prop1, prop2 }: MyComponentProps) {
  // Component logic
  
  return (
    <div className="card">
      {/* JSX here */}
    </div>
  );
}
```

### API Routes

```typescript
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // Your logic
    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Error message" },
      { status: 500 }
    );
  }
}
```

### Data Fetching

```typescript
"use client";

import { useQuery } from "@tanstack/react-query";

export function MyComponent() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("/api/products");
      return res.json();
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  if (isLoading) return <LoadingState />;
  if (error) return <ErrorState />;
  
  return <div>{/* Render data */}</div>;
}
```

## 🐛 Common Issues & Solutions

### Issue: "Missing Flowhub configuration"
**Solution:** 
- Check `.env.local` exists
- Verify all three env vars are set
- Restart dev server after changing env vars

### Issue: Products not loading
**Solution:**
- Check Flowhub credentials are correct
- Look at API route logs in terminal
- Verify Flowhub API is accessible
- Check network tab in dev tools

### Issue: TypeScript errors
**Solution:**
```bash
npm run type-check  # See all errors
```
- Check types in `types/index.ts`
- Ensure imports are correct

### Issue: Styles not applying
**Solution:**
- Check Tailwind config
- Ensure classes are in safelist if dynamic
- Clear `.next` folder and restart

## 📦 Important Dependencies

| Package | Purpose | Docs |
|---------|---------|------|
| `next` | Framework | [docs](https://nextjs.org) |
| `@tanstack/react-query` | Data fetching | [docs](https://tanstack.com/query) |
| `zustand` | State management | [docs](https://github.com/pmndrs/zustand) |
| `framer-motion` | Animations | [docs](https://www.framer.com/motion) |
| `lucide-react` | Icons | [docs](https://lucide.dev) |

## 🚀 Deployment Checklist

Before deploying:

- [ ] Test build locally: `npm run build`
- [ ] Set all env vars in Vercel
- [ ] Update `.env.local.example` if new vars added
- [ ] Test on staging first
- [ ] Check Lighthouse score
- [ ] Test checkout flow end-to-end
- [ ] Verify Flowhub integration works
- [ ] Set up error monitoring (Sentry recommended)
- [ ] Configure analytics (Plausible/Fathom recommended)

## 💡 Pro Tips

1. **Use Cursor's AI features** for:
   - Component generation
   - Type definition help
   - Refactoring
   - Testing

2. **Keep components small** - If a component gets over 200 lines, break it up

3. **Type everything** - No `any` types! Use TypeScript strictly

4. **Mobile first** - Always design/test mobile first, then desktop

5. **Performance matters** - Keep bundle size small, images optimized

6. **Accessibility** - Use semantic HTML, ARIA labels where needed

7. **Git commits** - Small, frequent commits with clear messages

## 🎯 Success Metrics

Track these to ensure you're building a great experience:

- **Performance**: Lighthouse score 95+
- **Load time**: First paint < 1s
- **Conversion**: Checkout completion rate
- **Engagement**: Time on site, pages per session
- **Mobile**: 60%+ traffic should work flawlessly

## 📞 Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind Docs**: https://tailwindcss.com/docs
- **Flowhub Help**: help@flowhub.com
- **React Query**: https://tanstack.com/query/latest

## 🎉 You're Ready!

The foundation is solid. Open this project in Cursor and start building!

Priority #1: **Get the checkout flow working** - that's your MVP.

Good luck! 🍀