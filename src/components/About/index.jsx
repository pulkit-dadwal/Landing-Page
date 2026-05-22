import './styles.css'

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-inner">
        <div className="about-copy">
          <p className="section-label">About Me</p>
          <h2>Passionate about building clean digital experiences.</h2>
          <p>
            I’m a front-end developer focused on delivering modern, accessible interfaces that help
            businesses connect with their customers. I enjoy working across design and development,
            turning ideas into polished web products.
          </p>
          <p>
            My toolkit includes React, responsive layouts, and thoughtful UI detail. I care about
            clarity, performance, and building products that feel effortless to use.
          </p>
        </div>
        <div className="about-highlights">
          <div>
            <strong>3+</strong>
            <span>Years of experience</span>
          </div>
          <div>
            <strong>Responsive</strong>
            <span>Design-first approach</span>
          </div>
          <div>
            <strong>Fast</strong>
            <span>Performance optimized</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
