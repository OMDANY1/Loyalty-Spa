"use client";
import Animate from "./Animate";
import { InfinityIcon } from "./SpaIcons";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionTitle({ title, subtitle, light = false }: SectionTitleProps) {
  return (
    <Animate
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className="text-center mb-14 reveal-animate"
    >
      {subtitle && (
        <p
          className="section-label mb-3 ar-text"
          style={{ color: light ? "rgba(214,176,122,0.75)" : "var(--gold)", letterSpacing: 0 }}
        >
          ◆ {subtitle} ◆
        </p>
      )}

      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ar-text"
        style={{
          color: light ? "#FAF7F2" : "var(--text-primary)",
          letterSpacing: 0,
        }}
      >
        {title}
      </h2>

      <div className="flex items-center justify-center gap-4 mt-5">
        <div
          className="h-px w-16"
          style={{ background: "linear-gradient(to left, rgba(214,176,122,0.5), transparent)" }}
        />
        <InfinityIcon size={44} color={light ? "#E5C99A" : "var(--gold)"} strokeWidth={1.2} />
        <div
          className="h-px w-16"
          style={{ background: "linear-gradient(to right, rgba(214,176,122,0.5), transparent)" }}
        />
      </div>
    </Animate>
  );
}
