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
    <div className="flex flex-col justify-center min-h-screen text-white px-4 md:px-20 py-10">
      {/* Heading */}
      <div className="available-game text-center md:text-left mb-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Available Games</h1>
        <Image
          src="/btc-coin.png"
          alt={`Image of`}
          layout="responsive"
          width={10}
          height={10}
          className="object-cover w-[30px] h-[8]"
        />
        <p className="text-gray-400">
          Available MODS and cheats for the following games
        </p>
      </div>

      {/* Game Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => (
          <div
            key={game.title}
            className="relative bg-gray-800 rounded-lg shadow-lg overflow-hidden group"
          >
            {/* Image */}
            <Image
              src={game.image}
              alt={`Image of ${game.title}`}
              layout="responsive"
              width={300}
              height={200}
              className="object-cover w-full h-48"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <h2 className="text-2xl font-bold">{game.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
