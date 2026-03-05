import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Nitish | Associate Software Developer',
  description: 'Nitish is an Associate Software Developer based in Mohali, India, specializing in building production-ready full-stack applications with React, Next.js, GoLang, Node.js, and Frappe/ERPNext.',
  generator: 'Next.js',
  keywords: [
    'Nitish',
    'devlprnitish',
    'Software Developer',
    'Full Stack Developer',
    'React',
    'Next.js',
    'GoLang',
    'Node.js',
    'Frappe',
    'ERPNext',
    'Laravel',
    'Mohali',
    'India'
  ],
  authors: [{ name: 'Nitish', url: 'https://github.com/devlpr-nitish' }],
  creator: 'Nitish',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://devlprnitish.tech',
    title: 'Nitish | Associate Software Developer',
    description: 'Nitish is an Associate Software Developer based in Mohali, India, specializing in building production-ready full-stack applications with React, Next.js, GoLang, Node.js, and Frappe/ERPNext.',
    siteName: 'Nitish Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nitish | Associate Software Developer',
    description: 'Nitish is an Associate Software Developer based in Mohali, India, specializing in building production-ready full-stack applications with React, Next.js, GoLang, Node.js, and Frappe/ERPNext.',
    creator: '@devlprnitish',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bitcount+Grid+Single:wght@400&display=swap" rel="stylesheet" />
      </head>
      <body className={`font-mono antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
