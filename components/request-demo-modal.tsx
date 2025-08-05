"use client"

import { useEffect } from "react"
import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { submitDemoRequest } from "@/app/actions"
import { CheckCircle, Loader2 } from "lucide-react"

interface RequestDemoModalProps {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
}

const initialState = {
  message: "",
  success: false,
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      Submit Request
    </Button>
  )
}

export function RequestDemoModal({ isOpen, onOpenChange }: RequestDemoModalProps) {
  const [state, formAction] = useActionState(submitDemoRequest, initialState)

  useEffect(() => {
    if (state.success) {
      const timer = setTimeout(() => {
        onOpenChange(false)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [state.success, onOpenChange])

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px]">
        {state.success ? (
          <div className="flex flex-col items-center justify-center p-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Request Received!</h3>
            <p className="text-muted-foreground">Thank you. Our team will be in touch with you shortly.</p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Request a Demo</DialogTitle>
              <DialogDescription>
                Fill out the form below and our team will contact you to schedule a personalized demo.
              </DialogDescription>
            </DialogHeader>
            <form action={formAction}>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" placeholder="Jane Doe" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Work Email</Label>
                  <Input id="email" name="email" type="email" placeholder="jane.doe@company.com" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" name="company" placeholder="Acme Corporation" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea id="message" name="message" placeholder="Tell us about your use case..." />
                </div>
              </div>
              <DialogFooter>
                <SubmitButton />
              </DialogFooter>
              {state.message && !state.success && (
                <p className="text-sm text-red-500 mt-2 text-center">{state.message}</p>
              )}
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
