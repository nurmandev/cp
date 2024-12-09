"use client";

import { ArrowDown } from "lucide-react";
import bitcoinImage from "@/assets/images/btc-image.png";
import litecoinImage from "@/assets/images/litecoin-3d.png";
import skullImage from "@/assets/images/litecoin-3d.png";
import robotImage from "@/assets/images/hone_bg.png";
import backgroundImage from "/public/bg.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="relative pt-10 pb-16 bg-gradient-to-b from-[#e46a31e3] to-black text-white overflow-x-hidden"
    >
      {/* Background Effect */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center opacity-30 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Title */}
        <h1 className="tracking-tighter uppercase flex items-center justify-center font-american text-[48px] sm:text-[64px] md:text-[100px] lg:text-[140px] font-normal text-center leading-tight">
          GET PAID TO CHEAT
        </h1>

        {/* Subtitle */}
        <p className="text-yellow-400 font-medium py-2 px-4 rounded inline-block mt-4 text-sm sm:text-base md:text-lg">
          Earn Money Quickly by Showcasing Cheats
        </p>

        {/* Robot Illustration */}
        <div className="relative mt-16 flex justify-center items-center">
          <motion.img
            src={robotImage.src}
            alt="Robot Image"
            className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px]"
          />
          {/* Floating Icons */}
          <motion.img
            src={skullImage.src}
            alt="Skull Icon"
            className="absolute w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] -top-5 left-5 sm:-top-10 sm:left-10 md:w-[140px] md:h-[140px] will-change-transform"
            animate={{
              translateY: [-20, 20],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
          <motion.img
            src={litecoinImage.src}
            alt="Litecoin Icon"
            className="absolute w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] -top-10 right-10 sm:-top-20 sm:right-20 md:right-32 will-change-transform"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={bitcoinImage.src}
            alt="Bitcoin Icon"
            className="absolute w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] top-5 left-5 sm:top-10 sm:left-10 will-change-transform"
            animate={{
              translateY: [-20, 20],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        </div>

        {/* CTA Button */}
        <div className="button flex items-center justify-center">
          <button className="mt-10 flex items-center justify-center gap-2 bg-yellow-400 text-black py-2 px-6 sm:py-3 sm:px-8 rounded-full text-sm sm:text-base md:text-lg font-bold hover:bg-yellow-500 transition-all">
            Get Started Now
            <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 bg-black rounded-full text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
