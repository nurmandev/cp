"use client";

import Image from "next/image";
import Section from "./section";
import works1 from "@/assets/icons/how1.png";
import works2 from "@/assets/icons/how2.png";
import discordIcon from "@/assets/icons/discord.png";
import guideIcon from "@/assets/icons/guide.png";
import toolsIcon from "@/assets/icons/tools.png";
import connectIcon from "@/assets/icons/subscription.png";
import subscriptionIcon from "@/assets/icons/subscription.png";

const HowItWorks: React.FC = () => {
  return (
    <section className="bg-[#271f14] text-white py-16 px-6 md:px-20 flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="flex-1 p-4 md:px-8">
        <h2 className="text-4xl md:text-8xl font-american tracking-wide font-extrabold mb-8 md:mb-12">
          How It Works?<span className="text-yellow-400">.</span>
        </h2>
        <div className="mb-12">
          <Image
            src={works1}
            alt="How it works illustration 1"
            className="rounded"
            priority
          />
        </div>
        <Section
          id={1}
          title="Registration Via Discord"
          description="Register on our platform using Discord's custodial login for all authentication-related stuff."
          icon={discordIcon}
          reverse
        />
        <Section
          id={2}
          title="Onboarding Guide"
          description="Follow our detailed onboarding guide to set up your profile and access the tools."
          icon={guideIcon}
          reverse
        />
        <Section
          id={3}
          title="Start Utilizing Tools"
          description="Unlock access to premium features and kickstart your journey with our tools."
          icon={toolsIcon}
          reverse
        />
      </div>

      {/* Divider */}
      <div className="hidden md:flex w-20 justify-center">
        <div className="h-full w-[1px] bg-yellow-400"></div>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex flex-col gap-12 p-4 md:px-8">
        <Section
          id={4}
          title="Connect Accounts"
          description="Link Social Media Accounts and Payment methods to kickstart the process of onboarding."
          icon={connectIcon}
        />
        <Section
          id={5}
          title="Subscription Fee"
          description="Pay a Monthly $4.99 fee for cheat key access to unlock premium features."
          icon={subscriptionIcon}
        />
        <div className="mb-12">
          <Image
            src={works2}
            alt="How it works illustration 2"
            className="rounded"
            priority
          />
        </div>
        <div>
          <div className="text-lg md:text-2xl font-medium">
            Special Step:{" "}
            <span className="text-yellow-400">Anti-Fraud Measures</span>
          </div>
          <p className="text-gray-400 mt-2">
            Authenticate views through{" "}
            <span className="font-medium text-white">
              social media account access
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
