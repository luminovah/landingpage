"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Bot, Gauge, Scaling } from "lucide-react"

const featuresData = [
  {
    icon: <Bot className="h-8 w-8 text-primary" />,
    title: "Autonomous Analysis",
    description:
      "Our AI agents work 24/7 to automatically detect risks and patterns in satellite data, turning raw imagery into clear intelligence.",
  },
  {
    icon: <Gauge className="h-8 w-8 text-primary" />,
    title: "Actionable Insights",
    description:
      "Go from data to decision, faster. Get continuous, actionable insights delivered as critical alerts and detailed reports.",
  },
  {
    icon: <Scaling className="h-8 w-8 text-primary" />,
    title: "Scalable Intelligence",
    description:
      "From monitoring a single asset to an entire continent, our platform scales to provide intelligence for any operation, in any sector.",
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

export function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="features" className="w-full py-20 md:py-32 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">A New Paradigm in Earth Observation</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Our platform transforms raw satellite data into actionable intelligence.
          </p>
        </div>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 grid gap-8 md:grid-cols-3"
        >
          {featuresData.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="p-6 bg-card rounded-xl shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 h-full">
                <CardHeader className="p-0">
                  <div className="flex items-center gap-4">
                    {feature.icon}
                    <CardTitle>{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardDescription className="mt-4 text-base">{feature.description}</CardDescription>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
