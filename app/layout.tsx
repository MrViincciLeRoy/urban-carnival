import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Rare Flora South Africa - Expert Plant Guides',
  description: 'Discover and learn about South Africa\'s most extraordinary plants with expert care guides, cultivation tips, and botanical insights.',
  keywords: 'South African plants, rare flora, plant care, gardening, indigenous plants, succulents, cycads',
  authors: [{ name: 'Rare Flora Team' }],
  creator: 'Rare Flora South Africa',
  publisher: 'Rare Flora South Africa',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://username.github.io/rare-flora-blog'),
  openGraph: {
    title: 'Rare Flora South Africa',
    description: 'Expert guides to South Africa\'s most extraordinary plants',
    url: 'https://username.github.io/rare-flora-blog',
    siteName: 'Rare Flora South Africa',
    locale: 'en_ZA',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen bg-gray-50`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}