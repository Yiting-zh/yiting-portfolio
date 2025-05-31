const Hero = () => (
  <section className="hero-section">
    <div className="section-container hero-container">
      <div className="hero-left">
        <div className="hero-title-row">
          <h1 className="display-hero">Hi,</h1>
          <p className="heading-h1" style={{ marginLeft: "24px" }}>I'm Yiting</p>
        </div>
        <p className="body-large">I turn ideas into engaging, responsive websites — with a designer’s eye and a developer’s mind.</p>
      </div>
      <div className="hero-right">
        <img src="/Hero.jpg" alt="Hero" className="hero-image" />
      </div>
    </div>
  </section>
);
export default Hero;