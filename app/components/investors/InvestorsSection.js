"use client";

import { useState } from "react";

import { menuItems } from "./investorData";

import InvestorSidebar from "./InvestorSidebar";
import InvestorHeader from "./InvestorHeader";
import InvestorTabs from "./InvestorTabs";
import InvestorFiles from "./InvestorFiles";

export default function InvestorsSection() {
  const [activeMenu, setActiveMenu] = useState(
    "Corporate Governance"
  );

  const [activeTab, setActiveTab] = useState("");

  const [selectedYear, setSelectedYear] =
    useState("2025-2026");

  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-4 py-16 grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-12 lg:gap-24">
      
      <InvestorSidebar
        menuItems={menuItems}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />

      <div>
        <InvestorHeader
          title={menuItems[activeMenu].title}
          activeMenu={activeMenu}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
        />

        <InvestorTabs
          tabs={menuItems[activeMenu].tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <InvestorFiles
          menuItems={menuItems}
          activeMenu={activeMenu}
          activeTab={activeTab}
          selectedYear={selectedYear}
        />
      </div>
    </section>
  );
}