import { saveAs } from "file-saver";
import Buttons from "../shared/Buttons";

const DownloadButton = () => {
  const handleDownload = () => {
    // URL del tuo file PDF
    const pdfUrl = "../../assets/CV - Marco Falasca.pdf";

    // Nome del file PDF
    const pdfFileName = "Marco_Falasca_resume.pdf";

    // Avvia il download del file utilizzando file-saver
    saveAs(pdfUrl, pdfFileName);
  };

  return <Buttons onClick={handleDownload}>Resume 📩</Buttons>;
};

export default DownloadButton;
