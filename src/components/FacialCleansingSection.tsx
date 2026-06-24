"use client";
import type { Variants } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import Animate from "./Animate";
import { useApp } from "@/contexts/AppContext";
import SectionTitle from "./SectionTitle";
import RiyalIcon from "./RiyalIcon";
import { SteamerIcon, PeelingIcon, LiftingIcon, FaceMaskIcon, SuctionIcon, CavitationIcon, SpaStoneIcon } from "./SpaIcons";

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
          className="max-w-2xl mx-auto mb-16 reveal-animate"
        >
          <div className="rounded-2xl px-6 py-4 text-center"
            style={{ background: "var(--card-glass-bg)", border: "1px solid var(--border)" }}>
            <span className="ar-text" style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>
              {t.facialCleansing.note}
            </span>
          </div>
        </Animate>

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
                  ✦ {t.facialCleansing.sessionPrice}
                </span>
                <h3 className="ar-text font-bold"
                  style={{ fontSize: "clamp(1.1rem, 3vw, 1.35rem)", color: "var(--text-primary)", letterSpacing: 0, lineHeight: 1.5 }}>
                  {t.facialCleansing.cavitationTitle}
                </h3>
                <p className="ar-text mt-1.5"
                  style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.7, letterSpacing: 0 }}>
                  {t.facialCleansing.cavitationDesc}
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
