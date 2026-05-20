"use client";

export default function InvestorSidebar({
  menuItems,
  activeMenu,
  setActiveMenu,
}) {
  return (
    <aside className="lg:-ml-8">
      <div className="space-y-3">
        {Object.keys(menuItems).map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveMenu(item)}
            className={`w-full text-left px-3 py-4 rounded-xl text-sm font-medium transition duration-500 ${
              activeMenu === item
                ? "bg-[#6B21A8] text-white"
                : "text-gray-600 hover:bg-purple-50"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </aside>
  );
}