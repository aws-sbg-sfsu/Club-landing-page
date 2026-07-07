import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { Perks } from "@/components/sections/Perks";
import { Team } from "@/components/sections/Team";
import { Faq } from "@/components/sections/Faq";
import { Join } from "@/components/sections/Join";

/**
 * Single-page landing. To add a section later (Events, Projects, …):
 * create its data file in content/, its component in components/sections/,
 * and add one line here.
 */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <WhatWeDo />
        <Perks />
        <Team />
        <Faq />
        <Join />
      </main>
      <Footer />
    </>
  );
}
