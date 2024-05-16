import { saveAs } from "file-saver";
import Buttons from "../../../shared/Buttons";
import { useTheme } from "../../../context/theme/ThemeContext";

const DownloadPdf = () => {
  const { textThemeColor, borderButton } = useTheme();

  const handleDownload = () => {
    // URL del tuo file PDF
    const pdfUrl = "../../assets/CV - Marco Falasca.pdf";

    // Nome del file PDF
    const pdfFileName = "Marco_Falasca_resume.pdf";

    // Avvia il download del file utilizzando file-saver
    saveAs(pdfUrl, pdfFileName);
  };

  return (
    <Buttons
      onClick={handleDownload}
      className={` ${textThemeColor} ${borderButton}  border-2 border-solid p-4 rounded-full text-2xl`}
    >
      Resume 📩
    </Buttons>
  );
};

export default DownloadPdf;
