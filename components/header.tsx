"use client"

import { useState } from "react"
import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Mountain } from "lucide-react"

interface HeaderProps {
  onOpenDemoModal: () => void
}

export function Header({ onOpenDemoModal }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false} onClick={(e) => handleNavClick(e, "hero")}>
          <Mountain className="h-6 w-6" />
          <span className="font-bold text-lg">Orbiview.ai</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link
            href="#features"
            className="hover:text-primary transition-colors"
            prefetch={false}
            onClick={(e) => handleNavClick(e, "features")}
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="hover:text-primary transition-colors"
            prefetch={false}
            onClick={(e) => handleNavClick(e, "how-it-works")}
          >
            How It Works
          </Link>
          <Link
            href="#use-cases"
            className="hover:text-primary transition-colors"
            prefetch={false}
            onClick={(e) => handleNavClick(e, "use-cases")}
          >
            Use Cases
          </Link>
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <Button variant="outline" size="sm" onClick={onOpenDemoModal}>
            Request a Demo
          </Button>
        </div>
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden bg-transparent">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-4 p-4">
              <Link
                href="#"
                className="flex items-center gap-2"
                prefetch={false}
                onClick={(e) => handleNavClick(e, "hero")}
              >
                <Mountain className="h-6 w-6" />
                <span className="font-bold text-lg">Orbiview.ai</span>
              </Link>
              <nav className="grid gap-2 text-base font-medium">
                <Link
                  href="#features"
                  className="hover:text-primary transition-colors"
                  prefetch={false}
                  onClick={(e) => handleNavClick(e, "features")}
                >
                  Features
                </Link>
                <Link
                  href="#how-it-works"
                  className="hover:text-primary transition-colors"
                  prefetch={false}
                  onClick={(e) => handleNavClick(e, "how-it-works")}
                >
                  How It Works
                </Link>
                <Link
                  href="#use-cases"
                  className="hover:text-primary transition-colors"
                  prefetch={false}
                  onClick={(e) => handleNavClick(e, "use-cases")}
                >
                  Use Cases
                </Link>
              </nav>
              <div className="flex flex-col gap-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    onOpenDemoModal()
                    setIsMenuOpen(false)
                  }}
                >
                  Request a Demo
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
