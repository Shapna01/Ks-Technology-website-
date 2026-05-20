"use client";

import { Download } from "lucide-react";

export default function InvestorFileCard({ file }) {
  return (
    <div className="border border-gray-200 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:shadow-md transition duration-300">
      
      <div>
        <h3 className="text-lg font-semibold text-gray-900">
          {file}
        </h3>
      </div>

      <a
        href="/sample.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-blue-600 px-5 py-3 rounded-xl text-sm font-semibold hover:text-purple-700 transition duration-300 w-fit"
      >
        <Download size={18} />
        .pdf
      </a>
    </div>
  );
}