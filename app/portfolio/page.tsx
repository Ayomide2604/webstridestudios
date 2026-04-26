import PortfolioHero from "./PortfolioHero";
import PortfolioProjects from "./PortfolioProjects";
import PortfolioStats from "./PortfolioStats";
import Testimonials from "../sections/Testimonials";
import Contact from "../sections/Contact";

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <PortfolioStats />
      <PortfolioProjects />
      <Testimonials />
      <Contact />
    </>
  )
}
