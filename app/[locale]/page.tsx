"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, Check, HeartPulse, Radio, Building, Landmark } from "lucide-react";
import Link from "next/link";
import HeroSection from "@/components/home/HeroSection";
import PortfolioHighlights from "@/components/home/PortfolioHighlights";

const industries = [
  { id: "healthcare", icon: HeartPulse },
  { id: "telecom", icon: Radio },
  { id: "government", icon: Building },
  { id: "bfsi", icon: Landmark },
];

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();

  const capabilities = t.raw("whatWeDo.capabilities.items") as string[];
  const howWeDeliver = t.raw("howWeDeliver.items") as string[];

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

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
              {t("howWeDeliver.title")}
            </h2>
          </motion.div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/20 to-transparent -translate-y-1/2" />

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {howWeDeliver.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative p-6 card-corporate text-center group hover:border-gold/40 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-gold/20 text-gold flex items-center justify-center font-bold text-lg mb-4 mx-auto group-hover:bg-gold group-hover:text-background transition-colors duration-300">
                    {index + 1}
                  </div>
                  <p className="text-silver text-sm">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Highlights Section */}
      <PortfolioHighlights />

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
