import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("on");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "on" ? "off" : "on"));
  };

  const backgroundThemeColor = theme === "on" ? "bg-slate-900" : "bg-slate-50";
  const textThemeColor = theme === "on" ? "text-slate-50" : "text-slate-950";

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, backgroundThemeColor, textThemeColor }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
