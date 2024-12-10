"use client";
import Image from "next/image";
import fortniteImage from "@/assets/icons/fortnite.png";
import csgoImage from "@/assets/icons/c5.png";
import valorantImage from "@/assets/icons/valorant.png";

const games = [
  {
    title: "FORTNITE",
    image: fortniteImage,
  },
  {
    title: "CS:GO",
    image: csgoImage,
  },
  {
    title: "VALORANT",
    image: valorantImage,
  },
];

export default function ProductShowcase() {
  return (
    <div className="bg-[#0f0f0f] text-white px-6 py-10 md:px-20">
      <div className="text-4xl md:text-8xl font-american text-center md:text-left">
        Available Games.
      </div>
      <Image
        src="/assets/icons/valorant.png"
        alt="Gift 1"
        className="rounded w-full h-auto"
        width={50}
        height={30}
      />
      <div className="text-base md:text-xl mb-6 md:mb-12 opacity-70 text-center md:text-left">
        Available MODS and cheats for the following games
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {games.map((game) => (
          <div
            key={game.title}
            className="border border-yellow-300 rounded-lg w-full"
          >
            <div className="text-2xl md:text-5xl py-4 md:py-8 mb-4 md:mb-8 tracking-wide font-american font-bold text-white text-center">
              {game.title}
            </div>
            <Image
              src={game.image}
              alt={`Image of ${game.title}`}
              width={300}
              height={200}
              className="object-cover w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
