import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Social Caption Generator - AI-Powered Captions for Instagram, TikTok & More',
  description: 'Create engaging, platform-specific captions for Instagram, TikTok, LinkedIn, and Twitter in seconds. Free AI-powered caption generator with hashtag suggestions.',
  keywords: 'social media captions, Instagram captions, TikTok captions, LinkedIn posts, Twitter captions, AI caption generator, hashtag generator',
  authors: [{ name: 'Social Caption Generator' }],
  openGraph: {
    title: 'Social Caption Generator - AI-Powered Social Media Captions',
    description: 'Generate engaging captions for all your social media platforms instantly',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Caption Generator - AI-Powered Social Media Captions',
    description: 'Generate engaging captions for all your social media platforms instantly',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}