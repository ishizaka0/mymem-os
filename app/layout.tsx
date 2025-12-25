import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Noto_Sans_JP, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-noto-sans-jp",
})
const _inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "mymem OS - The Operating System of Thought",
  description: "思考の手順を、すべての人に。",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`font-sans antialiased ${_notoSansJP.variable} ${_inter.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
