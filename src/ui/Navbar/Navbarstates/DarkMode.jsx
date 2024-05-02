import { useTheme } from "../../../context/theme/ThemeContext";
import Buttons from "../../../shared/Buttons";

export default function DarkMode() {
  const { theme, toggleTheme } = useTheme();
  return (
    <Buttons className="text-3xl p-4" onClick={toggleTheme}>
      {theme === "on" ? "🔅" : "🌝"}
    </Buttons>
  );
}
