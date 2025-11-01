"use client"

import type React from "react"

import { useTheme } from "@/lib/theme-provider"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useParams, useRouter } from "next/navigation"
import { services, serviceCategories } from "@/lib/services"
import { ArrowLeft, Upload } from "lucide-react"
import Link from "next/link"
import { syncToGitHub, getGitHubConfig } from "@/lib/github-sync"

export default function EditService() {
  const { language } = useTheme()
  const params = useParams()
  const router = useRouter()
  const isNew = params.id === "new"

  const service = isNew ? null : services.find((s) => s.id === params.id)

  const [formData, setFormData] = useState({
    id: service?.id || `service-${Date.now()}`,
    nameAr: service?.nameAr || "",
    nameEn: service?.nameEn || "",
    descriptionAr: service?.descriptionAr || "",
    descriptionEn: service?.descriptionEn || "",
    category: service?.category || "support",
    price: service?.price || 0,
    currency: service?.currency || "SAR",
    image: service?.image || "",
    whatsappLink: service?.whatsappLink || "",
    detailedDescAr: service?.detailedDescAr || "",
    detailedDescEn: service?.detailedDescEn || "",
    options: service?.options || [],
  })

  const [isSaving, setIsSaving] = useState(false)
  const [saveStatus, setSaveStatus] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === "price" ? Number.parseFloat(value) : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)
    setSaveStatus(language === "ar" ? "جاري الحفظ..." : "Saving...")

    try {
      const config = await getGitHubConfig()
      if (!config?.token) {
        setSaveStatus(language === "ar" ? "يرجى تكوين GitHub" : "Please configure GitHub")
        setIsSaving(false)
        return
      }

      const updatedServices = isNew ? [...services, formData] : services.map((s) => (s.id === params.id ? formData : s))

      const fileContent = `export const services = ${JSON.stringify(updatedServices, null, 2)}`

      const result = await syncToGitHub(
        config,
        "lib/services.ts",
        fileContent,
        `[Admin] ${isNew ? "Added" : "Updated"} service: ${formData.nameEn}`,
      )

      if (result.success) {
        setSaveStatus(language === "ar" ? "تم الحفظ بنجاح" : "Saved successfully")
        setTimeout(() => router.push("/admin/services"), 1500)
      } else {
        setSaveStatus(result.message)
      }
    } catch (error) {
      setSaveStatus(error instanceof Error ? error.message : "Error saving")
    } finally {
      setIsSaving(false)
    }
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
                {serviceCategories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {language === "ar" ? cat.nameAr : cat.nameEn}
                  </option>
                ))}
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

          {saveStatus && <div className="p-3 bg-accent/10 text-accent rounded-lg text-sm">{saveStatus}</div>}

          <div className="flex gap-4">
            <Button type="submit" disabled={isSaving} className="gap-2 bg-accent hover:bg-accent/90">
              <Upload className="h-4 w-4" />
              {isSaving ? "Saving..." : language === "ar" ? "حفظ" : "Save"}
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
