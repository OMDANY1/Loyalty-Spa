"use client";
import { motion } from "framer-motion";
import { useApp } from "@/contexts/AppContext";
import SectionTitle from "./SectionTitle";
import RiyalIcon from "./RiyalIcon";
import { WaxIcon, InfinityIcon } from "./SpaIcons";

export default function WaxSection() {
  const { t } = useApp();

  const waxServices = [
    { id: "upperLip",  title: t.wax.upperLip,  price: "20" },
    { id: "underarm",  title: t.wax.underarm,  price: "40" },
    { id: "chin",      title: t.wax.chin,      price: "30" },
    { id: "abdomen",   title: t.wax.abdomen,   price: "60" },
    { id: "legs",      title: t.wax.legs,      price: "80" },
    { id: "arms",      title: t.wax.arms,      price: "60" },
    { id: "back",      title: t.wax.back,      price: "100" },
    { id: "fullBody",  title: t.wax.fullBody,  price: "300", featured: true },
  ];

  return (
    <section
      id="wax"
      className="relative py-20 px-4 overflow-hidden"
      aria-labelledby="wax-title"
      style={{ background: `linear-gradient(180deg, var(--bg-alt) 0%, var(--bg) 100%)` }}
    >
      <div className="absolute top-0 inset-x-0 flex justify-center pt-0 pointer-events-none" aria-hidden="true" style={{ opacity: 0.12 }}>
        <InfinityIcon size={280} color="var(--gold)" strokeWidth={0.8} />
      </div>

      <div className="max-w-5xl mx-auto">
        <SectionTitle title={t.wax.title} subtitle={t.wax.subtitle} />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {waxServices.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className={`relative rounded-2xl p-5 flex flex-col items-center text-center gap-3 cursor-default overflow-hidden ${service.featured ? "col-span-2 sm:col-span-3 lg:col-span-4" : "glass-card"} hover-lift reveal-animate`}
              style={service.featured ? {
                background: "linear-gradient(135deg, #24342F 0%, #1A2820 100%)",
                border: "2px solid rgba(214,176,122,0.5)",
                boxShadow: "0 12px 48px rgba(214,176,122,0.25)",
              } : undefined}
            >
              {service.featured && (
                <>
                  <div className="absolute top-0 inset-x-0 h-px"
                    style={{ background: "linear-gradient(90deg, transparent, #D6B07A, transparent)" }} />
                  <p className="section-label ar-text" style={{ color: "rgba(214,176,122,0.65)", letterSpacing: 0 }}>
                    ◆ {t.wax.fullPackage} ◆
                  </p>
                </>
              )}

              <div className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: service.featured ? "rgba(214,176,122,0.12)" : "rgba(214,176,122,0.07)", border: "1px solid rgba(214,176,122,0.25)" }}>
                <WaxIcon size={22} />
              </div>

              <h3 className="ar-text font-semibold"
                style={{ fontSize: service.featured ? "clamp(1rem, 2.5vw, 1.15rem)" : "0.85rem", color: service.featured ? "#FAF7F2" : "var(--text-primary)", lineHeight: 1.5, letterSpacing: 0 }}>
                {service.title}
              </h3>

              <div className="flex items-center gap-1 mt-auto">
                <span className="font-bold tabular-nums"
                  style={{ fontSize: service.featured ? "2.5rem" : "1.5rem", background: "linear-gradient(135deg, #D6B07A, #E5C99A, #B8924E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  {service.price}
                </span>
                <RiyalIcon size={service.featured ? 24 : 16} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
