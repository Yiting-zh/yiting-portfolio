const About = () => (
  <section id="about" className="about-section" data-aos="fade-up">
    <div className="section-container about-container">
      <h2 className="heading-h2">About Me</h2>
      <div className="about-info">
        <div className="about-left" data-aos="fade-right">
          <img src="/Yiting.jpg" alt="About Me" className="about-image" />
        </div>
        <div className="about-right" data-aos="fade-left">
          <p className="body-regular">
            Hi, I’m Yiting 😺🌿 <br /><br />
            A front-end developer with a UX background—curious, creative, and driven by the joy of building.<br /><br />
            My journey started in UX design, where I loved turning user needs into meaningful digital experiences. But the more I worked with developers, the more I realized I didn’t want to stop at design—I wanted to build things myself.<br /><br />
            That curiosity led me to front-end development. I began learning HTML, CSS, and JavaScript, and I was hooked. It felt empowering to bring my ideas to life through code and create experiences that are both functional and beautiful.<br /><br />
            Now, I’m focused on becoming a developer who not only thinks about how things look and feel—but also how they work.<br /><br />
            With my UX mindset and technical skills, I’m ready to build better products from the inside out.
          </p>
        </div>
      </div>
      <div className="about-skills" data-aos="fade-up">
        <h3 className="heading-h3">My Skills</h3>

        <div className="skills-container">
          <div className="skills-logo">
            <img src="/figma.png" alt="Figma" className="logo-pic" />
            <p className="skills-text">Figma</p>
          </div>
          <div className="skills-logo">
            <img src="/html5.png" alt="HTML" className="logo-pic" />
            <p className="skills-text">HTML</p>
          </div>
          <div className="skills-logo">
            <img src="/css.png" alt="CSS" className="logo-pic" />
            <p className="skills-text">CSS</p>
          </div>
          <div className="skills-logo">
            <img src="/javascript.png" alt="JavaScript" className="logo-pic" />
            <p className="skills-text">JavaScript</p>
          </div>
          <div className="skills-logo">
            <img src="/react.png" alt="React" className="logo-pic" />
            <p className="skills-text">React</p>
          </div>
          <div className="skills-logo">
            <img src="/git.png" alt="Git & GitHub" className="logo-pic" />
            <p className="skills-text">Git & GitHub</p>
          </div>
          <div className="skills-logo">
            <img src="/uxui.png" alt="UX/UI Design" className="logo-pic" />
            <p className="skills-text">UX/UI Design</p>
          </div>
          <div className="skills-logo">
            <img src="/sass.png" alt="Sass" className="logo-pic" />
            <p className="skills-text">Sass</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;