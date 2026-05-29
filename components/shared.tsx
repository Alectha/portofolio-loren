"use client";

import { motion, useInView } from "framer-motion";
import type { MouseEventHandler, ReactNode } from "react";
import { useRef } from "react";

export const getBgColorClass = (colorName?: string) => {
  switch (colorName) {
    case "teal":
      return "bg-[#0D9488]";
    case "purple":
      return "bg-[#7C3AED]";
    case "amber":
      return "bg-[#D97706]";
    default:
      return "bg-[#0D9488]";
  }
};

export const getTextColorClass = (colorName?: string) => {
  switch (colorName) {
    case "teal":
      return "text-[#0D9488]";
    case "purple":
      return "text-[#7C3AED]";
    case "amber":
      return "text-[#D97706]";
    default:
      return "text-[#0D9488]";
  }
};

export const AuroraBackground = () => (
  <>
    <div className="aurora-blob blob-1" />
    <div className="aurora-blob blob-2" />
    <div className="aurora-blob blob-3" />
  </>
);

export const GlassCard = ({
  children,
  className = "",
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <motion.div
      onClick={onClick}
      className={`glass-card text-left w-full ${className} ${onClick ? "cursor-pointer" : ""}`}
    >
      {children}
    </motion.div>
  );
};

export const FadeIn = ({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};