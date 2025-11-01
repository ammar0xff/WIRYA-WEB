import { SERVICES } from "@/lib/services"
import ClientPage from "./client"

export function generateStaticParams() {
  return SERVICES.map((service) => ({
    id: service.id,
  }))
}

export default function EditServicePage() {
  return <ClientPage />
}
