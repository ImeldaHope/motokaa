import type { Metadata } from 'next'
import { Inter, Bricolage_Grotesque, Space_Mono } from 'next/font/google'
import './globals.css'
import { Navbar, Footer } from '@/components'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
  adjustFontFallback: false,
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Motokaa — Auto elegance',
  description: 'Find, rent, buy or sell a car across East Africa.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bricolage.variable} ${spaceMono.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
