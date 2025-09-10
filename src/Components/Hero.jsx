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
        <picture>
          {/* 移动端小图 */}
          <source
            media="(max-width: 768px)"
            srcSet={`${import.meta.env.BASE_URL}Hero-small.webp`}
            type="image/webp"
          />
          <source
            media="(max-width: 768px)"
            srcSet={`${import.meta.env.BASE_URL}Hero-small.png`}
          />
          {/* 平板端中图 */}
          <source
            media="(max-width: 1024px)"
            srcSet={`${import.meta.env.BASE_URL}Hero-medium.webp`}
            type="image/webp"
          />
          <source
            media="(max-width: 1024px)"
            srcSet={`${import.meta.env.BASE_URL}Hero-medium.png`}
          />
          {/* 桌面端大图 */}
          <source
            srcSet={`${import.meta.env.BASE_URL}Hero.webp`}
            type="image/webp"
          />
          <img 
            src={`${import.meta.env.BASE_URL}Hero.png`} 
            alt="Hero" 
            className="hero-image"
            loading="eager"
            fetchpriority="high"
            decoding="async"
          />
        </picture>
      </div>
    </div>
  </section>
);

export default Hero;