import { useLanguage } from "../../../context/language/LanguageContext";
import Buttons from "../../../shared/Buttons";

export default function Language() {
  const { language, toggleLanguage } = useLanguage();
  return (
    <Buttons onClick={toggleLanguage}>
      {language === "english" ? "🇬🇧" : "🇮🇹"}
    </Buttons>
  );
}
