"use client";
import type { Variants } from "framer-motion";
import { motion, useReducedMotion } from "framer-motion";
import { useApp } from "@/contexts/AppContext";
import SectionTitle from "./SectionTitle";
import RiyalIcon from "./RiyalIcon";
import { ThreadBraidIcon, SpaStoneIcon, InfinityIcon } from "./SpaIcons";

// Remove static variants to define them dynamically inside the component

export default function ThreadBraidingSection() {
  const { t } = useApp();
  const reduced = useReducedMotion();

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
  };

  const services = [
    { id: "shortBraid",  title: t.threadBraiding.shortBraid,  price: "11" },
    { id: "mediumBraid", title: t.threadBraiding.mediumBraid, price: "18" },
    { id: "longBraid",   title: t.threadBraiding.longBraid,   price: "25" },
  ];

  return (
    <section
      id="thread-braiding"
      className="relative py-20 px-4 overflow-hidden"
      aria-labelledby="thread-braiding-title"
      style={{ background: `linear-gradient(180deg, var(--bg-thread) 0%, var(--bg-thread-alt) 100%)` }}
    >
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(201,160,99,0.45), transparent)" }} aria-hidden="true" />
      <div className="absolute top-6 left-4 md:left-10 pointer-events-none" style={{ opacity: 0.06 }} aria-hidden="true">
        <InfinityIcon size={220} color="var(--gold)" strokeWidth={0.7} />
      </div>
      <div className="absolute bottom-10 right-6 md:right-14 pointer-events-none" style={{ opacity: 0.06 }} aria-hidden="true">
        <SpaStoneIcon size={52} color="var(--gold)" strokeWidth={0.8} />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 10 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="reveal-animate"
        >
          <SectionTitle title={t.threadBraiding.title} subtitle={t.threadBraiding.subtitle} />
        </motion.div>

        <motion.div
          variants={reduced ? undefined : containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map(({ id, title, price }) => (
            <div
              key={id}
              className="rounded-3xl overflow-hidden"
              style={{ boxShadow: "var(--card-glass-shadow)" }}
            >
              <motion.div
                variants={reduced ? undefined : cardVariants}
                className="relative flex flex-col items-center text-center gap-5 p-8 cursor-default hover-lift-bronze reveal-animate h-full"
                style={{
                  background: "var(--card-glass-bg)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  border: "1px solid var(--card-glass-border)",
                  minHeight: "260px",
                  justifyContent: "center",
                }}
              >
                <div className="absolute top-0 inset-x-0 h-px"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(201,160,99,0.5), transparent)" }} aria-hidden="true" />

                <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(201,160,99,0.08)", border: "1.5px solid rgba(201,160,99,0.28)" }}>
                  <ThreadBraidIcon size={32} color="var(--gold)" />
                </div>

                <h3 className="ar-text font-semibold"
                  style={{ fontSize: "clamp(1rem, 2.8vw, 1.15rem)", color: "var(--text-primary)", letterSpacing: 0, lineHeight: 1.5 }}>
                  {title}
                </h3>

                <div className="flex items-center justify-center gap-2 pt-4 w-full"
                  style={{ borderTop: "1px solid rgba(201,160,99,0.18)" }}>
                  <span className="font-bold tabular-nums"
                    style={{ fontSize: "clamp(2rem, 6vw, 2.8rem)", background: "linear-gradient(135deg, #C9A063 0%, #DFC08A 50%, #A8813E 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", letterSpacing: 0 }}>
                    {price}
                  </span>
                  <RiyalIcon size={22} />
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(201,160,99,0.35), transparent)" }} aria-hidden="true" />
    </section>
  );
}
