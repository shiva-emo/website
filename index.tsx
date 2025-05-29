import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ToolCard from "../components/ToolCard";

const tools = [
  { name: "PDF to Word", desc: "Convert PDF files to editable Word documents", icon: "📄➡️📝", link: "/tools/pdf-to-word" },
  { name: "Word to PDF", desc: "Convert Word documents to PDF files", icon: "📝➡️📄", link: "/tools/word-to-pdf" },
  { name: "PDF to Excel", desc: "Extract tables from PDF to Excel sheets", icon: "📄➡️📊", link: "/tools/pdf-to-excel" },
  { name: "Excel to PDF", desc: "Convert Excel sheets to PDF files", icon: "📊➡️📄", link: "/tools/excel-to-pdf" },
  { name: "PDF Merger", desc: "Merge multiple PDF files into one", icon: "➕📄", link: "/tools/pdf-merger" },
  { name: "PDF Splitter", desc: "Split PDF files into multiple pages", icon: "✂️📄", link: "/tools/pdf-splitter" },
  { name: "PDF to JPG", desc: "Convert PDF pages to images", icon: "📄➡️🖼️", link: "/tools/pdf-to-jpg" },
  { name: "JPG to PDF", desc: "Convert images to PDF files", icon: "🖼️➡️📄", link: "/tools/jpg-to-pdf" },
  { name: "PDF Compressor", desc: "Compress PDF file size", icon: "📉📄", link: "/tools/pdf-compressor" },
  { name: "PDF Unlock", desc: "Remove password from PDF", icon: "🔓📄", link: "/tools/pdf-unlock" }
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {tools.map(tool => (
          <ToolCard key={tool.name} tool={tool} />
        ))}
      </main>
      <Footer />
    </div>
  );
}