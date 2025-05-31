const Contact = () => (
  <>
  <section className="contact-section">
    <div className="contact-container section-container">
      <div className="contact-left">
        <h2 className="heading-h2">Let's Connect</h2>
        <p className="body-regular">
          I’m always excited to connect with fellow developers, designers, and anyone who shares a passion for building great things. Whether you have a project in mind, want to collaborate, or just want to chat about tech, feel free to reach out!
        </p>
        <div className="contact-links">
          <img src="/linkedin-icon.png" alt="LinkedIn" className="contact-icon" />
          <a href="https://www.linkedin.com/in/your-profile" className="body-regular"></a>
          <img src="/github-icon.png" alt="GitHub" className="contact-icon" />
          <a href="https://github.com/your-profile" className="body-regular"></a>
        </div>
      </div>

      <div className="contact-right">
      <div className="contact-form">
        <form action="https://formspree.io/f/xpwrakyk" method="POST">
          <label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required />

            <input
              type="email"
              name="email"
              placeholder="Email"
              required />

            <textarea
              name="message"
              placeholder="Message"
              required
            ></textarea>
          </label>
          <button type="submit" className="button-primary">Send Message</button>
        </form>
      </div>
    </div>
  </div>
</section>

  <footer className="footer">
    <p>
      Created with heart by Yiting Zhang © {new Date().getFullYear()}
    </p>
  </footer>
</>
);

export default Contact;