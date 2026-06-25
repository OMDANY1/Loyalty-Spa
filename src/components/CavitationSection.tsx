"use client";
import { useReducedMotion } from "framer-motion";
import Animate from "./Animate";
import { useApp } from "@/contexts/AppContext";
import SectionTitle from "./SectionTitle";
import RiyalIcon from "./RiyalIcon";
import { CavitationIcon, SpaStoneIcon } from "./SpaIcons";

export default function CavitationSection() {
  const { t } = useApp();
  const reduced = useReducedMotion();

  return (
    <section
      id="cavitation"
      className="relative py-20 px-4 overflow-hidden"
      aria-labelledby="cavitation-title"
      style={{ background: "linear-gradient(180deg, var(--bg-alt) 0%, var(--bg) 100%)" }}
    >
      <div className="absolute top-12 left-8 pointer-events-none opacity-[0.06]" aria-hidden="true">
        <SpaStoneIcon size={55} color="#D6B07A" strokeWidth={0.8} />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <SectionTitle title={t.cavitation.title} subtitle={t.cavitation.subtitle} />

        {/* Cavitation fat-blasting card (large featured treatment card) */}
        <div className="rounded-3xl overflow-hidden max-w-4xl mx-auto mt-12" style={{ boxShadow: "0 8px 32px rgba(214,176,122,0.12), 0 2px 8px rgba(0,0,0,0.15)" }}>
          <Animate
            initial={reduced ? false : { opacity: 0, y: 15 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="relative cursor-default hover-lift-gold reveal-animate glass-card"
          >
            {/* Top gold highlight line */}
            <div className="absolute top-0 inset-x-0 h-px"
              style={{ background: "linear-gradient(90deg, transparent, var(--gold), transparent)" }} aria-hidden="true" />
            
            {/* Ambient decorative blurs inside the card */}
            <div className="absolute top-0 right-0 w-48 h-48 -translate-y-1/3 translate-x-1/3 rounded-full blur-3xl pointer-events-none opacity-40"
              style={{ background: "var(--gold)" }} aria-hidden="true" />
            <div className="absolute bottom-0 left-0 w-40 h-40 translate-y-1/3 -translate-x-1/3 rounded-full blur-3xl pointer-events-none opacity-20"
              style={{ background: "var(--gold)" }} aria-hidden="true" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 p-7 md:p-9">
              <div className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(214,176,122,0.12)", border: "1.5px solid var(--gold)" }}>
                <CavitationIcon size={40} />
              </div>
              <div className="flex-1 text-center md:text-right">
                <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ar-text"
                  style={{ background: "rgba(214,176,122,0.15)", color: "var(--gold)", border: "1px solid rgba(214,176,122,0.25)", letterSpacing: 0 }}>
                  ✦ {t.cavitation.sessionPrice}
                </span>
                <h3 className="ar-text font-bold"
                  style={{ fontSize: "clamp(1.1rem, 3vw, 1.35rem)", color: "var(--text-primary)", letterSpacing: 0, lineHeight: 1.5 }}>
                  {t.cavitation.cardTitle}
                </h3>
                <p className="ar-text mt-1.5"
                  style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.7, letterSpacing: 0 }}>
                  {t.cavitation.cardDesc}
                </p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0 pt-4 md:pt-0">
                <span className="font-bold tabular-nums"
                  style={{ fontSize: "clamp(2.5rem, 7vw, 3.2rem)", background: "linear-gradient(135deg, #D6B07A 0%, #E5C99A 50%, #B8924E 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", letterSpacing: 0 }}>
                  400
                </span>
                <RiyalIcon size={26} />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
}
