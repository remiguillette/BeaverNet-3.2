import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { resources, type Language } from "../i18n/resources";

type TranslationContextType = {
  language: Language;
  changeLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const TranslationContext = createContext<TranslationContextType | null>(null);

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("fr");

  const value = useMemo(
    () => ({
      language,
      changeLanguage: setLanguage,
      t: (key: string) => {
        const valueAtKey = key
          .split(".")
          .reduce<unknown>((acc, currentKey) => (acc as Record<string, unknown>)?.[currentKey], resources[language]);

        return typeof valueAtKey === "string" ? valueAtKey : key;
      },
    }),
    [language],
  );

  return <TranslationContext.Provider value={value}>{children}</TranslationContext.Provider>;
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);

  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }

  return context;
};
