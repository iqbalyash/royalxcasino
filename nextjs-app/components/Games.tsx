export default function Games() {
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
    <section id="games" className="content-section games-section">
      <div className="container">
        <header className="section-header">
          <h2 className="section-title">
            Games Available at Royal X Casino
          </h2>
        </header>
        <div className="games-grid">
          {games.map((game, index) => (
            <article key={index} className="game-card">
              <div className="game-icon" aria-hidden="true">
                {game.icon}
              </div>
              <h3 className="game-title">{game.title}</h3>
              <p className="game-description">{game.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
