import PdfViewer from "../components/PdfViewer";
import cvFile from "../assets/JohanDanielssonCV.pdf";

export default function Resume() {
  // return <div />;
  return <PdfViewer fileUrl={cvFile} />;
}
