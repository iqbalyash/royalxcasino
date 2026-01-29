import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms and Conditions | Royal X Casino Pakistan',
  description:
    'Read Royal X Casino terms and conditions. Understand the rules, regulations, and user agreement for our online gaming platform in Pakistan.',
}

export default function TermsAndConditionsPage() {
  return (
    <>
      <Header />
      <main className="site-main">
        <section className="content-section">
          <div className="container">
            <header className="section-header">
              <h1 className="section-title">Terms and Conditions</h1>
            </header>
            <div className="section-content">
              <p>
                <strong>Last Updated:</strong> January 2026
              </p>
              <p>
                Please read these Terms and Conditions carefully before using
                Royal X Casino. By accessing or using our platform, you agree to
                be bound by these terms.
              </p>
              <h2>1. Acceptance of Terms</h2>
              <p>
                By registering, accessing, or using Royal X Casino, you
                acknowledge that you have read, understood, and agree to be bound
                by these Terms and Conditions. If you do not agree with any
                part of these terms, you must not use our platform.
              </p>
              <h2>2. Eligibility</h2>
              <p>
                You must be of legal age in your jurisdiction to use Royal X
                Casino. By using our platform, you represent and warrant that
                you meet the age requirements and are legally permitted to
                engage in online gaming activities in your jurisdiction.
              </p>
              <h2>3. Account Registration</h2>
              <p>
                To use Royal X Casino, you must register and create an account.
                You agree to:
              </p>
              <ul className="about-features">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized access</li>
                <li>Be responsible for all activities under your account</li>
              </ul>
              <h2>4. Platform Usage</h2>
              <p>
                Royal X Casino is provided for entertainment purposes. You agree
                to use the platform in accordance with all applicable laws and
                regulations. You must not:
              </p>
              <ul className="about-features">
                <li>Use the platform for any illegal activities</li>
                <li>Attempt to manipulate or exploit the platform</li>
                <li>Share your account with others</li>
                <li>Interfere with platform operations or security</li>
              </ul>
              <h2>5. Deposits and Withdrawals</h2>
              <p>
                All deposits and withdrawals are subject to our payment terms.
                Processing times vary by payment method. We reserve the right to
                verify your identity and payment methods before processing
                transactions. Please review our Deposit & Withdrawal page for
                detailed information.
              </p>
              <h2>6. Bonuses and Promotions</h2>
              <p>
                All bonuses and promotions are subject to specific terms and
                conditions. We reserve the right to modify, cancel, or restrict
                bonuses at any time. Bonus terms may include wagering
                requirements and other conditions. Please review bonus terms
                before participating.
              </p>
              <h2>7. Responsible Gaming</h2>
              <p>
                We promote responsible gaming practices. You are responsible for
                maintaining control over your gaming activities. If you believe
                you may have a gaming problem, please seek help and consider
                using our responsible gaming tools. Visit our{' '}
                <Link href="/responsible-gaming">Responsible Gaming</Link> page
                for more information.
              </p>
              <h2>8. Intellectual Property</h2>
              <p>
                All content on Royal X Casino, including text, graphics, logos,
                and software, is the property of Royal X Casino or its
                licensors and is protected by copyright and other intellectual
                property laws.
              </p>
              <h2>9. Limitation of Liability</h2>
              <p>
                Royal X Casino is provided "as is" without warranties of any
                kind. We are not liable for any losses or damages arising from
                your use of the platform, except as required by law.
              </p>
              <h2>10. Privacy</h2>
              <p>
                Your use of Royal X Casino is also governed by our{' '}
                <Link href="/privacy-policy">Privacy Policy</Link>. Please
                review it to understand how we collect, use, and protect your
                information.
              </p>
              <h2>11. Modifications</h2>
              <p>
                We reserve the right to modify these Terms and Conditions at any
                time. Changes will be effective upon posting. Your continued use
                of the platform after changes constitutes acceptance of the
                modified terms.
              </p>
              <h2>12. Termination</h2>
              <p>
                We may suspend or terminate your account if you violate these
                Terms and Conditions or engage in any fraudulent or illegal
                activities.
              </p>
              <h2>13. Governing Law</h2>
              <p>
                These Terms and Conditions are governed by applicable laws. You
                agree to comply with all local laws and regulations in your
                jurisdiction.
              </p>
              <h2>14. Contact Information</h2>
              <p>
                If you have questions about these Terms and Conditions, please
                visit our <Link href="/faq">FAQ page</Link> or contact our
                support team.
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
