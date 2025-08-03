const Contact = ({ dict }) => (
  <>
    <section id="contact" className="contact-section" data-aos="fade-up">
      <div className="contact-container section-container">
        <div className="contact-left" data-aos="fade-right">
          <h2 className="heading-h2">{dict.letsConnect}</h2>
          <p className="body-regular">
          {dict.connectMessage}
          </p>
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/zhang-yiting" target="_blank" rel="noopener noreferrer" className="contact-icon-link">
              <img src={`${import.meta.env.BASE_URL}linkedin-icon.png`} alt="LinkedIn" className="contact-icon normal" />
              <img src={`${import.meta.env.BASE_URL}linkedin-yellow-icon.png`} alt="LinkedIn" className="contact-icon hover" />
            </a>
            <a href="https://github.com/Yiting-zh" target="_blank" rel="noopener noreferrer" className="contact-icon-link">
              <img src={`${import.meta.env.BASE_URL}github-icon.png`} alt="GitHub" className="contact-icon normal" />
              <img src={`${import.meta.env.BASE_URL}github-yellow-icon.png`} alt="GitHub" className="contact-icon hover" />
            </a>
          </div>
        </div>
        <div className="contact-right" data-aos="fade-left">
          <div className="contact-form">
            <form action="https://formspree.io/f/xpwrakyk" method="POST">
              <label>
                <input type="text" name="name" placeholder={dict.name} required />
                <input type="email" name="email" placeholder={dict.email} required />
                <textarea name="message" placeholder={dict.message} required></textarea>
              </label>
              <button type="submit" className="button-primary">{dict.send}</button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <footer className="footer">
      <p>
        Created with <span role="img" aria-label="white heart">🤍</span> by Yiting Zhang © {new Date().getFullYear()}
      </p>
    </footer>
  </>
);

export default Contact;