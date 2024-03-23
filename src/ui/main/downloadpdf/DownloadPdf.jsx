import { saveAs } from "file-saver";
import Buttons from "../../../shared/Buttons";

const DownloadPdf = () => {
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
      className="border-2 border-solid border-slate-50 p-4 rounded-full text-2xl text-white "
    >
      Resume 📩
    </Buttons>
  );
};

export default DownloadPdf;
