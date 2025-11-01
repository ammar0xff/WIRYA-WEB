"use client"

import { useTheme } from "@/lib/theme-provider"
import { translations } from "@/lib/i18n"
import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  const { language } = useTheme()
  const t = translations[language]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/40 bg-card/30 px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">{language === "ar" ? "عن ويريا" : "About Werya"}</h3>
            <p className="mb-4 text-sm text-foreground/60 leading-relaxed">
              {language === "ar"
                ? "شركة رائدة في مجال التحول الرقمي والتكنولوجيا، نقدم حلولاً مبتكرة لتطوير الأعمال"
                : "A leading company in digital transformation and technology, providing innovative solutions for business development"}
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-foreground/60 hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-accent transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">{language === "ar" ? "روابط سريعة" : "Quick Links"}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-foreground/60 hover:text-accent transition-colors">
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-foreground/60 hover:text-accent transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-foreground/60 hover:text-accent transition-colors">
                  {t.nav.blog}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foreground/60 hover:text-accent transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">{language === "ar" ? "خدماتنا" : "Our Services"}</h3>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>{language === "ar" ? "الدعم الفني" : "Technical Support"}</li>
              <li>{language === "ar" ? "التحول الرقمي" : "Digital Transformation"}</li>
              <li>{language === "ar" ? "الأمان السيبراني" : "Cybersecurity"}</li>
              <li>{language === "ar" ? "تطوير البرامج" : "Software Development"}</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">{language === "ar" ? "تواصل معنا" : "Contact Us"}</h3>
            <ul className="space-y-3 text-sm text-foreground/60">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@werya.com" className="hover:text-accent transition-colors">
                  info@werya.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="tel:+966123456789" className="hover:text-accent transition-colors">
                  +966 12 345 6789
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{language === "ar" ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia"}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border/40 pt-8 text-center text-sm text-foreground/50">
          <p>
            {language === "ar"
              ? `© ${currentYear} ويريا. جميع الحقوق محفوظة.`
              : `© ${currentYear} Werya. All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  )
}
