// i18n.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Traduzioni
const resources = {
  debug: true,
  en: {
    translation: {
      greeting: "Hello! I'm",
      name: "Marco Falasca",
      role: "Front-End Developer",
      about:
        "I'm studying Front-End Web development since 2 Years, feel free to contact me if you're interested!",
    },
  },
  it: {
    translation: {
      greeting: "Ciao! Sono",
      name: "Marco Falasca",
      role: "Sviluppatore Front-End",
      about:
        "Studio lo sviluppo Web Front-End da 2 anni, sentiti libero di contattarmi se sei interessato!",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Lingua predefinita
  fallbackLng: "english", // Lingua di fallback
  interpolation: {
    escapeValue: false, // react già escapea tutto
  },
});

export default i18n;
