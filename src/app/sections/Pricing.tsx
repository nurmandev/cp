"use client";
import CheckIcon from "@/assets/icons/check.svg";
import { motion } from "motion/react";
import clsx from "clsx";
import { ArrowDown } from "lucide-react";

const pricingTiers = [
  {
    title: "CHEAT KEY ACCESS",
    price: 4.99,
    oldPrice: 999,
    description:
      "Get access to the cheat key for a lifetime for the specific game",
    buttonText: "Get Now",
    features: [
      "Cheat Key Access for all the games",
      "Access to creator's Dashboard",
      "Access to Earnings Portal",
      "Etc Etc",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="py-24 bg-black text-white relative">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-center text-5xl font-bold uppercase tracking-wider mb-12">
          Pricing<span className="text-orange-500">.</span>
        </h2>

        <div className="max-w-md mx-auto bg-gray-900 rounded-lg shadow-lg p-8 relative">
          {pricingTiers.map(
            ({ title, price, oldPrice, description, buttonText, features }) => (
              <div key={title}>
                <h3 className="text-orange-500 text-xl font-bold mb-2">
                  {title}
                </h3>
                <p className="text-gray-400 mb-6">{description}</p>

                {/* Pricing Section */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-gray-600 line-through text-lg">
                    ${oldPrice}
                  </span>
                  <span className="text-4xl font-bold">${price}</span>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckIcon className="w-5 h-5 text-green-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="button flex items-center justify-center">
                  <button className="mt-10 flex items-center justify-center gap-2 bg-yellow-400 text-black py-2 px-6 sm:py-3 sm:px-8 rounded-full text-sm sm:text-base md:text-lg font-bold hover:bg-yellow-500 transition-all">
                    Get Started Now
                    <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 bg-black rounded-full text-white" />
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
