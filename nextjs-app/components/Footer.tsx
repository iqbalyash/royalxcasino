import Link from 'next/link'

export default function Footer() {
  return (
    <footer id="colophon" className="site-footer" role="contentinfo">
      <div className="container">
        <div className="site-info">
          <nav className="footer-navigation" aria-label="Footer Navigation">
            <div className="footer-links">
              <div className="footer-link-group">
                <h3 className="footer-link-title">Platform</h3>
                <ul className="footer-link-list">
                  <li>
                    <Link href="/about-royal-x-casino">About Us</Link>
                  </li>
                  <li>
                    <Link href="/games">Games</Link>
                  </li>
                  <li>
                    <Link href="/bonuses-promotions">Bonuses</Link>
                  </li>
                  <li>
                    <Link href="/how-to-play">How to Play</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-link-group">
                <h3 className="footer-link-title">Support</h3>
                <ul className="footer-link-list">
                  <li>
                    <Link href="/faq">FAQ</Link>
                  </li>
                  <li>
                    <Link href="/deposit-withdrawal">Deposit & Withdrawal</Link>
                  </li>
                  <li>
                    <Link href="/responsible-gaming">Responsible Gaming</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-link-group">
                <h3 className="footer-link-title">Legal</h3>
                <ul className="footer-link-list">
                  <li>
                    <Link href="/terms-and-conditions">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/disclaimer">Disclaimer</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="footer-disclaimer">
            <p>
              Royal X Casino is a digital entertainment platform. This website
              does not promote illegal gambling activities. Users must comply
              with local laws.
            </p>
          </div>
          <div className="footer-copyright">
            <p>&copy; 2026 Royal X Casino. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
