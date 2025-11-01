"use client"

import { useTheme } from "@/lib/theme-provider"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Edit2, Trash2 } from "lucide-react"
import Link from "next/link"
import { SERVICES } from "@/lib/services"

export default function ServicesManager() {
  const { language } = useTheme()
  const [services, setServices] = useState(SERVICES)

  const handleDelete = (id: string) => {
    if (confirm(language === "ar" ? "هل تريد حذف هذه الخدمة؟" : "Delete this service?")) {
      setServices(services.filter((s) => s.id !== id))
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
        <Link href="/admin/services/new">
          <Button className="gap-2 bg-accent hover:bg-accent/90">
            <Plus className="h-4 w-4" />
            {language === "ar" ? "إضافة خدمة" : "Add Service"}
          </Button>
        </Link>
      </div>

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
