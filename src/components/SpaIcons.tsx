"use client";

/** All icons are pure line-art SVGs: thin strokes, rounded caps/joins, gold color #D6B07A */
const GOLD = "#D6B07A";
const STROKE = 1.4;
const CAPS = "round" as const;
const JOIN = "round" as const;

interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

type SvgProps = IconProps & { children: React.ReactNode };

function IconBase({ size = 28, color = GOLD, strokeWidth = STROKE, className = "", children }: SvgProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap={CAPS}
      strokeLinejoin={JOIN}
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );
}

/* ── Massage — two hands with flowing lines ── */
export function MassageIcon(p: IconProps) {
  return (
    <IconBase {...p}>
      {/* Hands cupping */}
      <path d="M8 20 C8 20 6 18 6 15 C6 12 8 10 10 10 L14 10" />
      <path d="M24 20 C24 20 26 18 26 15 C26 12 24 10 22 10 L18 10" />
      {/* Body resting */}
      <path d="M10 14 L22 14" />
      <path d="M9 17 L23 17" />
      <path d="M10 20 L22 20" />
      {/* Flow lines */}
      <path d="M13 8 C13 6 14 5 16 5 C18 5 19 6 19 8" />
    </IconBase>
  );
}

/* ── Spa stones — balanced stacked pebbles ── */
export function SpaStoneIcon(p: IconProps) {
  return (
    <IconBase {...p}>
      <ellipse cx="16" cy="27" rx="11" ry="3" />
      <ellipse cx="16" cy="21" rx="8.5" ry="3" />
      <ellipse cx="16" cy="15.5" rx="6" ry="2.8" />
      <ellipse cx="16" cy="11" rx="4" ry="2.3" />
      {/* Water ripple */}
      <path d="M5 29.5 C8 28.5 12 28.5 16 29.5 C20 30.5 24 30.5 27 29.5" opacity="0.5" />
    </IconBase>
  );
}

/* ── Moroccan Bath — steam from bowl ── */
export function MoroccanBathIcon(p: IconProps) {
  return (
    <IconBase {...p}>
      {/* Bowl */}
      <path d="M7 18 C7 22 10 24 16 24 C22 24 25 22 25 18 L7 18Z" />
      <path d="M5 18 L27 18" />
      {/* Handle */}
      <path d="M12 24 L12 27 L20 27 L20 24" />
      {/* Steam wisps */}
      <path d="M12 15 C12 13 13 12 12 10 C11 8 12 7 12 7" />
      <path d="M16 14 C16 12 17 11 16 9 C15 7 16 6 16 6" />
      <path d="M20 15 C20 13 21 12 20 10 C19 8 20 7 20 7" />
    </IconBase>
  );
}

/* ── Hair — flowing hair strands ── */
export function HairIcon(p: IconProps) {
  return (
    <IconBase {...p}>
      {/* Head silhouette */}
      <circle cx="16" cy="10" r="5.5" />
      {/* Flowing hair strands */}
      <path d="M10.5 13 C9 17 8 20 9 26" />
      <path d="M13 14.5 C12 18 11.5 22 13 27" />
      <path d="M16 15 C16 19 16 22 16 27" />
      <path d="M19 14.5 C20 18 20.5 22 19 27" />
      <path d="M21.5 13 C23 17 24 20 23 26" />
    </IconBase>
  );
}

/* ── Hair Braiding — woven braid pattern ── */
export function BraidIcon(p: IconProps) {
  return (
    <IconBase {...p}>
      {/* Left strand */}
      <path d="M11 5 C11 8 15 10 15 13 C15 16 11 18 11 21 C11 24 15 26 15 27" />
      {/* Right strand */}
      <path d="M21 5 C21 8 17 10 17 13 C17 16 21 18 21 21 C21 24 17 26 17 27" />
      {/* Cross-over lines */}
      <path d="M11 9 L21 9" opacity="0.5" />
      <path d="M11 17 L21 17" opacity="0.5" />
      {/* Band at bottom */}
      <path d="M13 27 C13 27 14 28.5 16 28.5 C18 28.5 19 27 19 27" />
    </IconBase>
  );
}

