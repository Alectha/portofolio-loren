"use client";

import { useState } from "react";
import AboutSection from "../components/AboutSection";
import KeyAchievements from "../components/KeyAchievements";
import ContactSection from "../components/ContactSection";
import ExperienceSection from "../components/ExperienceSection";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ProjectsSection from "../components/ProjectsSection";
import SlideOver from "../components/SlideOver";
import { AuroraBackground } from "../components/shared";
import type { SlideOverData } from "../data/content";

export default function App() {
  const [slideOverData, setSlideOverData] = useState<SlideOverData | null>(null);

  return (
    <div className="relative w-full min-h-screen selection:bg-[var(--accent-teal)] selection:text-white">
      <AuroraBackground />
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <KeyAchievements />
        <ProjectsSection onOpenSlideOver={setSlideOverData} />
        <ExperienceSection onOpenSlideOver={setSlideOverData} />
        <ContactSection />
      </main>

      <SlideOver isOpen={!!slideOverData} onClose={() => setSlideOverData(null)} data={slideOverData} />
    </div>
  );
}
