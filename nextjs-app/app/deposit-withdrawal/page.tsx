import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Deposit & Withdrawal Methods | Royal X Casino Pakistan',
  description:
    'Royal X Casino supports JazzCash, EasyPaisa, bank transfers, and USDT for deposits and withdrawals in Pakistan. Fast, secure payment processing.',
}

export default function DepositWithdrawalPage() {
  return (
    <>
      <Header />
      <main className="site-main">
        <section className="content-section">
          <div className="container">
            <header className="section-header">
              <h1 className="section-title">
                Deposit & Withdrawal Methods
              </h1>
            </header>
            <div className="section-content">
              <p>
                Royal X Casino provides multiple convenient and locally supported
                deposit and withdrawal options, making it easy for users in
                Pakistan to manage their funds smoothly and securely.
              </p>
              <h2>Available Payment Methods</h2>
              <div className="games-grid" style={{ marginTop: '2rem' }}>
                <article className="game-card">
                  <div className="game-icon" aria-hidden="true">📱</div>
                  <h2 className="game-title">JazzCash</h2>
                  <p className="game-description">
                    JazzCash is one of the most popular digital wallets in
                    Pakistan. Royal X Casino supports JazzCash for fast deposits
                    and withdrawals, allowing users to add or withdraw funds
                    directly from their mobile wallet without visiting a bank.
                    Processing is typically instant for deposits and within 24
                    hours for withdrawals.{' '}
                    <a
                      href="https://jazzcash.com.pk"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      style={{ color: 'var(--gold-primary)' }}
                    >
                      Visit JazzCash
                    </a>
                  </p>
                </article>
                <article className="game-card">
                  <div className="game-icon" aria-hidden="true">💳</div>
                  <h2 className="game-title">EasyPaisa</h2>
                  <p className="game-description">
                    EasyPaisa is another widely used mobile payment solution.
                    Users can deposit and withdraw funds using their EasyPaisa
                    account, offering a quick and user-friendly experience,
                    especially for mobile users. Transactions are processed
                    quickly, making it ideal for immediate deposits.{' '}
                    <a
                      href="https://easypaisa.com.pk"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      style={{ color: 'var(--gold-primary)' }}
                    >
                      Visit EasyPaisa
                    </a>
                  </p>
                </article>
                <article className="game-card">
                  <div className="game-icon" aria-hidden="true">🏦</div>
                  <h2 className="game-title">Bank Transfer</h2>
                  <p className="game-description">
                    For users who prefer traditional methods, Royal X Casino
                    supports local bank transfers. This option is suitable for
                    larger transactions and users who want to manage payments
                    directly through their bank accounts. Processing typically
                    takes 1-3 business days.
                  </p>
                </article>
                <article className="game-card">
                  <div className="game-icon" aria-hidden="true">₿</div>
                  <h2 className="game-title">USDT (Tether)</h2>
                  <p className="game-description">
                    Royal X Casino also supports USDT (Tether) for users who
                    prefer digital currency. USDT transactions offer faster
                    processing times, lower transaction fees, and additional
                    privacy. This option is ideal for users familiar with
                    crypto-based payments. You can manage your crypto wallet
                    through platforms like{' '}
                    <a
                      href="https://binance.com"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      style={{ color: 'var(--gold-primary)' }}
                    >
                      Binance
                    </a>
                    .
                  </p>
                </article>
              </div>
              <h2>Processing Times</h2>
              <ul className="about-features">
                <li>
                  <strong>JazzCash:</strong> Deposits are typically instant.
                  Withdrawals processed within 24 hours.
                </li>
                <li>
                  <strong>EasyPaisa:</strong> Deposits are usually instant.
                  Withdrawals completed within 24 hours.
                </li>
                <li>
                  <strong>Bank Transfer:</strong> Deposits and withdrawals
                  typically take 1-3 business days.
                </li>
                <li>
                  <strong>USDT:</strong> Both deposits and withdrawals are usually
                  processed within a few hours, depending on network
                  congestion.
                </li>
              </ul>
              <h2>Security & Safety</h2>
              <p>
                All payment transactions at Royal X Casino are processed using
                industry-standard encryption and security protocols. We protect
                your financial information and ensure secure processing for all
                deposits and withdrawals.
              </p>
              <h3>Transaction Limits</h3>
              <p>
                Minimum and maximum transaction limits may apply depending on
                your chosen payment method and account status. Please check the
                platform for current limits and requirements.
              </p>
              <h2>Getting Started</h2>
              <p>
                To make your first deposit, you'll need to{' '}
                <Link href="/how-to-play">register and create an account</Link>.
                Once registered, navigate to the deposit section and select
                your preferred payment method. Follow the on-screen instructions
                to complete your transaction securely.
              </p>
              <p>
                For withdrawals, ensure your account is verified and select your
                preferred withdrawal method. Processing times vary by method as
                outlined above.
              </p>
              <h2>Need Help?</h2>
              <p>
                If you have questions about deposits, withdrawals, or payment
                methods, please visit our{' '}
                <Link href="/faq">FAQ page</Link> or contact our support team.
                We're here to help ensure smooth and secure transactions.
              </p>
              <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                <Link
                  href="https://royalxcasino55.com/?refer_id=101202282045"
                  className="btn btn-primary btn-large"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Make a Deposit
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
