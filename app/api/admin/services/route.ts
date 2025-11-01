import { SERVICES } from "@/lib/services"
import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

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
      return NextResponse.json({ success: true, service: SERVICES[serviceIndex] })
    }

    if (action === "delete") {
      const index = SERVICES.findIndex((s) => s.id === service.id)
      if (index === -1) {
        return NextResponse.json({ success: false, message: "Service not found" }, { status: 404 })
      }

      SERVICES.splice(index, 1)
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
      return NextResponse.json({ success: true, service: newService })
    }

    return NextResponse.json({ success: false, message: "Invalid action" }, { status: 400 })
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json(
      { success: false, message: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    )
  }
}

export async function GET() {
  return NextResponse.json({ message: "Services API - use POST" })
}

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    },
  })
}
