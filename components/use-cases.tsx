"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Zap, Shield, Anchor } from "lucide-react"

const useCasesData = [
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Infrastructure Monitoring",
    description:
      "Stay ahead of outages and wildfire dangers by detecting vegetation encroachment and fire risks threatening power lines and pipelines.",
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "Defense",
    description:
      "Support national safety and infrastructure protection through continuous, autonomous monitoring of critical and remote areas.",
  },
  {
    icon: <Anchor className="h-8 w-8 text-primary" />,
    title: "Maritime Intelligence",
    description:
      "Enhance maritime safety and security with continuous AI driven monitoring of coastal and open water regions, detecting anomalies.",
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

export function UseCases() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="use-cases" className="w-full py-20 md:py-32 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Intelligence for Mission Critical Operations
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Orbiview provides tailored solutions for the world's toughest challenges.
          </p>
        </div>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 grid gap-8 md:grid-cols-3"
        >
          {useCasesData.map((useCase, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="p-6 bg-card rounded-xl shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 h-full">
                <CardHeader className="p-0">
                  <div className="flex items-center gap-4">
                    {useCase.icon}
                    <CardTitle>{useCase.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardDescription className="mt-4 text-base">{useCase.description}</CardDescription>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
