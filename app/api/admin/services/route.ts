import { SERVICES } from "@/lib/services"
import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

function formatServicesFile(services: typeof SERVICES): string {
  return `export interface ServiceOption {
  id: string
  nameAr: string
  nameEn: string
  priceModifier: number
}

export interface Service {
  id: string
  category: string
  nameAr: string
  nameEn: string
  descriptionAr: string
  descriptionEn: string
  price: number
  currency: string
  image: string
  options: ServiceOption[]
  whatsappLink: string
  detailedDescAr: string
  detailedDescEn: string
  detailedContentPath?: string
  longDescriptionAr?: string
  longDescriptionEn?: string
}

export interface ServiceCategory {
  id: string
  nameAr: string
  nameEn: string
}

export const serviceCategories: ServiceCategory[] = [
  { id: "support", nameAr: "الدعم والصيانة", nameEn: "Support & Maintenance" },
  { id: "transformation", nameAr: "التحول الرقمي", nameEn: "Digital Transformation" },
  { id: "consulting", nameAr: "الاستشارات", nameEn: "Consulting" },
  { id: "optimization", nameAr: "تحسين الأداء", nameEn: "Optimization" },
  { id: "security", nameAr: "الأمان السيبراني", nameEn: "Cybersecurity" },
  { id: "development", nameAr: "تطوير البرامج", nameEn: "Development" },
]

export const services: Service[] = ${JSON.stringify(services, null, 2)}

export const SERVICES = services
`
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { action, service } = body

    if (action === "update") {
      const serviceIndex = SERVICES.findIndex((s) => s.id === service.id)
      if (serviceIndex === -1) {
        return NextResponse.json({ success: false, message: "Service not found" }, { status: 404 })
      }

      SERVICES[serviceIndex] = { ...SERVICES[serviceIndex], ...service }

      const githubToken = request.headers.get("x-github-token")
      const githubOwner = request.headers.get("x-github-owner")
      const githubRepo = request.headers.get("x-github-repo")

      if (githubToken && githubOwner && githubRepo) {
        try {
          const servicesContent = formatServicesFile(SERVICES)
          await fetch(`https://api.github.com/repos/${githubOwner}/${githubRepo}/contents/lib/services.ts`, {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${githubToken}`,
              "Content-Type": "application/json",
              Accept: "application/vnd.github+json",
            },
            body: JSON.stringify({
              message: `Update service: ${service.nameEn}`,
              content: Buffer.from(servicesContent).toString("base64"),
            }),
          })
        } catch (e) {
          console.error("[v0] GitHub sync error:", e)
        }
      }

      return NextResponse.json({ success: true, service: SERVICES[serviceIndex] })
    }

    if (action === "delete") {
      const index = SERVICES.findIndex((s) => s.id === service.id)
      if (index === -1) {
        return NextResponse.json({ success: false, message: "Service not found" }, { status: 404 })
      }

      SERVICES.splice(index, 1)

      const githubToken = request.headers.get("x-github-token")
      const githubOwner = request.headers.get("x-github-owner")
      const githubRepo = request.headers.get("x-github-repo")

      if (githubToken && githubOwner && githubRepo) {
        try {
          const servicesContent = formatServicesFile(SERVICES)
          await fetch(`https://api.github.com/repos/${githubOwner}/${githubRepo}/contents/lib/services.ts`, {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${githubToken}`,
              "Content-Type": "application/json",
              Accept: "application/vnd.github+json",
            },
            body: JSON.stringify({
              message: `Delete service: ${service.nameEn}`,
              content: Buffer.from(servicesContent).toString("base64"),
            }),
          })
        } catch (e) {
          console.error("[v0] GitHub sync error:", e)
        }
      }

      return NextResponse.json({ success: true })
    }

    if (action === "create") {
      const newService = {
        ...service,
        id: `service-${Date.now()}`,
        image: service.image || "/customer-service-interaction.png",
        options: service.options || [],
        whatsappLink: service.whatsappLink || "#",
        detailedDescAr: service.descriptionAr,
        detailedDescEn: service.descriptionEn,
        currency: "SAR",
      }
      SERVICES.push(newService)

      const githubToken = request.headers.get("x-github-token")
      const githubOwner = request.headers.get("x-github-owner")
      const githubRepo = request.headers.get("x-github-repo")

      if (githubToken && githubOwner && githubRepo) {
        try {
          const servicesContent = formatServicesFile(SERVICES)
          await fetch(`https://api.github.com/repos/${githubOwner}/${githubRepo}/contents/lib/services.ts`, {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${githubToken}`,
              "Content-Type": "application/json",
              Accept: "application/vnd.github+json",
            },
            body: JSON.stringify({
              message: `Add service: ${service.nameEn}`,
              content: Buffer.from(servicesContent).toString("base64"),
            }),
          })
        } catch (e) {
          console.error("[v0] GitHub sync error:", e)
        }
      }

      return NextResponse.json({ success: true, service: newService })
    }

    return NextResponse.json({ success: false, message: "Invalid action" }, { status: 400 })
  } catch (error) {
    console.error("[v0] API error:", error)
    return NextResponse.json(
      { success: false, message: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    )
  }
}
