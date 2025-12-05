import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://julanbishwakarma.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Julan Bishwakarma - Full-Stack Developer | React & Tailwind CSS Specialist",
  description:
    "BCA Student & Full-Stack Developer specializing in React, JavaScript, and Tailwind CSS. Crafting beautiful, responsive web applications with clean, maintainable code and exceptional user experiences.",
  keywords: ["full-stack developer", "React developer", "JavaScript", "Tailwind CSS", "web development", "BCA student", "portfolio"],
  generator: "Next.js",
  applicationName: "Julan Bishwakarma Portfolio",
  creator: "Julan Bishwakarma",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://julanbishwakarma.com",
    siteName: "Julan Bishwakarma",
    title: "Julan Bishwakarma - Full-Stack Developer",
    description:
      "BCA Student & Full-Stack Developer specializing in React, JavaScript, and Tailwind CSS. Crafting beautiful, responsive web applications.",
    images: [
      {
        url: "/profile.JPG",
        width: 1200,
        height: 1200,
        alt: "Julan Bishwakarma - Full-Stack Developer",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Julan Bishwakarma - Full-Stack Developer",
    description:
      "BCA Student & Full-Stack Developer specializing in React, JavaScript, and Tailwind CSS.",
    images: ["/profile.JPG"],
    creator: "@julanbishwakarma",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://julanbishwakarma.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0a0a" />
        <link rel="canonical" href="https://julanbishwakarma.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Julan Bishwakarma",
              url: "https://julanbishwakarma.com",
              description: "Full-Stack Developer specializing in React, JavaScript, and Tailwind CSS",
              jobTitle: "Full-Stack Developer",
              email: "julanbiswa@gmail.com",
              telephone: "+977 9819957105",
              image: "https://julanbishwakarma.com/profile.JPG",
              sameAs: [
                "https://github.com/julanbishwakarma",
                "https://linkedin.com/in/julanbishwakarma",
                "https://twitter.com/julanbishwakarma",
              ],
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
