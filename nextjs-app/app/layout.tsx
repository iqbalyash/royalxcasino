import type { Metadata } from 'next'
import './globals.css'
import favicon from './royal-x-casino.png'

export const metadata: Metadata = {
  title: 'Royal X Casino | Online Gaming Platform in Pakistan',
  description:
    'Royal X Casino is a trusted online gaming platform in Pakistan for secure, skill-based casino-style games, fast payouts, and a smooth mobile experience.',
  keywords:
    'online casino Pakistan, real money games Pakistan, skill-based casino games, mobile casino Pakistan, Royal X Casino',
  authors: [{ name: 'Royal X Casino Team' }],
  icons: {
    icon: favicon,
  },
  openGraph: {
    title: 'Royal X Casino | Online Gaming Platform in Pakistan',
    description:
      'Play secure, skill-based online casino-style games at Royal X Casino, a modern gaming platform for players in Pakistan with mobile-friendly design and fast payouts.',
    type: 'website',
    url: 'https://royal-x-casino.com',
    siteName: 'Royal X Casino',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Royal X Casino | Online Gaming Platform in Pakistan',
    description:
      'Discover Royal X Casino, Pakistan’s online gaming platform for secure, skill-based games with a smooth mobile experience and exciting bonuses.',
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
