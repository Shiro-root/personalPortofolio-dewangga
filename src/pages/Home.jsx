import Hero from "../components/Hero";
import FeaturedWork from "../components/FeaturedWork";
import Services from "../components/Services";
import Process from "../components/Process";
import About from "../components/About";
import Trust from "../components/Trust";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <Services />
      <Process />
      <About />
      <Trust />
      <CTA />
    </>
  );
}
