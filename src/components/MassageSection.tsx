"use client";
import { useReducedMotion } from "framer-motion";
import Animate from "./Animate";
import { useApp } from "@/contexts/AppContext";
import PriceCard from "./PriceCard";
import SectionTitle from "./SectionTitle";
import RiyalIcon from "./RiyalIcon";
import { MassageIcon, SpaStoneIcon, LotusIcon, DeepFacialIcon, AmpouleStemCellIcon } from "./SpaIcons";

export default function MassageSection() {
  const { t } = useApp();
  const reduced = useReducedMotion();

  const massageServices = [
    { id: "oneHour",     title: t.massage.oneHour,     price: "270", description: t.massage.oneHourDesc,     icon: <MassageIcon size={32} /> },
    { id: "oneHalfHour", title: t.massage.oneHalfHour, price: "350", description: t.massage.oneHalfHourDesc, badge: t.massage.mostPopular, featured: true, icon: <MassageIcon size={32} /> },
    { id: "twoHours",    title: t.massage.twoHours,    price: "430", description: t.massage.twoHoursDesc,    icon: <MassageIcon size={32} /> },
    { id: "scalpNatural", title: t.massage.scalpTitle,   price: "80",  description: t.massage.scalpDesc,        icon: <LotusIcon size={32} /> },
    { id: "scalpAmpoule", title: t.massage.scalpAmpouleTitle, icon: <AmpouleStemCellIcon size={32} /> },
  ];

  return (
    <section
      id="massage"
      className="relative py-20 px-4 overflow-hidden"
      aria-labelledby="massage-title"
      style={{ background: `linear-gradient(180deg, var(--bg) 0%, var(--bg-alt) 100%)` }}
    >
      <div className="absolute top-20 left-6 md:left-16 pointer-events-none opacity-[0.06]" aria-hidden="true">
        <SpaStoneIcon size={50} color="var(--gold)" strokeWidth={0.8} />
      </div>
      <div className="absolute bottom-12 right-8 pointer-events-none opacity-[0.05]" aria-hidden="true">
        <SpaStoneIcon size={36} color="var(--gold)" strokeWidth={0.8} />
      </div>

      <div className="max-w-6xl mx-auto">
        <SectionTitle title={t.massage.title} subtitle={t.massage.subtitle} />

        {/* 3-col pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {massageServices.map((service, i) => (
            <PriceCard key={service.id} {...service} index={i} />
          ))}
        </div>

      <div className="rounded-3xl overflow-hidden max-w-4xl mx-auto mt-4" style={{ boxShadow: "0 8px 40px rgba(214,176,122,0.18), 0 2px 12px rgba(0,0,0,0.3)" }}>
        <Animate
          initial={reduced ? false : { opacity: 0, y: 10 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="relative cursor-default hover-lift-gold reveal-animate"
          style={{
            background: "linear-gradient(135deg, #24342F 0%, #1E3028 60%, #24342F 100%)",
            border: "1.5px solid rgba(214,176,122,0.45)",
          }}
        >
          <div className="absolute top-0 right-0 w-48 h-48 -translate-y-1/3 translate-x-1/3 rounded-full blur-3xl pointer-events-none"
            style={{ background: "rgba(214,176,122,0.12)" }} aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-40 h-40 translate-y-1/3 -translate-x-1/3 rounded-full blur-3xl pointer-events-none"
            style={{ background: "rgba(214,176,122,0.08)" }} aria-hidden="true" />
          <div className="absolute top-0 inset-x-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, #D6B07A, transparent)" }} aria-hidden="true" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 p-7 md:p-9">
            <div className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(214,176,122,0.12)", border: "1.5px solid rgba(214,176,122,0.4)" }}>
              <DeepFacialIcon size={40} />
            </div>
            <div className="flex-1 text-center md:text-right">
              <span className="inline-block text-xs font-medium px-3 py-1 rounded-full mb-3 ar-text"
                style={{ background: "rgba(214,176,122,0.18)", color: "#D6B07A", border: "1px solid rgba(214,176,122,0.35)", letterSpacing: 0 }}>
                ✦ {t.massage.signatureBadge}
              </span>
              <h3 className="ar-text font-bold"
                style={{ fontSize: "clamp(1.05rem, 3vw, 1.3rem)", color: "#FAF7F2", letterSpacing: 0, lineHeight: 1.5 }}>
                {t.massage.facialTitle}
              </h3>
              <p className="ar-text mt-1.5"
                style={{ fontSize: "0.85rem", color: "rgba(214,176,122,0.65)", lineHeight: 1.7, letterSpacing: 0 }}>
                {t.massage.facialDesc}
              </p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0 pt-4 md:pt-0"
              style={{ borderColor: "rgba(214,176,122,0.15)" }}>
              <span className="font-bold tabular-nums"
                style={{ fontSize: "clamp(2.2rem, 6vw, 3rem)", background: "linear-gradient(135deg, #D6B07A 0%, #E5C99A 50%, #B8924E 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", letterSpacing: 0 }}>
                200
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
