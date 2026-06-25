"use client";
import { useState, useEffect, useRef } from "react";
import Animate from "./Animate";
import { useApp } from "@/contexts/AppContext";

export default function ServicesNav() {
  const { t } = useApp();
  const [active, setActive] = useState("massage");
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Build tabs from translations
  const TABS = [
    { id: "massage",          label: t.nav.massage },
    { id: "additions",        label: t.nav.additions },
    { id: "cavitation",       label: t.nav.cavitation },
    { id: "facial-cleansing", label: t.nav.facialCleansing },
    { id: "moroccan",         label: t.nav.moroccan },
    { id: "hair",             label: t.nav.hair },
    { id: "thread-braiding",  label: t.nav.threadBraiding },
    { id: "spa",              label: t.nav.spa },
    { id: "wax",              label: t.nav.wax },
    { id: "treatments",       label: t.nav.treatments },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return;
      setIsSticky(navRef.current.getBoundingClientRect().top <= 0);
      const sectionIds = TABS.map((t) => t.id);
      let currentActive = "massage";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) currentActive = id;
      }
      setActive(currentActive);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t]);

  const scrollTo = (id: string) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) {
      const offset = 100; // account for site header + nav height
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div
      ref={navRef}
      id="services-nav"
      className={`sticky z-50 transition-all duration-300 ${
        isSticky
          ? "shadow-md backdrop-blur-xl border-b"
          : "border-b border-transparent"
      }`}
      style={{
        top: "var(--header-h)",
        background: isSticky ? "var(--header-bg)" : "var(--header-bg)",
        borderColor: isSticky ? "var(--header-border)" : "transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div
          className="flex gap-2 py-3 overflow-x-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
          role="tablist"
          aria-label={t.lang === "ar" ? "أقسام الخدمات" : "Service sections"}
        >
          {TABS.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={active === tab.id}
              aria-controls={tab.id}
              onClick={() => scrollTo(tab.id)}
              id={`tab-${tab.id}`}
              className={`nav-pill flex-shrink-0${active === tab.id ? " active" : ""}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <Animate
        className="h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(214,176,122,0.3), transparent)" }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
    </div>
  );
}
