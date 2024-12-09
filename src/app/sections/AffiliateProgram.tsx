"use client";
import Image from "next/image";
// import CheckIcon from "@/assets/icons/check.svg";
import giftImage from "@/assets/icons/gift.png";
import secondGiftImage from "@/assets/icons/second-gift.png";
import { ArrowDown } from "lucide-react";

export default function AffiliateProgram() {
  return (
    <section
      className="relative py-20 bg-gradient-to-b from-black to-[#D9D9D9]"
      style={{
        backgroundImage:
          "url('/Vector.png')",
        backgroundBlendMode: "overlay", // Blend the gradient and image
        backgroundSize: "cover", // Ensure the image covers the section
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center", // Center the image
      }}
    >
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="lg:w-1/2">
          <h2 className="text-5xl font-bold uppercase leading-snug mb-4">
            Affiliate Program<span className="text-orange-500">.</span>
          </h2>
          <p className="text-2xl font-semibold text-orange-400 mb-6">
            Earn up to $1000 monthly
          </p>
          <h3 className="text-xl font-bold mb-4">Get Exclusive Benefits:</h3>
          <ul className="space-y-3 mb-6">
            {[
              "Instant account approval, no bureaucracy.",
              "Up to 30% Commission per sub*.",
              "Up to 8 ExitLag 7-Day Keys.",
              "Free EARNTOCHEAT for you.",
            ].map((benefit, index) => (
              <li key={index} className="flex items-center text-lg">
                {/* <CheckIcon className="w-6 h-6 text-black mr-3 sm:w-5 sm:h-5 bg-green-500 rounded-full text-white" /> */}
                {benefit}
              </li>
            ))}
          </ul>

          <div className="button flex items-center justify-center">
            <button className="mt-10 flex items-center justify-center gap-2 bg-yellow-400 text-black py-2 px-6 sm:py-3 sm:px-8 rounded-full text-sm sm:text-base md:text-lg font-bold hover:bg-yellow-500 transition-all">
              I want to earn more
              <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 bg-black rounded-full text-white" />
            </button>
          </div>
        </div>

        {/* Image Content */}
        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 items-left justify-collum">
          <Image
            src={giftImage}
            alt="Gifts"
            className="rounded-lg shadow-lg"
            width={700}
            height={500}
          />
          <Image
            src={secondGiftImage}
            alt="Llamas"
            className="rounded-lg shadow-lg"
            width={700}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
