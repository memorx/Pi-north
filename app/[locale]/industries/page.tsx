"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLocale } from "next-intl";
import { ArrowRight, HeartPulse, Radio, Building, Landmark } from "lucide-react";

const industries = [
  { id: "healthcare", icon: HeartPulse },
  { id: "telecom", icon: Radio },
  { id: "government", icon: Building },
  { id: "bfsi", icon: Landmark },
];

export default function IndustriesPage() {
  const t = useTranslations("industries");
  const locale = useLocale();

  return (
    <div className="pt-16">
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-4xl md:text-5xl font-bold mb-6 heading-gold"
          >
            {t("title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-lg text-muted-foreground mb-12 max-w-2xl"
          >
            {t("description")}
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={`/${locale}/industries/${industry.id}`}
                    className="block p-6 card-corporate h-full group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded bg-gold/10 text-gold">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-gold transition-colors">
                          {t(`${industry.id}.title`)}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">
                          {t(`${industry.id}.shortDescription`)}
                        </p>
                        <span className="link-gold inline-flex items-center gap-1 text-sm font-medium">
                          {t("learnMore")}
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