/* ── Wax — delicate leaf / wax drop ── */
export function WaxIcon(p: IconProps) {
  return (
    <IconBase {...p}>
      {/* Drop shape */}
      <path d="M16 6 C16 6 24 14 24 19 C24 23.4 20.4 27 16 27 C11.6 27 8 23.4 8 19 C8 14 16 6 16 6Z" />
      {/* Inner highlight */}
      <path d="M13 18 C13 16 14 14 16 13" opacity="0.6" />
    </IconBase>
  );
}

/* ── Mani/Pedi — hand with flower ── */
export function SpaHandIcon(p: IconProps) {
  return (
    <IconBase {...p}>
      {/* Palm */}
      <path d="M10 22 L10 14 C10 13 11 12 12 12 C13 12 14 13 14 14 L14 11 C14 10 15 9 16 9 C17 9 18 10 18 11 L18 12 C18 11 19 10.5 20 10.5 C21 10.5 22 11.5 22 12.5 L22 14 C22 13 23 12.5 24 12.5 C25 12.5 25 13.5 25 14 L25 20 C25 24 22 27 18 27 L14 27 C12 27 10 25 10 22Z" />
      {/* Flower petals above */}
      <circle cx="10" cy="6" r="2" />
      <path d="M8 8 L6 10" />
      <path d="M12 8 L14 10" />
      <path d="M10 4 L10 2" />
    </IconBase>
  );
}

/* ── Cupping / Air Cups ── */
export function CuppingIcon(p: IconProps) {
  return (
    <IconBase {...p}>
      {/* Cup 1 */}
      <path d="M8 12 C8 8 10 6 12 6 C14 6 16 8 16 12 L16 18 C16 20 14 21 12 21 C10 21 8 20 8 18Z" />
      {/* Cup 2 */}
      <path d="M17 14 C17 11 18.5 9.5 20 9.5 C21.5 9.5 23 11 23 14 L23 19 C23 20.5 21.5 21.5 20 21.5 C18.5 21.5 17 20.5 17 19Z" />
      {/* Suction lines */}
      <path d="M10 14 L14 14" opacity="0.6" />
      <path d="M18.5 16 L21.5 16" opacity="0.6" />
      {/* Skin surface */}
      <path d="M4 24 C8 22 24 22 28 24" />
    </IconBase>
  );
}

/* ── Hot Stone ── */
export function HotStoneIcon(p: IconProps) {
  return (
    <IconBase {...p}>
      <ellipse cx="16" cy="21" rx="10" ry="5" />
      <ellipse cx="16" cy="16.5" rx="7" ry="3.5" />
      <ellipse cx="16" cy="13" rx="4.5" ry="2.5" />
      {/* Heat waves */}
      <path d="M11 8 C11 6.5 12 5.5 11 4.5" opacity="0.7" />
      <path d="M16 7 C16 5.5 17 4.5 16 3.5" opacity="0.7" />
      <path d="M21 8 C21 6.5 22 5.5 21 4.5" opacity="0.7" />
    </IconBase>
  );
}

/* ── Organic Oil — leaf drop ── */
export function OilIcon(p: IconProps) {
  return (
    <IconBase {...p}>
      {/* Bottle */}
      <path d="M13 6 L13 4 L19 4 L19 6" />
      <path d="M13 6 C11 8 10 10 10 13 L10 24 C10 25.1 10.9 26 12 26 L20 26 C21.1 26 22 25.1 22 24 L22 13 C22 10 21 8 19 6Z" />
      {/* Leaf inside */}
      <path d="M16 12 C14 14 13 17 14 20" opacity="0.7" />
      <path d="M16 12 C18 15 18 18 17 20" opacity="0.7" />
    </IconBase>
  );
}

