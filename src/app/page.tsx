"use client";
import dynamic from "next/dynamic";

const FloatingParticles = dynamic(() => import("@/components/FloatingParticles"), { ssr: false });

import SiteHeader from "@/components/SiteHeader";
import ServicesNav from "@/components/ServicesNav";
import Hero from "@/components/Hero";
import MassageSection from "@/components/MassageSection";
import AdditionsSection from "@/components/AdditionsSection";
import FacialCleansingSection from "@/components/FacialCleansingSection";
import MoroccanBathSection from "@/components/MoroccanBathSection";
import HairServicesSection from "@/components/HairServicesSection";
import ThreadBraidingSection from "@/components/ThreadBraidingSection";
import SpaSection from "@/components/SpaSection";
import WaxSection from "@/components/WaxSection";
import HairTreatmentsSection from "@/components/HairTreatmentsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen" style={{ backgroundColor: "var(--bg)" }}>
      {/* Ambient floating particles */}
      <div className="fixed inset-0 z-0 pointer-events-none h-screen overflow-hidden">
        <FloatingParticles />
      </div>

      {/* ── Sections ─────────────────────────────── */}
      <div className="relative z-10">
        <SiteHeader />
        <Hero />
        <ServicesNav />
        <MassageSection />
        <AdditionsSection />
        <FacialCleansingSection />
        <MoroccanBathSection />
        <HairServicesSection />
        <ThreadBraidingSection />
        <SpaSection />
        <WaxSection />
        <HairTreatmentsSection />
        <Footer />
      </div>
    </main>
  );
}
