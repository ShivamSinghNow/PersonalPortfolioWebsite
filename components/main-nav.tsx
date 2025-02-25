"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect, useState } from "react"

const navItems = [
  { name: "About", href: "#" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export function MainNav() {
  const [activeSection, setActiveSection] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navItems.map((item) => ({
        id: item.href.substring(1),
        offset: document.getElementById(item.href.substring(1))?.offsetTop || 0,
      }))

      const currentSection = sections.reduce((acc, section) => {
        if (window.scrollY >= section.offset - 200) {
          return section.id
        }
        return acc
      }, "")

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      document.querySelector(href)?.scrollIntoView({
        behavior: "smooth",
      })
    }
  }

  return (
    <nav className="hidden md:flex items-center space-x-1">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={cn(
            "relative px-4 py-2 rounded-md text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400",
            activeSection === item.href.substring(1) ? "text-blue-600 dark:text-blue-400" : "text-muted-foreground",
          )}
          onClick={(e) => handleClick(e, item.href)}
        >
          {activeSection === item.href.substring(1) && (
            <motion.div
              layoutId="activeSection"
              className="absolute inset-0 bg-blue-100 dark:bg-blue-950 rounded-md z-[-1]"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {item.name}
        </Link>
      ))}
    </nav>
  )
}

