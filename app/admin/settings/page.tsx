"use client"

import type React from "react"

import { useTheme } from "@/lib/theme-provider"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Moon, Sun } from "lucide-react"

export default function AdminSettings() {
  const { language, setLanguage, theme, setTheme } = useTheme()

  const [settings, setSettings] = useState({
    siteName: "Werya",
    siteDescription: "Werya offers innovative digital transformation and technology solutions",
    contactEmail: "info@werya.com",
    contactPhone: "+966 50 123 4567",
    whatsapp: "+966501234567",
    twitterUrl: "https://twitter.com/werya",
    linkedinUrl: "https://linkedin.com/company/werya",
    instagramUrl: "https://instagram.com/werya",
    facebookUrl: "https://facebook.com/werya",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setSettings((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSave = () => {
    alert(language === "ar" ? "تم حفظ الإعدادات" : "Settings saved")
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-foreground mb-8">{language === "ar" ? "الإعدادات" : "Settings"}</h1>

      <div className="space-y-6">
        {/* General Settings */}
        <Card className="border border-border/40 bg-card/50 p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            {language === "ar" ? "الإعدادات العامة" : "General Settings"}
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {language === "ar" ? "اسم الموقع" : "Site Name"}
              </label>
              <Input
                type="text"
                name="siteName"
                value={settings.siteName}
                onChange={handleChange}
                className="bg-input border-border"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {language === "ar" ? "وصف الموقع" : "Site Description"}
              </label>
              <textarea
                name="siteDescription"
                value={settings.siteDescription}
                onChange={handleChange}
                rows={3}
                className="w-full px-3 py-2 bg-input border border-border rounded-md text-foreground"
              />
            </div>
          </div>
        </Card>

        {/* Contact Information */}
        <Card className="border border-border/40 bg-card/50 p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            {language === "ar" ? "معلومات الاتصال" : "Contact Information"}
          </h2>
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {language === "ar" ? "البريد الإلكتروني" : "Email"}
                </label>
                <Input
                  type="email"
                  name="contactEmail"
                  value={settings.contactEmail}
                  onChange={handleChange}
                  className="bg-input border-border"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {language === "ar" ? "رقم الهاتف" : "Phone"}
                </label>
                <Input
                  type="tel"
                  name="contactPhone"
                  value={settings.contactPhone}
                  onChange={handleChange}
                  className="bg-input border-border"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {language === "ar" ? "رقم WhatsApp" : "WhatsApp Number"}
              </label>
              <Input
                type="tel"
                name="whatsapp"
                value={settings.whatsapp}
                onChange={handleChange}
                className="bg-input border-border"
              />
            </div>
          </div>
        </Card>

        {/* Social Media */}
        <Card className="border border-border/40 bg-card/50 p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            {language === "ar" ? "وسائل التواصل الاجتماعي" : "Social Media"}
          </h2>
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Twitter</label>
                <Input
                  type="url"
                  name="twitterUrl"
                  value={settings.twitterUrl}
                  onChange={handleChange}
                  className="bg-input border-border"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">LinkedIn</label>
                <Input
                  type="url"
                  name="linkedinUrl"
                  value={settings.linkedinUrl}
                  onChange={handleChange}
                  className="bg-input border-border"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Instagram</label>
                <Input
                  type="url"
                  name="instagramUrl"
                  value={settings.instagramUrl}
                  onChange={handleChange}
                  className="bg-input border-border"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Facebook</label>
                <Input
                  type="url"
                  name="facebookUrl"
                  value={settings.facebookUrl}
                  onChange={handleChange}
                  className="bg-input border-border"
                />
              </div>
            </div>
          </div>
        </Card>

        {/* Theme & Language */}
        <Card className="border border-border/40 bg-card/50 p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            {language === "ar" ? "المظهر واللغة" : "Appearance & Language"}
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-3">
                {language === "ar" ? "المظهر" : "Theme"}
              </label>
              <div className="flex gap-4">
                <button
                  onClick={() => setTheme("light")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-colors ${
                    theme === "light"
                      ? "border-accent bg-accent/10 text-accent"
                      : "border-border/40 text-foreground/60 hover:border-border/60"
                  }`}
                >
                  <Sun className="h-4 w-4" />
                  {language === "ar" ? "فاتح" : "Light"}
                </button>
                <button
                  onClick={() => setTheme("dark")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-colors ${
                    theme === "dark"
                      ? "border-accent bg-accent/10 text-accent"
                      : "border-border/40 text-foreground/60 hover:border-border/60"
                  }`}
                >
                  <Moon className="h-4 w-4" />
                  {language === "ar" ? "داكن" : "Dark"}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-3">
                {language === "ar" ? "اللغة" : "Language"}
              </label>
              <div className="flex gap-4">
                <button
                  onClick={() => setLanguage("ar")}
                  className={`px-4 py-2 rounded-lg border-2 transition-colors ${
                    language === "ar"
                      ? "border-accent bg-accent/10 text-accent"
                      : "border-border/40 text-foreground/60 hover:border-border/60"
                  }`}
                >
                  العربية
                </button>
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-4 py-2 rounded-lg border-2 transition-colors ${
                    language === "en"
                      ? "border-accent bg-accent/10 text-accent"
                      : "border-border/40 text-foreground/60 hover:border-border/60"
                  }`}
                >
                  English
                </button>
              </div>
            </div>
          </div>
        </Card>

        <div className="flex gap-4">
          <Button onClick={handleSave} className="bg-accent hover:bg-accent/90">
            {language === "ar" ? "حفظ الإعدادات" : "Save Settings"}
          </Button>
        </div>
      </div>
    </div>
  )
}
