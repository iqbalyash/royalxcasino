import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Sitemap | Royal X Casino - All Pages Pakistan',
  description:
    'Complete sitemap of Royal X Casino. Find all pages including games, bonuses, deposit methods, FAQ, and legal pages for our online gaming platform in Pakistan.',
}

export default function SitemapPage() {
  const pages = [
    {
      title: 'Homepage',
      url: '/',
      description: 'Main landing page of Royal X Casino',
    },
    {
      title: 'About Royal X Casino',
      url: '/about-royal-x-casino',
      description: 'Learn about our online gaming platform in Pakistan',
    },
    {
      title: 'Games',
      url: '/games',
      description: 'Explore our collection of skill-based games',
    },
    {
      title: 'Bonuses & Promotions',
      url: '/bonuses-promotions',
      description: 'Discover available bonuses and promotional offers',
    },
    {
      title: 'Deposit & Withdrawal',
      url: '/deposit-withdrawal',
      description: 'Payment methods including JazzCash, EasyPaisa, bank transfer, and USDT',
    },
    {
      title: 'How to Play',
      url: '/how-to-play',
      description: 'Step-by-step guide to get started on Royal X Casino',
    },
    {
      title: 'FAQ',
      url: '/faq',
      description: 'Frequently asked questions about Royal X Casino',
    },
    {
      title: 'Responsible Gaming',
      url: '/responsible-gaming',
      description: 'Learn about responsible gaming practices and tools',
    },
    {
      title: 'Terms and Conditions',
      url: '/terms-and-conditions',
      description: 'Terms and conditions for using Royal X Casino',
    },
    {
      title: 'Privacy Policy',
      url: '/privacy-policy',
      description: 'How we collect, use, and protect your information',
    },
    {
      title: 'Disclaimer',
      url: '/disclaimer',
      description: 'Important legal disclaimer and platform information',
    },
  ]

  return (
    <>
      <Header />
      <main className="site-main">
        <section className="content-section">
          <div className="container">
            <header className="section-header">
              <h1 className="section-title">Sitemap</h1>
            </header>
            <div className="section-content">
              <p>
                Find all pages and sections of Royal X Casino. Use this sitemap
                to navigate to any page on our online gaming platform.
              </p>
              <div className="sitemap-list" style={{ marginTop: '2rem' }}>
                {pages.map((page, index) => (
                  <div
                    key={index}
                    style={{
                      marginBottom: '1.5rem',
                      padding: '1.5rem',
                      background: 'var(--bg-card)',
                      borderRadius: '8px',
                      border: '1px solid rgba(255, 215, 0, 0.1)',
                    }}
                  >
                    <h2 style={{ marginBottom: '0.5rem' }}>
                      <Link
                        href={page.url}
                        style={{
                          color: 'var(--gold-primary)',
                          textDecoration: 'none',
                        }}
                      >
                        {page.title}
                      </Link>
                    </h2>
                    <p
                      style={{
                        color: 'var(--text-secondary)',
                        margin: 0,
                        fontSize: '0.9375rem',
                      }}
                    >
                      {page.description}
                    </p>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                <Link href="/" className="btn btn-primary btn-large">
                  Return to Homepage
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
