import About from "./about";
import CTA from "./cta";
import Hero from "./hero";
import Insights from "./insights";
import Process from "./process";
import Services from "./services";
import Testimonials from "./testimonials";
import WhyChooseUs from "./why-choose-use";

export default function Landing() {
  return (
    <main className="bg-[#0A0F1C] text-white overflow-hidden">
      <Hero />

      <Services />

      <About />

      <WhyChooseUs />

      <Process />

      <Testimonials />

      <Insights />

      <CTA />
    </main>
  );
}
