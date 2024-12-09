import ArrowRight from "@/assets/icons/arrow-right.svg";
import Logo from "@/assets/logo.png";
import Menu from "@/assets/icons/menu.svg";
import Image from "next/image";
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
    name: "Updates",
    href: "#",
  },
  {
    name: "Help",
    href: "#",
  },
];

export default function Header() {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="py-5">
        <div className="container">
          <div className="flex justify-between items-center">
            <Image src={Logo} alt="Logo" width={40} height={40} />
            <Menu className="w-5 h-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              {links.map((link) => (
                <Link key={link.name} href={link.href}>
                  {link.name}
                </Link>
              ))}
              <button className="btn btn-primary">Get for free</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
