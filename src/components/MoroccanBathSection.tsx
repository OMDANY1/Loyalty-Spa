"use client";
import { motion } from "framer-motion";
import { useApp } from "@/contexts/AppContext";
import SectionTitle from "./SectionTitle";
import RiyalIcon from "./RiyalIcon";
import { MoroccanBathIcon, SpaStoneIcon } from "./SpaIcons";

export default function MoroccanBathSection() {
  const { t } = useApp();

  return (
    <section
      id="moroccan"
      className="relative py-20 px-4 overflow-hidden"
      aria-labelledby="moroccan-title"
      style={{ background: `linear-gradient(180deg, var(--bg-alt) 0%, var(--bg) 100%)` }}
    >
      <div className="absolute top-12 right-8 md:right-20 pointer-events-none opacity-[0.06]" aria-hidden="true">
        <SpaStoneIcon size={45} color="var(--gold)" strokeWidth={0.9} />
      </div>

      <div className="max-w-4xl mx-auto">
        <SectionTitle title={t.moroccan.title} subtitle={t.moroccan.subtitle} />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="max-w-xl mx-auto hover-lift reveal-animate"
        >
          <div
            className="relative rounded-3xl overflow-hidden p-8 md:p-12 text-center"
            style={{
              background: "linear-gradient(145deg, #24342F 0%, #1A2820 60%, #24342F 100%)",
              border: "2px solid rgba(214,176,122,0.5)",
              boxShadow: "0 20px 80px rgba(214,176,122,0.2), 0 4px 24px rgba(0,0,0,0.3)",
            }}
          >
            <div className="absolute top-0 right-0 w-40 h-40 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl pointer-events-none"
              style={{ background: "rgba(214,176,122,0.1)" }} />
            <div className="absolute bottom-0 left-0 w-40 h-40 translate-y-1/2 -translate-x-1/2 rounded-full blur-3xl pointer-events-none"
              style={{ background: "rgba(214,176,122,0.1)" }} />
            <div className="absolute top-0 inset-x-12 h-px"
              style={{ background: "linear-gradient(90deg, transparent, #D6B07A, transparent)" }} />
            <div className="absolute bottom-0 inset-x-12 h-px"
              style={{ background: "linear-gradient(90deg, transparent, #D6B07A, transparent)" }} />

            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{ background: "rgba(214,176,122,0.12)", border: "1.5px solid rgba(214,176,122,0.4)" }}>
                <MoroccanBathIcon size={40} />
              </div>
            </div>

            <p className="section-label mb-3" style={{ color: "rgba(214,176,122,0.7)", letterSpacing: 0 }}>
              ◆ {t.moroccan.badge} ◆
            </p>

            <h2 id="moroccan-title" className="ar-text font-bold mb-8"
              style={{ fontSize: "clamp(1.4rem, 4vw, 2.2rem)", color: "#FAF7F2", letterSpacing: 0 }}>
              {t.moroccan.cardTitle}
            </h2>

            <div className="flex flex-col gap-3 mb-8">
              {[t.moroccan.include1, t.moroccan.include2].map((itm) => (
                <div key={itm} className="flex items-center justify-center gap-3">
                  <span className="ar-text" style={{ fontSize: "0.95rem", color: "rgba(250,247,242,0.8)" }}>
                    {itm}
                  </span>
                  <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(214,176,122,0.2)", border: "1px solid rgba(214,176,122,0.5)" }}>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="#D6B07A" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                </div>
              ))}
            </div>

            <div className="h-px mb-8 mx-auto w-24"
              style={{ background: "linear-gradient(90deg, transparent, rgba(214,176,122,0.5), transparent)" }} />

            <div className="flex items-center justify-center gap-2">
              <span className="font-bold tabular-nums"
                style={{ fontSize: "clamp(3rem, 8vw, 4.5rem)", background: "linear-gradient(135deg, #D6B07A 0%, #E5C99A 50%, #B8924E 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", letterSpacing: 0 }}>
                300
              </span>
              <RiyalIcon size={36} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
