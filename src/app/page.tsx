import Hero from "./sections/Hero";
import LogoTicker from "./sections/LogoTicker";
import Pricing from "./sections/Pricing";
import ProductShowcase from "./sections/ProductShowcase";
import AffiliateProgram from "./sections/AffiliateProgram";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <LogoTicker />
      <Pricing />
      <AffiliateProgram/>
      {/* <Footer /> */}
    </>
  );
}
