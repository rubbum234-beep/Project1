import { createContext, useContext } from "react";
import type { Locale } from "./i18n";
import { translations } from "./i18n";

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (typeof translations)[Locale];
};

export const I18nContext = createContext<I18nContextValue | null>(null);

export function useI18n() {
  const value = useContext(I18nContext);
  if (!value) {
    throw new Error("useI18n must be used inside I18nProvider");
  }
  return value;
}
