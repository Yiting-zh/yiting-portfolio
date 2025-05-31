const About = () => (
  <section className="about-section">
  <div className="section-container about-container">
    <h2 className="heading-h2">About Me</h2>
    <div className="about-info">
      <div className="about-left">
        <img src="/Yiting.jpg" alt="About Me" className="about-image" />
      </div>
      <div className="about-right ">
      <p className="body-regular">Hi, I’m Yiting 😺🌿 <br /><br />A front-end developer with a UX background—curious, creative, and driven by the joy of building.<br /><br />My journey started in UX design, where I loved turning user needs into meaningful digital experiences. But the more I worked with developers, the more I realized I didn’t want to stop at design—I wanted to build things myself. <br /><br />That curiosity led me to front-end development. I began learning HTML, CSS, and JavaScript, and I was hooked. It felt empowering to bring my ideas to life through code and create experiences that are both functional and beautiful.<br /><br />Now, I’m focused on becoming a developer who not only thinks about how things look and feel—but also how they work.<br /><br />With my UX mindset and technical skills, I’m ready to build better products from the inside out.</p>
      </div>
    </div>

    <div className="about-skills">
      <h3 className="heading-h3">My Skills</h3>
      <div className="skills-logo">
        <img src="/figma.png" alt="Figma" className="Figma-image" />
        <img src="/html.png" alt="HTML" className="HTML-image" />
        <img src="/css.png" alt="CSS" className="CSS-image" />
        <img src="/javascript.png" alt="JavaScript" className="JavaScript-image" />
        <img src="/react.png" alt="React" className="React-image" />
        <img src="/git.png" alt="Git & GitHub" className="Git-image" />
        <img src="/responsive.png" alt="Responsive Design" className="Responsive-image" />
        <img src="/sass.png" alt="Sass" className="Sass-image" />
      </div>
     </div> 

  </div>
</section>
);

export default About;