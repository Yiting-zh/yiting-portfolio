import { useState } from "react";

const projects = [
	{
		name: "Yiting Portfolio",
		image: `${import.meta.env.BASE_URL}genesis-portfolio.jpg`,
		tech: "UX/UI, HTML, CSS, JavaScript, React",
		description: " Yiting portfolio.",
		learnings:
			"Learned how to structure a project, use Sass, basic validation, and responsive design.",
		role: "Solo Project",
		challenges:
			"Attention to detail in HTML/SCSS structure and form validation.",
		viewLive: "https://yiting-zh.github.io/yiting-portfolio-design/",
		github: "https://github.com/Yiting-zh/yiting-portfolio-design",
	},
	{
		name: "Bar website design",
		image: `${import.meta.env.BASE_URL}bar-website.jpg`,
		tech: "HTML, CSS",
		description: "A website design for a bar.",
		learnings: "Gained experience with flexbox, layout, and responsive design.",
		role: "Team Project, Responsible for landing page design and implementation.",
		challenges: "Responsive layout and pixel-perfect styling.",
		viewLive: "https://example.com/project2",
		github: "https://github.com/Yiting-zh/project2",
	},
	{
		name: "Hangman Game",
		image: `${import.meta.env.BASE_URL}hangman.gif`,
		tech: "HTML, CSS, API，JavaScript",
		description: "A classic Hangman game built with JavaScript.",
		learnings: "Learned about game logic, DOM manipulation, and event handling.",
		role: "Team Project",
		challenges: "Precise visual layout matching the Figma design.",
		viewLive: "https://xositax.github.io/Hangman-Project/",
		github: "https://github.com/Yiting-zh/project3",
	},
	{
		name: "Genesis Portfolio",
		image: `${import.meta.env.BASE_URL}genesis-portfolio.gif`,
		tech: "HTML, CSS, SASS, JavaScript",
		description: "Recreate the Figma file for Genesis portfolio.",
		learnings:
			"Learned how to structure a project, use Sass, basic validation, and responsive design.",
		role: "Solo Project",
		challenges:
			"Attention to detail in HTML/SCSS structure and form validation.",
		viewLive: "https://yiting-zh.github.io/genesis-portfolio-design/",
		github: "https://github.com/Yiting-zh/genesis-portfolio-design",
	},
];

function Projects({ dict }) {
	const [segment, setSegment] = useState("projects");
	const handleSegmentClick = (type) => {
		if (type === "design") {
			window.open("https://www.behance.net/yitingzhangux", "_blank");
		} else {
			setSegment("projects");
		}
	};

	return (
		<section id="projects" className="projects-section" data-aos="fade-up">
			<div className="section-container">
				<h2 className="heading-h2">{dict.myWorks}</h2>
				<div className="segmented-control">
					<div
						className={`segment ${
							segment === "projects" ? "active" : ""
						}`}
						onClick={() => handleSegmentClick("projects")}
					>
						{dict.projects}
					</div>
					<div className="segment-divider"></div>
					<div
						className={`segment ${
							segment === "design" ? "active" : ""
						}`}
						onClick={() => handleSegmentClick("design")}
					>
						Design
					</div>
				</div>
				<div className="projects-container">
					{segment === "projects" && (
						<div className="projects-grid">
							{projects.map((project) => (
								<div className="project-card" data-aos="fade-up" key={project.name}>
									<img src={project.image} alt={project.name} />
									<div className="project-card-info">
										<h3 className="heading-h3">{project.name}</h3>
										<p className="body-regular">{project.tech}</p>
									</div>
									<div className="project-card-detail">
										<p className="body-regular">
											<strong>{dict.description}: </strong>{project.description}
										</p>
										<p className="body-regular">
											<strong>{dict.learnings}: </strong>{project.learnings}
										</p>
										<p className="body-regular">
											<strong>{dict.role}: </strong>{project.role}
										</p>
										<p className="body-regular">
											<strong>{dict.challenges}: </strong>{project.challenges}
										</p>
										<div className="project-links">
											<a
												href={project.viewLive}
												target="_blank"
												rel="noopener noreferrer"
											>
												{dict.viewLive}
											</a>
											<a
												href={project.github}
												target="_blank"
												rel="noopener noreferrer"
											>
												GitHub
											</a>
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
