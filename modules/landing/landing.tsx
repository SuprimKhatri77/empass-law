"use client";

import FeaturedCaseStudy from "./featured-case-story";
import { FeaturedInsights } from "./featured-insights";
import Hero from "./hero";
import NewsSection from "./news-insights";
import { QuickLinks } from "./quick-link";
import Welcome from "./welcome";

export default function Landing() {
  return (
    <main className="min-h-screen">
      <Hero />
      <NewsSection />
      <Welcome />
      {/* <FeaturedCaseStudy /> */}
      <FeaturedInsights />
      <QuickLinks />

      {/* <Footer /> */}
    </main>
  );
}
