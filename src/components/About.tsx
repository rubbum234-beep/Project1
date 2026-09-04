import { useContent } from "../useContent";
import { useI18n } from "../useI18n";

export function About() {
  const { locale, t } = useI18n();
  const content = useContent();

  return (
    <section className="section" id="about">
      <h2>{t.about.title}</h2>
      <div className="about-copy">
        {content.about[locale].map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
