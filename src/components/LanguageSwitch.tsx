import { useI18n } from "../useI18n";

export function LanguageSwitch() {
  const { locale, setLocale } = useI18n();

  return (
    <div className="lang-switch" role="group" aria-label="Language">
      <button
        type="button"
        className={locale === "ru" ? "is-active" : ""}
        onClick={() => setLocale("ru")}
        aria-pressed={locale === "ru"}
      >
        RU
      </button>
      <button
        type="button"
        className={locale === "en" ? "is-active" : ""}
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
      >
        EN
      </button>
    </div>
  );
}
