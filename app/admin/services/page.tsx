"use client"

import { useTheme } from "@/lib/theme-provider"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Edit2, Trash2, Upload } from "lucide-react"
import Link from "next/link"
import { SERVICES } from "@/lib/services"
import { syncToGitHub, getGitHubConfig } from "@/lib/github-sync"

export default function ServicesManager() {
  const { language } = useTheme()
  const [services, setServices] = useState(SERVICES)
  const [isDeleting, setIsDeleting] = useState<string | null>(null)
  const [isSyncing, setIsSyncing] = useState(false)
  const [syncStatus, setSyncStatus] = useState<string>("")

  const handleDelete = (id: string) => {
    if (confirm(language === "ar" ? "هل تريد حذف هذه الخدمة؟" : "Delete this service?")) {
      setIsDeleting(id)
      setServices(services.filter((s) => s.id !== id))
      setIsDeleting(null)
    }
  }

  const handleSync = async () => {
    setIsSyncing(true)
    setSyncStatus("Syncing...")
    try {
      const config = await getGitHubConfig()
      if (!config?.token) {
        setSyncStatus(language === "ar" ? "يرجى تكوين GitHub" : "Please configure GitHub settings")
        return
      }

      const fileContent = `export const services = ${JSON.stringify(services, null, 2)}`

      const result = await syncToGitHub(
        config,
        "lib/services.ts",
        fileContent,
        `[Admin] Updated services: ${new Date().toISOString()}`,
      )

      if (result.success) {
        setSyncStatus(language === "ar" ? "تم التحديث بنجاح" : "Synced successfully")
      } else {
        setSyncStatus(result.message)
      }
    } catch (error) {
      setSyncStatus(error instanceof Error ? error.message : "Sync failed")
    } finally {
      setIsSyncing(false)
    }
  }

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            {language === "ar" ? "إدارة الخدمات" : "Manage Services"}
          </h1>
          <p className="mt-2 text-foreground/60">
            {language === "ar" ? `لديك ${services.length} خدمة` : `You have ${services.length} services`}
          </p>
        </div>
        <div className="flex gap-2">
          <Button onClick={handleSync} disabled={isSyncing} className="gap-2 bg-green-600 hover:bg-green-700">
            <Upload className="h-4 w-4" />
            {isSyncing ? "Syncing..." : language === "ar" ? "مزامنة" : "Sync"}
          </Button>
          <Link href="/admin/services/new">
            <Button className="gap-2 bg-accent hover:bg-accent/90">
              <Plus className="h-4 w-4" />
              {language === "ar" ? "إضافة خدمة" : "Add Service"}
            </Button>
          </Link>
        </div>
      </div>

      {syncStatus && (
        <Card className="mb-6 border border-border/40 bg-accent/10 p-4">
          <p className="text-sm text-foreground">{syncStatus}</p>
        </Card>
      )}

      <div className="grid gap-4">
        {services.map((service) => (
          <Card key={service.id} className="border border-border/40 bg-card/50 p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">{language === "ar" ? service.nameAr : service.nameEn}</h3>
                <p className="mt-2 text-sm text-foreground/60">
                  {language === "ar" ? service.descriptionAr : service.descriptionEn}
                </p>
                <div className="mt-3 flex items-center gap-4 text-xs text-foreground/50">
                  <span>{service.category}</span>
                  <span>
                    {service.currency} {service.price}
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <Link href={`/admin/services/${service.id}`}>
                  <Button variant="outline" size="sm">
                    <Edit2 className="h-4 w-4" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDelete(service.id)}
                  disabled={isDeleting === service.id}
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
