import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState } from "react";

export default function PDFMerger() {
  const [files, setFiles] = useState([]);
  const [result, setResult] = useState(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <h2 className="text-2xl font-bold mb-4 text-violet-700 dark:text-violet-200">➕📄 PDF Merger</h2>
        <input
          type="file"
          accept=".pdf"
          multiple
          className="mb-4"
          onChange={e => setFiles(Array.from(e.target.files))}
        />
        <button
          className="px-6 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-semibold shadow mb-4 disabled:opacity-50"
          disabled={files.length === 0}
          onClick={() => setResult("यहाँ merged PDF फाइल डाउनलोड लिंक दिखेगा (demo)")}>
          Merge PDFs
        </button>
        {result && (
          <div className="mt-4 p-4 bg-green-100 dark:bg-green-800 text-green-900 dark:text-green-50 rounded">
            {result}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}