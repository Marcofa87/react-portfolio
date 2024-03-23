import PropTypes from "prop-types";

import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("english");

  const toggleLanguage = () => {
    setLanguage((prevLangauge) =>
      prevLangauge === "english" ? "italian" : "english"
    );
  };

  return (
    <ThemeContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useLanguage = () => useContext(ThemeContext);

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
