"use client";
import { motion } from "framer-motion";
import { useApp } from "@/contexts/AppContext";
import PriceCard from "./PriceCard";
import SectionTitle from "./SectionTitle";
import RiyalIcon from "./RiyalIcon";
import { HairIcon, HairWashIcon, BlowdryIcon, HennaIcon, BraidIcon } from "./SpaIcons";

export default function HairServicesSection() {
  const { t } = useApp();

  const hairServices = [
    { id: "wash",             title: t.hair.wash,             price: "35",  icon: <HairWashIcon size={30} /> },
    { id: "blowdry",          title: t.hair.blowdry,          price: "120", icon: <BlowdryIcon size={30} /> },
    { id: "ceramicBlowdry",   title: t.hair.ceramicBlowdry,   price: "180", icon: <BlowdryIcon size={30} /> },
    { id: "henna",            title: t.hair.henna,            price: "180", icon: <HennaIcon size={30} /> },
    { id: "naturalDye",       title: t.hair.naturalDye,       price: "180", icon: <HairIcon size={30} /> },
    { id: "sidr",             title: t.hair.sidr,             price: "180", icon: <HairIcon size={30} /> },
  ];

  const braidingServices = [
    { id: "shortBraid",  title: t.hair.shortBraid,  price: "11" },
    { id: "mediumBraid", title: t.hair.mediumBraid, price: "18" },
    { id: "longBraid",   title: t.hair.longBraid,   price: "25" },
  ];

  return (
    <section
      id="hair"
      className="relative py-20 px-4 overflow-hidden"
      aria-labelledby="hair-title"
      style={{ background: `linear-gradient(180deg, var(--bg) 0%, var(--bg-alt) 100%)` }}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 inset-x-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(214,176,122,0.3), transparent)" }} />
      </div>

      <div className="max-w-6xl mx-auto">
        <SectionTitle title={t.hair.title} subtitle={t.hair.subtitle} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {hairServices.map((service, i) => (
            <PriceCard key={service.id} title={service.title} price={service.price} index={i} icon={service.icon} />
          ))}
        </div>

        {/* Gold infinity divider */}
        <div className="infinity-divider mb-16">
          <svg width="44" height="22" viewBox="0 0 64 32" fill="none" stroke="var(--gold)" strokeWidth="1.2" strokeLinecap="round" aria-hidden="true">
            <path d="M32 16C32 16 24 4 14 4C4 4 4 16 4 16C4 16 4 28 14 28C24 28 32 16 32 16Z" />
            <path d="M32 16C32 16 40 4 50 4C60 4 60 16 60 16C60 16 60 28 50 28C40 28 32 16 32 16Z" />
          </svg>
        </div>

        {/* Braiding sub-section */}
        <div id="braiding">
          <SectionTitle title={t.hair.braidingTitle} subtitle={t.hair.braidingSubtitle} />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-2xl mx-auto">
            {braidingServices.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                className="glass-card rounded-3xl p-6 text-center hover-lift reveal-animate"
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(214,176,122,0.08)", border: "1px solid rgba(214,176,122,0.25)" }}>
                    <BraidIcon size={26} />
                  </div>
                </div>
                <h3 className="ar-text font-semibold mb-4"
                  style={{ fontSize: "clamp(0.9rem, 2.5vw, 1rem)", color: "var(--text-primary)", letterSpacing: 0 }}>
                  {service.title}
                </h3>
                <div className="flex items-center justify-center gap-1.5">
                  <span className="text-3xl font-bold tabular-nums"
                    style={{ background: "linear-gradient(135deg, #D6B07A, #E5C99A, #B8924E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    {service.price}
                  </span>
                  <RiyalIcon size={18} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
