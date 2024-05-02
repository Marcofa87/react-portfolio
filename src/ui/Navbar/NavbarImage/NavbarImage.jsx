import { useTheme } from "../../../context/theme/ThemeContext";

export default function NavbarImage() {
  const { theme } = useTheme();
  const lightImage = (
    <img
      alt="Logo Personale"
      src="../../../../assets/marco_falasca_dark.png"
    ></img>
  );
  const darkImage = (
    <img
      alt="Logo Personale"
      src="../../../../assets/marco_falasca_white.png"
    ></img>
  );
  return <div>{theme === "on" ? lightImage : darkImage}</div>;
}
