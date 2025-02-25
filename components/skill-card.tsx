"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface SkillCardProps {
  name: string
  level: number
  index: number
}

export function SkillCard({ name, level, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      <Card className="hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border-blue-600/20">
        <CardContent className="pt-6">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-medium">{name}</span>
              <span className="text-sm text-muted-foreground">{level}%</span>
            </div>
            <Progress value={level} className="h-2 bg-blue-100 dark:bg-blue-950" />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

