import './styles.css'

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <div className="contact-content">
          <p className="section-label">Get In Touch</p>
          <h2>Let's work together</h2>
          <p>
            I'm always interested in hearing about new projects and exciting opportunities.
            Feel free to reach out to discuss how we can collaborate.
          </p>
          <div className="contact-methods">
            <div className="contact-item">
              <span className="label">Email</span>
              <a href="mailto:pulkit.dadwal@techaheadcorp.com">pulkit.dadwal@techaheadcorp.com</a>
            </div>
            <div className="contact-item">
              <span className="label">Phone</span>
              <a href="tel:+918448138422">+91 84481 38422</a>
            </div>
            <div className="contact-item">
              <span className="label">Location</span>
              <p>Greater Noida, Uttar Pradesh</p>
            </div>
          </div>
          <div className="social-links">
            <a href="#" className="social-link">LinkedIn</a>
            <a href="#" className="social-link">Twitter</a>
            <a href="#" className="social-link">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;
