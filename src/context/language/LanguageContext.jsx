import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import i18next from "i18next";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "it" : "en";

    i18next.changeLanguage(newLanguage, (err) => {
      if (err) return console.error("Error changing language:", err);

      setLanguage(newLanguage);
    });
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
