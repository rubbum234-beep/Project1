import { content } from "../content";
import heroImage from "../assets/hero.png";
import { useI18n } from "../useI18n";

export function Hero() {
  const { locale, t } = useI18n();

  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">
          {t.hero.basedIn} {content.location[locale]}
        </p>
        <h1>{content.name[locale]}</h1>
        <p className="role">{content.role[locale]}</p>
        <ul className="hero-stack">
          {content.stackLine.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <p className="intro">{content.intro[locale]}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">
            {t.hero.viewProjects}
          </a>
          <a className="btn btn-ghost" href="#contact">
            {t.hero.writeMe}
          </a>
        </div>
      </div>
      <figure className="hero-media">
        <img src={heroImage} alt={content.name[locale]} width={800} height={800} />
      </figure>
    </section>
  );
}
