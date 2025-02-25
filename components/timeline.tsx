"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

interface TimelineItem {
  title: string
  company: string
  date: string
  description: string[]
}

interface TimelineProps {
  items: TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600 to-purple-600" />
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="relative pl-20 pb-16 last:pb-0"
        >
          <div className="absolute left-[29px] h-4 w-4 rounded-full bg-blue-600 transform -translate-x-1/2" />
          <div className="space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <Badge className="bg-gradient-to-r from-blue-600 to-purple-600">{item.date}</Badge>
            </div>
            <p className="text-muted-foreground font-medium">{item.company}</p>
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
              {item.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

