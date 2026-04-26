import About from "./sections/About";
import Contact from "./sections/Contact";
import Features from "./sections/Features";
import HeroSection from "./sections/HeroSection";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <About/>
      <Services/> 
      <Features/>
      <Testimonials/>
      <Contact/>
    </>
  );
}
