"use client"

import type React from "react"

import { useTheme } from "@/lib/theme-provider"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useParams, useRouter } from "next/navigation"
import { SERVICES } from "@/lib/services"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function EditService() {
  const { language } = useTheme()
  const params = useParams()
  const router = useRouter()
  const isNew = params.id === "new"

  const service = isNew ? null : SERVICES.find((s) => s.id === params.id)

  const [formData, setFormData] = useState({
    nameAr: service?.nameAr || "",
    nameEn: service?.nameEn || "",
    descriptionAr: service?.descriptionAr || "",
    descriptionEn: service?.descriptionEn || "",
    category: service?.category || "support",
    price: service?.price || 0,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(language === "ar" ? "تم حفظ التغييرات" : "Changes saved")
    router.push("/admin/services")
  }

  return (
    <div>
      <Link href="/admin/services" className="flex items-center gap-2 text-accent hover:text-accent/80 mb-6">
        <ArrowLeft className="h-4 w-4" />
        {language === "ar" ? "العودة" : "Back"}
      </Link>

      <h1 className="text-3xl font-bold text-foreground mb-8">
        {isNew
          ? language === "ar"
            ? "إضافة خدمة جديدة"
            : "Add New Service"
          : language === "ar"
            ? "تعديل الخدمة"
            : "Edit Service"}
      </h1>

      <Card className="border border-border/40 bg-card/50 p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {language === "ar" ? "اسم الخدمة (العربية)" : "Service Name (Arabic)"}
              </label>
              <Input
                type="text"
                name="nameAr"
                value={formData.nameAr}
                onChange={handleChange}
                required
                className="bg-input border-border"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {language === "ar" ? "اسم الخدمة (الإنجليزية)" : "Service Name (English)"}
              </label>
              <Input
                type="text"
                name="nameEn"
                value={formData.nameEn}
                onChange={handleChange}
                required
                className="bg-input border-border"
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
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
                <option value="support">Support</option>
                <option value="transformation">Transformation</option>
                <option value="consulting">Consulting</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {language === "ar" ? "السعر" : "Price"}
              </label>
              <Input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                className="bg-input border-border"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              {language === "ar" ? "الوصف (العربية)" : "Description (Arabic)"}
            </label>
            <textarea
              name="descriptionAr"
              value={formData.descriptionAr}
              onChange={handleChange}
              required
              rows={4}
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
              rows={4}
              className="w-full px-3 py-2 bg-input border border-border rounded-md text-foreground"
            />
          </div>

          <div className="flex gap-4">
            <Button type="submit" className="bg-accent hover:bg-accent/90">
              {language === "ar" ? "حفظ" : "Save"}
            </Button>
            <Link href="/admin/services">
              <Button variant="outline">{language === "ar" ? "إلغاء" : "Cancel"}</Button>
            </Link>
          </div>
        </form>
      </Card>
    </div>
  )
}