/* ── Ear Candle ── */
export function EarCandleIcon(p: IconProps) {
  return (
    <IconBase {...p}>
      {/* Candle */}
      <rect x="13.5" y="10" width="5" height="17" rx="2.5" />
      {/* Flame */}
      <path d="M16 10 C16 10 14 8 14 6.5 C14 5 15 4 16 4 C17 4 18 5 18 6.5 C18 8 16 10 16 10Z" />
      {/* Wax drip */}
      <path d="M18.5 16 C19.5 16.5 20.5 16.5 21 17" opacity="0.6" />
    </IconBase>
  );
}

/* ── Face Lift Massage ── */
export function FaceLiftIcon(p: IconProps) {
  return (
    <IconBase {...p}>
      {/* Face oval */}
      <ellipse cx="16" cy="15" rx="8" ry="10" />
      {/* Eyes */}
      <path d="M12 12 C12.5 11 13.5 11 14 12" />
      <path d="M18 12 C18.5 11 19.5 11 20 12" />
      {/* Gentle smile */}
      <path d="M13 18 C14 19.5 18 19.5 19 18" />
      {/* Lift arrows on sides */}
      <path d="M7 12 L5 10 M7 12 L7 10" opacity="0.7" />
      <path d="M25 12 L27 10 M25 12 L25 10" opacity="0.7" />
    </IconBase>
  );
}

/* ── Wood/Maderotherapy ── */
export function WoodIcon(p: IconProps) {
  return (
    <IconBase {...p}>
      {/* Rolling pin shape */}
      <rect x="6" y="13" width="20" height="6" rx="3" />
      {/* Handle left */}
      <rect x="3" y="14.5" width="4" height="3" rx="1.5" />
      {/* Handle right */}
      <rect x="25" y="14.5" width="4" height="3" rx="1.5" />
      {/* Wood grain lines */}
      <path d="M10 14 L10 18" opacity="0.5" />
      <path d="M14 14 L14 18" opacity="0.5" />
      <path d="M18 14 L18 18" opacity="0.5" />
      <path d="M22 14 L22 18" opacity="0.5" />
    </IconBase>
  );
}

/* ── Face Mask / Scrub ── */
export function FaceMaskIcon(p: IconProps) {
  return (
    <IconBase {...p}>
      {/* Face silhouette */}
      <path d="M8 10 C8 6 11 4 16 4 C21 4 24 6 24 10 L24 18 C24 22 21 26 16 26 C11 26 8 22 8 18Z" />
      {/* Mask coverage */}
      <path d="M8 14 L24 14" />
      <path d="M10 17 C10 17 12 19 16 19 C20 19 22 17 22 17" opacity="0.6" />
      {/* Sparkle dots */}
      <circle cx="16" cy="10" r="1" />
      <circle cx="12" cy="12" r="0.7" opacity="0.7" />
      <circle cx="20" cy="12" r="0.7" opacity="0.7" />
    </IconBase>
  );
}

/* ── Thai Herb Ball ── */
export function HerbBallIcon(p: IconProps) {
  return (
    <IconBase {...p}>
      {/* Ball */}
      <circle cx="16" cy="16" r="10" />
      {/* Wrap lines — cross-hatch */}
      <path d="M8 10 C10 14 10 18 8 22" />
      <path d="M24 10 C22 14 22 18 24 22" />
      <path d="M10 8 C14 10 18 10 22 8" />
      <path d="M10 24 C14 22 18 22 22 24" />
      {/* Center knot */}
      <circle cx="16" cy="16" r="2.5" />
      {/* Handle */}
      <path d="M16 6 L16 3 M14 3 L18 3" />
    </IconBase>
  );
}

/* ── Hair Treatment / Serum ── */
export function HairTreatmentIcon(p: IconProps) {
  return (
    <IconBase {...p}>
      {/* Dropper bottle */}
      <path d="M14 4 L18 4 L18 7 C20 8 22 10 22 14 L22 23 C22 24.7 20.7 26 19 26 L13 26 C11.3 26 10 24.7 10 23 L10 14 C10 10 12 8 14 7Z" />
      {/* Dropper tip */}
      <path d="M15 4 L15 2 L17 2 L17 4" />
      {/* Drop */}
      <path d="M16 27.5 C16 27.5 15 29 16 30 C17 31 18 30 18 29 C18 28 16 27.5 16 27.5Z" />
      {/* Serum bubbles */}
      <circle cx="14" cy="16" r="1" opacity="0.6" />
      <circle cx="18" cy="14" r="1.2" opacity="0.6" />
      <circle cx="16" cy="20" r="0.8" opacity="0.6" />
    </IconBase>
  );
}

