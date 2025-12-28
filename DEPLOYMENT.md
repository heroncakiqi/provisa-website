# Deployment Guide - PROvisa Website

## Quick Deployment Options

### Option 1: Netlify (Recommended for forms)

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

**For forms to work on Netlify:**
- Netlify has built-in form handling
- Or set up Netlify Functions for the API endpoint

### Option 2: Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Vercel auto-detects Astro settings
6. Click "Deploy"

**For forms:**
- Use Vercel Serverless Functions
- The API route at `src/pages/api/submit-form.ts` works automatically

### Option 3: Cloudflare Pages

1. Push to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com)
3. "Create a project" → Connect Git
4. Build settings:
   - Build command: `npm run build`
   - Build output: `dist`
5. Deploy

**For forms:**
- Use Cloudflare Workers for the API endpoint
- Or integrate with Cloudflare Email Workers

## Setting Up Email Functionality

### Option A: Using Resend (Recommended)

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Install Resend:
   ```bash
   npm install resend
   ```

4. Update `src/pages/api/submit-form.ts`:
   ```typescript
   import { Resend } from 'resend';

   const resend = new Resend(import.meta.env.RESEND_API_KEY);

   // In the POST handler, replace the TODO section with:
   await resend.emails.send({
     from: 'PROvisa <onboarding@resend.dev>',
     to: 'provisa.agency@gmail.com',
     subject: emailSubject,
     text: emailBody,
   });
   ```

5. Add environment variable in your deployment platform:
   - `RESEND_API_KEY=your_api_key_here`

### Option B: Using SendGrid

1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Get your API key
3. Install SendGrid:
   ```bash
   npm install @sendgrid/mail
   ```

4. Update the API route with SendGrid implementation

### Option C: Using Nodemailer (SMTP)

1. Install Nodemailer:
   ```bash
   npm install nodemailer
   ```

2. Configure with your SMTP settings (Gmail, etc.)
3. Update the API route accordingly

## Social Media Links

**Important:** Update these links with actual PROvisa profiles:

In `src/components/Header.astro` and `src/components/Footer.astro`:
- Facebook: Replace `https://www.facebook.com` with actual page
- Instagram: Replace `https://www.instagram.com` with actual profile

The WhatsApp link is already configured: `https://wa.me/38345502582`

## Custom Domain Setup

### On Netlify:
1. Go to Site settings → Domain management
2. Add custom domain: `www.provisaagency.com`
3. Follow DNS configuration instructions

### On Vercel:
1. Go to Project Settings → Domains
2. Add `www.provisaagency.com`
3. Configure DNS records as instructed

### On Cloudflare Pages:
1. Go to Custom domains
2. Add `www.provisaagency.com`
3. DNS is auto-configured if domain is on Cloudflare

## SSL Certificate

All three platforms provide free automatic SSL certificates (HTTPS).

## Performance Optimization

The site is already optimized with:
- Astro's static generation
- Tailwind CSS purging
- Minimal JavaScript
- Optimized assets

Expected Lighthouse scores:
- Performance: 95-100
- Accessibility: 90-100
- Best Practices: 90-100
- SEO: 90-100

## Monitoring

Set up monitoring with:
- Google Analytics
- Netlify/Vercel Analytics
- Uptime monitoring (UptimeRobot, etc.)

## Maintenance

### Updating Content
Edit `src/pages/index.astro` for content changes.

### Updating Contact Info
Update contact details in:
- `src/components/Footer.astro`
- `src/pages/index.astro` (Contact section)

### Testing Forms Locally

To test forms without email setup:
1. Check browser console for form data
2. Review `src/pages/api/submit-form.ts` console logs
3. The form will show success message even without email

## Troubleshooting

### Forms not working after deployment
- Check that output mode is set to `hybrid` or `server` in `astro.config.mjs`
- Verify environment variables are set correctly
- Check deployment platform logs for errors

### Images not loading
- Ensure images are in `public/` folder
- Check image paths start with `/`

### Build fails
- Run `npm run build` locally first
- Check for TypeScript errors
- Verify all dependencies are installed

## Support

For questions about deployment, consult:
- [Astro Deployment Docs](https://docs.astro.build/en/guides/deploy/)
- Platform-specific documentation
- PROvisa technical contact

---

**Last updated:** December 2025
