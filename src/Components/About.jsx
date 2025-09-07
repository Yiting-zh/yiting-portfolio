const About = ({ dict }) => (
  <section id="about" className="about-section" data-aos="fade-up">
    <div className="section-container about-container">
      <h2 className="heading-h2">{dict.aboutMe}</h2>
      <div className="about-info">
        <div className="about-left" data-aos="fade-right">
          <img src={`${import.meta.env.BASE_URL}Yiting.png`} alt="About Me" className="about-image" />
        </div>
        <div className="about-right" data-aos="fade-left">
          {dict.aboutDescription.map((paragraph, idx) => (
            <p className="body-regular" key={idx}>{paragraph}</p>
          ))}
        </div>
      </div>
      <div className="about-skills" data-aos="fade-up">
        <h3 className="heading-h3">{dict.skills}</h3>

        <div className="skills-container">
          <div className="skills-logo">
            <img src={`${import.meta.env.BASE_URL}figma.png`} alt="Figma" className="logo-pic" />
            <p className="skills-text">Figma</p>
          </div>
          <div className="skills-logo">
            <img src={`${import.meta.env.BASE_URL}html5.png`} alt="HTML" className="logo-pic" />
            <p className="skills-text">HTML</p>
          </div>
          <div className="skills-logo">
            <img src={`${import.meta.env.BASE_URL}css.png`} alt="CSS" className="logo-pic" />
            <p className="skills-text">CSS</p>
          </div>
          <div className="skills-logo">
            <img src={`${import.meta.env.BASE_URL}javascript.png`} alt="JavaScript" className="logo-pic" />
            <p className="skills-text">JavaScript</p>
          </div>
          <div className="skills-logo">
            <img src={`${import.meta.env.BASE_URL}react.png`} alt="React" className="logo-pic" />
            <p className="skills-text">React</p>
          </div>
          <div className="skills-logo">
            <img src={`${import.meta.env.BASE_URL}git.png`} alt="Git & GitHub" className="logo-pic" />
            <p className="skills-text">Git & GitHub</p>
          </div>
          <div className="skills-logo">
            <img src={`${import.meta.env.BASE_URL}uxui.png`} alt="UX/UI Design" className="logo-pic" />
            <p className="skills-text">UX/UI Design</p>
          </div>
          <div className="skills-logo">
            <img src={`${import.meta.env.BASE_URL}sass.png`} alt="Sass" className="logo-pic" />
            <p className="skills-text">Sass</p>
          </div>
          <div className="skills-logo">
            <img src={`${import.meta.env.BASE_URL}nextjs.png`} alt="Next.js" className="logo-pic" />
            <p className="skills-text">Next.js</p>
          </div>
          <div className="skills-logo">
            <img src={`${import.meta.env.BASE_URL}supabase.png`} alt="Supabase" className="logo-pic" />
            <p className="skills-text">Supabase</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;