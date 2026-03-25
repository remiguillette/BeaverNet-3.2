import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type Language = "fr" | "en";

type TranslationContextType = {
  language: Language;
  changeLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const resources = {
  en: {
    header: {
      brand: {
        homeAria: "Home - Rémi Guillette Group",
        logoAlt: "Rémi Guillette Group Logo",
        groupFr: "Groupe",
        groupEn: "Group",
      },
      nav: {
        mainAria: "Main menu",
        ontarioPride: "Proud of Ontario",
        languageToggleAria: "Change language to French",
      },
    },
  },
  fr: {
    header: {
      brand: {
        homeAria: "Accueil - Groupe Rémi Guillette",
        logoAlt: "Logo du Groupe Rémi Guillette",
        groupFr: "Groupe",
        groupEn: "Group",
      },
      nav: {
        mainAria: "Menu principal",
        ontarioPride: "Fier de l'Ontario",
        languageToggleAria: "Changer la langue en anglais",
      },
    },
  },
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
