import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Games | Royal X Casino - Skill-Based Online Games in Pakistan',
  description:
    'Explore Royal X Casino games including card games, slots, arcade games, and live-style games. Skill-based entertainment platform for players in Pakistan.',
}

export default function GamesPage() {
  const games = [
    {
      icon: '🃏',
      title: 'Card Games',
      description:
        'Explore our collection of strategy-focused card-style games designed for players who enjoy tactical gameplay and skill-based entertainment. Perfect for those who appreciate thoughtful decision-making in their gaming experience.',
    },
    {
      icon: '🎰',
      title: 'Slots & Arcade Games',
      description:
        'Enjoy fast-paced visual games with engaging graphics and smooth gameplay. Our slots and arcade collection offers instant entertainment with vibrant themes and user-friendly interfaces optimized for Pakistani players.',
    },
    {
      icon: '🎲',
      title: 'Live-Style Games',
      description:
        'Experience real-time interactive formats that bring the excitement of live gaming to your device. These immersive games combine strategy with dynamic gameplay for an engaging entertainment experience.',
    },
  ]

  return (
    <>
      <Header />
      <main className="site-main">
        <section className="content-section games-section">
          <div className="container">
            <header className="section-header">
              <h1 className="section-title">
                Games Available at Royal X Casino
              </h1>
            </header>
            <div className="section-content">
              <p>
                Royal X Casino offers a diverse selection of skill-based and
                entertainment-focused games designed for players in Pakistan. Our
                game collection includes various categories to suit different
                preferences and skill levels.
              </p>
              <div className="games-grid">
                {games.map((game, index) => (
                  <article key={index} className="game-card">
                    <div className="game-icon" aria-hidden="true">
                      {game.icon}
                    </div>
                    <h2 className="game-title">{game.title}</h2>
                    <p className="game-description">{game.description}</p>
                  </article>
                ))}
              </div>
              <h2>Game Categories Explained</h2>
              <p>
                Our platform features games that emphasize skill, strategy, and
                entertainment. Each game category is designed to provide an
                engaging experience while maintaining fair gameplay mechanics.
              </p>
              <h3>Mobile Gaming Experience</h3>
              <p>
                All games at Royal X Casino are fully optimized for mobile
                devices. Whether you're using a smartphone or tablet, you can
                enjoy smooth gameplay with fast loading times, even on slower
                internet connections common in Pakistan.
              </p>
              <h3>Getting Started</h3>
              <p>
                To start playing games on Royal X Casino, simply{' '}
                <Link href="/how-to-play">register and create an account</Link>.
                Once registered, you can explore our game collection and choose
                the games that interest you most.
              </p>
              <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                <Link
                  href="https://royalxcasino55.com/?refer_id=101202282045"
                  className="btn btn-primary btn-large"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Play Now
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