/* ── Collagen / Glow ── */
export function CollagenIcon(p: IconProps) {
  return (
    <IconBase {...p}>
      {/* Diamond shape */}
      <path d="M16 4 L26 13 L16 28 L6 13Z" />
      {/* Inner lines */}
      <path d="M6 13 L26 13" />
      <path d="M16 4 L10 13 L16 28" opacity="0.5" />
      <path d="M16 4 L22 13 L16 28" opacity="0.5" />
      {/* Top sparkle */}
      <path d="M16 1 L16 3 M13 2 L17 2" opacity="0.7" />
    </IconBase>
  );
}

/* ── Detox / Scalp ── */
export function DetoxIcon(p: IconProps) {
  return (
    <IconBase {...p}>
      {/* Leaf */}
      <path d="M16 26 C16 26 6 18 6 11 C6 7 10 4 16 4 C22 4 26 7 26 11 C26 18 16 26 16 26Z" />
      {/* Vein */}
      <path d="M16 26 L16 10" />
      <path d="M16 14 L12 10" opacity="0.6" />
      <path d="M16 14 L20 10" opacity="0.6" />
      <path d="M16 18 L13 15" opacity="0.5" />
      <path d="M16 18 L19 15" opacity="0.5" />
      {/* Droplet at bottom */}
      <path d="M14 27 C14 27 16 29 18 27" opacity="0.7" />
    </IconBase>
  );
}

/* ── Wash (Hair Wash) ── */
export function HairWashIcon(p: IconProps) {
  return (
    <IconBase {...p}>
      {/* Water drops */}
      <path d="M10 6 C10 6 8 9 8 11 C8 12.6 9 14 10 14 C11 14 12 12.6 12 11 C12 9 10 6 10 6Z" />
      <path d="M16 4 C16 4 14 8 14 10 C14 12.2 15 14 16 14 C17 14 18 12.2 18 10 C18 8 16 4 16 4Z" />
      <path d="M22 6 C22 6 20 9 20 11 C20 12.6 21 14 22 14 C23 14 24 12.6 24 11 C24 9 22 6 22 6Z" />
      {/* Basin */}
      <path d="M5 18 C5 24 9 27 16 27 C23 27 27 24 27 18 L5 18Z" />
      <path d="M3 18 L29 18" />
      {/* Drain */}
      <path d="M13 27 L13 30 L19 30 L19 27" />
    </IconBase>
  );
}

/* ── Blowdry ── */
export function BlowdryIcon(p: IconProps) {
  return (
    <IconBase {...p}>
      {/* Hair dryer body */}
      <path d="M6 10 C6 8 8 7 12 7 L20 7 C22 7 24 9 24 12 C24 15 22 17 20 17 L12 17 C8 17 6 16 6 14Z" />
      {/* Handle */}
      <path d="M12 17 L10 25" />
      {/* Air flow lines */}
      <path d="M25 9 C27 9 28 10 28 12 C28 14 27 15 25 15" />
      <path d="M25 9 L25 15" />
      {/* Circular fan */}
      <circle cx="15" cy="12" r="3" />
    </IconBase>
  );
}

/* ── Henna / Natural ── */
export function HennaIcon(p: IconProps) {
  return (
    <IconBase {...p}>
      {/* Hand outline */}
      <path d="M10 28 L10 16 C10 15 11 14 12 14 C13 14 14 15 14 16 L14 13 C14 12 15 11 16 11 C17 11 18 12 18 13 L18 14 C18 13 19 12 20 12 C21 12 22 13 22 14 L22 28" />
      {/* Henna pattern */}
      <path d="M12 20 C13 19 15 20 16 19 C17 18 17 20 18 20" opacity="0.8" />
      <circle cx="16" cy="23" r="1.5" opacity="0.7" />
      <path d="M13 25 C14 24.5 18 24.5 19 25" opacity="0.6" />
    </IconBase>
  );
}

