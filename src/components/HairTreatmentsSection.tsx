"use client";
import { motion } from "framer-motion";
import { useApp } from "@/contexts/AppContext";
import SectionTitle from "./SectionTitle";
import RiyalIcon from "./RiyalIcon";
import { HairTreatmentIcon, CollagenIcon, DetoxIcon } from "./SpaIcons";

function TreatmentCard({
  title, subtitle, price, Icon, index,
}: { title: string; subtitle?: string; price: string; Icon: React.ComponentType<{ size?: number }>; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className="relative rounded-3xl overflow-hidden p-6 md:p-8 flex flex-col gap-4 cursor-default hover-lift reveal-animate"
      style={{ background: "rgba(250,247,242,0.06)", border: "1px solid rgba(214,176,122,0.25)", boxShadow: "0 4px 24px rgba(0,0,0,0.2)" }}
    >
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(214,176,122,0.4), transparent)" }} />
      <div className="w-12 h-12 rounded-full flex items-center justify-center"
        style={{ background: "rgba(214,176,122,0.1)", border: "1px solid rgba(214,176,122,0.25)" }}>
        <Icon size={26} />
      </div>
      <div>
        <h3 className="ar-text font-bold" style={{ fontSize: "clamp(1rem, 3vw, 1.25rem)", color: "#FAF7F2", letterSpacing: 0 }}>
          {title}
        </h3>
        {subtitle && (
          <p className="ar-text mt-1" style={{ fontSize: "0.85rem", color: "rgba(250,247,242,0.5)", letterSpacing: 0 }}>
            {subtitle}
          </p>
        )}
      </div>
      <div className="flex items-center gap-1.5 mt-auto pt-4" style={{ borderTop: "1px solid rgba(214,176,122,0.15)" }}>
        <span className="text-4xl font-bold tabular-nums"
          style={{ background: "linear-gradient(135deg, #D6B07A, #E5C99A, #B8924E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
          {price}
        </span>
        <RiyalIcon size={24} />
      </div>
    </motion.div>
  );
}

export default function HairTreatmentsSection() {
  const { t } = useApp();

  const collagenTiers = [
    { id: "shortHair",  label: t.treatments.shortHair,  price: "575" },
    { id: "mediumHair", label: t.treatments.mediumHair, price: "690" },
    { id: "longHair",   label: t.treatments.longHair,   price: "1,150" },
  ];

  return (
    <section
      id="treatments"
      className="relative py-20 px-4 overflow-hidden"
      aria-labelledby="treatments-title"
      style={{ background: "linear-gradient(160deg, #1A2820 0%, #24342F 50%, #1A2820 100%)" }}
    >
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center" aria-hidden="true">
        <div className="w-[600px] h-[300px] rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(ellipse, #D6B07A 0%, transparent 70%)" }} />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <SectionTitle title={t.treatments.title} subtitle={t.treatments.subtitle} light />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TreatmentCard title={t.treatments.intensiveTitle} subtitle={t.treatments.intensiveSubtitle} price="460" Icon={HairTreatmentIcon} index={0} />
          <TreatmentCard title={t.treatments.detoxTitle} price="99" Icon={DetoxIcon} index={1} />

          {/* Collagen — full width tiered */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="md:col-span-2 relative rounded-3xl overflow-hidden hover-lift reveal-animate"
            style={{ background: "rgba(250,247,242,0.06)", border: "1px solid rgba(214,176,122,0.3)", boxShadow: "0 8px 40px rgba(0,0,0,0.2)" }}
          >
            <div className="absolute top-0 inset-x-0 h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(214,176,122,0.6), transparent)" }} />
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(214,176,122,0.1)", border: "1px solid rgba(214,176,122,0.25)" }}>
                  <CollagenIcon size={26} />
                </div>
                <div>
                  <p className="section-label mb-1 ar-text" style={{ color: "rgba(214,176,122,0.7)", letterSpacing: 0 }}>
                    {t.treatments.specializedTreatment}
                  </p>
                  <h3 className="ar-text font-bold"
                    style={{ fontSize: "clamp(1.1rem, 3vw, 1.4rem)", color: "#FAF7F2", letterSpacing: 0 }}>
                    {t.treatments.collagenTitle}
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {collagenTiers.map((tier, i) => (
                  <motion.div
                    key={tier.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.2 + i * 0.06, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                    className="rounded-2xl p-5 text-center hover-lift reveal-animate"
                    style={{ background: "rgba(214,176,122,0.08)", border: "1px solid rgba(214,176,122,0.2)" }}
                  >
                    <p className="ar-text font-medium mb-3" style={{ fontSize: "0.9rem", color: "rgba(250,247,242,0.7)", letterSpacing: 0 }}>
                      {tier.label}
                    </p>
                    <div className="flex items-center justify-center gap-1.5">
                      <span className="text-3xl font-bold tabular-nums"
                        style={{ background: "linear-gradient(135deg, #D6B07A, #E5C99A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                        {tier.price}
                      </span>
                      <RiyalIcon size={18} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
