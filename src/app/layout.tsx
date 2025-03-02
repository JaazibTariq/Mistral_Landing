import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mistrial AI - Redefining AI for the Next Generation",
  description:
    "Mistrial AI combines cutting-edge technology with innovative approaches to solve complex problems. Our AI solutions are designed to transform industries and empower businesses.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>{children}</body>
    </html>
  )
}

