# 🚀 Terp Haus Quick Start Guide

Get your Terp Haus dispensary website up and running in 5 minutes!

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Configure Environment

```bash
# Copy the example environment file
cp env.example .env.local

# Edit .env.local with your Flowhub credentials
# You'll need to get these from Flowhub first
```

## Step 3: Get Flowhub API Credentials

1. Email **help@flowhub.com** with:
   - Your dispensary name
   - Location details
   - Request for API access

2. You'll receive:
   - `FLOWHUB_API_KEY`
   - `FLOWHUB_CLIENT_ID` 
   - `FLOWHUB_LOCATION_ID`

3. Add these to your `.env.local` file

## Step 4: Start Development Server

```bash
npm run dev
```

Visit **http://localhost:3000** 🎉

## Step 5: Test the Build

```bash
npm run build
```

If this succeeds, you're ready to deploy!

## 🎨 What You'll See

- **Homepage**: Beautiful hero section with Terp Haus branding
- **Header**: Navigation with cart icon
- **Footer**: Complete site links and information
- **Brand Colors**: Teal, sage, and terracotta throughout
- **Responsive Design**: Works on all devices

## 🔧 Next Steps

1. **Add Products**: Upload products to Flowhub
2. **Customize Content**: Update homepage text and images
3. **Deploy**: Push to GitHub and deploy on Vercel
4. **Build Features**: Add product catalog, checkout, etc.

## 🆘 Troubleshooting

### "Missing Flowhub configuration"
- Check `.env.local` exists
- Verify all three Flowhub variables are set
- Restart dev server after changing env vars

### "Products not loading"
- Verify Flowhub credentials are correct
- Check Flowhub API is accessible
- Look at browser network tab for errors

### Build errors
- Run `npm run type-check` to see TypeScript errors
- Run `npm run lint` to see code quality issues

## 📞 Need Help?

- **Flowhub Issues**: help@flowhub.com
- **Code Issues**: Check the main README.md
- **Quick Questions**: Review the code comments

---

**You're all set!** 🎉 Start building your dispensary website!
