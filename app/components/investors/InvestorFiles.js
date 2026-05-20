"use client";

import InvestorFileCard from "./InvestorFileCard";

export default function InvestorFiles({
  menuItems,
  activeMenu,
  activeTab,
  selectedYear,
}) {
  const currentMenu = menuItems[activeMenu];

  const files = currentMenu.tabs
    ? Array.isArray(
        currentMenu.files[
          activeTab || currentMenu.tabs[0]
        ]
      )
      ? currentMenu.files[
          activeTab || currentMenu.tabs[0]
        ]
      : currentMenu.files[
          activeTab || currentMenu.tabs[0]
        ]?.[selectedYear] || []
    : currentMenu.files || [];

  return (
    <div className="mt-10 space-y-5">
      {files.map((file, index) => (
        <InvestorFileCard
          key={index}
          file={file}
        />
      ))}
    </div>
  );
}