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
    <div className="flex flex-col items-center justify-center min-h-screen text-white px-4 md:px-20 py-10 bg-black">
      {/* Heading Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          AVAILABLE GAMES
        </h1>
        <div className="flex items-center justify-center">
          <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
        </div>
        <p className="text-gray-400 mt-2">
          Available MODS and cheats for the following games
        </p>
      </div>

      {/* Game Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-lg">
        {games.map((game) => (
          <div
            key={game.title}
            className="relative bg-gray-800 rounded-lg overflow-hidden shadow-md group"
          >
            {/* Game Image */}
            <Image
              src={game.image}
              alt={`Image of ${game.title}`}
              layout="responsive"
              width={300}
              height={200}
              className="object-cover w-full h-full"
            />
            {/* Title Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-2xl font-bold text-white">{game.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
