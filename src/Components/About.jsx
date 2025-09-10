const About = ({ dict }) => (
  <section id="about" className="about-section" data-aos="fade-up">
    <div className="section-container about-container">
      <h2 className="heading-h2">{dict.aboutMe}</h2>
      <div className="about-info">
        <div className="about-left" data-aos="fade-right">
          <picture>
            <source
              srcSet={`${import.meta.env.BASE_URL}Yiting.webp`}
              type="image/webp"
            />
            <img 
              src={`${import.meta.env.BASE_URL}Yiting.png`} 
              alt="About Me" 
              className="about-image"
              loading="lazy"
              decoding="async"
              width="260"
              height="260"
            />
          </picture>
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
          {[
            { name: 'Figma', img: 'figma' },
            { name: 'HTML', img: 'html5' },
            { name: 'CSS', img: 'css' },
            { name: 'JavaScript', img: 'javascript' },
            { name: 'React', img: 'react' },
            { name: 'Git & GitHub', img: 'git' },
            { name: 'UX/UI Design', img: 'uxui' },
            { name: 'Sass', img: 'sass' },
            { name: 'Next.js', img: 'nextjs' },
            { name: 'Supabase', img: 'supabase' }
          ].map((skill) => (
            <div className="skills-logo" key={skill.name}>
              <picture>
                <source
                  srcSet={`${import.meta.env.BASE_URL}${skill.img}.webp`}
                  type="image/webp"
                />
                <img 
                  src={`${import.meta.env.BASE_URL}${skill.img}.png`}
                  alt={skill.name}
                  className="logo-pic"
                  loading="lazy"
                />
              </picture>
              <p className="skills-text">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;