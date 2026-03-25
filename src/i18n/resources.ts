export type Language = "fr" | "en";

export const resources = {
  en: {
    home: {
      hero: {
        titleLead: "Innovative",
        titleAccent: "solutions for your business",
        description:
          "Specializing in business services, the Rémi Guillette Group offers a range of solutions tailored to your needs.",
      },
    },
    header: {
      brand: {
        homeAria: "Home - Rémi Guillette Group",
        logoAlt: "Stylized illustration of an orange beaver representing the company's visual identity",
        remi: "Rémi",
        guillette: "Guillette",
        groupFr: "Groupe",
        groupEn: "Group",
        businessInfo: "Rémi Guillette Groupe Group is a bilingual Ontario business brand.",
      },
      nav: {
        mainAria: "Main menu",
        ontarioPride: "Proud of Ontario",
        languageToggleAria: "Change language to French",
        languageToggleLabel: "EN",
      },
    },
  },
  fr: {
    home: {
      hero: {
        titleLead: "Solutions",
        titleAccent: "innovantes pour votre entreprise",
        description:
          "Spécialiste en services d'entreprise, le Groupe Rémi Guillette offre une gamme de solutions adaptées à vos besoins.",
      },
    },
    header: {
      brand: {
        homeAria: "Accueil - Groupe Rémi Guillette",
        logoAlt: "Illustration stylisée d'un castor orange représentant l'identité visuelle de l'entreprise",
        remi: "Rémi",
        guillette: "Guillette",
        groupFr: "Groupe",
        groupEn: "Group",
        businessInfo: "Rémi Guillette Groupe Group est une marque d'affaires bilingue de l'Ontario.",
      },
      nav: {
        mainAria: "Menu principal",
        ontarioPride: "Fier de l'Ontario",
        languageToggleAria: "Changer la langue en anglais",
        languageToggleLabel: "FR",
      },
    },
  },
} as const;

export type TranslationResources = typeof resources;
