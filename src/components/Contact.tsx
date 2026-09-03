import { type FormEvent, useState } from "react";
import { content } from "../content";
import { useI18n } from "../useI18n";

export function Contact() {
  const { t } = useI18n();
  const { email, github, telegram, telegramHandle } = content.contacts;
  const [status, setStatus] = useState<"idle" | "error" | "sent">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const from = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(from);

    if (!name || !emailOk || message.length < 8) {
      setStatus("error");
      return;
    }

    const subject = encodeURIComponent(`Portfolio — ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${from}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setStatus("sent");
    form.reset();
  }

  return (
    <section className="section" id="contact">
      <h2>{t.contact.title}</h2>
      <p className="contact-lead">{t.contact.lead}</p>
      <div className="contact-grid">
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
        <form className="contact-form" onSubmit={onSubmit} noValidate>
          <label>
            {t.contact.formName}
            <input name="name" type="text" autoComplete="name" required />
          </label>
          <label>
            {t.contact.formEmail}
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            {t.contact.formMessage}
            <textarea name="message" rows={5} required minLength={8} />
          </label>
          <button className="btn btn-primary" type="submit">
            {t.contact.formSend}
          </button>
          {status === "error" && <p className="form-note is-error">{t.contact.formError}</p>}
          {status === "sent" && <p className="form-note">{t.contact.formSent}</p>}
        </form>
      </div>
    </section>
  );
}
