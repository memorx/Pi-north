"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, Check, HeartPulse, Radio, Building, Landmark } from "lucide-react";
import Link from "next/link";

const industries = [
  { id: "healthcare", icon: HeartPulse },
  { id: "telecom", icon: Radio },
  { id: "government", icon: Building },
  { id: "bfsi", icon: Landmark },
];

// Simplified fade animation
const fadeIn = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 }
};

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();

  const capabilities = t.raw("whatWeDo.capabilities.items") as string[];
  const howWeDeliver = t.raw("howWeDeliver.items") as string[];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[85vh] flex items-center justify-center px-4 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            {...fadeIn}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 heading-gold"
          >
            {t("hero.title")}
          </motion.h1>

          <motion.p
            {...fadeIn}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-lg md:text-xl text-silver mb-4 max-w-3xl mx-auto"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.p
            {...fadeIn}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="text-base text-muted-foreground mb-10"
          >
            {t("hero.supporting")}
          </motion.p>

          <motion.div
            {...fadeIn}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Link href={`/${locale}/contact`} className="btn-primary inline-flex items-center gap-2">
              {t("hero.cta")}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 px-4 section-alt">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gold">
              {t("whatWeDo.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t("whatWeDo.description")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 card-corporate"
              >
                <Check className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-silver">{capability}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gold">
              {t("industries.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("industries.description")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    <div className="p-3 rounded bg-gold/10 text-gold w-fit mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-gold transition-colors">
                      {t(`industries.${industry.id}.title`)}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t(`industries.${industry.id}.shortDescription`)}
                    </p>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link href={`/${locale}/industries`} className="link-gold inline-flex items-center gap-2 font-medium">
              {t("industries.learnMore")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* How We Deliver Section */}
      <section className="py-20 px-4 section-alt">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gold">
              {t("howWeDeliver.title")}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {howWeDeliver.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="p-6 card-corporate"
              >
                <div className="w-8 h-8 rounded bg-gold/20 text-gold flex items-center justify-center font-bold text-sm mb-4">
                  {index + 1}
                </div>
                <p className="text-silver">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {t("contact.title")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t("contact.description")}
            </p>
            <Link href={`/${locale}/contact`} className="btn-primary inline-flex items-center gap-2">
              {t("hero.cta")}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
