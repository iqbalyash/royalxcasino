import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | Royal X Casino Pakistan',
  description:
    'Read Royal X Casino privacy policy. Learn how we collect, use, and protect your personal information on our online gaming platform in Pakistan.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="site-main">
        <section className="content-section">
          <div className="container">
            <header className="section-header">
              <h1 className="section-title">Privacy Policy</h1>
            </header>
            <div className="section-content">
              <p>
                <strong>Last Updated:</strong> January 2026
              </p>
              <p>
                At Royal X Casino, we are committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you use our platform.
              </p>
              <h2>1. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <h3>Personal Information</h3>
              <ul className="about-features">
                <li>Name and contact information</li>
                <li>Email address</li>
                <li>Account credentials</li>
                <li>Payment information</li>
                <li>Identity verification documents</li>
              </ul>
              <h3>Usage Information</h3>
              <ul className="about-features">
                <li>Device information</li>
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Platform usage patterns</li>
                <li>Game preferences and activity</li>
              </ul>
              <h2>2. How We Use Your Information</h2>
              <p>We use collected information for the following purposes:</p>
              <ul className="about-features">
                <li>To provide and maintain our platform services</li>
                <li>To process deposits, withdrawals, and transactions</li>
                <li>To verify your identity and prevent fraud</li>
                <li>To communicate with you about your account</li>
                <li>To improve our platform and user experience</li>
                <li>To comply with legal obligations</li>
                <li>To send promotional communications (with your consent)</li>
              </ul>
              <h2>3. Information Sharing</h2>
              <p>
                We do not sell your personal information. We may share
                information in the following circumstances:
              </p>
              <ul className="about-features">
                <li>
                  With payment processors to facilitate transactions (JazzCash,
                  EasyPaisa, banks, USDT providers)
                </li>
                <li>With service providers who assist in platform operations</li>
                <li>When required by law or legal process</li>
                <li>To protect our rights, property, or safety</li>
                <li>With your explicit consent</li>
              </ul>
              <h2>4. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your
                information, including:
              </p>
              <ul className="about-features">
                <li>SSL encryption for data transmission</li>
                <li>Secure storage of sensitive information</li>
                <li>Regular security assessments</li>
                <li>Access controls and authentication</li>
                <li>Monitoring for suspicious activity</li>
              </ul>
              <h2>5. Data Retention</h2>
              <p>
                We retain your information for as long as necessary to provide
                services, comply with legal obligations, resolve disputes, and
                enforce our agreements. When information is no longer needed,
                we securely delete or anonymize it.
              </p>
              <h2>6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="about-features">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to certain processing activities</li>
                <li>Withdraw consent where applicable</li>
                <li>Request data portability</li>
              </ul>
              <h2>7. Cookies and Tracking</h2>
              <p>
                We use cookies and similar technologies to enhance your
                experience, analyze platform usage, and personalize content. You
                can control cookies through your browser settings, though this
                may affect platform functionality.
              </p>
              <h2>8. Third-Party Links</h2>
              <p>
                Our platform may contain links to third-party websites. We are
                not responsible for the privacy practices of these external
                sites. We encourage you to review their privacy policies.
              </p>
              <h2>9. Children's Privacy</h2>
              <p>
                Royal X Casino is not intended for users under the legal age. We
                do not knowingly collect information from minors. If we become
                aware of such collection, we will delete the information
                promptly.
              </p>
              <h2>10. International Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries
                other than your own. We ensure appropriate safeguards are in
                place to protect your information in accordance with this
                Privacy Policy.
              </p>
              <h2>11. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes
                will be posted on this page with an updated "Last Updated" date.
                Your continued use of the platform after changes constitutes
                acceptance of the updated policy.
              </p>
              <h2>12. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or wish to
                exercise your rights, please contact us through our support
                channels or visit our <Link href="/faq">FAQ page</Link>.
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
