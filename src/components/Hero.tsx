"use client";
import Image from "next/image";
import Animate from "./Animate";
import { useApp } from "@/contexts/AppContext";
import { InfinityIcon, SpaStoneIcon } from "./SpaIcons";

export default function Hero() {
  const { t } = useApp();

  const scrollToServices = () =>
    document.getElementById("services-nav")?.scrollIntoView({ behavior: "smooth" });
  const scrollToBooking = () =>
    document.getElementById("massage")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "var(--hero-bg)" }}
    >
      {/* Ambient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #D6B07A 0%, transparent 70%)" }} />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl"
          style={{ background: "radial-gradient(circle, #D6B07A 0%, transparent 70%)" }} />
      </div>

      {/* Decorative infinity */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true" style={{ opacity: 0.05 }}>
        <InfinityIcon size={700} color="#D6B07A" strokeWidth={0.8} />
      </div>

      {/* Spa stone decorations */}
      <div className="absolute bottom-12 right-8 md:right-24 opacity-10 pointer-events-none" aria-hidden="true">
        <SpaStoneIcon size={60} color="#D6B07A" strokeWidth={1} />
      </div>
      <div className="absolute bottom-12 left-8 md:left-24 opacity-10 pointer-events-none" aria-hidden="true">
        <SpaStoneIcon size={42} color="#D6B07A" strokeWidth={1} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-5 max-w-3xl mx-auto w-full">
        {/* Logo */}
        <Animate
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="mb-10 reveal-animate"
        >
          <div className="relative mx-auto" style={{ width: 220, height: 220 }}>
            <Image src="/logo.png" alt="Loyalty Spa — سبا لويالتي" fill priority className="object-contain" />
          </div>
        </Animate>

        {/* Headline */}
        <Animate
          tag="h1"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="ar-text font-bold mb-5 reveal-animate"
          style={{ fontSize: "clamp(1.6rem, 5vw, 3.5rem)", lineHeight: 1.45, color: "#FAF7F2", letterSpacing: 0 }}
        >
          {t.hero.title1}
          <br />
          <span style={{
            background: "linear-gradient(135deg, #D6B07A, #E5C99A, #B8924E)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            {t.hero.title2}
          </span>
        </Animate>

        {/* Subtitle */}
        <Animate
          tag="p"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="ar-text mb-10 max-w-lg reveal-animate"
          style={{ fontSize: "clamp(0.95rem, 2.5vw, 1.15rem)", color: "rgba(250,247,242,0.7)", lineHeight: 1.8, letterSpacing: 0 }}
        >
          {t.hero.subtitle}
        </Animate>

        {/* CTAs */}
        <Animate
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center reveal-animate"
        >
          <button onClick={scrollToBooking} id="hero-cta-book" className="btn-primary">
            <span className="ar-text">{t.hero.bookNow}</span>
            <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button onClick={scrollToServices} id="hero-cta-services" className="btn-outline">
            <span className="ar-text">{t.hero.viewServices}</span>
          </button>
        </Animate>

        {/* Scroll indicator */}
        <Animate
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 flex flex-col items-center gap-2 reveal-animate"
        >
          <Animate
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full flex items-start justify-center p-1"
            style={{ border: "2px solid rgba(214,176,122,0.4)" }}
          >
            <div className="w-1 h-2 rounded-full" style={{ background: "#D6B07A" }} />
          </Animate>
        </Animate>
      </div>
    </section>
  );
}
