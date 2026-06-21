"use client";
import { motion } from "framer-motion";
import { useApp } from "@/contexts/AppContext";
import SectionTitle from "./SectionTitle";
import RiyalIcon from "./RiyalIcon";
import { NailPolishIcon, SpaHandIcon, SpaStoneIcon } from "./SpaIcons";

export default function SpaSection() {
  const { t } = useApp();

  const spaServices = [
    { id: "manicure",  title: t.spa.manicure,  price: "90",  Icon: NailPolishIcon },
    { id: "pedicure",  title: t.spa.pedicure,  price: "90",  Icon: SpaHandIcon },
    { id: "maniPedi",  title: t.spa.maniPedi,  price: "150", Icon: SpaHandIcon, badge: t.spa.bestValue },
    { id: "handColor", title: t.spa.handColor, price: "40",  Icon: NailPolishIcon },
    { id: "footColor", title: t.spa.footColor, price: "40",  Icon: NailPolishIcon },
  ];

  return (
    <section
      id="spa"
      className="relative py-20 px-4 overflow-hidden"
      aria-labelledby="spa-title"
      style={{ background: "linear-gradient(160deg, #24342F 0%, #1E3028 50%, #24342F 100%)" }}
    >
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #D6B07A 0%, transparent 70%)" }} aria-hidden="true" />
      <div className="absolute bottom-16 left-8 pointer-events-none opacity-[0.06]" aria-hidden="true">
        <SpaStoneIcon size={55} color="#D6B07A" strokeWidth={0.8} />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <SectionTitle title={t.spa.title} subtitle={t.spa.subtitle} light />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {spaServices.map(({ id, title, price, Icon, badge }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="relative glass-card-dark rounded-3xl p-6 md:p-7 flex flex-col gap-4 cursor-default overflow-hidden hover-lift reveal-animate"
            >
              <div className="absolute top-0 inset-x-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, rgba(214,176,122,0.4), transparent)" }} />

              {badge && (
                <div className="flex">
                  <span className="text-xs px-3 py-1 rounded-full font-medium ar-text"
                    style={{ background: "rgba(214,176,122,0.18)", color: "#D6B07A", border: "1px solid rgba(214,176,122,0.3)", letterSpacing: 0 }}>
                    {badge}
                  </span>
                </div>
              )}

              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(214,176,122,0.1)", border: "1px solid rgba(214,176,122,0.25)" }}>
                <Icon size={26} />
              </div>

              <h3 className="ar-text font-semibold"
                style={{ fontSize: "clamp(0.95rem, 2.5vw, 1.1rem)", color: "#FAF7F2", letterSpacing: 0 }}>
                {title}
              </h3>

              <div className="flex items-center gap-1.5 mt-auto pt-4"
                style={{ borderTop: "1px solid rgba(214,176,122,0.15)" }}>
                <span className="text-3xl font-bold tabular-nums"
                  style={{ background: "linear-gradient(135deg, #D6B07A, #E5C99A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  {price}
                </span>
                <RiyalIcon size={20} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
