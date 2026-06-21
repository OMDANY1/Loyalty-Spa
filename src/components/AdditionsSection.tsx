"use client";
import type { Variants } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import Animate from "./Animate";
import { useApp } from "@/contexts/AppContext";
import SectionTitle from "./SectionTitle";
import RiyalIcon from "./RiyalIcon";
import { CuppingIcon, HotStoneIcon, OilIcon, EarCandleIcon, WoodIcon, FaceMaskIcon, HerbBallIcon, LymphaticIcon, KhalaaIcon, FootReflexologyIcon } from "./SpaIcons";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function AdditionsSection() {
  const { t } = useApp();
  const reduced = useReducedMotion();

  const additions = [
    { id: "cupping",         label: t.additions.items.cupping,         Icon: CuppingIcon },
    { id: "hotStone",        label: t.additions.items.hotStone,        Icon: HotStoneIcon },
    { id: "organicOil",       label: t.additions.items.organicOil,       Icon: OilIcon },
    { id: "earCandle",       label: t.additions.items.earCandle,       Icon: EarCandleIcon },
    { id: "wood",            label: t.additions.items.wood,            Icon: WoodIcon },
    { id: "faceMask",        label: t.additions.items.faceMask,        Icon: FaceMaskIcon },
    { id: "herbBall",        label: t.additions.items.herbBall,        Icon: HerbBallIcon },
    { id: "lymphatic",       label: t.additions.items.lymphatic,       Icon: LymphaticIcon },
    { id: "khalaa",          label: t.additions.items.khalaa,          Icon: KhalaaIcon },
    { id: "footReflexology", label: t.additions.items.footReflexology, Icon: FootReflexologyIcon },
  ];

  return (
    <section
      id="additions"
      className="relative py-20 px-4 overflow-hidden"
      aria-labelledby="additions-title"
      style={{ background: "linear-gradient(180deg, var(--bg-alt) 0%, var(--bg) 100%)" }}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #D6B07A 0%, transparent 70%)" }} />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <SectionTitle title={t.additions.title} subtitle={t.additions.subtitle} />

        {/* Price badges */}
        <Animate
          initial={reduced ? false : { opacity: 0, y: 10 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10 reveal-animate"
        >
          {[
            { id: "one-addon", label: t.additions.oneAddon, price: "30" },
            { id: "two-addons", label: t.additions.twoAddons, price: "50" },
          ].map((badge) => (
            <div key={badge.id} className="glass-card rounded-2xl px-8 py-5 flex items-center justify-between gap-6 min-w-[220px]">
              <span className="ar-text font-medium"
                style={{ fontSize: "clamp(0.9rem, 2.5vw, 1rem)", color: "var(--text-primary)" }}>
                {badge.label}
              </span>
              <div className="flex items-center gap-1.5">
                <span className="text-3xl font-bold tabular-nums"
                  style={{ background: "linear-gradient(135deg, #D6B07A, #E5C99A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  {badge.price}
                </span>
                <RiyalIcon size={20} />
              </div>
            </div>
          ))}
        </Animate>

        {/* Note */}
        <Animate
          initial={reduced ? false : { opacity: 0, y: 10 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="max-w-2xl mx-auto mb-12 reveal-animate"
        >
          <div className="rounded-2xl px-6 py-4 text-center"
            style={{ background: "var(--card-glass-bg)", border: "1px solid var(--border)" }}>
            <span className="font-semibold" style={{ color: "var(--gold)" }}>{t.additions.note}</span>
            <span className="ar-text" style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
              {" "}{t.additions.noteText}
            </span>
          </div>
        </Animate>

        {/* 10-item grid */}
        <Animate
          variants={reduced ? undefined : container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {additions.map(({ id, label, Icon }, i) => (
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
      </div>
    </section>
  );
}
