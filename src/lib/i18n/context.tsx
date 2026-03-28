"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { translations, type Locale, type Translations } from "./translations";

interface LanguageContextType {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "fr",
  t: translations.fr,
  setLocale: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr");

  useEffect(() => {
    const saved = localStorage.getItem("learnai-locale") as Locale | null;
    if (saved && translations[saved]) {
      setLocaleState(saved);
      document.cookie = `learnai-locale=${saved};path=/;max-age=31536000;SameSite=Lax`;
    }
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("learnai-locale", newLocale);
    document.cookie = `learnai-locale=${newLocale};path=/;max-age=31536000;SameSite=Lax`;
  }, []);

  return (
    <LanguageContext.Provider value={{ locale, t: translations[locale], setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  return useContext(LanguageContext);
}
