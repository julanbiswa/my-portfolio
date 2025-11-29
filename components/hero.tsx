"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-20 overflow-hidden bg-gradient-to-br from-background via-card to-background px-6"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-40 left-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center`}
        >
          {/* Left Content */}
          <div>
            <h1 className="mb-4 text-5xl md:text-7xl font-bold">
              <span className="block text-foreground">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-glow">
                Julan Bishwakarma
              </span>
            </h1>

            <p className="mb-6 text-xl md:text-2xl text-foreground/70 font-light">BCA Student & Frontend Developer</p>

            <p className="mb-8 max-w-2xl text-base md:text-lg text-foreground/60 leading-relaxed">
              I'm a passionate developer crafting beautiful, responsive web applications with modern technologies.
              Specializing in React, JavaScript, and Tailwind CSS with a commitment to clean, maintainable code and
              exceptional user experiences.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-accent-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </button>
              <a
                href="#skills"
                className="px-8 py-3 font-semibold rounded-lg hover:bg-primary/10 transition-all duration-300"
                style={{
                  border: "1px solid var(--primary)",
                  color: "var(--primary)",
                }}
              >
                View My Skills
              </a>
            </div>

            {/* Stats */}
            <div
              className="mt-16 grid grid-cols-3 gap-6 pt-12"
              style={{
                borderTop: "1px solid rgba(0, 0, 0, 0.3)",
              }}
            >
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-accent">5+</p>
                <p className="text-sm text-foreground/60">Tech Skills</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-accent">BCA</p>
                <p className="text-sm text-foreground/60">Student</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-accent">Fresher</p>
                <p className="text-sm text-foreground/60">Enthusiast</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden md:flex justify-center items-center">
            <div
              className="relative w-80 h-80 rounded-full overflow-hidden flex-shrink-0"
              style={{
                border: "4px solid var(--secondary)",
                boxShadow: "0 0 55px rgb(0.6 0.118 184.704)",
              }}
            >
              <Image
                src="/profile.JPG"
                alt="Julan Bishwakarma"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
