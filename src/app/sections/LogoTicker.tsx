"use client";
import acmeLogo from "@/assets/icons/bank.png";
import apexLogo from "@/assets/icons/cahsapp.png";
import celestialLogo from "@/assets/icons/apple-pay.png";
import echoLogo from "@/assets/icons/g-pay.png";
import pulseLogo from "@/assets/icons/Zelle_logo.png";
import quantumLogo from "@/assets/icons/paypal.png";
import Image from "next/image";

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
    <section className="bg-black text-white w-full">
      <div className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
            {logos.map((logo) => (
              <div key={logo.name} className="flex items-center justify-center">
                <Image
                  src={logo.image}
                  alt={logo.name}
                  className="w-auto h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
