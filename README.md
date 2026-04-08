# NEXOVA Consulting

A hyper-modern management consulting website built with cutting-edge web technologies for optimal performance, accessibility, and user experience.

## Tech Stack

[![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3+-06b6d4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-10+-0055ff?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com/)

## Features

- **Modern Architecture**: Built with Next.js 14+ and React 18 for server-side rendering and static generation
- **Type Safety**: Full TypeScript support for robust, maintainable code
- **Responsive Design**: Mobile-first approach with Tailwind CSS for pixel-perfect layouts
- **Smooth Animations**: Framer Motion for elegant, performant animations
- **SEO Optimized**: 158+ indexed pages with structured data, XML sitemap, and robots.txt
- **Performance**: Optimized images, code splitting, and caching strategies
- **Security Headers**: CORS, CSP, X-Frame-Options, and XSS protection configured
- **Analytics Ready**: Google Analytics integration via environment variables
- **Production Ready**: Comprehensive error handling and logging

## Getting Started

### Prerequisites

- Node.js 16+ and npm 7+

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The site will be available at `http://localhost:3000`

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

### Linting and Type Checking

```bash
# Run ESLint
npm run lint

# Type checking
npx tsc --noEmit
```

## Project Structure

```
nexova-consulting/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── (pages)/             # Grouped pages
│   │   ├── about/
│   │   ├── services/
│   │   ├── case-studies/
│   │   ├── blog/
│   │   ├── contact/
│   │   └── ...
│   ├── api/                 # API routes
│   └── sitemap.ts           # Dynamic sitemap
├── components/               # Reusable React components
│   ├── ui/                  # UI primitives
│   ├── layout/              # Layout components
│   ├── sections/            # Page sections
│   └── ...
├── public/                   # Static assets
│   ├── fonts/               # Custom fonts (cached)
│   ├── images/              # Optimized images
│   └── ...
├── styles/                   # Global styles
├── lib/                      # Utilities and helpers
├── config/                   # Configuration files
├── vercel.json              # Vercel deployment config
├── next.config.js           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS config
├── tsconfig.json            # TypeScript config
└── package.json             # Dependencies and scripts
```

## Deployment

### Vercel (Recommended)

The project is optimized for Vercel deployment. Simply connect your Git repository:

1. Visit [vercel.com](https://vercel.com)
2. Import this repository
3. Environment variables are automatically configured from `.env` files
4. Deploy with a single click

```bash
# Deploy with Vercel CLI
vercel deploy
```

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```env
NEXT_PUBLIC_SITE_URL=https://nexova.consulting
NEXT_PUBLIC_GA_ID=your-ga-id
```

## SEO Features

- **158+ Indexed Pages**: Comprehensive content coverage for maximum search visibility
- **Structured Data**: Schema.org markup for rich snippets in search results
- **XML Sitemap**: Auto-generated at `/sitemap.xml` for search engine crawling
- **Meta Tags**: Dynamic meta titles, descriptions, and OG tags on all pages
- **Performance Metrics**: Core Web Vitals optimized for SEO rankings
- **Mobile Friendly**: Responsive design for all screen sizes

## Security

Configured security headers:
- `X-Content-Type-Options: nosniff` - Prevents MIME type sniffing
- `X-Frame-Options: DENY` - Prevents clickjacking attacks
- `X-XSS-Protection: 1; mode=block` - XSS protection
- `Referrer-Policy: strict-origin-when-cross-origin` - Privacy protection

Font assets include long-term caching headers for optimal performance.

## Performance

- **Image Optimization**: Next.js Image component for automatic optimization
- **Code Splitting**: Automatic route-based code splitting
- **Font Optimization**: Preloading and caching of custom fonts
- **Compression**: Gzip and Brotli compression on Vercel
- **CDN**: Global CDN for fast content delivery

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add some amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## License

This project is proprietary and confidential to NEXOVA Consulting.

## Support

For questions or issues, please contact the development team or open an issue in the repository.

---

Built with passion by the NEXOVA Consulting team
