"use client";

import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Preview from "@/components/Preview";
import Templates from "@/components/Templates";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-[#FDF6F0] text-[#2D2D2D]">
      <Navbar />
      <Hero />
      <Features />
      <Preview />
      <Templates />
      <HowItWorks />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}