const Hero = () => (
  <section id="hero" className="hero-section">
    <div className="section-container hero-container">
      <div className="hero-left">
        <div className="hero-title-row hero-title-animate" data-aos="fade-right">
          <h1 className="display-hero" data-aos="fade-right">Hi,</h1>
          <p className="heading-h1" data-aos="fade-right">I'm Yiting</p>
        </div>
        <p className="body-large" data-aos="fade-right" data-aos-delay="150">
          I turn ideas into engaging, responsive websites — with a designer’s eye and a developer’s mind.
        </p>
      </div>
      <div className="hero-right" data-aos="fade-left" data-aos-delay="200">
        <img src={`${import.meta.env.BASE_URL}Hero.png`} alt="Hero" className="hero-image" />
      </div>
    </div>
  </section>
);

export default Hero;