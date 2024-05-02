import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("on");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "on" ? "off" : "on"));
  };

  const backgroundThemeColor =
    theme === "on" ? "bg-slate-900" : "bg-neutral-100";
  const textThemeColor = theme === "on" ? "text-slate-50" : "text-slate-950";
  const borderButton = theme === "on" ? "border-slate-50" : "border-gray-900";

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        backgroundThemeColor,
        textThemeColor,
        borderButton,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
