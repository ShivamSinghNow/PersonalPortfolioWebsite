"use client"

import { Button } from "@/components/ui/button"
import { ChevronUp } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useState } from "react"

export function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!isVisible) return null

  return (
    <motion.div style={{ opacity }} className="fixed bottom-8 right-8 z-50">
      <Button onClick={scrollToTop} size="icon" className="rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg">
        <ChevronUp className="h-5 w-5" />
      </Button>
    </motion.div>
  )
}

