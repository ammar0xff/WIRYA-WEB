"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/navigation/header"
import { MobileNav } from "@/components/navigation/mobile-nav"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import type { BlogPost } from "@/lib/blog-loader"
import { MarkdownRenderer } from "@/components/markdown-renderer"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useTheme } from "@/lib/theme-provider"

export default function BlogPostPageClient({ post: initialPost }: { post: BlogPost | null }) {
  const { language } = useTheme()
  const [post, setPost] = useState<BlogPost | null>(initialPost)

  // This useEffect is kept for cases where the post might be loaded dynamically
  // or if initialPost is null and we need to fetch it.
  useEffect(() => {
    if (!initialPost) {
      // In a real app, you might fetch the post here based on params.id
      // For this refactor, we assume initialPost is sufficient or the server component handled it.
      // If you need to fetch, you'd need to pass params.id here or use a different approach.
    } else {
      setPost(initialPost)
    }
  }, [initialPost])

  if (!post) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold">{language === "ar" ? "المقال غير موجود" : "Post not found"}</h1>
        </div>
        <Footer />
        <ScrollToTop />
        <MobileNav />
      </main>
    )
  }

  const title = language === "ar" ? post.titleAr : post.titleEn
  const content = language === "ar" ? post.contentAr : post.contentEn

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary">{post.category}</Badge>
            {post.series && <Badge variant="outline">{post.series}</Badge>}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{title}</h1>

          <div className="flex flex-wrap gap-4 text-muted-foreground text-sm">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString(language === "ar" ? "ar-SA" : "en-US")}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>
                {post.readTime} {language === "ar" ? "دقائق" : "min read"}
              </span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        {post.image && (
          <div className="mb-8 rounded-lg overflow-hidden">
            <img src={post.image || "/placeholder.svg"} alt={title} className="w-full h-auto" />
          </div>
        )}

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <MarkdownRenderer content={content} />
        </div>

        {/* Back to Blog */}
        <div className="mt-12 pt-8 border-t">
          <Link href="/blog">
            <Button variant="outline" className="gap-2 bg-transparent">
              <ArrowRight className={`w-4 h-4 ${language === "ar" ? "rotate-180" : ""}`} />
              {language === "ar" ? "العودة إلى المدونة" : "Back to Blog"}
            </Button>
          </Link>
        </div>
      </article>

      <Footer />
      <ScrollToTop />
      <div className="h-20 md:h-0" />
      <MobileNav />
    </main>
  )
}
