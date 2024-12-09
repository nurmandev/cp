"use client";

import {
  FaDiscord,
  FaLink,
  FaDollarSign,
  FaVideo,
  FaCheck,
  FaMoneyBillWave,
} from "react-icons/fa";

export default function HowItWorks() {
  return (
    <section className="bg-gradient-to-b from-[#e46a31e3] to-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          How It Works?
        </h2>

        {/* Steps */}
        <div className="relative">
          {/* Timeline Vertical Line */}
          <div className="hidden md:block absolute top-0 left-10 h-full w-[2px] bg-red-500"></div>

          <div className="flex flex-col space-y-12 md:space-y-0 md:grid md:grid-cols-[auto_1fr] md:gap-x-16">
            {/* Step 1 */}
            <Step
              number={1}
              title="Registration Via Discord"
              description="Register on our platform using Discord’s custodial login for all authentication-related stuff."
              icon={<FaDiscord size={24} />}
              buttonText="Register Now"
            />

            {/* Step 2 */}
            <Step
              number={2}
              title="Connect Accounts"
              description="Link Social Media Accounts and Payment methods to kickstart the process of onboarding."
              icon={<FaLink size={24} />}
            />

            {/* Step 3 */}
            <Step
              number={3}
              title="Subscription Fee"
              description="Pay a Monthly $4.99 fee for cheat key access, so that you can start utilizing them and move to the next step."
              icon={<FaDollarSign size={24} />}
            />

            {/* Step 4 */}
            <Step
              number={4}
              title="Content Creation"
              description="Upload videos revealing cheats, tips, and hacks to gain an edge, improve skills, and master games effortlessly."
              icon={<FaVideo size={24} />}
            />

            {/* Step 5 */}
            <Step
              number={5}
              title="Verification and Payment"
              description="Implement manual verification for payments tied to engagement metrics, ensuring accuracy and fairness."
              icon={<FaCheck size={24} />}
            />

            {/* Step 6 */}
            <Step
              number={6}
              title="Payout Requests"
              description="Enable manual or automatic payouts using diverse methods for users to receive their earnings efficiently."
              icon={<FaMoneyBillWave size={24} />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Step Component
function Step({ number, title, description, icon, buttonText }: any) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0">
      {/* Number and Line Connector */}
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 flex items-center justify-center bg-red-500 text-white font-bold rounded-full">
          {number}
        </div>
        <div className="hidden md:block w-[2px] h-full bg-red-500"></div>
      </div>

      {/* Icon and Content */}
      <div className="md:ml-6 flex-1">
        <div className="flex items-center space-x-3">
          <div className="text-red-500">{icon}</div>
          <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
        </div>
        <p className="mt-2 text-sm md:text-base">{description}</p>
        {buttonText && (
          <button className="mt-4 px-6 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-bold rounded-full transition duration-200">
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
}
