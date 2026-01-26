import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Royal X Casino | Online Gaming Platform in Pakistan',
  description: 'Royal X Casino is a modern online gaming platform in Pakistan offering skill-based games, mobile-friendly gameplay, and a secure user experience.',
  keywords: 'online gaming, Pakistan, skill-based games, mobile gaming, digital entertainment, Royal X Casino',
  authors: [{ name: 'Royal X Casino Team' }],
  openGraph: {
    title: 'Royal X Casino | Online Gaming Platform in Pakistan',
    description: 'Royal X Casino is a modern online gaming platform in Pakistan offering skill-based games, mobile-friendly gameplay, and a secure user experience.',
    type: 'website',
    url: 'https://royal-x-casino.com',
    siteName: 'Royal X Casino',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Royal X Casino | Online Gaming Platform in Pakistan',
    description: 'Royal X Casino is a modern online gaming platform in Pakistan offering skill-based games, mobile-friendly gameplay, and a secure user experience.',
    site: '@royalxcasino',
  },
  verification: {
    google: 'ridBghgWRmV7PSshcAEhsLQ7t2dN9S9nN6hFQUMX-DY',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'Royal X Casino',
              url: 'https://royal-x-casino.com',
              applicationCategory: 'Game',
              operatingSystem: ['Web', 'Android'],
              areaServed: {
                '@type': 'Country',
                name: 'Pakistan',
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
