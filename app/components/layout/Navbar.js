"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-100">

      <div className="max-w-[1400px] mx-auto h-20 flex items-center justify-between px-4 md:px-8">

        <div className="flex items-center">
          <Image
            src="/images/kslogo.png"
            alt="KS Smart Logo"
            width={140}
            height={40}
            priority
          />
        </div>

        <ul className="hidden lg:flex items-center  gap-10 text-gray-600 font-medium">

          <li><Link href="/" className="px-4 py-2 rounded-full hover:bg-[#F3E8FF] hover:text-[#A855F7] transition duration-300">Home</Link></li>
          <li><Link href="/about" className="px-4 py-2 rounded-full hover:bg-[#F3E8FF] hover:text-[#A855F7] transition duration-300">About</Link></li>
          <li><Link href="/platforms" className="px-4 py-2 rounded-full hover:bg-[#F3E8FF] hover:text-[#A855F7] transition duration-300">Platforms</Link></li>
          <li><Link href="/usecases"  className="px-4 py-2 rounded-full hover:bg-[#F3E8FF] hover:text-[#A855F7] transition duration-300">Use Cases</Link></li>
          <li><Link href="/investors" className="px-4 py-2 rounded-full hover:bg-[#F3E8FF] hover:text-[#A855F7] transition duration-300">Investors</Link></li>
          <li><Link href="/blogs" className="px-4 py-2 rounded-full hover:bg-[#F3E8FF] hover:text-[#A855F7] transition duration-300">Blogs</Link></li>
          <li><Link href="/contact" className="px-4 py-2 rounded-full hover:bg-[#F3E8FF] hover:text-[#A855F7] transition duration-300">Contact</Link></li>

        </ul>

        <button className="hidden lg:block bg-[#A855F7] hover:bg-[#9333EA] transition text-white px-8 py-3 rounded-full font-semibold shadow-lg">
          Get in Touch →
        </button>

       <button 
       onClick={() => setOpen(!open)}
       className="lg:hidden text-black"
       >
        {open ? <X size={30} /> : <Menu size={30} />}
        </button>
        </div>
        <div 
        className={`fixed top-20 left-0 w-full bg-white shadow-lg overflow-hidden transition-all duration-300 z-50 ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
        <div className="flex items-center justify-between p-4 text-gray-400 ">
          <h2 className="font-bold text-xl">Menu</h2>         
        </div>

        <div className="flex flex-col p-6 gap-6 text-gray-700 font-medium">

          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/platforms">Platforms</Link>
          <Link href="/usecases">Use Cases</Link>
          <Link href="/investors">Investors</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/contact">Contact</Link>

          <button className="mt-4 bg-[#A855F7] text-white px-6 py-3 rounded-full font-semibold">
            Get in Touch →
          </button>
        </div>
      </div>

    </nav>
  );
}