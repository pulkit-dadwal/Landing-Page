import './styles.css'

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <p className="eyebrow">Welcome to my landing page</p>
        <h1>Build<br />with a clean modern design.</h1>
        <p className="hero-copy">
          I create beautiful, user-friendly interfaces that help brands stand out online.
          Let’s turn your ideas into a memorable web experience.
        </p>
        <a href="#contact" className="hero-button">Contact Me</a>
      </div>
      <div className="hero-visual">
        <div className="hero-card">
          <span>Fast.</span>
          <span>Responsive.</span>
          <span>Professional.</span>
        </div>
      </div>
    </section>
  )
}

export default Hero;
