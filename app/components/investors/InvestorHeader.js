"use client";

export default function InvestorHeader({
  title,
  activeMenu,
  selectedYear,
  setSelectedYear,
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
      
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
        {title}
      </h2>

      {activeMenu !== "Open Offer" &&
        activeMenu !== "Shareholders Meeting" && (
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="border border-gray-200 text-black rounded-lg px-4 py-3 text-sm outline-none"
          >
            <option value="2025-2026">2025 - 2026</option>
            <option value="2024-2025">2024 - 2025</option>
            <option value="2023-2024">2023 - 2024</option>
          </select>
        )}
    </div>
  );
}