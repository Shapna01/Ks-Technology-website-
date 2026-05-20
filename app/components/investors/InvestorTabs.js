"use client";

export default function InvestorTabs({
  tabs,
  activeTab,
  setActiveTab,
}) {
  if (!tabs) return null;

  return (
    <div className="flex flex-wrap gap-3 mt-10 border-b border-gray-200 pb-5">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition whitespace-nowrap ${
            activeTab === tab || (index === 0 && activeTab === "")
              ? "bg-purple-100 text-[#7E22CE]"
              : "text-gray-500 hover:bg-gray-100"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}