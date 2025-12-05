"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://formspree.io/f/mqavozog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ fullName: "", email: "", subject: "", message: "" })
        setTimeout(() => setSubmitStatus("idle"), 5000)
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="bg-gradient-to-br from-background via-card to-background py-20 px-6" aria-label="Contact section">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <h2 className="mb-4 text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Let's Connect</span>
          </h2>
          <p className="text-foreground/60 text-lg">
            Have a question or ready to work together? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="group">
              <div className="mb-3 flex items-center gap-3">
                <div className="rounded-lg bg-primary/20 p-3" aria-hidden="true">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Email</h3>
              </div>
              <a href="mailto:julanbiswa@gmail.com" className="text-foreground/70 hover:text-accent transition-colors" aria-label="Send email to julanbiswa@gmail.com">
                julanbiswa@gmail.com
              </a>
            </div>

            <div className="group">
              <div className="mb-3 flex items-center gap-3">
                <div className="rounded-lg bg-accent/20 p-3" aria-hidden="true">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold">Phone</h3>
              </div>
              <a href="tel:+9779819957105" className="text-foreground/70 hover:text-accent transition-colors" aria-label="Call +977 9819957105">
                +977 9819957105
              </a>
            </div>

            {/* Social Links */}
            <div
              className="pt-6"
              style={{
                borderTop: "1px solid rgba(0, 0, 0, 0.3)",
              }}
            >
              <p className="mb-4 text-sm font-semibold text-foreground/70">Connect on Social</p>
              <div className="flex gap-4">
                {[
                  { name: "GitHub", url: "#", icon: "gh" },
                  { name: "LinkedIn", url: "#", icon: "in" },
                  { name: "Twitter", url: "#", icon: "tw" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground/60 hover:text-primary transition-all duration-300"
                    style={{
                      border: "1px solid rgba(0, 0, 0, 0.5)",
                    }}
                    aria-label={`Visit Julan's ${social.name} profile`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
            <div>
              <label htmlFor="fullName" className="mb-2 block text-sm font-medium">
                Full Name <span aria-label="required">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="w-full rounded-lg px-4 py-3 text-foreground placeholder-foreground/40 transition-all duration-300 focus:outline-none focus:ring-1"
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.5)",
                  backgroundColor: "rgba(8, 19, 30, 0.5)",
                  focusRingColor: "var(--primary)",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--card)"
                  e.currentTarget.style.borderColor = "var(--primary)"
                }}
                onBlur={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(8, 19, 30, 0.5)"
                  e.currentTarget.style.borderColor = "rgba(0, 0, 0, 0.5)"
                }}
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email <span aria-label="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                className="w-full rounded-lg px-4 py-3 text-foreground placeholder-foreground/40 transition-all duration-300 focus:outline-none focus:ring-1"
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.5)",
                  backgroundColor: "rgba(8, 19, 30, 0.5)",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--card)"
                  e.currentTarget.style.borderColor = "var(--primary)"
                }}
                onBlur={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(8, 19, 30, 0.5)"
                  e.currentTarget.style.borderColor = "rgba(0, 0, 0, 0.5)"
                }}
              />
            </div>

            <div>
              <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                Subject <span aria-label="required">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What is this about?"
                className="w-full rounded-lg px-4 py-3 text-foreground placeholder-foreground/40 transition-all duration-300 focus:outline-none focus:ring-1"
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.5)",
                  backgroundColor: "rgba(8, 19, 30, 0.5)",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--card)"
                  e.currentTarget.style.borderColor = "var(--primary)"
                }}
                onBlur={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(8, 19, 30, 0.5)"
                  e.currentTarget.style.borderColor = "rgba(0, 0, 0, 0.5)"
                }}
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium">
                Message <span aria-label="required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message here..."
                rows={5}
                className="w-full rounded-lg px-4 py-3 text-foreground placeholder-foreground/40 transition-all duration-300 focus:outline-none focus:ring-1 resize-none"
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.5)",
                  backgroundColor: "rgba(8, 19, 30, 0.5)",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--card)"
                  e.currentTarget.style.borderColor = "var(--primary)"
                }}
                onBlur={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(8, 19, 30, 0.5)"
                  e.currentTarget.style.borderColor = "rgba(0, 0, 0, 0.5)"
                }}
              />
            </div>

            {submitStatus === "success" && (
              <div
                className="rounded-lg border p-4 text-sm"
                style={{
                  borderColor: "rgba(34, 197, 94, 0.5)",
                  backgroundColor: "rgba(34, 197, 94, 0.1)",
                  color: "rgb(134, 239, 172)",
                }}
                role="status"
                aria-live="polite"
              >
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {submitStatus === "error" && (
              <div
                className="rounded-lg border p-4 text-sm"
                style={{
                  borderColor: "rgba(239, 68, 68, 0.5)",
                  backgroundColor: "rgba(239, 68, 68, 0.1)",
                  color: "rgb(252, 165, 165)",
                }}
                role="alert"
                aria-live="assertive"
              >
                ✗ Failed to send message. Please try again.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold text-accent-foreground transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 bg-gradient-to-r from-primary to-accent hover:shadow-lg"
              style={{
                boxShadow: "0 0 20px rgba(80, 200, 255, 0.3)",
              }}
              aria-busy={isSubmitting}
            >
              <Send className="h-5 w-5" />
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
