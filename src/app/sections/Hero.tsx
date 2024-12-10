"use client";

import bitcoinImage from "@/assets/images/btc-image.png";
import btcoinImage from "@/assets/icons/btc-coin.png";
import litecoinImage from "@/assets/images/litecoin-3d.png";
import skullImage from "@/assets/images/litecoin-3d.png";
import robotImage from "@/assets/images/hone_bg.png";
import gameImage from "@/assets/icons/Joystick.png";
import backgroundImage from "/public/bg.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaArrowCircleDown } from "react-icons/fa";

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
      className="relative flex flex-col justify-between bg-black text-white text-center p-4 pb-10 min-h-screen overflow-hidden"
    >
      {/* Background Image */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        style={{ translateY }}
      >
        <img
          src={backgroundImage.src}
          alt="Background"
          className="w-full h-full object-center"
        />
      </motion.div>{" "}
      {/* Animated Assets */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 w-[50%] md:w-[33%]">
        <img src={robotImage.src} alt="Robot Mascot" className="w-full" />
      </div>
      <div className="absolute top-1/3 left-3/4 w-20 md:w-40">
        <img src={bitcoinImage.src} alt="Bitcoin" className="w-full" />
      </div>
      <div className="absolute top-3/4 right-1/4 w-16 md:w-32">
        <img src={litecoinImage.src} alt="Litecoin" className="w-full" />
      </div>
      <div className="absolute top-2/4 right-1/4 w-16 md:w-52">
        <img src={gameImage.src} alt="Litecoin" className="w-full" />
      </div>
      <div className="absolute top-1/3 left-[10%] w-16 md:w-32">
        <img src={litecoinImage.src} alt="Litecoin" className="w-full" />
      </div>
      <div className="absolute top-[60%] left-[5%] w-20 md:w-40 -rotate-12">
        <img src={btcoinImage.src} alt="Bitcoin" className="w-full" />
      </div>
      <div className="absolute bottom-0 right-8 w-4 md:w-6">
        <img src={skullImage.src} alt="Controller" className="w-full" />
      </div>
      {/* Main Content */}
      <div className="z-20">
        <h1 className="text-4xl sm:text-5xl md:text-[7rem] tracking-wide leading-none font-extrabold uppercase mt-12 sm:mt-16 md:mt-28 font-american">
          Get Paid to Cheat
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-yellow-400 font-bold uppercase">
          Earn money quickly by showcasing cheats
        </p>
      </div>
      {/* Call to Action */}
      <div className="flex justify-center mt-6 sm:mt-8 md:mt-10 z-20">
        <button className="flex items-center justify-center gap-2 bg-[#FF5100] text-black py-2 px-4 sm:py-3 sm:px-6 md:py-3 md:px-8 rounded-full text-sm md:text-lg font-bold hover:bg-yellow-500 transition-all">
          Get Started Now <FaArrowCircleDown />
        </button>
      </div>
    </section>
  );
}
