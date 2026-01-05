"use client";

import { useRef } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Cpu, Film, Building2, TrendingUp } from "lucide-react";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

const highlights = [
  {
    id: "wenco",
    icon: Cpu,
    techStack: ["React", "Azure IoT", "Kubernetes"],
  },
  {
    id: "disney",
    icon: Film,
    techStack: ["React", "Node.js", "Stripe"],
  },
  {
    id: "central1",
    icon: TrendingUp,
    techStack: ["Angular", "Java", "Oracle"],
  },
  {
    id: "myrichmond",
    icon: Building2,
    techStack: ["React", "Node.js", "AWS"],
  },
];

export default function PortfolioHighlights() {
  const t = useTranslations("portfolioHighlights");
  const locale = useLocale();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-20 px-4 section-alt relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--pinorth-gold)_/_0.03)_0%,transparent_50%)]" />

      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto relative"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section header */}
        <motion.div variants={titleVariants} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gold">
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Highlights grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                className="group card-corporate p-6 cursor-pointer"
              >
                {/* Top accent line */}
                <div className="h-0.5 bg-gradient-to-r from-gold to-gold/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left mb-4 -mt-6 -mx-6 rounded-t" />

                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded bg-gold/10 text-gold group-hover:bg-gold/20 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-gold transition-colors">
                  {t(`highlights.${item.id}.title`)}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {t(`highlights.${item.id}.summary`)}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5">
                  {item.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-xs bg-secondary/50 text-silver/80 rounded border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View all button */}
        <motion.div variants={titleVariants} className="text-center">
          <Link
            href={`/${locale}/portfolio`}
            className="link-gold inline-flex items-center gap-2 font-medium group"
          >
            {t("viewAll")}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
