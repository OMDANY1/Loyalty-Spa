"use client";
import Image from "next/image";

interface RiyalIconProps {
  /** Height in pixels (width scales proportionally) */
  size?: number;
  /** Override CSS class on the wrapper */
  className?: string;
}

/**
 * Official Saudi Riyal symbol rendered from the uploaded PNG.
 * A CSS filter tints the black symbol to Champagne Gold (#D6B07A).
 * Always vertically centered and proportional.
 */
export default function RiyalIcon({ size = 20, className = "" }: RiyalIconProps) {
  return (
    <span
      className={`inline-flex items-center justify-center flex-shrink-0 ${className}`}
      style={{ width: size, height: size * 1.05 }}
      aria-label="ريال سعودي"
      role="img"
    >
      <Image
        src="/riyal-icon.png"
        alt="ريال سعودي"
        width={size}
        height={Math.round(size * 1.05)}
        className="riyal-icon object-contain"
        style={{
          // Tint the black PNG → Champagne Gold #D6B07A
          filter:
            "invert(75%) sepia(28%) saturate(700%) hue-rotate(2deg) brightness(98%) contrast(95%)",
          display: "block",
        }}
      />
    </span>
  );
}
