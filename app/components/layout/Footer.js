"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white pt-20 pb-10">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
      
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
      
            <div>
              <div className="flex items-center">
        <Image
          src="/ks.png"
          alt="KS Smart Logo"
          width={140}
          height={40}
          priority
        />
      </div>
      
              <p className="text-gray-400 text-lg leading-8 mt-6">
                Strategic intelligence systems for government authorities.
              </p>
      
              <div className="flex gap-4 mt-8">
                <div className="w-12 h-12 rounded-xl bg-[#111111] flex items-center justify-center cursor-pointer hover:bg-[#A855F7] transition">
                  in
                </div>
      
                <div className="w-12 h-12 rounded-xl bg-[#111111] flex items-center justify-center cursor-pointer hover:bg-[#A855F7] transition">
                  𝕏
                </div>
              </div>
            </div>
      
            <div>
              <h3 className="text-sm uppercase tracking-[4px] text-gray-500 font-semibold mb-8">
                Navigation
              </h3>
      
              <ul className="space-y-5 text-gray-300 text-lg">
                <li className="hover:text-[#A855F7] cursor-pointer transition">
                  Home
                </li>
      
                <li className="hover:text-[#A855F7] cursor-pointer transition">
                  About
                </li>
      
                <li className="hover:text-[#A855F7] cursor-pointer transition">
                  Intelligence Platforms
                </li>
      
                <li className="hover:text-[#A855F7] cursor-pointer transition">
                  Use Cases
                </li>
      
                <li className="hover:text-[#A855F7] cursor-pointer transition">
                  Contact
                </li>
              </ul>
            </div>
      
            <div>
              <h3 className="text-sm uppercase tracking-[4px] text-gray-500 font-semibold mb-8">
                Legal
              </h3>
      
              <ul className="space-y-5 text-gray-300 text-lg">
                <li className="hover:text-[#A855F7] cursor-pointer transition">
                  Terms & Conditions
                </li>
      
                <li className="hover:text-[#A855F7] cursor-pointer transition">
                  Privacy Policy
                </li>
      
                <li className="hover:text-[#A855F7] cursor-pointer transition">
                  Disclaimer
                </li>
              </ul>
            </div>
      
            <div>
              <h3 className="text-sm uppercase tracking-[4px] text-gray-500 font-semibold mb-8">
                Contact
              </h3>
      
              <p className="text-gray-300 text-lg">
                hello@kssmartsolutions.com
              </p>
            </div>
          </div>
      
          <div className="border-t border-gray-900 mt-20 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
      
            <p className="text-gray-500">
              © 2025 KS Smart Technologies Ltd. All Rights Reserved.
            </p>
      
            <div className="flex gap-8 text-gray-500">
              <p className="hover:text-[#A855F7] cursor-pointer transition">
                Privacy Policy
              </p>
      
              <p className="hover:text-[#A855F7] cursor-pointer transition">
                Disclaimer
              </p>
            </div>
          </div>
        </div>
    </footer>
  );
}