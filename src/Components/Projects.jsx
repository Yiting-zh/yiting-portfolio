import { useState } from "react";

const projects = [
  {
    name: "Genesis Portfolio",
    image: "/genesis-portfolio.jpg",
    tech: "HTML, CSS, SCSS",
    description: "Recreate the Figma file for Genesis portfolio.",
    learnings: "Learned how to structure a project, use Sass, basic validation, and responsive design.",
    role: "Solo Project",
    challenges: "Attention to detail in HTML/SCSS structure and form validation.",
    viewLive: "https://yiting-zh.github.io/genesis-portfolio-design/",
    github: "https://github.com/Yiting-zh/genesis-portfolio-design",
  },
  {
    name: "Bar website design",
    image: "/bar-website.jpg",
    tech: "html, css",
    description: "A website design for a bar.",
    learnings: "Gained experience with flexbox, layout, and responsive design.",
    role: "Team Project, Responsible for landing page design and implementation.",
    challenges: "Responsive layout and pixel-perfect styling.",
    viewLive: "https://example.com/project2",
    github: "https://github.com/Yiting-zh/project2"
  },
  {
    name: "Invitation Card",
    image: "/invitation-card.jpg",
    tech: "html, css",
    description: "Designed a digital invitation card.",
    learnings: "CSS styling and font hierarchy.",
    role: "Solo Project",
    challenges: "Precise visual layout matching the Figma design.",
    viewLive: "#",
    github: "https://github.com/Yiting-zh/project3"
  },
  {
    name: "Invitation Card",
    image: "/invitation-card.jpg",
    tech: "html, css",
    description: "Designed a digital invitation card.",
    learnings: "CSS styling and font hierarchy.",
    role: "Solo Project",
    challenges: "Precise visual layout matching the Figma design.",
    viewLive: "#",
    github: "https://github.com/Yiting-zh/project3"
  }
];

function Projects() {
  const [segment, setSegment] = useState('projects');
  const handleSegmentClick = (type) => {
    if (type === "design") {
      window.location.href = "https://www.behance.net/yitingzhangux";
    } else {
      setSegment("projects");
    }
  };

  return (
    <section>
      <div className="section-container">
        <h2 className="heading-h2">My Works</h2>
        <div className="segmented-control">
          <div className={`segment button-secondary ${segment === 'projects' ? 'active' : ''}`}
               onClick={() => handleSegmentClick('projects')}>
              Projects
          </div>
          <div className="segment-divider"></div>

          <div className={`segment button-secondary ${segment === 'design' ? 'active' : ''}`}
               onClick={() => handleSegmentClick('design')}>
               Design
          </div>
        </div>
        <div className="projects-container">
          {segment === 'projects' && (
            <div className="projects-grid">
              {projects.map((project) => (
                <div className="project-card" key={project.name}>
                  <img src={project.image} alt={project.name} />
                  <div className="project-card-info">
                    <h3 className="heading-h3">{project.name}</h3>
                    <p className="body-regular">{project.tech}</p>
                  </div>
                  <div className="project-card-detail">
                    <p className="body-regular">Description: {project.description}</p>
                    <p className="body-regular">Learnings: {project.learnings}</p>
                    <p className="body-regular">Role: {project.role}</p>
                    <p className="body-regular">Challenges: {project.challenges}</p>
                    <div className="project-links">
                      <a href={project.viewLive} target="_blank" rel="noopener noreferrer">View Live</a>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
