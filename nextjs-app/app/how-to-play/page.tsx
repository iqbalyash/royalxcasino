import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'How to Play | Royal X Casino - Get Started Guide Pakistan',
  description:
    'Learn how to register, log in, and start playing on Royal X Casino. Step-by-step guide for players in Pakistan to get started with our online gaming platform.',
}

export default function HowToPlayPage() {
  const steps = [
    {
      number: 1,
      title: 'Visit Royal X Casino',
      description:
        'Navigate to royal-x-casino.com on your mobile device or computer. Our platform is optimized for all devices and works seamlessly on smartphones, tablets, and desktops.',
    },
    {
      number: 2,
      title: 'Create Your Account',
      description:
        'Click the registration button and provide basic information including your email address and create a secure password. The registration process is quick and straightforward, taking just a few minutes.',
    },
    {
      number: 3,
      title: 'Verify Your Account',
      description:
        'Complete account verification by following the instructions sent to your email. This step helps ensure account security and enables all platform features.',
    },
    {
      number: 4,
      title: 'Make Your First Deposit',
      description:
        'Choose from our supported payment methods including JazzCash, EasyPaisa, bank transfer, or USDT. Visit our deposit page to learn more about each payment option.',
    },
    {
      number: 5,
      title: 'Explore Available Games',
      description:
        'Browse our game collection including card games, slots, arcade games, and live-style games. Each category offers different entertainment options to suit your preferences.',
    },
    {
      number: 6,
      title: 'Start Playing Responsibly',
      description:
        'Select a game that interests you and start playing. Remember to play responsibly and within your means. We provide tools to help you maintain control over your gaming activities.',
    },
  ]

  return (
    <>
      <Header />
      <main className="site-main">
        <section className="content-section how-to-play-section">
          <div className="container">
            <header className="section-header">
              <h1 className="section-title">
                How to Get Started on Royal X Casino
              </h1>
            </header>
            <div className="section-content">
              <p>
                Getting started on Royal X Casino is simple and straightforward.
                Follow these steps to begin your gaming experience on our
                secure, mobile-optimized platform designed for players in
                Pakistan.
              </p>
              <div className="steps-grid">
                {steps.map((step) => (
                  <div key={step.number} className="step-item">
                    <div className="step-number">{step.number}</div>
                    <h2 className="step-title">{step.title}</h2>
                    <p className="step-description">{step.description}</p>
                  </div>
                ))}
              </div>
              <h2>Additional Tips</h2>
              <ul className="about-features">
                <li>
                  Download the Royal X Casino APK for faster mobile access
                </li>
                <li>
                  Ensure you have a stable internet connection for the best
                  experience
                </li>
                <li>
                  Familiarize yourself with our{' '}
                  <Link href="/responsible-gaming">
                    responsible gaming practices
                  </Link>
                </li>
                <li>
                  Review our <Link href="/faq">FAQ page</Link> for common
                  questions
                </li>
                <li>
                  Check available <Link href="/bonuses-promotions">bonuses</Link>{' '}
                  when you register
                </li>
              </ul>
              <h2>Mobile Gaming</h2>
              <p>
                Royal X Casino is fully optimized for mobile devices. You can
                access all features directly from your smartphone browser, or
                download the APK for a more streamlined experience. Our
                mobile-first design ensures fast loading times and smooth
                gameplay even on slower internet connections.
              </p>
              <h2>Account Security</h2>
              <p>
                We prioritize your account security. Use a strong, unique
                password and never share your login credentials with anyone.
                Enable two-factor authentication if available to add an extra
                layer of security to your account.
              </p>
              <h2>Need Help?</h2>
              <p>
                If you encounter any issues during registration or while using
                the platform, visit our{' '}
                <Link href="/faq">Frequently Asked Questions</Link> page or
                contact our support team. We're here to help ensure you have a
                smooth experience.
              </p>
              <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                <Link
                  href="https://royalxcasino55.com/?refer_id=101202282045"
                  className="btn btn-primary btn-large"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register Now
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
