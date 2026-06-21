"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
  type ReactNode,
} from "react";
import { translations, type Lang, type Translations } from "@/translations";

// ─── Types ────────────────────────────────────────────────────────────────────
interface AppContextType {
  lang: Lang;
  theme: "light" | "dark";
  t: Translations;
  setLang: (l: Lang) => void;
  toggleTheme: () => void;
  isMobile: boolean;
}

// ─── Context ──────────────────────────────────────────────────────────────────
const AppContext = createContext<AppContextType | null>(null);

// ─── DOM helper ───────────────────────────────────────────────────────────────
function applyToDOM(l: Lang, th: "light" | "dark", fade = false) {
  const html = document.documentElement;
  html.setAttribute("dir", translations[l].dir);
  html.setAttribute("lang", l);
  html.setAttribute("data-theme", th);
  
  if (fade) {
    // Brief fade on language switch for smooth visual transition
    document.body.style.opacity = "0.92";
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.body.style.opacity = "1";
      });
    });
  }
}

// ─── Provider ─────────────────────────────────────────────────────────────────
export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ar");
  const [theme, setThemeState] = useState<"light" | "dark">("light");
  const [isMobile, setIsMobile] = useState(false);
  // Track the current theme in a ref so callbacks always have fresh value
  const themeRef = useRef<"light" | "dark">("light");

  // Restore from localStorage on mount (client only)
  useEffect(() => {
    const storedLang = (localStorage.getItem("language") as Lang) || "ar";
    const storedTheme =
      (localStorage.getItem("theme") as "light" | "dark") || "light";
    setLangState(storedLang);
    setThemeState(storedTheme);
    themeRef.current = storedTheme;
    applyToDOM(storedLang, storedTheme, false);

    // Safari detection to add target rendering overrides
    const isSafariUA = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (isSafariUA) {
      document.documentElement.classList.add("is-safari");
    }

    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem("language", l);
    applyToDOM(l, themeRef.current, true);
  }, []);

  const toggleTheme = useCallback(() => {
    const next = themeRef.current === "light" ? "dark" : "light";
    themeRef.current = next;
    setThemeState(next);
    localStorage.setItem("theme", next);
    // Apply new theme, keep current lang
    document.documentElement.setAttribute("data-theme", next);
  }, []);

  return (
    <AppContext.Provider
      value={{
        lang,
        theme,
        t: translations[lang],
        setLang,
        toggleTheme,
        isMobile,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────────────────────
export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be inside <AppProvider>");
  return ctx;
}
