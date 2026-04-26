import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "João Araujo - Full-Stack Developer",
  description:
    "Full-Stack Developer and Computer Science student at UNIFESP. Specialized in React, Next.js, Node.js and modern web development.",
  keywords: [
    "João Araujo",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "Portfolio",
    "UNIFESP",
  ],
  authors: [{ name: "João Araujo" }],
  creator: "João Araujo",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://joao-araujo.dev",
    title: "João Araujo - Full-Stack Developer",
    description:
      "Full-Stack Developer and Computer Science student at UNIFESP. Specialized in React, Next.js, Node.js and modern web development.",
    siteName: "João Araujo - Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "João Araujo - Full-Stack Developer",
    description:
      "Full-Stack Developer and Computer Science student at UNIFESP. Specialized in React, Next.js, Node.js and modern web development.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.dev",
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jetbrainsMono.variable} bg-neutral-950`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo.jpg" type="image/jpeg" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
