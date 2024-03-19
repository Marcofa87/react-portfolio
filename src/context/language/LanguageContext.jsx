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
