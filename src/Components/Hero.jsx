const Hero = ({ dict }) => (
  <section id="hero" className="hero-section">
    <div className="section-container hero-container">
      <div className="hero-left">
        <div className="hero-title-row hero-title-animate" data-aos="fade-right">
          <h1 className="display-hero">{dict?.welcome }</h1>
          <p className="heading-h1">{dict?.heroName }</p>
        </div>
        <p className="body-large" data-aos="fade-right" data-aos-delay="150">
          {dict?.heroIntro}
        </p>
      </div>
      <div className="hero-right" data-aos="fade-left" data-aos-delay="200">
        <img src={`${import.meta.env.BASE_URL}Hero.png`} alt="Hero" className="hero-image" />
      </div>
    </div>
  </section>
);

export default Hero;