import { type FormEvent, useState } from "react";
import { sendLead } from "../api";
import { useContent } from "../useContent";
import { useI18n } from "../useI18n";

export function Contact() {
  const { t } = useI18n();
  const { contacts } = useContent();
  const { email, github, telegram, telegramHandle } = contacts;
  const [status, setStatus] = useState<"idle" | "sending" | "error" | "sent">("idle");
  const githubLabel = github.replace(/^https?:\/\//, "").replace(/\/$/, "");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !message) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      await sendLead({ name, message });
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
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
              {githubLabel}
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
            <input name="name" type="text" autoComplete="name" required maxLength={120} />
          </label>
          <label>
            {t.contact.formMessage}
            <textarea name="message" rows={5} required maxLength={4000} />
          </label>
          <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
            {status === "sending" ? t.contact.formSending : t.contact.formSend}
          </button>
          {status === "error" && <p className="form-note is-error">{t.contact.formError}</p>}
          {status === "sent" && <p className="form-note">{t.contact.formSent}</p>}
        </form>
      </div>
    </section>
  );
}
