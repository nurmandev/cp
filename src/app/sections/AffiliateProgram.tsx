"use client";
import Image from "next/image";
import giftImage from "@/assets/icons/gift.png";
import secondGiftImage from "@/assets/icons/second-gift.png";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { FaArrowCircleRight } from "react-icons/fa";

export default function AffiliateProgram() {
  return (
    <section
      className="relative py-16 md:py-20 bg-[#0f0f0f] text-white"
      style={{
        backgroundImage: "url('/Vector.png')", // Ensure the path is correct
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="px-6 md:px-20 flex flex-col md:flex-row gap-10">
        {/* Text Content */}
        <div className="w-full md:w-3/5 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl md:text-6xl font-american tracking-wide font-bold uppercase leading-tight mb-4">
              Affiliate Program<span className="text-yellow-400">.</span>
            </h2>
            <p className="text-lg md:text-2xl font-semibold text-yellow-400 mb-6">
              Earn up to $1000 monthly
            </p>
            <h3 className="text-base md:text-xl font-bold mb-4">
              Get Exclusive Benefits:
            </h3>
          </div>
          <div>
            <ul className="space-y-3 mb-6">
              {[
                "Instant account approval, no bureaucracy.",
                "Up to 30% Commission per sub*.",
                "Up to 8 ExitLag 7-Day Keys.",
                "Free EARNTOCHEAT for you.",
              ].map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-center text-sm md:text-lg"
                >
                  <IoMdCheckmarkCircle className="w-5 h-5 md:w-6 md:h-6 mr-3 text-green-500" />
                  {benefit}
                </li>
              ))}
            </ul>

            <button className="mt-6 md:mt-10 flex items-center justify-center gap-2 bg-yellow-400 text-black py-2 px-6 sm:py-3 sm:px-8 rounded-full text-sm sm:text-base md:text-lg font-bold hover:bg-yellow-500 transition-all">
              I want to earn more
              <FaArrowCircleRight className="w-4 h-4 " />
            </button>
          </div>
        </div>

        {/* Images */}
        <div className="space-y-5 w-full md:w-2/5">
          <Image
            src={giftImage}
            alt="Gift 1"
            className="rounded w-full h-auto"
            width={500}
            height={300}
          />
          <Image
            src={secondGiftImage}
            alt="Gift 2"
            className="rounded w-full h-auto"
            width={500}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}
