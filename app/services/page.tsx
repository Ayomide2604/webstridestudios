import ServicesHero from "./ServicesHero";
import ServicesList from "./ServicesList";
import ServicesProcess from "./ServicesProcess";
import Testimonials from "../sections/Testimonials";
import Contact from "../sections/Contact";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ServicesProcess />
      <Testimonials />
      <Contact />
    </>
  )
}
