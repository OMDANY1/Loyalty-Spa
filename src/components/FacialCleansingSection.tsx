"use client";
import type { Variants } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import Animate from "./Animate";
import { useApp } from "@/contexts/AppContext";
import SectionTitle from "./SectionTitle";
import RiyalIcon from "./RiyalIcon";
import { SteamerIcon, PeelingIcon, LiftingIcon, FaceMaskIcon, SuctionIcon, SpaStoneIcon } from "./SpaIcons";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function FacialCleansingSection() {
  const { t } = useApp();
  const reduced = useReducedMotion();

  const services = [
    { id: "steamer", label: t.facialCleansing.deviceSteamer, Icon: SteamerIcon },
    { id: "peeling", label: t.facialCleansing.devicePeeling, Icon: PeelingIcon },
    { id: "lifting", label: t.facialCleansing.deviceLifting, Icon: LiftingIcon },
    { id: "mask",    label: t.facialCleansing.faceMask,      Icon: FaceMaskIcon },
    { id: "suction", label: t.facialCleansing.deviceSuction, Icon: SuctionIcon },
  ];

  return (
    <section
      id="facial-cleansing"
      className="relative py-20 px-4 overflow-hidden"
      aria-labelledby="facial-cleansing-title"
      style={{ background: "linear-gradient(180deg, var(--bg) 0%, var(--bg-alt) 100%)" }}
    >
      {/* Decorative background element */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #D6B07A 0%, transparent 70%)" }} aria-hidden="true" />
      <div className="absolute bottom-16 right-8 pointer-events-none opacity-[0.06]" aria-hidden="true">
        <SpaStoneIcon size={55} color="#D6B07A" strokeWidth={0.8} />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <SectionTitle title={t.facialCleansing.title} subtitle={t.facialCleansing.subtitle} />

        {/* 300 SAR Price Badge */}
        <Animate
          initial={reduced ? false : { opacity: 0, y: 10 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="flex justify-center mb-10 reveal-animate"
        >
          <div className="glass-card rounded-2xl px-8 py-4 flex items-center justify-center gap-4 min-w-[220px]"
            style={{ boxShadow: "var(--card-glass-shadow)" }}>
            <span className="ar-text font-medium text-sm" style={{ color: "var(--text-primary)" }}>
              {t.facialCleansing.title}
            </span>
            <div className="h-4 w-px" style={{ background: "var(--border)" }} />
            <div className="flex items-center gap-1.5">
              <span className="text-3xl font-bold tabular-nums"
                style={{ background: "linear-gradient(135deg, #D6B07A, #E5C99A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                300
              </span>
              <RiyalIcon size={20} />
            </div>
          </div>
        </Animate>

        {/* 5-item grid */}
        <Animate
          variants={reduced ? undefined : container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10"
        >
          {services.map(({ id, label, Icon }, i) => (
            <Animate
              key={id}
              variants={reduced ? undefined : item}
              transition={{ delay: i * 0.06 }}
              className="flex flex-col items-center justify-center gap-3.5 glass-card rounded-2xl p-5 text-center cursor-default h-full min-h-[140px] hover-lift reveal-animate"
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(214,176,122,0.1)", border: "1px solid rgba(214,176,122,0.25)" }}>
                <Icon size={26} />
              </div>
              <span className="ar-text font-medium text-xs leading-relaxed"
                style={{ color: "var(--text-primary)", letterSpacing: 0 }}>
                {label}
              </span>
            </Animate>
          ))}
        </Animate>

        {/* Note */}
        <Animate
          initial={reduced ? false : { opacity: 0, y: 10 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="max-w-2xl mx-auto reveal-animate"
        >
          <div className="rounded-2xl px-6 py-4 text-center"
            style={{ background: "var(--card-glass-bg)", border: "1px solid var(--border)" }}>
            <span className="ar-text" style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>
              {t.facialCleansing.note}
            </span>
          </div>
        </Animate>
      </div>
    </section>
  );
}
