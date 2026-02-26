"use client";

import ComplaintPolicy from "./ComplaintPolicy";
import FeaturedCaseStudy from "./featured-case-story";
import { FeaturedInsights } from "./featured-insights";
import FeaturedTeamMember from "./featured-team-member";
import Hero from "./hero";
import NewsSection from "./news-insights";
import { QuickLinks } from "./quick-link";
import Welcome from "./welcome";

export default function Landing() {
  return (
    <main className="min-h-screen">
      <Hero />
      {/* <FeaturedCaseStudy /> */}
      <FeaturedTeamMember />
      <NewsSection />
      {/* <Welcome /> */}
      {/* <FeaturedInsights /> */}
      <QuickLinks />
      <ComplaintPolicy />

      {/* <Footer /> */}
    </main>
  );
}
