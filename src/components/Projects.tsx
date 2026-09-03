import { content } from "../content";
import { useI18n } from "../useI18n";

export function Projects() {
  const { locale, t } = useI18n();

  return (
    <section className="section section-projects" id="projects">
      <h2>{t.projects.title}</h2>
      <p className="section-lead">{t.projects.lead}</p>
      <div className="projects-grid">
        {content.projects.map((project) => (
          <article className="project-card" key={project.id}>
            <div className={`project-cover cover-${project.cover}`} aria-hidden="true">
              {project.cover === "notes" && (
                <div className="cover-notes">
                  <span />
                  <span />
                  <span />
                </div>
              )}
              {project.cover === "dashboard" && (
                <div className="cover-bars">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              )}
              {project.cover === "board" && (
                <div className="cover-columns">
                  <span />
                  <span />
                  <span />
                </div>
              )}
            </div>
            <div className="project-body">
              <h3>{project.title}</h3>
              <p>{project.description[locale]}</p>
              <p className="project-role">
                <span>{t.projects.role}</span>
                {project.contribution[locale]}
              </p>
              <ul className="stack">
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div className="project-links">
                <a href={project.demo} target="_blank" rel="noreferrer">
                  {t.projects.demo}
                </a>
                <a href={project.github} target="_blank" rel="noreferrer">
                  {t.projects.code}
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
