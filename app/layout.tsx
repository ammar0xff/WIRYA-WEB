import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/lib/theme-provider"
import { Cairo, Exo_2 } from "next/font/google"

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
})

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-exo2",
})

export const metadata: Metadata = {
  title: "Werya - Digital Transformation & Technology Solutions",
  description: "Werya offers innovative digital transformation and technology solutions for businesses",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${exo2.variable}`}>
      <head>
        <style>{`
          :root {
            --font-cairo: ${cairo.style.fontFamily};
            --font-exo2: ${exo2.style.fontFamily};
          }
        `}</style>
      </head>
      <body className={`antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
