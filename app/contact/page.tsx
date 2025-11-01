"use client"

import { useEffect, useState } from "react"
import { useTheme } from "@/lib/theme-provider"
import { Header } from "@/components/navigation/header"
import { MobileNav } from "@/components/navigation/mobile-nav"
import { ContactInfoCard } from "@/components/contact/contact-info-card"
import { BusinessHours } from "@/components/contact/business-hours"
import { SocialLinks } from "@/components/contact/social-links"
import { translations } from "@/lib/i18n"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

function ContactContent() {
  const { language } = useTheme()
  const t = translations[language]
  const contactData = t.common.contact

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/wirya",
      color: "hover:text-blue-600 dark:hover:text-blue-400",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/wirya",
      color: "hover:text-sky-500 dark:hover:text-sky-400",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/wirya",
      color: "hover:text-pink-600 dark:hover:text-pink-400",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/company/wirya",
      color: "hover:text-blue-700 dark:hover:text-blue-500",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="border-b border-border/40 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">{contactData.title}</h1>
          <p className="text-lg text-foreground/70">{contactData.subtitle}</p>
        </div>
      </section>

      <section className="px-4 py-20 md:px-6 md:py-32 border-b border-border/40">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-12">
            <ContactInfoCard
              icon={<Mail className="h-6 w-6 text-accent" />}
              title={contactData.email}
              content={contactData.emailAddress}
              href={`mailto:${contactData.emailAddress}`}
            />
            <ContactInfoCard
              icon={<Phone className="h-6 w-6 text-accent" />}
              title={contactData.phone}
              content={contactData.phoneNumber}
              href={`tel:${contactData.phoneNumber}`}
            />
            <ContactInfoCard
              icon={<MapPin className="h-6 w-6 text-accent" />}
              title={contactData.address}
              content={contactData.location}
            />
            <BusinessHours title={contactData.businessHours} hours={contactData.hours} />
          </div>
        </div>
      </section>

      <SocialLinks title={contactData.followUs} links={socialLinks} />

      {/* Mobile spacing for bottom nav */}
      <div className="h-20 md:h-0" />
      <MobileNav />
    </main>
  )
}

export default function ContactPage() {
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  if (!isHydrated) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <div className="h-20 md:h-0" />
        <MobileNav />
      </main>
    )
  }

  return <ContactContent />
}
