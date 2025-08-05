import type React from "react"
import type { Metadata } from "next"
import { Sora } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

const sora = Sora({ subsets: ["latin"], variable: "--font-sora" })

export const metadata: Metadata = {
  title: "Orbiview.ai | Intelligence from Orbit. Action on Earth.",
  description:
    "Orbiview delivers AI agents for satellite imagery—automating insights across infrastructure, defense, and climate.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body className={cn("min-h-screen bg-background font-sans antialiased", sora.variable)}>{children}</body>
    </html>
  )
}
