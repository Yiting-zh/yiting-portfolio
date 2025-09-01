import { useState } from "react";

function Projects({ dict }) {
    const [segment, setSegment] = useState("projects");
    const handleSegmentClick = (type) => {
        if (type === "design") {
            window.open("https://www.behance.net/yitingzhangux", "_blank");
        } else {
            setSegment("projects");
        }
    };

    // 多语言项目数组
    const projects = dict.projects ? Object.values(dict.projects) : [];

    return (
        <section id="projects" className="projects-section" data-aos="fade-up">
            <div className="section-container">
                <h2 className="heading-h2">{dict.myWorks}</h2>
                <div className="segmented-control">
                    <div
                        className={`segment ${segment === "projects" ? "active" : ""}`}
                        onClick={() => handleSegmentClick("projects")}
                    >
                        {dict.projectsLabel}
                    </div>
                    <div className="segment-divider"></div>
                    <div
                        className={`segment ${segment === "design" ? "active" : ""}`}
                        onClick={() => handleSegmentClick("design")}
                    >
                        Design
                    </div>
                </div>
                <div className="projects-container">
                    {segment === "projects" && (
                        <div className="projects-grid">
                            {projects.map((project) => (
                                <div className="project-row" key={project.name}>
                                    {/* 大卡片 - 静态图片和完整信息 */}
                                    <div className="project-card card-cover" data-aos="fade-up">
                                        {/* 使用媒体查询在CSS中控制的图片 */}
                                        <img 
                                            src={project.coverImage} 
                                            alt={project.name} 
                                        />
                                        <div className="project-card-detail">
                                            <img src={project.gifImage} alt={`${project.name} demo`} />
                                            <div className="project-links">
                                                {project.viewLive && (
                                                    <a
                                                        href={project.viewLive}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        {dict.viewLive}
                                                    </a>
                                                )}
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
                                    {/* 小卡片 -信息 */}
                                    <div className="project-card card-detail" data-aos="fade-up">
                                        <div className="project-card-info">
                                            <h3 className="heading-h3">{project.name}</h3>
                                            <p className="body-regular">
                                                <strong>{dict.description}: </strong>{project.description}
                                            </p>
                                            <p className="body-regular">
                                                <strong>{dict.learnings}: </strong>{project.fullDescription.learnings}
                                            </p>
                                            <p className="body-regular">
                                                <strong>{dict.role}: </strong>{project.fullDescription.role}
                                            </p>
                                            <p className="body-regular">
                                                <strong>{dict.challenges}: </strong>{project.fullDescription.challenges}
                                            </p>
                                            <p className="body-regular">
                                                <strong>{dict.tech}: </strong> {project.tech}
                                            </p>
                                            <div className="project-links">
                                                {project.viewLive && (
                                                    <a
                                                        href={project.viewLive}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        {dict.viewLive}
                                                    </a>
                                                )}
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