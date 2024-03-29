import { useTranslation } from "react-i18next";
import Links from "../ui/main/contacts/Links";

export default function Skills() {
  const { t } = useTranslation();
  return (
    <div className="p-4 ">
      <div className="p-4 ">
        <h1 className="p-4 ">{t("contactMe")}</h1>
        <p className="p-4">{t("inTouch")}</p>
      </div>
      <Links />
    </div>
  );
}
