import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Nitish',
  description: 'Nitish is a developer based in Mohali, India. Building beautiful things with code and design.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/nitish-logo.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/nitish-logo.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/nitish-logo.png',
      },
    ],
    apple: '/nitish-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bitcount+Grid+Single:wght@400&display=swap" rel="stylesheet" />
      </head>
      <body className={`font-mono antialiased`}>
        {children}
      </body>
    </html>
  )
}
