# Terp Haus — Marketing Site

A specials-first landing + map + gallery that links to Flowhub.

## Quickstart

```bash
pnpm install
pnpm add react-leaflet leaflet
cp .env.example .env.local
pnpm dev
```

Then visit http://localhost:3000

## Admin Access

Visit `/admin` and enter your PIN from `NEXT_PUBLIC_ADMIN_PIN`.

- Edit specials JSON in the textarea and Save
- The homepage rotator updates automatically

## Environment Variables

Create `.env.local` from `env.example`:

```env
# Admin Configuration
NEXT_PUBLIC_ADMIN_PIN=terphaus-1234
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Flowhub API Configuration (optional for future use)
FLOWHUB_API_KEY=your_api_key_here
FLOWHUB_CLIENT_ID=your_client_id_here
FLOWHUB_LOCATION_ID=your_location_id_here
FLOWHUB_API_URL=https://api.flowhub.com/v2

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_DISPENSARY_NAME=Terp Haus
NEXT_PUBLIC_LOCATION=Austin, TX
```

## Customization

### Map Location
Update the coordinates in `src/app/page.tsx`:
```typescript
<MapSection lat={30.264979} lng={-97.746598} label="Terp Haus" />
```

### Storefront Images
Replace placeholder images in `public/images/`:
- `storefront.jpg` - Replace with actual storefront photo
- `interior-1.jpg` - Replace with interior shot 1  
- `interior-2.jpg` - Replace with interior shot 2

### Specials Management
- Access admin at `/admin`
- Edit JSON format in the textarea
- Save to update homepage rotator
- Specials rotate every 4 seconds

### Contact Information
Update in `src/app/page.tsx`:
- Address: "123 Terp Lane, Austin, TX 78704"
- Hours: "Open daily 10am – 9pm"
- Phone: `tel:+15125551234`
- Directions link: `https://maps.app.goo.gl/`

## Notes

- POS, inventory, and checkout remain in Flowhub (linked)
- Specials stored in-memory (resets on deployment)
- Future: Swap PIN gate for NextAuth Google
- Future: Persist specials to Neon database
- Future: Wire `/api/notify` to Klaviyo / SpringBig automations

## Architecture

### Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Map**: React-Leaflet with OpenStreetMap
- **State**: Client-side localStorage for admin auth

### Project Structure
```
src/
├── app/
│   ├── admin/page.tsx          # PIN-gated admin interface
│   ├── api/
│   │   ├── specials/route.ts  # Specials CRUD API
│   │   └── notify/route.ts    # Notification stubs
│   ├── layout.tsx             # Root layout with footer
│   └── page.tsx               # Marketing homepage
├── components/ui/
│   ├── SpecialsRotator.tsx    # Auto-rotating specials
│   ├── MapSection.tsx         # Interactive map
│   └── Gallery.tsx            # Image gallery with modal
└── data/
    └── specials.json          # Default specials data
```

## Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Testing Checklist
1. Homepage loads with specials rotator working
2. Map renders correctly with marker at specified location
3. Gallery images clickable with fullscreen modal
4. Admin page accessible at `/admin`
5. PIN gate works correctly
6. Specials can be edited and saved via admin
7. Homepage updates reflect saved specials
8. External links (Flowhub, directions, phone) work
9. Responsive layout works on mobile and desktop
10. Build completes without errors

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

### Environment Variables for Production
Set these in your deployment platform:
- `NEXT_PUBLIC_ADMIN_PIN`
- `NEXT_PUBLIC_BASE_URL`
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_DISPENSARY_NAME`
- `NEXT_PUBLIC_LOCATION`

---

Built with ❤️ for Terp Haus in Austin, Texas

**Status**: Marketing Landing Complete ✅  
**Ready for**: Content Updates & Image Replacement