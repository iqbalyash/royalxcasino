import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Bonuses & Promotions | Royal X Casino Pakistan',
  description:
    'Discover Royal X Casino bonuses and promotions including welcome rewards, activity-based promotions, and referral incentives for players in Pakistan.',
}

export default function BonusesPage() {
  return (
    <>
      <Header />
      <main className="site-main">
        <section className="content-section bonuses-section">
          <div className="container">
            <header className="section-header">
              <h1 className="section-title">Bonuses & Player Rewards</h1>
            </header>
            <div className="section-content">
              <p>
                Royal X Casino offers promotional rewards designed to enhance your
                gaming experience. Our bonus system is designed to provide value
                while promoting responsible gaming practices.
              </p>
              <h2>Available Promotions</h2>
              <ul className="bonuses-list">
                <li>Welcome rewards for new players</li>
                <li>Activity-based promotions</li>
                <li>Referral incentives</li>
                <li>Periodic platform offers</li>
                <li>Special event bonuses</li>
                <li>Loyalty program benefits</li>
              </ul>
              <h2>How Bonuses Work</h2>
              <p>
                Bonuses at Royal X Casino are designed to enhance your
                entertainment experience. When you register and make your first
                deposit, you may be eligible for welcome rewards. Additional
                promotions may be available based on your activity and platform
                events.
              </p>
              <h3>Welcome Rewards</h3>
              <p>
                New players who register and complete their account setup may
                receive welcome rewards. These rewards are designed to help you
                get started and explore the platform's features.
              </p>
              <h3>Activity-Based Promotions</h3>
              <p>
                Regular players may receive promotions based on their platform
                activity. These rewards recognize your engagement and provide
                additional value for your gaming experience.
              </p>
              <h3>Referral Incentives</h3>
              <p>
                Share Royal X Casino with friends and family, and you may be
                eligible for referral incentives when they register and become
                active players.
              </p>
              <h2>Important Information</h2>
              <p className="bonus-disclaimer">
                All bonuses and promotions are subject to terms and conditions.
                Please review the applicable terms before participating. We
                promote responsible gaming practices, and all bonuses are
                designed for entertainment purposes only. Bonus availability may
                vary and is subject to change without notice.
              </p>
              <p>
                For detailed information about bonus terms, please review our{' '}
                <Link href="/terms-and-conditions">Terms and Conditions</Link>.
                If you have questions about bonuses, visit our{' '}
                <Link href="/faq">FAQ page</Link> or contact support.
              </p>
              <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                <Link
                  href="https://royalxcasino55.com/?refer_id=101202282045"
                  className="btn btn-primary btn-large"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Claim Your Bonus
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
