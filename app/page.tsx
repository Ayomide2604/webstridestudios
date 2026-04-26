import About from "./sections/About";
import Contact from "./sections/Contact";
import Features from "./sections/Features";
import HeroSection from "./sections/HeroSection";
import Services from "./sections/Services";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <About/>
      <Services/> 
      <Features/>
      <Contact/>
    </>
  );
}
