"use client";

import { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import arrowImage from "@/assets/icons/top-arrow.png";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi"; // Mobile Menu Icons
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50 w-full">
      {/* Desktop Navbar */}
      <header className="fixed top-8 left-8 right-8 z-50 border border-[#252525] rounded-full flex items-center justify-between px-6 py-4 bg-[#151515] text-white">
        <div className="flex items-center gap-16">
          <div className="text-lg font-bold">GETPAIDTOCHEAT</div>
          <nav className="hidden md:flex space-x-12">
            <Link href="#games" className="hover:text-yellow-400">
              Games
            </Link>
            <Link href="#how-it-works" className="hover:text-yellow-400">
              How it works?
            </Link>
            <Link href="#pricing" className="hover:text-yellow-400">
              Pricing
            </Link>
            <Link href="#affiliates" className="hover:text-yellow-400">
              Affiliates
            </Link>
            <Link href="#contact" className="hover:text-yellow-400">
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex space-x-4 font-medium">
          <button className="px-6 py-1 bg-[#202020] text-white rounded-full hover:bg-[#303030]">
            Login
          </button>
          <button className="flex items-center gap-3 px-4 py-1 bg-yellow-400 text-black rounded-full hover:bg-yellow-500">
            Get Cheat
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Toggle Button */}
      <button
        className="md:hidden absolute top-8 right-8 z-50 text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-[#151515] z-40 md:hidden flex flex-col items-center py-12">
          <Link
            href="#games"
            className="text-white hover:text-yellow-400 py-2 text-lg"
          >
            Games
          </Link>
          <Link
            href="#how-it-works"
            className="text-white hover:text-yellow-400 py-2 text-lg"
          >
            How it works?
          </Link>
          <Link
            href="#pricing"
            className="text-white hover:text-yellow-400 py-2 text-lg"
          >
            Pricing
          </Link>
          <Link
            href="#affiliates"
            className="text-white hover:text-yellow-400 py-2 text-lg"
          >
            Affiliates
          </Link>
          <Link
            href="#contact"
            className="text-white hover:text-yellow-400 py-2 text-lg"
          >
            Contact
          </Link>

          {/* Mobile Action Buttons */}
          <div className="flex flex-col items-center space-y-4 mt-6">
            <button className="px-6 py-2 bg-[#202020] text-white rounded-full hover:bg-[#303030]">
              Login
            </button>
            <button className="flex items-center gap-3 px-4 py-2 bg-yellow-400 text-black rounded-full hover:bg-yellow-500">
              Get Cheat
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
