import { content } from "../content";
import { useI18n } from "../useI18n";

export function Skills() {
  const { t } = useI18n();
  const groups = [
    { key: "frontend" as const, items: content.skills.frontend },
    { key: "backend" as const, items: content.skills.backend },
    { key: "tools" as const, items: content.skills.tools },
  ];

  return (
    <section className="section" id="skills">
      <h2>{t.skills.title}</h2>
      <div className="skills-grid">
        {groups.map((group) => (
          <article className="skill-card" key={group.key}>
            <h3>{t.skills[group.key]}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
