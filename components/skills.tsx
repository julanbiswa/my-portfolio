"use client"

import type React from "react"

import { useState, useEffect } from "react"

interface Skill {
  name: string
  percentage: number
}

const skills: Skill[] = [
  { name: "HTML", percentage: 60 },
  { name: "CSS", percentage: 50 },
  { name: "JavaScript", percentage: 50 },
  { name: "Tailwind CSS", percentage: 50 },
  { name: "ReactJS", percentage: 40 },
]

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    })

    const section = document.getElementById("skills")
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="skills"
      className="bg-gradient-to-br from-card via-background to-card py-20 px-6"
      style={{
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <h2 className="mb-4 text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-foreground/60 text-lg">
            Here's what I've been working with to build amazing web experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`transform transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-foreground">{skill.name}</h3>
                <span className="text-sm font-bold text-accent">{skill.percentage}%</span>
              </div>

              <div className="skill-bar">
                <div
                  className="skill-fill"
                  style={
                    {
                      "--skill-width": `${skill.percentage}%`,
                    } as React.CSSProperties & { "--skill-width": string }
                  }
                />
              </div>

              {/* Skill Details */}
              <p className="mt-2 text-xs text-foreground/50">
                {skill.percentage >= 50 ? "Proficient" : "Intermediate"}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className="rounded-lg p-6 backdrop-blur-sm"
            style={{
              border: "1px solid rgba(0, 0, 0, 0.5)",
              backgroundColor: "rgba(18, 30, 40, 0.5)",
            }}
          >
            <h4 className="mb-3 text-lg font-semibold text-primary">Frontend</h4>
            <p className="text-sm text-foreground/60">
              Building responsive, interactive interfaces with React and modern CSS frameworks.
            </p>
          </div>

          <div
            className="rounded-lg p-6 backdrop-blur-sm"
            style={{
              border: "1px solid rgba(0, 0, 0, 0.5)",
              backgroundColor: "rgba(18, 30, 40, 0.5)",
            }}
          >
            <h4 className="mb-3 text-lg font-semibold text-accent">Currently Learning</h4>
            <p className="text-sm text-foreground/60">
              Expanding knowledge in advanced React patterns and full-stack development.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