/* ── Manicure / Nail Polish ── */
export function NailPolishIcon(p: IconProps) {
  return (
    <IconBase {...p}>
      {/* Bottle */}
      <path d="M13 8 L13 6 L19 6 L19 8 C21 9 22 11 22 13 L22 24 C22 25.1 21.1 26 20 26 L12 26 C10.9 26 10 25.1 10 24 L10 13 C10 11 11 9 13 8Z" />
      {/* Brush handle */}
      <path d="M15 6 L15 3 M17 6 L17 3" />
      {/* Shine */}
      <path d="M13 14 C13 12 14 11 15 11" opacity="0.6" />
      {/* Color fill suggestion */}
      <path d="M10 18 L22 18" opacity="0.4" />
    </IconBase>
  );
}

/* ── Lotus / Wellness ── */
export function LotusIcon(p: IconProps) {
  return (
    <IconBase {...p}>
      {/* Center petal */}
      <path d="M16 22 C16 22 13 16 13 12 C13 9 14.5 7 16 7 C17.5 7 19 9 19 12 C19 16 16 22 16 22Z" />
      {/* Left petal */}
      <path d="M16 22 C16 22 10 18 9 14 C8 11 9 8.5 11 8 C13 7.5 14 10 14 12" />
      {/* Right petal */}
      <path d="M16 22 C16 22 22 18 23 14 C24 11 23 8.5 21 8 C19 7.5 18 10 18 12" />
      {/* Outer left */}
      <path d="M10 19 C10 19 5 17 4 14 C3.5 12 5 10.5 6.5 11" opacity="0.6" />
      {/* Outer right */}
      <path d="M22 19 C22 19 27 17 28 14 C28.5 12 27 10.5 25.5 11" opacity="0.6" />
      {/* Water */}
      <path d="M8 25 C10 23.5 22 23.5 24 25" />
      <path d="M5 27 C9 25.5 23 25.5 27 27" opacity="0.5" />
    </IconBase>
  );
}

/* ── Infinity — brand motif ── */
export function InfinityIcon({ size = 32, color = GOLD, strokeWidth = 1.2, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size / 2}
      viewBox="0 0 64 32"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap={CAPS}
      strokeLinejoin={JOIN}
      aria-hidden="true"
      className={className}
    >
      <path d="M32 16C32 16 24 4 14 4C4 4 4 16 4 16C4 16 4 28 14 28C24 28 32 16 32 16Z" />
      <path d="M32 16C32 16 40 4 50 4C60 4 60 16 60 16C60 16 60 28 50 28C40 28 32 16 32 16Z" />
      {/* Spa stone at center */}
      <ellipse cx="32" cy="20" rx="4.5" ry="1.8" />
      <ellipse cx="32" cy="17" rx="3.2" ry="1.4" />
      <ellipse cx="32" cy="14.5" rx="2" ry="1.1" />
    </svg>
  );
}

/* ── Lymphatic Facial Massage — face oval with flowing lymph-drainage curves ── */
export function LymphaticFacialIcon(p: IconProps) {
  return (
    <IconBase {...p}>
      {/* Face oval */}
      <ellipse cx="16" cy="14" rx="7.5" ry="9.5" />
      {/* Lymph flow lines — sweeping outward from face */}
      <path d="M8.5 10 C6 9 4 10 3 12" />
      <path d="M8.5 14 C6 13.5 4 14 3 16" />
      <path d="M8.5 18 C6 18 4 19 3 21" />
      <path d="M23.5 10 C26 9 28 10 29 12" />
      <path d="M23.5 14 C26 13.5 28 14 29 16" />
      <path d="M23.5 18 C26 18 28 19 29 21" />
      {/* Gentle smile */}
      <path d="M13 18 C14 19.5 18 19.5 19 18" />
      {/* Eyes — soft closed lashes */}
      <path d="M12.5 11.5 C13.5 10.5 14.5 10.5 15.5 11.5" />
      <path d="M16.5 11.5 C17.5 10.5 18.5 10.5 19.5 11.5" />
      {/* Neck / décolletage continuation */}
      <path d="M13 23.5 L13 27 M19 23.5 L19 27" opacity="0.5" />
      <path d="M11 27 C12.5 26 19.5 26 21 27" opacity="0.5" />
    </IconBase>
  );
}

