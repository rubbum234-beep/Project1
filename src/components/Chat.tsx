import { type FormEvent, useEffect, useRef, useState } from "react";
import { sendChat, type ChatMessage } from "../api";
import { useI18n } from "../useI18n";

type UiMessage = ChatMessage & { id: string };

function makeId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export function Chat() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<UiMessage[]>([]);
  const [draft, setDraft] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [error, setError] = useState("");
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages, status, open]);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const content = draft.trim();
    if (!content || status === "sending") {
      return;
    }

    const userMessage: UiMessage = { id: makeId(), role: "user", content };
    const history = [...messages, userMessage];
    setMessages(history);
    setDraft("");
    setStatus("sending");
    setError("");

    try {
      const reply = await sendChat(history.map(({ role, content }) => ({ role, content })));
      setMessages((prev) => [...prev, { id: makeId(), role: "assistant", content: reply.content }]);
      setStatus("idle");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : t.chat.error);
    }
  }

  return (
    <div className={`chat-widget${open ? " is-open" : ""}`}>
      {open && (
        <div className="chat-window" role="dialog" aria-label={t.chat.title}>
          <div className="chat-window-head">
            <div>
              <strong>{t.chat.title}</strong>
              <p>{t.chat.lead}</p>
            </div>
            <button
              type="button"
              className="chat-close"
              onClick={() => setOpen(false)}
              aria-label={t.chat.close}
            >
              ×
            </button>
          </div>

          <div className="chat-messages" ref={listRef} aria-live="polite">
            {messages.length === 0 && <p className="chat-empty">{t.chat.empty}</p>}
            {messages.map((message) => (
              <article key={message.id} className={`chat-bubble is-${message.role}`}>
                <span className="chat-role">
                  {message.role === "user" ? t.chat.you : t.chat.agent}
                </span>
                <p>{message.content}</p>
              </article>
            ))}
            {status === "sending" && (
              <article className="chat-bubble is-assistant is-pending">
                <span className="chat-role">{t.chat.agent}</span>
                <p>{t.chat.thinking}</p>
              </article>
            )}
          </div>

          <form className="chat-form" onSubmit={onSubmit}>
            <label className="sr-only" htmlFor="chat-input">
              {t.chat.placeholder}
            </label>
            <textarea
              id="chat-input"
              ref={inputRef}
              rows={2}
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder={t.chat.placeholder}
              maxLength={4000}
              required
            />
            <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
              {status === "sending" ? t.chat.sending : t.chat.send}
            </button>
          </form>

          {status === "error" && (
            <p className="form-note is-error">{error || t.chat.error}</p>
          )}
        </div>
      )}

      <button
        type="button"
        className="chat-fab"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? t.chat.close : t.chat.open}
      >
        {open ? "×" : t.chat.fab}
      </button>
    </div>
  );
}
