export interface Translations {
  home: string;
  about: string;
  services: string;
  pricing: string;
  ourWork: string;
  career: string;
  contact: string;
}

export const translations: Record<string, Translations> = {
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    pricing: "Pricing",
    ourWork: "Our Work",
    career: "Career",
    contact: "Contact",
  },
  de: {
    home: "Startseite",
    about: "Über uns",
    services: "Dienstleistungen",
    pricing: "Preise",
    ourWork: "Unsere Arbeit",
    career: "Karriere",
    contact: "Kontakt",
  },
  fr: {
    home: "Accueil",
    about: "À propos",
    services: "Services",
    pricing: "Tarifs",
    ourWork: "Notre travail",
    career: "Carrière",
    contact: "Contact",
  },
};

export function getTranslations(lang: string = "en"): Translations {
  return translations[lang] || translations.en;
}
