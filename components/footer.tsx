import { Mountain } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-center gap-4 text-center md:flex-row md:justify-between">
          <div className="flex items-center gap-2">
            <Mountain className="h-6 w-6" />
            <span className="font-bold">Orbiview.ai</span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Orbiview.ai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
