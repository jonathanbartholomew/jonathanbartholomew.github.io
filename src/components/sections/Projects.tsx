// src/components/sections/Projects.tsx
import projectsData from "@/data/projects";

const Projects = () => {
  return (
    <section id="work">
      <div className="work-header">
        <p className="section-label reveal">Selected Work</p>
        <h2 className="section-title reveal">
          Things I've
          <br />
          built &amp; shipped.
        </h2>
      </div>

      {projectsData.map((project) => (
        <article
          className={`work-strip${project.flip ? " flip" : ""}`}
          key={project.id}
        >
          <div className="work-info">
            <div>
              <div className="work-meta">
                <span className="work-tag">{project.tag}</span>
                <span className="work-year">{project.year}</span>
              </div>
              <h3 className="work-title">
                {project.titleLine1}
                <br />
                {project.titleLine2}
              </h3>
            </div>
            <p className="work-desc">{project.description}</p>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                className="work-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit site &rarr;
              </a>
            )}
          </div>
          <div className="work-visual">
            {project.image ? (
              <img
                src={project.image}
                alt={`${project.titleLine1} ${project.titleLine2}`}
                loading="lazy"
              />
            ) : (
              <span className="work-visual-placeholder">
                {project.titleLine1.charAt(0)}
                {project.titleLine2.charAt(0)}
              </span>
            )}
          </div>
        </article>
      ))}
    </section>
  );
};

export default Projects;
