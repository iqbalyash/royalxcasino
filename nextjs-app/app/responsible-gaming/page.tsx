import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Responsible Gaming | Royal X Casino Pakistan',
  description:
    'Learn about responsible gaming practices at Royal X Casino. Tools and resources to help you maintain control over your gaming activities in Pakistan.',
}

export default function ResponsibleGamingPage() {
  return (
    <>
      <Header />
      <main className="site-main">
        <section className="content-section responsible-gaming-section">
          <div className="container">
            <header className="section-header">
              <h1 className="section-title">Responsible Gaming</h1>
            </header>
            <div className="section-content">
              <p>
                At Royal X Casino, we promote responsible and mindful gameplay.
                Our platform is intended for entertainment purposes only, and
                we are committed to helping users maintain healthy gaming habits.
              </p>
              <h2>Our Commitment</h2>
              <p>
                We believe that gaming should be an enjoyable and entertaining
                activity. We provide tools and resources to help you stay in
                control of your gaming experience and make informed decisions.
              </p>
              <h2>Responsible Gaming Practices</h2>
              <ul className="responsible-gaming-list">
                <li>
                  Set personal limits on time and spending before you start
                  playing
                </li>
                <li>
                  Take regular breaks to maintain perspective and avoid extended
                  sessions
                </li>
                <li>
                  Never play with money you cannot afford to lose or that is
                  needed for essential expenses
                </li>
                <li>
                  Understand that gaming outcomes are based on skill and chance,
                  not guaranteed results
                </li>
                <li>
                  Keep track of your gaming activity and spending to maintain
                  awareness
                </li>
                <li>
                  Comply with all applicable local laws and regulations in your
                  area
                </li>
                <li>
                  Seek help if gaming is negatively impacting your life,
                  relationships, or finances
                </li>
              </ul>
              <h2>Warning Signs</h2>
              <p>
                If you notice any of the following signs, it may be time to
                reassess your gaming habits:
              </p>
              <ul className="about-features">
                <li>Spending more time or money than you intended</li>
                <li>Neglecting responsibilities or relationships</li>
                <li>Feeling anxious or stressed about gaming</li>
                <li>Using gaming to escape problems or negative emotions</li>
                <li>Lying to others about your gaming activity</li>
                <li>Borrowing money to fund gaming activities</li>
              </ul>
              <h2>Getting Help</h2>
              <p>
                If you believe you may have a problem with gaming, there are
                resources available to help:
              </p>
              <ul className="about-features">
                <li>
                  Contact our support team to discuss account management options
                </li>
                <li>
                  Seek support from friends, family, or professional counselors
                </li>
                <li>
                  Research local support organizations in Pakistan that
                  specialize in gaming-related issues
                </li>
                <li>
                  Consider self-exclusion tools if you need to take a break from
                  gaming
                </li>
              </ul>
              <h2>Platform Tools</h2>
              <p>
                Royal X Casino provides various tools to help you maintain
                control:
              </p>
              <ul className="responsible-gaming-list">
                <li>Account activity tracking</li>
                <li>Deposit and spending limits</li>
                <li>Session time reminders</li>
                <li>Self-exclusion options</li>
                <li>Access to responsible gaming resources</li>
              </ul>
              <h2>Legal Compliance</h2>
              <p>
                Users must comply with all applicable local laws and regulations
                in their jurisdiction. Royal X Casino is designed for
                entertainment purposes and should not be used in violation of
                any local laws. Please ensure you understand and comply with the
                legal requirements in Pakistan regarding online gaming
                activities.
              </p>
              <h2>Age Restrictions</h2>
              <p>
                Royal X Casino is intended for users who are of legal age in
                their jurisdiction. We do not allow underage users on our
                platform. If you are not of legal age, please do not register or
                use our services.
              </p>
              <h2>Additional Resources</h2>
              <p>
                For more information about responsible gaming, please review our{' '}
                <Link href="/terms-and-conditions">Terms and Conditions</Link>{' '}
                and <Link href="/disclaimer">Disclaimer</Link>. If you have
                questions, visit our <Link href="/faq">FAQ page</Link> or
                contact our support team.
              </p>
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
