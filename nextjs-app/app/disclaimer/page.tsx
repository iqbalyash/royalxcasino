import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Disclaimer | Royal X Casino Pakistan',
  description:
    'Read Royal X Casino disclaimer. Important information about our online gaming platform, legal compliance, and user responsibilities in Pakistan.',
}

export default function DisclaimerPage() {
  return (
    <>
      <Header />
      <main className="site-main">
        <section className="content-section">
          <div className="container">
            <header className="section-header">
              <h1 className="section-title">Disclaimer</h1>
            </header>
            <div className="section-content">
              <p>
                <strong>Last Updated:</strong> January 2026
              </p>
              <p>
                Please read this Disclaimer carefully before using Royal X
                Casino. By accessing or using our platform, you acknowledge that
                you have read, understood, and agree to the terms outlined
                below.
              </p>
              <h2>1. Platform Purpose</h2>
              <p>
                Royal X Casino is a digital entertainment platform offering
                skill-based and entertainment-focused games. The platform is
                intended for entertainment purposes only and should not be
                considered as a source of income or financial gain.
              </p>
              <h2>2. Legal Compliance</h2>
              <p>
                Users are solely responsible for ensuring their use of Royal X
                Casino complies with all applicable local, state, and federal
                laws and regulations in their jurisdiction, including but not
                limited to laws in Pakistan. We do not provide legal advice, and
                users should consult with legal professionals if they have
                questions about the legality of online gaming in their area.
              </p>
              <h2>3. No Guarantees</h2>
              <p>
                Royal X Casino makes no guarantees, representations, or
                warranties regarding:
              </p>
              <ul className="about-features">
                <li>Game outcomes or results</li>
                <li>Platform availability or uptime</li>
                <li>Accuracy of information provided</li>
                <li>Compatibility with all devices or browsers</li>
                <li>Financial returns or winnings</li>
              </ul>
              <h2>4. Financial Risks</h2>
              <p>
                Gaming activities involve financial risk. You may lose money
                when using Royal X Casino. Never deposit or wager more than you
                can afford to lose. Gaming should never be used as a solution to
                financial problems or as a means to generate income.
              </p>
              <h2>5. Responsible Gaming</h2>
              <p>
                Royal X Casino promotes responsible gaming practices. If you
                believe you may have a gaming problem, please seek professional
                help immediately. We provide tools and resources to help you
                maintain control, but you are ultimately responsible for your
                gaming decisions. Visit our{' '}
                <Link href="/responsible-gaming">Responsible Gaming</Link> page
                for more information.
              </p>
              <h2>6. Age Restrictions</h2>
              <p>
                Royal X Casino is intended only for users who are of legal age in
                their jurisdiction. We do not knowingly allow underage users on
                our platform. If you are not of legal age, you must not register
                or use our services.
              </p>
              <h2>7. Third-Party Services</h2>
              <p>
                Royal X Casino may use third-party services for payment
                processing (including JazzCash, EasyPaisa, banks, and USDT
                providers), analytics, and other functions. We are not
                responsible for the practices, policies, or actions of these
                third-party services.
              </p>
              <h2>8. Platform Availability</h2>
              <p>
                We strive to maintain platform availability but do not guarantee
                uninterrupted or error-free service. The platform may be
                unavailable due to maintenance, technical issues, or
                circumstances beyond our control.
              </p>
              <h2>9. Content Accuracy</h2>
              <p>
                While we endeavor to provide accurate information, Royal X Casino
                does not warrant that all content on the platform is complete,
                current, or error-free. Information may be updated or changed
                without notice.
              </p>
              <h2>10. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Royal X Casino, its
                affiliates, and service providers shall not be liable for any
                indirect, incidental, special, consequential, or punitive
                damages arising from your use of the platform.
              </p>
              <h2>11. No Endorsement</h2>
              <p>
                Reference to any payment method, service, or third-party provider
                (including JazzCash, EasyPaisa, banks, or USDT) does not
                constitute an endorsement. Users should conduct their own
                research and due diligence.
              </p>
              <h2>12. Changes to Disclaimer</h2>
              <p>
                We reserve the right to modify this Disclaimer at any time.
                Changes will be effective upon posting. Your continued use of
                the platform after changes constitutes acceptance of the updated
                disclaimer.
              </p>
              <h2>13. Contact Information</h2>
              <p>
                If you have questions about this Disclaimer, please visit our{' '}
                <Link href="/faq">FAQ page</Link> or contact our support team.
                For legal matters, please consult with a qualified legal
                professional.
              </p>
              <h2>14. Acknowledgment</h2>
              <p>
                By using Royal X Casino, you acknowledge that you have read this
                Disclaimer, understand its terms, and agree to be bound by it.
                If you do not agree with any part of this disclaimer, you must
                not use our platform.
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
