"use client"

import type React from "react"

import { useTheme } from "@/lib/theme-provider"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MarkdownEditor } from "@/components/admin/markdown-editor"
import { useParams, useRouter } from "next/navigation"
import { BLOG_POSTS } from "@/lib/blog-loader"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ClientBlogPostEditPage() {
  const { language } = useTheme()
  const params = useParams()
  const router = useRouter()
  const isNew = params.id === "new"

  const post = isNew ? null : BLOG_POSTS.find((p) => p.id === params.id)

  const [formData, setFormData] = useState({
    titleAr: post?.titleAr || "",
    titleEn: post?.titleEn || "",
    descriptionAr: post?.descriptionAr || "",
    descriptionEn: post?.descriptionEn || "",
    category: post?.category || "technology",
    author: post?.author || "",
    date: post?.date || new Date().toISOString().split("T")[0],
    readTime: post?.readTime || 5,
    contentAr: post?.contentAr || "",
    contentEn: post?.contentEn || "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleMarkdownChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(language === "ar" ? "تم حفظ المقال" : "Post saved")
    router.push("/admin/blog")
  }

  return (
    <div>
      <Link href="/admin/blog" className="flex items-center gap-2 text-accent hover:text-accent/80 mb-6">
        <ArrowLeft className="h-4 w-4" />
        {language === "ar" ? "العودة" : "Back"}
      </Link>

      <h1 className="text-3xl font-bold text-foreground mb-8">
        {isNew
          ? language === "ar"
            ? "كتابة مقال جديد"
            : "Write New Post"
          : language === "ar"
            ? "تعديل المقال"
            : "Edit Post"}
      </h1>

      <Card className="border border-border/40 bg-card/50 p-6">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {language === "ar" ? "العنوان (العربية)" : "Title (Arabic)"}
              </label>
              <Input
                type="text"
                name="titleAr"
                value={formData.titleAr}
                onChange={handleChange}
                required
                className="bg-input border-border"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {language === "ar" ? "العنوان (الإنجليزية)" : "Title (English)"}
              </label>
              <Input
                type="text"
                name="titleEn"
                value={formData.titleEn}
                onChange={handleChange}
                required
                className="bg-input border-border"
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {language === "ar" ? "الفئة" : "Category"}
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-input border border-border rounded-md text-foreground"
              >
                <option value="technology">Technology</option>
                <option value="transformation">Transformation</option>
                <option value="security">Security</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {language === "ar" ? "الكاتب" : "Author"}
              </label>
              <Input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                required
                className="bg-input border-border"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {language === "ar" ? "وقت القراءة (دقائق)" : "Read Time (minutes)"}
              </label>
              <Input
                type="number"
                name="readTime"
                value={formData.readTime}
                onChange={handleChange}
                required
                className="bg-input border-border"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              {language === "ar" ? "تاريخ النشر" : "Publication Date"}
            </label>
            <Input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="bg-input border-border"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {language === "ar" ? "الوصف (العربية)" : "Description (Arabic)"}
              </label>
              <textarea
                name="descriptionAr"
                value={formData.descriptionAr}
                onChange={handleChange}
                required
                rows={3}
                className="w-full px-3 py-2 bg-input border border-border rounded-md text-foreground"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {language === "ar" ? "الوصف (الإنجليزية)" : "Description (English)"}
              </label>
              <textarea
                name="descriptionEn"
                value={formData.descriptionEn}
                onChange={handleChange}
                required
                rows={3}
                className="w-full px-3 py-2 bg-input border border-border rounded-md text-foreground"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              {language === "ar" ? "المحتوى (العربية)" : "Content (Arabic) - Markdown"}
            </label>
            <MarkdownEditor
              value={formData.contentAr}
              onChange={(val) => handleMarkdownChange("contentAr", val)}
              language="ar"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              {language === "ar" ? "المحتوى (الإنجليزية)" : "Content (English) - Markdown"}
            </label>
            <MarkdownEditor
              value={formData.contentEn}
              onChange={(val) => handleMarkdownChange("contentEn", val)}
              language="en"
            />
          </div>

          <div className="flex gap-4">
            <Button type="submit" className="bg-accent hover:bg-accent/90">
              {language === "ar" ? "حفظ" : "Save"}
            </Button>
            <Link href="/admin/blog">
              <Button variant="outline">{language === "ar" ? "إلغاء" : "Cancel"}</Button>
            </Link>
          </div>
        </form>
      </Card>
    </div>
  )
}