/* ── Thread Braid (خيوط) — fine diagonal woven threads ── */
export function ThreadBraidIcon(p: IconProps) {
  return (
    <IconBase {...p}>
      {/* Three thread strands top */}
      <path d="M10 4 L10 5" />
      <path d="M16 4 L16 5" />
      <path d="M22 4 L22 5" />
      {/* Weave pattern — diamonds */}
      <path d="M10 5 C10 8 16 9 16 12 C16 15 10 16 10 19 C10 22 16 23 16 26 C16 28 14 29 13 29" />
      <path d="M22 5 C22 8 16 9 16 12 C16 15 22 16 22 19 C22 22 16 23 16 26 C16 28 18 29 19 29" />
      {/* Central strand */}
      <path d="M16 4 L16 5 M16 12 L16 12 M16 19 L16 19" opacity="0.5" />
      {/* Cross tie lines */}
      <path d="M10 8 L22 8" opacity="0.3" />
      <path d="M10 15.5 L22 15.5" opacity="0.3" />
      <path d="M10 23 L22 23" opacity="0.3" />
      {/* Bottom knot */}
      <path d="M13 29 C13 30 14.5 30.5 16 30.5 C17.5 30.5 19 30 19 29" />
    </IconBase>
  );
}

/* ── Foot Reflexology — elegant foot outline with reflex points ── */
export function FootReflexologyIcon(p: IconProps) {
  return (
    <IconBase {...p}>
      {/* Foot outline */}
      <path d="M16 27 C13 27 11 25 11 21 C11 18 12.5 16 13 14 C13.5 12 13 10 14 7 C14.5 5.5 16 5 17 5 C18.5 5 19 7.5 19.5 9.5 C20 11.5 21 13 21 16 C21 21 19 27 16 27Z" />
      {/* Toes */}
      <circle cx="14.5" cy="2" r="1.2" />
      <circle cx="17.5" cy="2.3" r="1" />
      <circle cx="20" cy="3.2" r="0.8" />
      <circle cx="22" cy="4.5" r="0.7" />
      <circle cx="23.5" cy="6.2" r="0.6" />
      {/* Reflex points inside foot */}
      <circle cx="16" cy="11" r="0.8" opacity="0.8" />
      <circle cx="15.5" cy="15" r="0.8" opacity="0.8" />
      <circle cx="16.5" cy="19" r="0.8" opacity="0.8" />
      <path d="M13.5 13 C15 14 17 13.5 18.5 12.5" opacity="0.5" />
    </IconBase>
  );
}

/* ── Khalaa Massage — core/abdomen soothing spiral of release ── */
export function KhalaaIcon(p: IconProps) {
  return (
    <IconBase {...p}>
      {/* Torso/Abdomen silhouette outline */}
      <path d="M8 6 C10 8 10 12 9 17 C8 21.5 9 26 10 28" opacity="0.5" />
      <path d="M24 6 C22 8 22 12 23 17 C24 21.5 23 26 22 28" opacity="0.5" />
      {/* Calming center spiral/ripples representing core release */}
      <circle cx="16" cy="17" r="8" opacity="0.3" strokeDasharray="3 3" />
      <circle cx="16" cy="17" r="5" opacity="0.6" />
      <circle cx="16" cy="17" r="2" />
      {/* Two gentle massage stroke waves above and below */}
      <path d="M12 10 C14 11 18 11 20 10" />
      <path d="M12 24 C14 23 18 23 20 24" />
    </IconBase>
  );
}
