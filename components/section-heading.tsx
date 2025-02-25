import type React from "react"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  children: React.ReactNode
  className?: string
}

export function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <h2
      className={cn(
        "text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent inline-block",
        className,
      )}
    >
      {children}
      <div className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform" />
    </h2>
  )
}

