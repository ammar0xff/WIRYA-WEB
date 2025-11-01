"use client"

import type React from "react"

import { useTheme } from "@/lib/theme-provider"
import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, ExternalLink, Check } from "lucide-react"
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
  const [copied, setCopied] = useState(false)

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
    if (!config.token || !config.owner || !config.repo) {
      alert(language === "ar" ? "يرجى ملء جميع الحقول" : "Please fill all fields")
      return
    }
    saveGitHubConfig(config)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const tokenUrl = "https://github.com/settings/tokens/new?scopes=repo,workflow&description=Werya%20CMS"

  return (
    <div className="space-y-8">
      <Link href="/admin/settings" className="flex items-center gap-2 text-accent hover:text-accent/80">
        <ArrowLeft className="h-4 w-4" />
        {language === "ar" ? "العودة" : "Back"}
      </Link>

      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          {language === "ar" ? "إعدادات GitHub" : "GitHub Settings"}
        </h1>
        <p className="text-foreground/60">
          {language === "ar"
            ? "ربط مستودعك على GitHub لمزامنة التغييرات تلقائياً"
            : "Connect your GitHub repository to automatically sync changes"}
        </p>
      </div>

      <Card className="border border-accent/20 bg-accent/5 p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">
          {language === "ar" ? "خطوات الإعداد" : "Setup Instructions"}
        </h2>
        <ol className="space-y-3 text-sm text-foreground/80">
          <li className="flex gap-3">
            <span className="font-bold text-accent">1.</span>
            <span>
              {language === "ar"
                ? "انقر على الرابط أدناه لإنشاء رمز وصول جديد"
                : "Click the link below to create a new Personal Access Token"}
            </span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-accent">2.</span>
            <span>
              {language === "ar"
                ? "تأكد من تحديد scopes: repo و workflow"
                : "Make sure to select scopes: 'repo' and 'workflow'"}
            </span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-accent">3.</span>
            <span>
              {language === "ar"
                ? "انسخ الرمز الذي تم إنشاؤه والصقه أدناه"
                : "Copy the generated token and paste it below"}
            </span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-accent">4.</span>
            <span>{language === "ar" ? "أدخل اسم المستودع وصاحبه" : "Enter your repository owner and name"}</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-accent">5.</span>
            <span>
              {language === "ar" ? "احفظ الإعدادات وابدأ في المزامنة" : "Save settings and start syncing changes"}
            </span>
          </li>
        </ol>
      </Card>

      <Card className="border border-border/40 bg-card/50 p-6">
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-foreground">
                {language === "ar" ? "رمز الوصول (Token)" : "Personal Access Token"}
              </label>
              <a
                href={tokenUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 flex items-center gap-1 text-xs"
              >
                {language === "ar" ? "إنشاء رمز جديد" : "Create new token"}
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
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
                ? "لا تشارك هذا الرمز. سيتم حفظه محلياً فقط في متصفحك"
                : "Never share this token. It's stored locally in your browser only"}
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
                placeholder="ammar0xff"
                className="bg-input border-border"
              />
              <p className="text-xs text-foreground/50 mt-2">
                {language === "ar" ? "اسم مستخدمك على GitHub" : "Your GitHub username"}
              </p>
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
                placeholder="WIRYA-WEB"
                className="bg-input border-border"
              />
              <p className="text-xs text-foreground/50 mt-2">
                {language === "ar" ? "اسم المستودع من GitHub" : "Your repository name"}
              </p>
            </div>
          </div>

          {saved && (
            <div className="p-3 bg-accent/10 text-accent rounded-lg text-sm flex items-center gap-2">
              <Check className="h-4 w-4" />
              {language === "ar" ? "تم حفظ الإعدادات بنجاح" : "Settings saved successfully"}
            </div>
          )}

          <Button onClick={handleSave} className="bg-accent hover:bg-accent/90 w-full">
            {language === "ar" ? "حفظ الإعدادات" : "Save Settings"}
          </Button>
        </div>
      </Card>

      <Card className="border border-border/40 bg-card/50 p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">{language === "ar" ? "الأسئلة الشائعة" : "FAQ"}</h2>
        <div className="space-y-4 text-sm text-foreground/80">
          <div>
            <p className="font-medium text-foreground mb-1">
              {language === "ar" ? "هل بيانات التوكن آمنة؟" : "Is my token data safe?"}
            </p>
            <p>
              {language === "ar"
                ? "نعم، يتم حفظ بيانات GitHub محلياً في localStorage متصفحك فقط. لا نرسلها إلى خادم"
                : "Yes, your GitHub credentials are stored only in your browser's localStorage. We never send them to a server"}
            </p>
          </div>
          <div>
            <p className="font-medium text-foreground mb-1">
              {language === "ar" ? "كيف تعمل المزامنة؟" : "How does syncing work?"}
            </p>
            <p>
              {language === "ar"
                ? "عند الضغط على زر المزامنة، يتم حفظ التغييرات مباشرة في ملفات GitHub. GitHub Actions ستعيد بناء الموقع تلقائياً"
                : "When you click sync, changes are committed directly to GitHub. GitHub Actions will automatically rebuild and redeploy your site"}
            </p>
          </div>
          <div>
            <p className="font-medium text-foreground mb-1">
              {language === "ar" ? "ماذا إذا فشلت المزامنة؟" : "What if sync fails?"}
            </p>
            <p>
              {language === "ar"
                ? "تحقق من أن التوكن صحيح وله صلاحيات repo و workflow. تأكد من اسم المالك واسم المستودع"
                : "Check that your token is correct and has 'repo' and 'workflow' scopes. Verify owner and repo names are correct"}
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}
