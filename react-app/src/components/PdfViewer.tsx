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
    <div className="bg-transparent flex flex-col justify-center items-center gap-4">
      <Document
        file={fileUrl}
        loading={<div>Loading PDF...</div>}
        error={<div>Failed to load PDF file.</div>}
      >
        <Page pageNumber={1} />
      </Document>
      <button
        onClick={handleDownload}
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        Ladda ner CV
      </button>
    </div>
  );
}
