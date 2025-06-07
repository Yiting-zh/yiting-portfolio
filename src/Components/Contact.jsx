const Contact = () => (
  <>
    <section id="contact" className="contact-section" data-aos="fade-up">
      <div className="contact-container section-container">
        <div className="contact-left" data-aos="fade-right">
          <h2 className="heading-h2">Let's Connect</h2>
          <p className="body-regular">
            I’m always excited to connect with fellow developers, designers, and anyone who shares a passion for building great things. Whether you have a project in mind, want to collaborate, or just want to chat about tech, feel free to reach out!
          </p>
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/zhang-yiting" target="_blank" rel="noopener noreferrer" className="contact-icon-link">
              <img src="/linkedin-icon.png" alt="LinkedIn" className="contact-icon normal" />
              <img src="/linkedin-yellow-icon.png" alt="LinkedIn" className="contact-icon hover" />
            </a>
            <a href="https://github.com/Yiting-zh" target="_blank" rel="noopener noreferrer" className="contact-icon-link">
              <img src="/github-icon.png" alt="GitHub" className="contact-icon normal" />
              <img src="/github-yellow-icon.png" alt="GitHub" className="contact-icon hover" />
            </a>
          </div>
        </div>
        <div className="contact-right" data-aos="fade-left">
          <div className="contact-form">
            <form action="https://formspree.io/f/xpwrakyk" method="POST">
              <label>
                <input type="text" name="name" placeholder="Name" required />
                <input type="email" name="email" placeholder="Email" required />
                <textarea name="message" placeholder="Message" required></textarea>
              </label>
              <button type="submit" className="button-primary">Send Message</button>
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