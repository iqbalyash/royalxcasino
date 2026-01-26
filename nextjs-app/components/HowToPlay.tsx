export default function HowToPlay() {
  const steps = [
    'Visit royal-x-casino.com',
    'Create an account',
    'Explore available games',
    'Choose a game and play responsibly',
    'Enjoy the platform',
  ]

  return (
    <section id="how-to-play" className="content-section how-to-play-section">
      <div className="container">
        <header className="section-header">
          <h2 className="section-title">
            How to Get Started on Royal X Casino
          </h2>
        </header>
        <div className="section-content">
          <ol className="steps-list">
            {steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
