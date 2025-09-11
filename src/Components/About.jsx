const About = ({ dict }) => (
  <section id="about" className="about-section" data-aos="fade-up">
    <div className="section-container about-container">
      <h2 className="heading-h2">{dict.aboutMe}</h2>
      <div className="about-info">
        <div className="about-left" data-aos="fade-right">
          <picture>
            {/* WebP 格式 - 大图 (1024px以上) */}
            <source
              srcSet={`${import.meta.env.BASE_URL}Yiting.webp`}
              type="image/webp"
              media="(min-width: 1025px)"
            />
            {/* WebP 格式 - 中图 (768px-1024px) */}
            <source
              srcSet={`${import.meta.env.BASE_URL}Yiting-medium.webp`}
              type="image/webp"
              media="(min-width: 769px) and (max-width: 1024px)"
            />
            {/* PNG 格式 - 大图 (1024px以上) */}
            <source
              srcSet={`${import.meta.env.BASE_URL}Yiting.png`}
              media="(min-width: 1025px)"
            />
            {/* PNG 格式 - 中图 (768px-1024px) */}
            <source
              srcSet={`${import.meta.env.BASE_URL}Yiting-medium.png`}
              media="(min-width: 769px) and (max-width: 1024px)"
            />
            {/* 默认图片 */}
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
            { name: 'Supabase', img: 'supabase' },
            { name: 'Tailwind CSS', img: 'tailwind' }
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