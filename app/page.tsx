"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { UseCases } from "@/components/use-cases"
import { Cta } from "@/components/cta"
import { Footer } from "@/components/footer"
import { RequestDemoModal } from "@/components/request-demo-modal"

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleOpenModal = () => setIsModalOpen(true)

  return (
    <>
      <RequestDemoModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <Header onOpenDemoModal={handleOpenModal} />
        <main className="flex-1">
          <Hero onOpenDemoModal={handleOpenModal} />
          <Features />
          <HowItWorks />
          <UseCases />
          <Cta onOpenDemoModal={handleOpenModal} />
        </main>
        <Footer />
      </div>
    </>
  )
}
