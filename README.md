# Werya - Digital Transformation Solutions

A modern, bilingual (Arabic/English) website for Werya, showcasing digital transformation and technology solutions with a focus on user experience and accessibility.

![Werya Website](public/logo.png)

## Overview

Werya's website is built with Next.js 16 and features a fully responsive design with bilingual support, dark/light theme switching, and dynamic content management. The site serves as a platform to showcase services, share insights through blog posts, and connect with clients.

## Key Features

### Multilingual Support
- **Arabic & English**: Complete bilingual interface with automatic RTL/LTR layout switching
- **Persistent Language Preference**: User's language choice is saved across sessions
- **Localized Content**: All content available in both languages

### Theme System
- **Dark & Light Modes**: Seamless theme switching with smooth transitions
- **System Preference Detection**: Automatically matches user's system theme
- **Persistent Theme**: Theme preference saved in local storage

### Content Management
- **Blog System**: Dynamic blog with markdown support, categories, and series
- **Service Catalog**: Comprehensive service listings with detailed descriptions
- **Search & Filter**: Advanced filtering by category, series, and keywords
- **Static Generation**: All pages pre-rendered for optimal performance

### User Experience
- **Responsive Design**: Mobile-first approach with optimized layouts for all devices
- **Smooth Animations**: Fade-in, scale-on-scroll, and parallax effects
- **3D Background**: Interactive Three.js background on homepage
- **Scroll to Top**: Convenient navigation button for long pages
- **Loading States**: Skeleton loaders and spinners for better perceived performance

### Integrations
- **WhatsApp**: Direct service ordering through WhatsApp
- **Analytics**: Vercel Analytics integration
- **SEO Optimized**: Meta tags, Open Graph, and structured data

## Tech Stack

### Core
- **Next.js 16** - React framework with App Router and Server Components
- **React 19** - Latest React features including Server Components
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first CSS framework

### UI & Components
- **shadcn/ui** - High-quality, accessible component library
- **Radix UI** - Unstyled, accessible component primitives
- **Lucide Icons** - Beautiful, consistent icon set
- **React Markdown** - Markdown rendering with syntax highlighting

### 3D & Animations
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for React Three Fiber

### Development Tools
- **Bun** - Fast JavaScript runtime and package manager
- **ESLint** - Code linting
- **PostCSS** - CSS processing

## Project Structure

\`\`\`
wirya-website/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with providers
│   ├── page.tsx                 # Homepage
│   ├── about/                   # About page
│   ├── blog/                    # Blog pages
│   │   ├── page.tsx            # Blog listing with filters
│   │   └── [id]/               # Individual blog posts
│   ├── services/                # Services pages
│   │   ├── page.tsx            # Services listing
│   │   └── [id]/               # Individual service details
│   ├── contact/                 # Contact page
│   ├── story/                   # Company story page
│   └── settings/                # User settings page
│
├── components/                   # React components
│   ├── navigation/              # Navigation components
│   │   ├── header.tsx          # Main header with nav
│   │   └── mobile-nav.tsx      # Mobile navigation drawer
│   ├── animations/              # Animation components
│   │   ├── fade-in.tsx         # Fade-in animation wrapper
│   │   └── scale-on-scroll.tsx # Scale animation on scroll
│   ├── ui/                      # shadcn/ui components
│   │   ├── button.tsx          # Button component
│   │   ├── card.tsx            # Card component
│   │   ├── input.tsx           # Input component
│   │   └── ...                 # Other UI components
│   ├── 3d-background.tsx        # Three.js background
│   ├── footer.tsx               # Site footer
│   ├── scroll-to-top.tsx        # Scroll to top button
│   ├── loading-spinner.tsx      # Loading spinner
│   └── markdown-renderer.tsx    # Markdown content renderer
│
├── lib/                         # Utility functions and data
│   ├── blog-loader.ts          # Blog posts data and loader
│   ├── services.ts             # Services data
│   ├── i18n.ts                 # Translations and i18n utilities
│   ├── theme-provider.tsx      # Theme context provider
│   └── utils.ts                # Utility functions
│
├── public/                      # Static assets
│   ├── logo.png                # Company logo
│   ├── symbol.png              # Company symbol
│   └── pattern.png             # Background pattern
│
└── content/                     # Content files (future use)
    ├── posts/                  # Blog post markdown files
    └── services/               # Service markdown files
\`\`\`

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Git

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/your-org/wirya-website.git
cd wirya-website
\`\`\`

2. Install dependencies:
\`\`\`bash
bun install
# or
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
bun dev
# or
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

\`\`\`bash
bun run build
bun start
# or
npm run build
npm start
\`\`\`

## Content Management

### Adding a Blog Post

Blog posts are stored in `lib/blog-loader.ts`. Add a new post to the `BLOG_POSTS` array:

\`\`\`typescript
{
  id: "unique-post-id",
  slug: "url-friendly-slug",
  category: "transformation", // Options: transformation, security, technology
  titleAr: "عنوان المقال بالعربية",
  titleEn: "Article Title in English",
  descriptionAr: "وصف مختصر بالعربية",
  descriptionEn: "Brief description in English",
  author: "Author Name",
  date: "2024-12-01", // YYYY-MM-DD format
  readTime: 5, // Estimated reading time in minutes
  image: "/blog-image.jpg", // Image path in public folder
  series: "Series Name", // Optional: Group related posts
  contentAr: `
