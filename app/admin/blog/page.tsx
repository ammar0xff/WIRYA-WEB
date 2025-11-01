"use client"

import { useTheme } from "@/lib/theme-provider"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Edit2, Trash2 } from "lucide-react"
import Link from "next/link"
import { BLOG_POSTS } from "@/lib/blog-loader"

export default function BlogManager() {
  const { language } = useTheme()
  const [posts, setPosts] = useState(BLOG_POSTS)

  const handleDelete = (id: string) => {
    if (confirm(language === "ar" ? "هل تريد حذف هذا المقال؟" : "Delete this post?")) {
      setPosts(posts.filter((p) => p.id !== id))
    }
  }

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            {language === "ar" ? "إدارة المقالات" : "Manage Blog Posts"}
          </h1>
          <p className="mt-2 text-foreground/60">
            {language === "ar" ? `لديك ${posts.length} مقالة` : `You have ${posts.length} posts`}
          </p>
        </div>
        <Link href="/admin/blog/new">
          <Button className="gap-2 bg-accent hover:bg-accent/90">
            <Plus className="h-4 w-4" />
            {language === "ar" ? "كتابة مقال" : "Write Post"}
          </Button>
        </Link>
      </div>

      <div className="grid gap-4">
        {posts.map((post) => (
          <Card key={post.id} className="border border-border/40 bg-card/50 p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded font-medium">
                    {post.category}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground">{language === "ar" ? post.titleAr : post.titleEn}</h3>
                <p className="mt-2 text-sm text-foreground/60 line-clamp-2">
                  {language === "ar" ? post.descriptionAr : post.descriptionEn}
                </p>
                <div className="mt-3 flex items-center gap-4 text-xs text-foreground/50">
                  <span>{post.author}</span>
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <span>{post.readTime} min read</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Link href={`/admin/blog/${post.id}`}>
                  <Button variant="outline" size="sm">
                    <Edit2 className="h-4 w-4" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDelete(post.id)}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
