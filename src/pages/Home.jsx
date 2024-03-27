import { useTranslation } from "react-i18next";
import DownloadPdf from "../ui/main/downloadpdf/DownloadPdf";
import "../ui/main/mainimg.css";
import phiphi from "../../public/assets/app_pictures/phiphi.webp";

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <div className="p-4 lg:w-4/5 lg:m-auto">
        <div className="p-4 md:grid md:grid-cols-2 md:gap-20 m-auto">
          <div className="p-6 text-center">
            <h1 className=" from-amber-400 via-amber-600 to-amber-400 bg-gradient-to-r bg-clip-text text-transparent">
              {t("greeting")}
              <br />
              <span className="text-red-800 underline font-bold rounded-md p-1 ">
                {t("name")}
              </span>
              <br /> {t("role")}
            </h1>
            <p className=" p-8 font-bold">{t("about")}</p>
            <DownloadPdf />
          </div>
          <div className="p-6 flex justify-center">
            <img alt="picture of me" src={phiphi} className="shape " />
          </div>
        </div>
      </div>
    </>
  );
}
