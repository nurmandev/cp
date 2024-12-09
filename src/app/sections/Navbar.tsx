"use client";

import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-8 md:absolute p-4 text-white md:text-black md:left-1/2 md:-translate-x-1/2 mx-auto justify-center border border-[#252525] align-middle w-full md:w-[1000px] md:rounded-full z-50 md:my-10 font-space-grotesk shadow-md bg-white md:bg-transparent">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold md:text-white text-black">GETPAIDTOCHEAT</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 text-white">
          <li className="hover:text-orange-500 cursor-pointer">Games</li>
          <li className="hover:text-gray-500 cursor-pointer">How it works?</li>
          <li className="hover:text-gray-500 cursor-pointer">Pricing</li>
          <li className="hover:text-gray-500 cursor-pointer">Affiliates</li>
          <li className="hover:text-gray-500 cursor-pointer">Contact</li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="bg-gray-800 px-4 py-2 rounded-full text-white hover:bg-gray-700">
            Login
          </button>
          <button className="bg-[#FF5100] px-4 py-2 rounded-full flex items-center text-black font-bold hover:bg-orange-600 ">
            Get Cheat <FaArrowRight className="ml-2" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex flex-col items-center justify-center gap-1"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span
            className={`block w-6 h-1 rounded bg-black transition-transform ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-1 rounded bg-black transition-opacity ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-6 h-1 rounded bg-black transition-transform ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-4 space-y-4 md:hidden">
          <ul className="flex flex-col space-y-2">
            <li className="hover:text-orange-500 cursor-pointer text-black">
              Games
            </li>
            <li className="hover:text-gray-500 cursor-pointer text-black">
              How it works?
            </li>
            <li className="hover:text-gray-500 cursor-pointer text-black">
              Pricing
            </li>
            <li className="hover:text-gray-500 cursor-pointer text-black">
              Affiliates
            </li>
            <li className="hover:text-gray-500 cursor-pointer text-black">
              Contact
            </li>
          </ul>
          <div className="flex flex-col space-y-2">
            <button className="bg-gray-800 px-4 py-2 rounded-full text-white hover:bg-gray-700">
              Login
            </button>
            <button className="bg-orange-500 px-4 py-2 rounded-full flex items-center justify-center text-black font-bold hover:bg-orange-600">
              Get Cheat <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
