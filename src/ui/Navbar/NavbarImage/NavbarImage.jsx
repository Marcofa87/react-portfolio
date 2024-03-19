import { useTheme } from "../../../context/ThemeContext";

export default function NavbarImage() {
  const { theme } = useTheme();
  const lightImage = (
    <img alt="Logo Personale" src="../../../../assets/MarcoFalascaL.png "></img>
  );
  const darkImage = (
    <img alt="Logo Personale" src="../../../../assets/MarcoFalascaD.png "></img>
  );
  return <div>{theme === "on" ? lightImage : darkImage}</div>;
}
