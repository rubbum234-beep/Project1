import { content } from "../content";
import { useI18n } from "../useI18n";

export function Projects() {
  const { locale, t } = useI18n();

  return (
    <section className="section" id="projects">
      <h2>{t.projects.title}</h2>
      <div className="projects-grid">
        {content.projects.map((project) => (
          <article className="project-card" key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description[locale]}</p>
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
          </article>
        ))}
      </div>
    </section>
  );
}
