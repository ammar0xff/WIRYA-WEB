# Werya Website

A modern, bilingual (Arabic/English) website for Werya - a digital transformation and technology solutions company.

## Features

- **Bilingual Support**: Full Arabic and English language support with RTL/LTR layout switching
- **Dark/Light Mode**: Theme switching with persistent preferences
- **Inline Content System**: Blog posts and services with markdown support stored directly in code
- **Service Management**: Display services with detailed descriptions and pricing options
- **Advanced Filtering**: Search and filter blog posts by category, series, and keywords
- **Responsive Design**: Mobile-first design with smooth animations
- **WhatsApp Integration**: Direct ordering through WhatsApp

## Project Structure

\`\`\`
├── app/                      # Next.js app directory
│   ├── page.tsx             # Homepage
│   ├── services/            # Services pages
│   ├── blog/                # Blog pages
│   └── about/               # About page
├── components/              # React components
│   ├── navigation/          # Header and mobile nav
│   ├── animations/          # Animation components
│   ├── ui/                  # shadcn/ui components
│   ├── footer.tsx           # Footer component
│   ├── scroll-to-top.tsx    # Scroll to top button
│   └── markdown-renderer.tsx # Markdown renderer
├── lib/                     # Utility functions
│   ├── blog-loader.ts       # Blog posts with inline markdown
│   ├── services.ts          # Services data with inline markdown
│   ├── i18n.ts             # Translations
│   └── theme-provider.tsx   # Theme context
└── public/                  # Static assets
\`\`\`

## How to Add Content

### Adding a Blog Post

Edit `lib/blog-loader.ts` and add a new post object to the `BLOG_POSTS` array:

\`\`\`typescript
{
  id: "your-post-id",
  slug: "your-post-slug",
  category: "transformation", // or "security", "technology"
  titleAr: "عنوان المقال بالعربي",
  titleEn: "Article Title in English",
  descriptionAr: "وصف قصير بالعربي",
  descriptionEn: "Short description in English",
  author: "Author Name",
  date: "2024-10-31", // YYYY-MM-DD format
  readTime: 5, // Reading time in minutes
  image: "/image.png",
  series: "Series Name", // Optional
  contentAr: `# عنوان المقال
  
  محتوى المقال بالعربي بصيغة Markdown...
  
  ## قسم فرعي
  نص إضافي...`,
  contentEn: `# Article Title
  
  Article content in English using Markdown...
  
  ## Subsection
  Additional text...`,
}
\`\`\`

The post will automatically appear on the blog page sorted by date.

### Adding a Service

Edit `lib/services.ts` and add a new service object to the `services` array:

\`\`\`typescript
{
  id: "your-service-id",
  category: "support", // Choose from: support, transformation, consulting, optimization, security, development
  nameAr: "اسم الخدمة بالعربي",
  nameEn: "Service Name in English",
  descriptionAr: "وصف قصير بالعربي",
  descriptionEn: "Short description in English",
  price: 999, // Base price
  currency: "SAR",
  image: "/your-image.jpg", // Add image to /public folder
  detailedDescAr: "وصف تفصيلي بالعربي",
  detailedDescEn: "Detailed description in English",
  // Optional: Add long markdown descriptions
  longDescriptionAr: `# وصف طويل بالعربي
  
  محتوى مفصل بصيغة Markdown...`,
  longDescriptionEn: `# Long Description in English
  
  Detailed content in Markdown...`,
  options: [
    { id: "basic", nameAr: "باقة أساسية", nameEn: "Basic Package", priceModifier: 0 },
    { id: "pro", nameAr: "باقة احترافية", nameEn: "Pro Package", priceModifier: 500 },
  ],
  whatsappLink: "https://wa.me/96612345678?text=I%20want%20to%20order%20YourService",
}
\`\`\`

The service will automatically appear on the services page.

## Building and Deployment

### Local Development

\`\`\`bash
npm install
npm run dev
\`\`\`

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

### Deploy to Vercel

Click the "Publish" button in v0 or connect your GitHub repository to Vercel.

## Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **shadcn/ui** - UI components
- **React Markdown** - Markdown rendering
- **Lucide Icons** - Icon library

## License

© 2025 Werya. All rights reserved.
