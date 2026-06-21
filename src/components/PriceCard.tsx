"use client";
import Animate from "./Animate";
import RiyalIcon from "./RiyalIcon";

interface PriceCardProps {
  title: string;
  price: string | number;
  description?: string;
  badge?: string;
  featured?: boolean;
  index?: number;
  icon?: React.ReactNode;
}

export default function PriceCard({
  title, price, description, badge, featured = false, index = 0, icon,
}: PriceCardProps) {
  return (
    <div
      className="rounded-3xl overflow-hidden"
      style={
        featured
          ? {
              boxShadow: "0 20px 60px rgba(214,176,122,0.2), 0 4px 24px rgba(0,0,0,0.3)",
            }
          : {
              boxShadow: "var(--card-glass-shadow)",
            }
      }
    >
      <Animate
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: index * 0.06,
          ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        }}
        className="relative p-6 md:p-8 flex flex-col gap-4 cursor-default hover-lift reveal-animate h-full"
        style={
          featured
            ? {
                background: "linear-gradient(145deg, #24342F, #1A2820)",
                border: "2px solid rgba(214,176,122,0.45)",
              }
            : {
                background: "var(--card-glass-bg)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid var(--card-glass-border)",
              }
        }
      >
        {featured && (
          <div
            className="absolute top-0 left-0 w-32 h-32 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl pointer-events-none"
            style={{ background: "rgba(214,176,122,0.12)" }}
          />
        )}

        {/* Spacing sequence: badge -> icon -> title -> description */}
        <div className="flex flex-col items-start gap-3">
          {badge && (
            <div className="flex">
              <span
                className="text-xs px-3 py-1 rounded-full font-medium ar-text"
                style={{
                  background: "rgba(214,176,122,0.18)",
                  color: "var(--gold)",
                  border: "1px solid rgba(214,176,122,0.35)",
                  letterSpacing: 0,
                }}
              >
                {badge}
              </span>
            </div>
          )}

          {icon && <div className="flex-shrink-0">{icon}</div>}

          <div className="w-full">
            <h3
              className="ar-text text-lg md:text-xl font-semibold leading-snug"
              style={{
                color: featured ? "#FAF7F2" : "var(--text-primary)",
                letterSpacing: 0,
              }}
            >
              {title}
            </h3>
            {description && (
              <p
                className="ar-text text-sm mt-1.5"
                style={{ color: featured ? "rgba(214,176,122,0.65)" : "var(--text-muted)" }}
              >
                {description}
              </p>
            )}
          </div>
        </div>

        <div
          className="flex items-center gap-2 mt-auto pt-4"
          style={{ borderTop: "1px solid rgba(214,176,122,0.2)" }}
        >
          <span
            className="text-3xl md:text-4xl font-bold tabular-nums"
            style={{
              background: "linear-gradient(135deg, #D6B07A 0%, #E5C99A 50%, #B8924E 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: 0,
            }}
          >
            {price}
          </span>
          <RiyalIcon size={22} />
        </div>
      </Animate>
    </div>
  );
}
