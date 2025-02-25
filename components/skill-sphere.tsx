"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import TagCloud from "TagCloud"

export function SkillSphere() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 20, stiffness: 300 }
  const rotateX = useSpring(mouseY, springConfig)
  const rotateY = useSpring(mouseX, springConfig)

  useEffect(() => {
    const container = containerRef.current
    if (!container || isMounted) return

    const texts = [
      "Python",
      "React",
      "TypeScript",
      "Machine Learning",
      "AWS",
      "SQL",
      "Data Analysis",
      "TensorFlow",
      "PyTorch",
      "Next.js",
      "Docker",
      "Git",
      "Node.js",
      "REST API",
      "GraphQL",
      "MongoDB",
      "PostgreSQL",
      "Redis",
      "Kubernetes",
      "CI/CD",
      "Linux",
    ]

    const options = {
      radius: 230,
      maxSpeed: "normal",
      initSpeed: "normal",
      keep: true,
    }

    TagCloud(container, texts, options)
    setIsMounted(true)

    return () => {
      container.innerHTML = ""
    }
  }, [isMounted])

  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - left - width / 2) / 25
    const y = (e.clientY - top - height / 2) / 25
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      className="w-[500px] h-[500px] relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      <div
        ref={containerRef}
        className="absolute inset-0 flex items-center justify-center text-blue-600 dark:text-blue-400"
      />
    </motion.div>
  )
}

