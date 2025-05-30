import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { fontSans } from "./fonts"
import { ThemeProvider } from "next-themes"

export const metadata: Metadata = {
  title: "Ayhro - Designing intuitive journeys",
  description: "We build the digital tomorrow",
  generator: "v0.dev",
}

// Add viewport meta tag for better mobile handling
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontSans.className} dark`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

import "./globals.css"