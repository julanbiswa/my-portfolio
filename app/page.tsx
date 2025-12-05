"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Skills from "@/components/skills"
import Contact from "@/components/contact"

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="bg-background text-foreground">
      <Header scrolled={scrolled} />
      <main role="main">
        <Hero />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t" style={{ borderColor: "var(--border)" }} role="contentinfo">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Julan Bishwakarma. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
