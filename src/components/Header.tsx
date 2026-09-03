import { useEffect, useRef, useState } from "react";
import { useI18n } from "../useI18n";
import { LanguageSwitch } from "./LanguageSwitch";
import { ThemeToggle } from "./ThemeToggle";

const NAV_IDS = ["about", "skills", "projects", "contact"] as const;

type HeaderProps = {
  theme: "dark" | "light";
  onToggleTheme: () => void;
};

function headerOffset() {
  const header = document.querySelector(".site-header");
  const height = header instanceof HTMLElement ? header.offsetHeight : 72;
  return height + 28;
}

function sectionFromScroll() {
  const offset = headerOffset();
  const nearBottom =
    window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 32;

  if (nearBottom) {
    return NAV_IDS[NAV_IDS.length - 1];
  }

  let current = "";
  for (const id of NAV_IDS) {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top <= offset) {
      current = id;
    }
  }
  return current;
}

export function Header({ theme, onToggleTheme }: HeaderProps) {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const lockUntil = useRef(0);

  useEffect(() => {
    const sync = () => {
      setScrolled(window.scrollY > 12);
      if (Date.now() < lockUntil.current) {
        return;
      }
      setActive(sectionFromScroll());
    };

    sync();
    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      window.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, []);

  const goTo = (id: string) => {
    setActive(id);
    lockUntil.current = Date.now() + 2000;
    const target = id ? document.getElementById(id) : document.getElementById("top");
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const links = [
    { id: "about", label: t.nav.about },
    { id: "skills", label: t.nav.skills },
    { id: "projects", label: t.nav.projects },
    { id: "contact", label: t.nav.contact },
  ] as const;

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <a
        className="logo"
        href="#top"
        onClick={(event) => {
          event.preventDefault();
          goTo("");
          history.replaceState(null, "", "#top");
        }}
      >
        AN
      </a>
      <nav className="nav" aria-label="Primary">
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={active === link.id ? "is-active" : ""}
            aria-current={active === link.id ? "location" : undefined}
            onClick={(event) => {
              event.preventDefault();
              goTo(link.id);
              history.replaceState(null, "", `#${link.id}`);
            }}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <div className="header-tools">
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        <LanguageSwitch />
      </div>
    </header>
  );
}
