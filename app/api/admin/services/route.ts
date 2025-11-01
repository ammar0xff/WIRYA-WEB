import { SERVICES } from "@/lib/services"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { action, service } = body

    if (action === "update") {
      const serviceIndex = SERVICES.findIndex((s) => s.id === service.id)
      if (serviceIndex === -1) {
        return NextResponse.json({ success: false, message: "Service not found" }, { status: 404 })
      }

      SERVICES[serviceIndex] = service

      // Format the services content
      const servicesContent = `export interface Service {
  id: string
  nameEn: string
  nameAr: string
  descriptionEn: string
  descriptionAr: string
  category: string
  price: number
  currency: string
  features?: string[]
}

export const SERVICES: Service[] = ${JSON.stringify(SERVICES, null, 2)}
`

      // Try to sync to GitHub if config exists
      const githubConfig = request.headers.get("x-github-config")
      if (githubConfig) {
        try {
          const config = JSON.parse(githubConfig)
          const syncRes = await fetch(
            `https://api.github.com/repos/${config.owner}/${config.repo}/contents/lib/services.ts`,
            {
              method: "PUT",
              headers: {
                Authorization: `Bearer ${config.token}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                message: `Update service: ${service.nameEn}`,
                content: Buffer.from(servicesContent).toString("base64"),
              }),
            },
          )

          if (!syncRes.ok) {
            console.error("[v0] GitHub sync failed:", syncRes.statusText)
          }
        } catch (e) {
          console.error("[v0] GitHub sync error:", e)
        }
      }

      return NextResponse.json({ success: true, service })
    }

    if (action === "delete") {
      const filtered = SERVICES.filter((s) => s.id !== service.id)

      const servicesContent = `export interface Service {
  id: string
  nameEn: string
  nameAr: string
  descriptionEn: string
  descriptionAr: string
  category: string
  price: number
  currency: string
  features?: string[]
}

export const SERVICES: Service[] = ${JSON.stringify(filtered, null, 2)}
`

      if (request.headers.get("x-github-config")) {
        try {
          const config = JSON.parse(request.headers.get("x-github-config") || "{}")
          await fetch(`https://api.github.com/repos/${config.owner}/${config.repo}/contents/lib/services.ts`, {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${config.token}`,
              "Content-Type": "application/json",
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
      const newService = { ...service, id: Date.now().toString() }
      SERVICES.push(newService)

      const servicesContent = `export interface Service {
  id: string
  nameEn: string
  nameAr: string
  descriptionEn: string
  descriptionAr: string
  category: string
  price: number
  currency: string
  features?: string[]
}

export const SERVICES: Service[] = ${JSON.stringify(SERVICES, null, 2)}
`

      if (request.headers.get("x-github-config")) {
        try {
          const config = JSON.parse(request.headers.get("x-github-config") || "{}")
          await fetch(`https://api.github.com/repos/${config.owner}/${config.repo}/contents/lib/services.ts`, {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${config.token}`,
              "Content-Type": "application/json",
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
