"use client";

import { useState } from "react";
import { Download } from "lucide-react";

import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import PageHero from "../components/common/PageHero";

export default function InvestorsPage() {
  const [activeMenu, setActiveMenu] = useState(
    "Corporate Governance"
  );
  const [activeTab, setActiveTab] = useState("");

  const menuItems = {
    "Annual Reports": {
      title: "Annual Reports",
      files: [
        "2008 - 2009",
        "2009 - 2010",
        "2010 - 2011",
        "2011 - 2012",
        "2012 - 2013",
        "2013 - 2014",
        "2014 - 2015",
        "2015 - 2016",
        "2016 - 2017",
        "2017 - 2018",
        "2018 - 2019",
      ],
    },

    "Financial Info": {
  title: "Financial Info",

  tabs: [
    "Quarterly Results",
    "Subsidiaries Financials/ Secretarial Audit report",
    "Related Party Transactions",
    "Statement of Deviation & Variation",
  ],

  files: {
    "Quarterly Results": [
      "Quarter 1 Results",
      "Quarter 2 Results",
      "Quarter 3 Results",
      "Quarter 4 Results",
    ],

    "Subsidiaries Financials/ Secretarial Audit report": [
      "Financials of the Subsdiary along with Secretairal Audit report",
    ],

    "Related Party Transactions": [
      "Half Yearly RPT disclosure",
      "Half Yearly RPT disclosure",
    ],

    "Statement of Deviation & Variation": [
      "Statement of Deviation and Variation ",
    ],
  },
},

  "Corporate Governance": {
  title: "Corporate Governance",

  tabs: [
    "Reports",
    "Authorised KMPs for Disclosures",
    "Board of Directors",
    "Composition of Committees",
  ],

  files: {
    Reports: [
      "CG Report for the FY",
      "Governance Report 2025",
    ],

    "Authorised KMPs for Disclosures": [
      "Authorised KMP List",
      "Disclosure Contact Details",
    ],

    "Board of Directors": [
      "Board Members 2025",
      "Director Profiles",
    ],

    "Composition of Committees": [
      "Audit Committee",
      "Nomination Committee",
      "Stakeholders Relationship Committee",
    ],
  },
},
    "Open Offer": {
      title: "Open Offer",
      files: [
        "Public Announcement",
        "Detailed Public statement",
        "Draft letter of offer",
        "Corrigendum to Detailed Public statement",
        "Recommendation of the Independent Directors committee (IDC)",
        "Pre-offer advertisement",
        "Post-offer advertisement",
      ],
    },

    "Shareholders Meeting": {
      title: "Shareholders Meeting",
      files: [
        "Newspaper publication for EGM Notice.",
        "Notice of 02/2025-26 EGM",
        "EGM Notice",
        "PCS Compliance Certificate Company Website",
        "Ks Mart fair value Report SEBI ICDR 2018",
        "Soma Papers fair value Report SEBI ICDR 2018",
        "Soma Papers fair value Report SEBI SAST 2011",
      ],
    },


"Stock Exchange Disclosures": {
  title: "Stock Exchange Disclosures",

  tabs: [
    "Board Meeting Intimation",
    "Investor/Analyst Meets",
    "Shareholding Pattern",
    "Secretarial Compliance Report",
  ],

  files: {
    "Board Meeting Intimation": [
      "Board Meeting Intimation ",
      "Board Meeting Intimation ",
    ],

    "Investor/Analyst Meets": [
      "Investor Meet Presentation",
      "Analyst Meeting Schedule",
    ],

    "Shareholding Pattern": [
      "Shareholding Pattern June 2025",
      "Shareholding Pattern March 2025",
    ],

    "Secretarial Compliance Report": [
      "Secretarial Compliance Report 2025",
      "Secretarial Compliance Report 2024",
    ],
  },
},

"AGM/EGM Documents": {
  title: "AGM/EGM Documents",

  tabs: [
    "Notice of the AGMs/EGMs",
    "Scrutinizer's Reports",
    "MGT 7s",
    "Proceedings of the AGM/EGMs",
    "AGM/EGM video Recording",
  ],

  files: {
    "Notice of the AGMs/EGMs": [
      "Notice of the AGMs/EGMs",
      "Notice of the AGMs/EGMs",
    ],

    "Scrutinizer's Reports": [
      "Scrutinizer Report AGM ",
      "Scrutinizer Report EGM ",
    ],

    "MGT 7s": [
      "MGT 7 Annual Return ",
      "MGT 7 Annual Return ",
    ],

    "Proceedings of the AGM/EGMs": [
      "AGM Proceedings ",
      "EGM Proceedings ",
    ],

    "AGM/EGM video Recording": [
      "AGM Video Recording",
      "EGM Video Recording",
    ],
  },
},


    "Postal Ballot": {
      title: "Postal Ballot",
      files: [
        "Postal ballot intimations",
        "Postal ballot intimations",
      ],
    },

    "Policies And Conduct": {
      title: "Policies And Conduct",
      files: [
        "Code Of Conduct",
        "Whistle Blower Policy",
        "Privacy Policy",
      ],
    },

    "Investor Information Centre": {
      title: "Investor Information Centre",
      files: [
        "Investor Contact Details",
        "Investor Grievance",
      ],
    },
  };

  return (
    <main className="w-full  bg-white min-h-screen overflow-hidden">
      
      <Navbar />

      <PageHero
        badge="— Shareholders"
        title="Investors"
        description="Financial insights, regulatory disclosures, and shareholder information—clearly organized and easy to access."
      />

      <section className=" text-3xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-14">
        
        <aside>
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

        <div>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {menuItems[activeMenu].title}
            </h2>

            {activeMenu !== "Open Offer" &&
            activeMenu !== "Shareholders Meeting" && (
            <select className="border border-gray-200 text-black rounded-lg px-4 py-3 text-sm outline-none">
                <option>2025 - 2026</option>
                <option>2024 - 2025</option>
                <option>2023 - 2024</option>
            </select>
        )}
        </div>

        {menuItems[activeMenu].tabs && (
            <div className="flex flex-wrap gap-3 mt-10 border-b border-gray-200 pb-5">
                {menuItems[activeMenu].tabs.map((tab, index) => (
                    <button
                    key={index}
                    onClick={() => setActiveTab(tab)}
                    className={`px-5 py-2 rounded-lg text-sm font-medium transition ${
                    activeTab === tab || (index === 0 && activeTab === "")
                    ? "bg-purple-100 text-[#7E22CE]"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
            >
                 {tab}
                 </button>
                ))}
                </div>
            )}

          <div className="mt-10 space-y-5">
  {(
    menuItems[activeMenu].tabs
      ? menuItems[activeMenu].files[
          activeTab || menuItems[activeMenu].tabs[0]
        ] || []
      : menuItems[activeMenu].files || []
  ).map((file, index) => (
    <div
      key={index}
      className="border border-gray-200 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:shadow-md transition duration-300"
    >
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
  ))}

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
