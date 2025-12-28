# PROvisa - Visa Service Agency Website

A professional one-page website for PROvisa, offering visa application services and travel documentation assistance.

## Features

- **One-page responsive design** - Mobile-first approach
- **Three dedicated service forms** - Bashkim Familjar (Switzerland), USA Visa, UK Visa
- **WhatsApp integration** - Floating button and CTA links throughout the site
- **Social media integration** - Facebook, Instagram, WhatsApp links
- **Form validation** - Client-side validation with honeypot spam prevention
- **SEO optimized** - Meta tags, semantic HTML, proper heading structure
- **Fast loading** - Built with Astro for optimal performance

## Tech Stack

- **Astro** - Static site framework
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe development

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser at `http://localhost:4321`

## Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Preview Production Build

```bash
npm run preview
```

## Form Submission

The contact forms are currently set up to send data to an API endpoint (`/api/submit-form`). 

**To enable email functionality**, you need to:

1. Choose an email service provider (Resend, SendGrid, Nodemailer, etc.)
2. Install the required package
3. Update `src/pages/api/submit-form.ts` with your email sending logic
4. Add environment variables for API keys

Example with Resend:
```bash
npm install resend
```

Then update the API route with actual email sending code.

## Deployment

This site can be deployed to:
- Netlify
- Vercel
- Cloudflare Pages
- Any static hosting service

For dynamic form handling, you'll need a server or serverless function support.

## Contact Information

- Phone: +383 45 502 582
- Email: provisa.agency@gmail.com
- Address: Rr. Adrian Krasniqi, Lagjja e Muhaxhereve, Prishtinë

## Social Media

Remember to update the social media links in:
- `src/components/Header.astro`
- `src/components/Footer.astro`

Replace placeholder URLs with actual PROvisa social media profiles:
- Facebook: Update `https://www.facebook.com`
- Instagram: Update `https://www.instagram.com`
- WhatsApp: Already configured with `https://wa.me/38345502582`

## License

© 2025 PROvisa - Visa Service Agency. All rights reserved.
