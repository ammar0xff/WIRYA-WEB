import { services } from "@/lib/services"
import ClientPage from "./client"

export function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }))
}

export default function EditServicePage() {
  return <ClientPage />
}
