import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Samarth Mahapatra | Backend Developer",
  description:
    "Terminal-style portfolio of Samarth Mahapatra - Backend Developer building scalable systems",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} antialiased`}>
      <body className="font-mono bg-background text-foreground">{children}</body>
    </html>
  )
}
