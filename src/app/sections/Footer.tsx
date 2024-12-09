import Logo from "@/assets/logo.png";
import Image from "next/image";
import SocialX from "@/assets/icons/social-x.svg";
import SocialInsta from "@/assets/icons/social-insta.svg";
import SocialLinkedIn from "@/assets/icons/social-linkedin.svg";
import SocialPin from "@/assets/icons/social-pin.svg";
import SocialYouTube from "@/assets/icons/social-youtube.svg";
import Link from "next/link";

const links = [
  {
    name: "About",
    href: "#",
  },
  {
    name: "Features",
    href: "#",
  },
  {
    name: "Customers",
    href: "#",
  },
  {
    name: "Pricing",
    href: "#",
  },
  {
    name: "Help",
    href: "#",
  },
  {
    name: "Careers",
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="bg-black text-[#bcbcbc] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:blur before:w-full before:bg-[linear-gradient(to_right,#f87bff,#fb92cf,#ffdd9b,#c2f0b1,#2fd8fe)] before:absolute">
          <Image
            src={Logo}
            alt="SaaS Logo"
            width={40}
            height={40}
            className="relative"
          />
        </div>
        <nav className="flex flex-col gap-6 mt-6 md:flex-row md:justify-center">
          {links.map(({ href, name }) => (
            <Link href={href} key={name}>
              {name}
            </Link>
          ))}
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialX />
          <SocialInsta />
          <SocialLinkedIn />
          <SocialPin />
          <SocialYouTube />
        </div>
        <p className="mt-6">&copy; {new Date().getFullYear()} Babakolo, Inc</p>
      </div>
    </footer>
  );
}
