"use client";
import Image from "next/image";
import { useApp } from "@/contexts/AppContext";
import type { Lang } from "@/translations";

/* ─── Sun icon (light mode) ─────────────────────────────────────── */
function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2"  x2="12" y2="5" />
      <line x1="12" y1="19" x2="12" y2="22" />
      <line x1="2"  y1="12" x2="5"  y2="12" />
      <line x1="19" y1="12" x2="22" y2="12" />
      <line x1="4.22"  y1="4.22"  x2="6.34"  y2="6.34" />
      <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
      <line x1="4.22"  y1="19.78" x2="6.34"  y2="17.66" />
      <line x1="17.66" y1="6.34"  x2="19.78" y2="4.22" />
    </svg>
  );
}

/* ─── Moon icon (dark mode) ──────────────────────────────────────── */
function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

/* ─── SiteHeader ─────────────────────────────────────────────────── */
export default function SiteHeader() {
  const { lang, theme, setLang, toggleTheme } = useApp();

  const langs: { id: Lang; label: string }[] = [
    { id: "ar", label: "العربية" },
    { id: "en", label: "English" },
  ];

  return (
    <header
      className="site-header"
      role="banner"
      aria-label={lang === "ar" ? "شريط التنقل الرئيسي" : "Main navigation bar"}
    >
      <div className="max-w-6xl mx-auto px-4 h-full flex items-center justify-between gap-4">

        {/* ── Logo (compact) ──────────────────────────────── */}
        <div className="relative flex-shrink-0" style={{ width: 36, height: 36 }}>
          <Image
            src="/logo.png"
            alt="Loyalty Spa"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* ── Brand name text ─────────────────────────────── */}
        <span
          className="hidden sm:block font-semibold ar-text flex-1"
          style={{
            fontSize: "0.85rem",
            color: "var(--text-primary)",
            letterSpacing: 0,
          }}
        >
          Loyalty Spa
        </span>

        {/* ── Controls row ────────────────────────────────── */}
        <div className="flex items-center gap-3 flex-shrink-0">

          {/* Language segmented toggle */}
          <div
            className="lang-toggle"
            role="group"
            aria-label={lang === "ar" ? "اختيار اللغة" : "Language selection"}
          >
            {langs.map(({ id, label }) => (
              <button
                key={id}
                className={`lang-btn${lang === id ? " active" : ""}`}
                onClick={() => setLang(id)}
                aria-pressed={lang === id}
                aria-label={id === "ar" ? "العربية" : "English"}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Dark / Light mode toggle */}
          <button
            className="theme-btn"
            onClick={toggleTheme}
            aria-label={
              theme === "light"
                ? lang === "ar" ? "تفعيل الوضع الداكن" : "Enable dark mode"
                : lang === "ar" ? "تفعيل الوضع الفاتح" : "Enable light mode"
            }
            title={theme === "light" ? "Dark mode" : "Light mode"}
          >
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}
