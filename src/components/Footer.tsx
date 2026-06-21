"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useApp } from "@/contexts/AppContext";
import { InfinityIcon, SpaStoneIcon } from "./SpaIcons";

export default function Footer() {
  const { t } = useApp();

  return (
    <footer
      className="relative py-16 px-4 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #1A2820 0%, #131D19 100%)" }}
    >
      {/* Gold top border */}
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(214,176,122,0.4), transparent)" }} />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-48 rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(214,176,122,0.12) 0%, transparent 70%)" }}
        aria-hidden="true" />

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center gap-8">
        {/* Logo */}
        <div className="relative" style={{ width: 130, height: 130 }}>
          <Image src="/logo.png" alt="Loyalty Spa" fill className="object-contain" />
        </div>

        {/* Infinity divider */}
        <div className="flex items-center gap-4 w-full max-w-sm">
          <div className="h-px flex-1"
            style={{ background: "linear-gradient(to left, rgba(214,176,122,0.3), transparent)" }} />
          <InfinityIcon size={44} color="#D6B07A" strokeWidth={1.2} />
          <div className="h-px flex-1"
            style={{ background: "linear-gradient(to right, rgba(214,176,122,0.3), transparent)" }} />
        </div>

        <p className="ar-text max-w-md"
          style={{ fontSize: "clamp(0.85rem, 2vw, 0.95rem)", color: "rgba(250,247,242,0.5)", lineHeight: 1.9, letterSpacing: 0 }}>
          {t.footer.tagline1}
          <br />
          {t.footer.tagline2}
        </p>

        {/* Spa stones row */}
        <div className="flex items-end justify-center gap-6" style={{ opacity: 0.15 }} aria-hidden="true">
          <SpaStoneIcon size={28} color="#D6B07A" strokeWidth={0.9} />
          <SpaStoneIcon size={38} color="#D6B07A" strokeWidth={0.9} />
          <SpaStoneIcon size={24} color="#D6B07A" strokeWidth={0.9} />
        </div>

        <p className="ar-text" style={{ fontSize: "0.75rem", color: "rgba(250,247,242,0.28)", letterSpacing: 0 }}>
          {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
