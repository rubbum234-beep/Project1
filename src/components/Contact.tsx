import { content } from "../content";
import { useI18n } from "../useI18n";

export function Contact() {
  const { t } = useI18n();
  const { email, github, telegram, telegramHandle } = content.contacts;

  return (
    <section className="section" id="contact">
      <h2>{t.contact.title}</h2>
      <p className="contact-lead">{t.contact.lead}</p>
      <ul className="contact-list">
        <li>
          <span>{t.contact.email}</span>
          <a href={`mailto:${email}`}>{email}</a>
        </li>
        <li>
          <span>{t.contact.github}</span>
          <a href={github} target="_blank" rel="noreferrer">
            github.com/example
          </a>
        </li>
        <li>
          <span>{t.contact.telegram}</span>
          <a href={telegram} target="_blank" rel="noreferrer">
            {telegramHandle}
          </a>
        </li>
      </ul>
    </section>
  );
}
