import { useTranslation } from "react-i18next";
import thai from "../../public/assets/app_pictures/thai.webp";
import { useTheme } from "../context/ThemeContext";

export default function About() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const opacity = theme === "on" ? { opacity: 0.6 } : { opacity: 1 };
  return (
    <>
      <div className="grid lg:grid-cols-2 lg:gap-4 ">
        <div className=" w-10/12 m-auto">
          <h1 className="font-bold p-4 text-center">Hello, World!</h1>
          <p className="p-4">{t("welcome")}</p>
          <p className="p-4">{t("skills")}</p>
          <p className="p-4">{t("motivation")}</p>
          <p className="p-4">{t("explore")}</p>
        </div>

        <div className="w-12/12 h-4/5 m-auto p-8">
          <img
            className="p-4 rounded-3xl "
            style={opacity}
            src={thai}
            alt="picture of me"
          />
        </div>
      </div>
    </>
  );
}
