"use client"

import { useState } from "react"

interface HeaderProps {
  scrolled: boolean
}

export default function Header({ scrolled }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md" : "bg-transparent"
      }`}
      style={{
        borderBottom: scrolled ? "1px solid rgb(51, 65, 85, 0.5)" : "none",
      }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4" aria-label="Main navigation">
        <a href="#hero" className="text-2xl font-bold" aria-label="Julan Bishwakarma - Home">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">JB</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden gap-8 md:flex" role="menubar">
          {[
            { label: "About", id: "hero" },
            { label: "Skills", id: "skills" },
            { label: "Contact", id: "contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-accent"
              role="menuitem"
              aria-label={`Navigate to ${item.label}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden" 
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <div className="space-y-1">
            <div className={`h-0.5 w-6 bg-foreground transition-all ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
            <div className={`h-0.5 w-6 bg-foreground transition-all ${isOpen ? "opacity-0" : ""}`} />
            <div className={`h-0.5 w-6 bg-foreground transition-all ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            id="mobile-menu"
            className="absolute top-full left-0 right-0"
            role="menu"
            style={{
              borderBottom: "1px solid var(--border)",
              backgroundColor: "var(--card)",
            }}
          >
            <div className="flex flex-col gap-4 px-6 py-4">
              {[
                { label: "About", id: "hero" },
                { label: "Skills", id: "skills" },
                { label: "Contact", id: "contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-sm font-medium text-foreground/70 transition-colors hover:text-accent"
                  role="menuitem"
                  aria-label={`Navigate to ${item.label}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
