import Hero from "./hero";
import About from "./about";
import Expertise from "./expertise";
import Why from "./why";
import CTA from "./cta";

export default function Landing() {
  return (
    <main className="bg-stone-50 text-stone-900 overflow-hidden">
      <Hero />
      <About />
      <Expertise />
      <Why />
      <CTA />
    </main>
  );
}
