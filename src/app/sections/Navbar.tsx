"use client";

import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-4 md:px-10 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold">GETPAIDTOCHEAT</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6">
          <li className="hover:text-orange-500 cursor-pointer">Games</li>
          <li className="hover:text-gray-400 cursor-pointer">How it works?</li>
          <li className="hover:text-gray-400 cursor-pointer">Pricing</li>
          <li className="hover:text-gray-400 cursor-pointer">Affiliates</li>
          <li className="hover:text-gray-400 cursor-pointer">Contact</li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="bg-gray-800 px-4 py-2 rounded-full text-white">
            Login
          </button>
          <button className="bg-orange-500 px-4 py-2 rounded-full flex items-center text-black font-bold">
            Get Cheat <FaArrowRight className="ml-2" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="block w-6 h-1 bg-white mb-1"></span>
          <span className="block w-6 h-1 bg-white mb-1"></span>
          <span className="block w-6 h-1 bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-4 space-y-4 md:hidden">
          <ul className="flex flex-col space-y-2">
            <li className="hover:text-orange-500 cursor-pointer">Games</li>
            <li className="hover:text-gray-400 cursor-pointer">
              How it works?
            </li>
            <li className="hover:text-gray-400 cursor-pointer">Pricing</li>
            <li className="hover:text-gray-400 cursor-pointer">Affiliates</li>
            <li className="hover:text-gray-400 cursor-pointer">Contact</li>
          </ul>
          <div className="flex flex-col space-y-2">
            <button className="bg-gray-800 px-4 py-2 rounded-full text-white">
              Login
            </button>
            <button className="bg-orange-500 px-4 py-2 rounded-full flex items-center justify-center text-black font-bold">
              Get Cheat <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
