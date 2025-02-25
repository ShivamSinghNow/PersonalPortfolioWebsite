"use client"

import type React from "react"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useState } from "react"
import { Code, Cpu, Home, Mail, User } from "lucide-react"

const sides = [
  { icon: Home, label: "Home", href: "#" },
  { icon: User, label: "About", href: "#about" },
  { icon: Code, label: "Projects", href: "#projects" },
  { icon: Cpu, label: "Skills", href: "#skills" },
  { icon: Mail, label: "Contact", href: "#contact" },
]

export function CubeNav() {
  const [hoveredSide, setHoveredSide] = useState<number | null>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-100, 100], [30, -30]), {
    stiffness: 100,
    damping: 30,
  })
  const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-30, 30]), {
    stiffness: 100,
    damping: 30,
  })

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left - width / 2)
    mouseY.set(clientY - top - height / 2)
  }

  function onMouseLeave() {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden xl:block">
      <motion.div
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-24 h-24"
      >
        {sides.map((side, index) => {
          const Icon = side.icon
          const isHovered = hoveredSide === index

          return (
            <motion.a
              key={index}
              href={side.href}
              initial={false}
              animate={{
                scale: isHovered ? 1.1 : 1,
                z: isHovered ? 30 : 0,
              }}
              onHoverStart={() => setHoveredSide(index)}
              onHoverEnd={() => setHoveredSide(null)}
              className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm border border-blue-500/20 rounded-xl shadow-lg cursor-pointer transition-colors hover:bg-blue-500/10"
              style={{
                transform: `rotateY(${index * 72}deg) translateZ(60px)`,
                transformStyle: "preserve-3d",
              }}
            >
              <div className="flex flex-col items-center gap-1">
                <Icon className="h-6 w-6" />
                <span className="text-xs font-medium">{side.label}</span>
              </div>
            </motion.a>
          )
        })}
      </motion.div>
    </div>
  )
}

