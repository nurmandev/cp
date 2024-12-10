"use client";

import Image from "next/image";
import Section from "./section";
import works1 from "@/assets/icons/how1.png";
import works2 from "@/assets/icons/how2.png";
import discordIcon from "@/assets/icons/discord.png";
import guideIcon from "@/assets/icons/guide.png";
import toolsIcon from "@/assets/icons/tools.png";
import connectIcon from "@/assets/icons/subscription.png";
import subscriptionIcon from "@/assets/icons/btc-coin.png";
import paymentIcon from "@/assets/icons/payment.png";
// import subscriptionIcon from "@/assets/icons/btc-coin.png";

const HowItWorks: React.FC = () => {
  return (
    <section className="bg-[#271f14] text-white py-16 px-6 md:px-20 flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="flex-1 p-4 md:px-8">
        <h2 className="text-4xl md:text-8xl font-american tracking-wide font-extrabold mb-8 md:mb-12">
          How It Works?<span className="text-[#E44E0D]">.</span>
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
          id={4}
          title="Content Creation"
          description="Upload videos revealing cheats, tips, and hacks to gain an edge, improve skills, and master games effortlessly."
          icon={connectIcon}
          reverse
        />
        <Section
          id={5}
          title="Verification and Payment"
          description="Implement manual verification for payments tied to engagement metrics, ensuring accuracy, fairness, and rewarding genuine user "
          icon={paymentIcon}
          reverse
        />
        <Section
          id={6}
          title="Payout Requests"
          description="Enable manual or automatic payouts using diverse methods, for users to receive their earnings efficiently."
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
          id={1}
          title="Registration Via Discord"
          description="Register on our platform using Discord's custodial login for all authentication-related stuff."
          icon={discordIcon}
          buttonText="Register Now"
        />
        <Section
          id={2}
          title="Connect Accounts"
          description="Link Social Media Accounts and Payment methods to kickstart the process of onboarding."
          icon={guideIcon}
        />
        <Section
          id={3}
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
            <span className="text-[#FF9F64]">Anti-Fraud Measures</span>
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
