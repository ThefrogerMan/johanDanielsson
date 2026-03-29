import { Document, Page, pdfjs } from "react-pdf";

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PdfViewerProps {
  fileUrl: string;
}

export default function PdfViewer({ fileUrl }: PdfViewerProps) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "JohanDanielssonCV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-transparent flex flex-col justify-center items-center gap-4 w-full ">
      <div className="w-full max-w-4xl flex justify-center items-center ">
        <Document
          file={fileUrl}
          loading={<div>Loading PDF...</div>}
          error={<div>Failed to load PDF file.</div>}
        >
          <Page
            pageNumber={1}
            width={Math.min(window.innerWidth - 32, 896)}
            className="mx-auto"
          />
        </Document>
      </div>
      <button onClick={handleDownload}>Ladda ner CV</button>
    </div>
  );
}
