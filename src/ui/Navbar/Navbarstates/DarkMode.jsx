import { useTheme } from "../../../context/ThemeContext";
import Buttons from "../../../shared/Buttons";

export default function DarkMode() {
  const { theme, toggleTheme } = useTheme();
  return (
    <Buttons onClick={toggleTheme}>{theme === "on" ? "🔅" : "🌝"}</Buttons>
  );
}
