import Link from "next/link";
export default function ToolCard({ tool }) {
  return (
    <Link href={tool.link}>
      <a className="block bg-white dark:bg-gray-800 shadow-md rounded-xl p-5 hover:scale-105 hover:shadow-xl transition-transform duration-200 cursor-pointer">
        <div className="text-4xl mb-2">{tool.icon}</div>
        <div className="font-semibold text-lg text-indigo-700 dark:text-indigo-300">{tool.name}</div>
        <div className="text-gray-500 dark:text-gray-300">{tool.desc}</div>
      </a>
    </Link>
  );
}