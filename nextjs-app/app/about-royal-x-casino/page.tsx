import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About Royal X Casino | Online Gaming Platform in Pakistan',
  description:
    'Learn about Royal X Casino, a trusted online gaming platform in Pakistan offering secure, skill-based casino-style games with mobile-friendly design and fast payouts.',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="site-main">
        <section className="content-section about-section">
          <div className="container">
            <header className="section-header">
              <h1 className="section-title">About Royal X Casino</h1>
            </header>
            <div className="section-content">
              <p>
                Royal X Casino is a digital entertainment and casino-style gaming
                platform designed specifically for players in Pakistan. We offer
                a secure, mobile-optimized experience where users can register,
                log in, and enjoy strategy-based and skill-focused games.
              </p>
              <p>
                Our platform combines modern technology with user-friendly design
                to provide an engaging gaming experience. Whether you access
                Royal X Casino through your browser or download the APK, you'll
                find a smooth, responsive interface optimized for Pakistani
                users.
              </p>
              <h2>Our Mission</h2>
              <p>
                We aim to provide a safe, entertaining, and accessible online
                gaming platform for players in Pakistan. Our focus is on
                delivering fair gameplay, secure transactions, and a seamless
                mobile experience that works well even on slower internet
                connections.
              </p>
              <h2>Key Features</h2>
              <ul className="about-features">
                <li>Fair gameplay mechanics</li>
                <li>Clean and intuitive design</li>
                <li>Optimized performance for Pakistani users</li>
                <li>Multi-device compatibility</li>
                <li>Secure payment processing</li>
                <li>Mobile-first approach</li>
                <li>24/7 platform availability</li>
                <li>Responsible gaming tools</li>
              </ul>
              <h2>Why Choose Royal X Casino?</h2>
              <p>
                Royal X Casino stands out as a trusted online gaming platform in
                Pakistan. We support local payment methods like JazzCash and
                EasyPaisa, ensuring convenient deposits and withdrawals. Our
                platform is built with security in mind, using industry-standard
                encryption to protect your data and transactions.
              </p>
              <p>
                We're committed to responsible gaming and provide tools to help
                you maintain control over your gaming activities. Our customer
                support is designed to assist Pakistani users with any questions
                or concerns.
              </p>
              <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                <Link
                  href="/"
                  className="btn btn-primary btn-large"
                >
                  Get Started Today
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
