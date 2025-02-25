"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export function MeshGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const animate = () => {
      time += 0.002
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const colors =
        theme === "dark" ? ["#1e40af", "#3b82f6", "#60a5fa", "#93c5fd"] : ["#3b82f6", "#60a5fa", "#93c5fd", "#bfdbfe"]

      // Create gradient mesh
      for (let i = 0; i < 4; i++) {
        const x = Math.sin(time + i * 2) * 100 + canvas.width / 2
        const y = Math.cos(time + i * 2) * 100 + canvas.height / 2
        const radius = 200 + Math.sin(time * 2) * 50

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
        gradient.addColorStop(0, `${colors[i]}33`)
        gradient.addColorStop(1, "transparent")

        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    resize()
    animate()

    window.addEventListener("resize", resize)

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 opacity-40" />
}

