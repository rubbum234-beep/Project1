import { useCallback, useEffect, useMemo, useState } from "react";
import type { Locale } from "./i18n";
import { translations } from "./i18n";
import { I18nContext } from "./useI18n";
import { ContentProvider } from "./useContent";
import { CodeMarquee } from "./components/CodeMarquee";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

const STORAGE_KEY = "portfolio-locale";

function readLocale(): Locale {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "ru" || stored === "en") {
    return stored;
  }
  return navigator.language.toLowerCase().startsWith("ru") ? "ru" : "en";
}

export default function App() {
  const [locale, setLocaleState] = useState<Locale>(readLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    delete document.documentElement.dataset.theme;
    localStorage.removeItem("portfolio-theme");
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: translations[locale],
    }),
    [locale, setLocale],
  );

  return (
    <I18nContext.Provider value={value}>
      <ContentProvider>
        <div className="page">
          <CodeMarquee />
          <Header />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      </ContentProvider>
    </I18nContext.Provider>
  );
}
