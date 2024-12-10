import Hero from "./sections/Hero";
import LogoTicker from "./sections/LogoTicker";
import Pricing from "./sections/Pricing";
import ProductShowcase from "./sections/ProductShowcase";
import AffiliateProgram from "./sections/AffiliateProgram";
import Footer from "./sections/Footer";
import Navbar from "./sections/Navbar";
import HowItWorks from "./sections/howItWorks/index";
import LogoTickers from "./sections/LogoTickers";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <LogoTickers />
      <HowItWorks />
      <Pricing />
      <AffiliateProgram />
      <Footer />
    </>
  );
}
