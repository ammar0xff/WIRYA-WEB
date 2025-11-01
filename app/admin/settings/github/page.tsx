"use client"

import type React from "react"

import { useTheme } from "@/lib/theme-provider"
import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { getGitHubConfig, saveGitHubConfig } from "@/lib/github-sync"

export default function GitHubSettings() {
  const { language } = useTheme()
  const [config, setConfig] = useState({
    token: "",
    owner: "",
    repo: "",
  })
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    const loadConfig = async () => {
      const stored = await getGitHubConfig()
      if (stored) {
        setConfig(stored)
      }
    }
    loadConfig()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setConfig((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    saveGitHubConfig(config)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div>
      <Link href="/admin/settings" className="flex items-center gap-2 text-accent hover:text-accent/80 mb-6">
        <ArrowLeft className="h-4 w-4" />
        {language === "ar" ? "العودة" : "Back"}
      </Link>

      <h1 className="text-3xl font-bold text-foreground mb-8">
        {language === "ar" ? "إعدادات GitHub" : "GitHub Settings"}
      </h1>

      <Card className="border border-border/40 bg-card/50 p-6 max-w-2xl">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              {language === "ar" ? "رمز الوصول (Token)" : "Personal Access Token"}
            </label>
            <Input
              type="password"
              name="token"
              value={config.token}
              onChange={handleChange}
              placeholder="ghp_xxxxxxxxxxxxx"
              className="bg-input border-border"
            />
            <p className="text-xs text-foreground/50 mt-2">
              {language === "ar"
                ? "يمكنك إنشاء رمز جديد من https://github.com/settings/tokens"
                : "Create one at https://github.com/settings/tokens"}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {language === "ar" ? "مالك المستودع" : "Repository Owner"}
              </label>
              <Input
                type="text"
                name="owner"
                value={config.owner}
                onChange={handleChange}
                placeholder="your-username"
                className="bg-input border-border"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {language === "ar" ? "اسم المستودع" : "Repository Name"}
              </label>
              <Input
                type="text"
                name="repo"
                value={config.repo}
                onChange={handleChange}
                placeholder="werya-website"
                className="bg-input border-border"
              />
            </div>
          </div>

          {saved && (
            <div className="p-3 bg-accent/10 text-accent rounded-lg text-sm">
              {language === "ar" ? "تم حفظ الإعدادات بنجاح" : "Settings saved successfully"}
            </div>
          )}

          <Button onClick={handleSave} className="bg-accent hover:bg-accent/90">
            {language === "ar" ? "حفظ" : "Save"}
          </Button>
        </div>
      </Card>
    </div>
  )
}
