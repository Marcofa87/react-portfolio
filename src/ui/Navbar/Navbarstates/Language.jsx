import { useLanguage } from "../../../context/language/LanguageContext";
import Buttons from "../../../shared/Buttons";

export default function Language() {
  const { language, toggleLanguage } = useLanguage();
  return (
    <Buttons className="text-3xl p-2" onClick={toggleLanguage}>
      {language === "en" ? "🇬🇧" : "🇮🇹"}
    </Buttons>
  );
}
