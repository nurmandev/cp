"use client";
import acmeLogo from "@/assets/icons/bank.png";
import apexLogo from "@/assets/icons/cahsapp.png";
import celestialLogo from "@/assets/icons/apple-pay.png";
import echoLogo from "@/assets/icons/g-pay.png";
import pulseLogo from "@/assets/icons/Zelle_logo.png";
import quantumLogo from "@/assets/icons/paypal.png";
import Image from "next/image";
import { motion } from "motion/react";

const logos = [
  {
    name: "Acme logo",
    image: acmeLogo,
  },
  {
    name: "Apex logo",
    image: apexLogo,
  },
  {
    name: "Celestial logo",
    image: celestialLogo,
  },
  {
    name: "Echo logo",
    image: echoLogo,
  },
  {
    name: "Pulse logo",
    image: pulseLogo,
  },
  {
    name: "Quantum logo",
    image: quantumLogo,
  },
];

export default function LogoTicker() {
  return (
    <div className="py-8 mb:py-12 bg-black">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            {logos.map((logo) => (
              <Image
                key={logo.name}
                src={logo.image}
                alt={logo.name}
                className="logo-ticker-image"
              />
            ))}
            {logos.map((logo) => (
              <Image
                key={logo.name}
                src={logo.image}
                alt={logo.name}
                className="logo-ticker-image"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
