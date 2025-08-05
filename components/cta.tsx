"use client"

import { useActionState, useRef, useEffect } from "react"
import { useFormStatus } from "react-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { submitEarlyAccessRequest } from "@/app/actions"
import { Loader2 } from "lucide-react"

interface CtaProps {
  onOpenDemoModal: () => void
}

const initialState = {
  message: "",
  success: false,
}

function EarlyAccessButton() {
  const { pending } = useFormStatus()
  return (
    <Button
      type="submit"
      variant="secondary"
      className="w-full sm:w-auto bg-white/20 border-white/50 text-white hover:bg-white/30"
      disabled={pending}
    >
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      Get Early Access
    </Button>
  )
}

export function Cta({ onOpenDemoModal }: CtaProps) {
  const [state, formAction] = useActionState(submitEarlyAccessRequest, initialState)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset()
    }
  }, [state.success])

  return (
    <section id="cta" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-8 md:p-16 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to See the Future from Above?</h2>
              <p className="mt-4 text-lg text-indigo-100">
                Request a personalized demo or join our early access program to be the first to leverage Orbiview's
                autonomous agents.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Button size="lg" className="w-full md:w-auto" onClick={onOpenDemoModal}>
                Request a Demo
              </Button>
              <form action={formAction} ref={formRef} className="flex flex-col gap-2">
                <div className="flex flex-col sm:flex-row gap-2">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Enter your email for early access"
                    className="flex-1"
                    required
                  />
                  <EarlyAccessButton />
                </div>
                {state.message && (
                  <p
                    className={`text-sm text-center sm:text-left ${state.success ? "text-green-300" : "text-red-300"}`}
                  >
                    {state.message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
