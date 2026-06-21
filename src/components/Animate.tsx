"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useApp } from "@/contexts/AppContext";

type MotionTags = "div" | "section" | "h1" | "p" | "span" | "header" | "footer" | "nav";

interface AnimateProps {
  tag?: MotionTags;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  initial?: any;
  animate?: any;
  transition?: any;
  variants?: any;
  whileHover?: any;
  whileTap?: any;
  whileInView?: any;
  viewport?: any;
  exit?: any;
  layout?: any;
  id?: string;
  onClick?: (e: React.MouseEvent) => void;
  [key: string]: any;
}

export default function Animate({
  tag = "div",
  className = "",
  style = {},
  children,
  initial,
  animate,
  transition,
  variants,
  whileHover,
  whileTap,
  whileInView,
  viewport,
  exit,
  layout,
  ...rest
}: AnimateProps) {
  const { isSafari } = useApp();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Before mount or on Safari, render standard HTML tags to completely bypass Framer Motion
  if (isSafari || !mounted) {
    const Tag = tag;

    let delay = 0;
    let duration = 0.5;

    if (transition) {
      if (typeof transition.delay === "number") {
        delay = transition.delay;
      }
      if (typeof transition.duration === "number") {
        duration = transition.duration;
      }
    }

    const combinedStyle: React.CSSProperties = {
      ...style,
    };

    if (mounted) {
      combinedStyle.animationDelay = `${delay}s`;
      combinedStyle.animationDuration = `${duration}s`;
    }

    // Identify if this element is meant to animate on mount
    const isFadeUp = className.includes("reveal-animate") || initial?.opacity === 0 || initial === "hidden";
    const safariClassName = `${className} ${mounted && isFadeUp ? "fade-up" : ""}`.trim();

    return (
      <Tag className={safariClassName} style={combinedStyle} {...rest}>
        {children}
      </Tag>
    );
  }

  // Non-Safari browsers get full Framer Motion once mounted
  const MotionTag = motion[tag] as any;
  return (
    <MotionTag
      className={className}
      style={style}
      initial={initial}
      animate={animate}
      transition={transition}
      variants={variants}
      whileHover={whileHover}
      whileTap={whileTap}
      whileInView={whileInView}
      viewport={viewport}
      exit={exit}
      layout={layout}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