# عنوان المقال

محتوى المقال بالعربية باستخدام Markdown...

## قسم فرعي
نص إضافي...

- نقطة أولى
- نقطة ثانية
  `,
  contentEn: `
# Article Title

Article content in English using Markdown...

## Subsection
Additional text...

- First point
- Second point
  `,
}
\`\`\`

**Markdown Support:**
- Headings: `# H1`, `## H2`, `### H3`
- Bold: `**bold text**`
- Italic: `*italic text*`
- Lists: `- item` or `1. item`
- Links: `[text](url)`
- Images: `![alt](url)`
- Code: `` `inline` `` or ` \`\`\`language\ncode\n\`\`\` `

### Adding a Service

Services are stored in `lib/services.ts`. Add a new service to the `services` array:

\`\`\`typescript
{
  id: "unique-service-id",
  category: "support", // Options: support, transformation, consulting, optimization, security, development
  nameAr: "اسم الخدمة بالعربية",
  nameEn: "Service Name in English",
  descriptionAr: "وصف مختصر بالعربية",
  descriptionEn: "Brief description in English",
  price: 999, // Base price in SAR
  currency: "SAR",
  image: "/service-image.jpg", // Image path in public folder
  detailedDescAr: "وصف تفصيلي بالعربية",
  detailedDescEn: "Detailed description in English",
  
  // Optional: Long markdown descriptions
  longDescriptionAr: `
# وصف مفصل بالعربية

محتوى تفصيلي عن الخدمة...
  `,
  longDescriptionEn: `
# Detailed Description in English

Detailed content about the service...
  `,
  
  // Pricing options
  options: [
    {
      id: "basic",
      nameAr: "الباقة الأساسية",
      nameEn: "Basic Package",
      priceModifier: 0 // Added to base price
    },
    {
      id: "premium",
      nameAr: "الباقة المميزة",
      nameEn: "Premium Package",
      priceModifier: 500
    },
  ],
  
  // WhatsApp order link
  whatsappLink: "https://wa.me/966XXXXXXXXX?text=I%20want%20to%20order%20ServiceName",
}
\`\`\`

### Updating Translations

Translations are managed in `lib/i18n.ts`. Add new translation keys:

\`\`\`typescript
export const translations = {
  en: {
    // ... existing translations
    newKey: "New translation",
  },
  ar: {
    // ... existing translations
    newKey: "ترجمة جديدة",
  },
}
\`\`\`

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Click "Deploy"

### Deploy to GitHub Pages

This project includes a GitHub Actions workflow for automatic deployment to GitHub Pages:

1. **Enable GitHub Pages**:
   - Go to your repository Settings → Pages
   - Under "Build and deployment", select "GitHub Actions" as the source

2. **Update Base Path**:
   - The `next.config.mjs` is configured with `basePath: '/WIRYA-WEB'`
   - If your repository name is different, update this value in `next.config.mjs`

3. **Push to Main Branch**:
   - The workflow automatically triggers on push to `main` branch
   - Your site will be available at `https://[username].github.io/[repo-name]`

4. **Manual Deployment**:
   - Go to Actions tab in your repository
   - Select "Deploy to GitHub Pages" workflow
   - Click "Run workflow"

**Note**: GitHub Pages serves static files only. Some features like API routes and server actions won't work. The site will function as a fully static website with all content pre-rendered at build time.

### Deploy to Other Platforms

The site can be deployed to any platform that supports Next.js:

- **Netlify**: Use the Next.js plugin
- **AWS Amplify**: Configure build settings for Next.js
- **Docker**: Use the included Dockerfile (if available)

### Environment Variables

No environment variables are required for basic functionality. Optional integrations may require:

- `NEXT_PUBLIC_ANALYTICS_ID` - Analytics tracking ID
- `NEXT_PUBLIC_WHATSAPP_NUMBER` - Default WhatsApp number

## Customization

### Changing Colors

Edit `app/globals.css` to modify the color scheme:

\`\`\`css
@theme inline {
  --color-primary: #0066cc;
  --color-secondary: #00ccff;
  /* ... other colors */
}
\`\`\`

### Changing Fonts

Edit `app/layout.tsx` to change fonts:

\`\`\`typescript
import { Cute_Font as YourFont } from 'next/font/google'

const yourFont = YourFont({ subsets: ['latin'] })
\`\`\`

Then update `app/globals.css`:

\`\`\`css
@theme inline {
  --font-sans: 'Your Font', sans-serif;
}
\`\`\`

### Modifying the 3D Background

Edit `components/3d-background.tsx` to customize the Three.js scene, particles, and animations.

## Performance

- **Lighthouse Score**: 95+ across all metrics
- **Static Generation**: All pages pre-rendered at build time
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting per route
- **Bundle Size**: Optimized with tree shaking and minification

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

© 2025 Werya. All rights reserved.

## Support

For questions or support, contact:
- Website: [wirya.com](https://wirya.com)
- Email: info@wirya.com
- WhatsApp: +966 XX XXX XXXX

---

Built with ❤️ by Werya Team
