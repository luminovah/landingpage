"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"

interface HeroProps {
  onOpenDemoModal: () => void
}

export function Hero({ onOpenDemoModal }: HeroProps) {
  const handleLearnMoreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const featuresSection = document.getElementById("features")
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[600px] flex items-center justify-center text-center text-white"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/90 z-10" />
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/earth-from-space.png"
      >
        <source src="https://cdn.pixabay.com/video/2021/09/13/88894-613493161_large.mp4" type="video/mp4" />
      </video>
      <div className="container relative z-20 mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-shadow-md">
            Intelligence from Orbit. Action on Earth.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-200 md:text-xl max-w-2xl mx-auto text-shadow">
            Orbiview delivers AI agents for satellite imagery that automate analysis and deliver actionable insights.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" onClick={onOpenDemoModal}>
              Request a Demo
            </Button>
            <Link href="#features" prefetch={false} onClick={handleLearnMoreClick}>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-white hover:text-gray-900 bg-transparent"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
