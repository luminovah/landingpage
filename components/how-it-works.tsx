"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { UploadCloud, Cpu, AlertTriangle } from "lucide-react"

const steps = [
  {
    icon: <UploadCloud className="h-10 w-10 text-primary" />,
    title: "1. Curate Data",
    description:
      "No more messy datasets. Our system curates and prepares satellite and environmental data for seamless analysis.",
  },
  {
    icon: <Cpu className="h-10 w-10 text-primary" />,
    title: "2. Agents Analyze",
    description:
      "Our specialized AI agents process the data, identifying key events, objects, and changes based on your criteria.",
  },
  {
    icon: <AlertTriangle className="h-10 w-10 text-primary" />,
    title: "3. Get Insights",
    description: "Insights are delivered automatically in real time. No dashboards. No manual review. Just decisions.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
}

export function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="how-it-works" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">From Pixels to Action in Three Steps</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Our streamlined process makes advanced satellite analysis accessible and efficient.
          </p>
        </div>
        <div className="relative mt-16">
          <div className="absolute left-1/4 top-10 w-1/2 h-px bg-border hidden md:block" />
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid gap-12 md:grid-cols-3"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center text-center relative"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-background border border-primary/20">
                  {step.icon}
                </div>
                <h3 className="mt-6 text-xl font-bold">{step.title}</h3>
                <p className="mt-2 text-base text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
