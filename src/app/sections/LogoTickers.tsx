"use client";
import fortuneLogo from "@/assets/icons/fortnite-logo2.png";
import valorantLogo from "@/assets/icons/VALORANT-logo.png";
import xLogo from "@/assets/icons/X.png";
import contralLogo from "@/assets/icons/contral.png";
import rustLogo from "@/assets/icons/rust.png";
import quantumLogo from "@/assets/icons/paypal.png";
import Image from "next/image";

const logos = [
  {
    name: "Acme logo",
    image: fortuneLogo,
  },
  {
    name: "Apex logo",
    image: xLogo,
  },
  {
    name: "valorant Logo",
    image: valorantLogo,
  },
  {
    name: "X logo",
    image: xLogo,
  },
  {
    name: "contral Logo",
    image: contralLogo,
  },
  {
    name: "x logo",
    image: xLogo,
  },
  {
    name: "rust Logo",
    image: rustLogo,
  },
  {
    name: "Quantum logo",
    image: xLogo,
  },
];

export default function LogoTickers() {
  return (
    <section className="bg-black text-white w-full">
      <div className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 justify-items-center">
            {logos.map((logo) => (
              <div key={logo.name} className="flex items-center justify-center">
                <Image
                  src={logo.image}
                  alt={logo.name}
                  className="w-auto h-20 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
