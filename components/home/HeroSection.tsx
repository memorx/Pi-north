"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

// North Star decorative component
function NorthStar() {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      className="absolute w-32 h-32 md:w-48 md:h-48 text-gold/20"
      initial={{ opacity: 0, rotate: -45 }}
      animate={{ opacity: 1, rotate: 0 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    >
      {/* Main star points */}
      <motion.path
        d="M50 0 L52 45 L50 50 L48 45 Z"
        fill="currentColor"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      />
      <motion.path
        d="M50 100 L52 55 L50 50 L48 55 Z"
        fill="currentColor"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
      />
      <motion.path
        d="M0 50 L45 52 L50 50 L45 48 Z"
        fill="currentColor"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 1.0 }}
      />
      <motion.path
        d="M100 50 L55 52 L50 50 L55 48 Z"
        fill="currentColor"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
      />
      {/* Diagonal points */}
      <motion.path
        d="M14.6 14.6 L46 46 L50 50 L46 50 Z"
        fill="currentColor"
        opacity={0.5}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      />
      <motion.path
        d="M85.4 14.6 L54 46 L50 50 L54 50 Z"
        fill="currentColor"
        opacity={0.5}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 1.3 }}
      />
      <motion.path
        d="M14.6 85.4 L46 54 L50 50 L46 50 Z"
        fill="currentColor"
        opacity={0.5}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      />
      <motion.path
        d="M85.4 85.4 L54 54 L50 50 L54 50 Z"
        fill="currentColor"
        opacity={0.5}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      />
      {/* Center circle */}
      <motion.circle
        cx="50"
        cy="50"
        r="3"
        fill="currentColor"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1.6 }}
      />
    </motion.svg>
  );
}

// Floating geometric elements
function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Abstract geometric shapes */}
      <motion.div
        className="absolute top-20 right-[15%] w-64 h-64 border border-gold/10 rounded-full"
        animate={{
          rotate: 360,
          scale: [1, 1.05, 1],
        }}
        transition={{
          rotate: { duration: 50, repeat: Infinity, ease: "linear" },
          scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      <motion.div
        className="absolute top-40 right-[20%] w-48 h-48 border border-silver/10 rounded-full"
        animate={{
          rotate: -360,
          scale: [1, 1.08, 1],
        }}
        transition={{
          rotate: { duration: 40, repeat: Infinity, ease: "linear" },
          scale: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 },
        }}
      />
      <motion.div
        className="absolute bottom-32 left-[10%] w-32 h-32 border border-gold/10 rotate-45"
        animate={{
          rotate: [45, 405],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      {/* Glowing dots */}
      <motion.div
        className="absolute top-1/4 left-[5%] w-2 h-2 rounded-full bg-gold/40"
        animate={{
          opacity: [0.2, 0.6, 0.2],
          scale: [1, 1.5, 1],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-[8%] w-3 h-3 rounded-full bg-gold/30"
        animate={{
          opacity: [0.3, 0.7, 0.3],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute bottom-1/4 right-[15%] w-2 h-2 rounded-full bg-silver/40"
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.4, 1],
        }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-1/3 left-[12%] w-2 h-2 rounded-full bg-silver/30"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />
    </div>
  );
}

// Grid pattern background
function GridPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--pinorth-gold) / 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--pinorth-gold) / 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_70%)]" />
    </div>
  );
}

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

export default function HeroSection() {
  const t = useTranslations("hero");
  const locale = useLocale();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 pt-20 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
      <GridPattern />
      <FloatingElements />

      {/* North Star decoration - positioned to the right */}
      <div className="absolute top-1/2 right-[5%] md:right-[10%] -translate-y-1/2 opacity-50">
        <NorthStar />
      </div>

      {/* Gradient orbs */}
      <motion.div
        className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full blur-[120px]"
        style={{
          background: "radial-gradient(circle, hsl(var(--pinorth-gold) / 0.15), transparent)",
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full blur-[100px]"
        style={{
          background: "radial-gradient(circle, hsl(var(--pinorth-silver) / 0.1), transparent)",
        }}
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            {t("badge")}
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 heading-gold leading-tight"
        >
          {t("title")}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-silver mb-4 max-w-3xl mx-auto leading-relaxed"
        >
          {t("subtitle")}
        </motion.p>

        {/* Supporting text */}
        <motion.p
          variants={itemVariants}
          className="text-base text-muted-foreground mb-10 max-w-2xl mx-auto"
        >
          {t("supporting")}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href={`/${locale}/contact`}
            className="btn-primary inline-flex items-center gap-2 group"
          >
            {t("cta")}
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href={`/${locale}/services`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border text-silver hover:text-foreground hover:border-gold/50 transition-all duration-300"
          >
            {t("ctaSecondary")}
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-border/50"
        >
          <p className="text-sm text-muted-foreground mb-4">{t("trusted")}</p>
          <div className="flex flex-wrap justify-center gap-8 text-silver/60">
            <span className="text-sm font-medium">Healthcare</span>
            <span className="text-gold/30">|</span>
            <span className="text-sm font-medium">Telecommunications</span>
            <span className="text-gold/30">|</span>
            <span className="text-sm font-medium">Government</span>
            <span className="text-gold/30">|</span>
            <span className="text-sm font-medium">Financial Services</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
