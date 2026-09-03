import { useI18n } from "../useI18n";
import { LanguageSwitch } from "./LanguageSwitch";

export function Header() {
  const { t } = useI18n();

  return (
    <header className="site-header">
      <a className="logo" href="#top">
        AN
      </a>
      <nav className="nav" aria-label="Primary">
        <a href="#about">{t.nav.about}</a>
        <a href="#skills">{t.nav.skills}</a>
        <a href="#projects">{t.nav.projects}</a>
        <a href="#contact">{t.nav.contact}</a>
      </nav>
      <LanguageSwitch />
    </header>
  );
}
