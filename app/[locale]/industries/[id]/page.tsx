"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, HeartPulse, Radio, Building, Landmark } from "lucide-react";
import { use } from "react";

const industryConfig = {
  healthcare: { icon: HeartPulse },
  telecom: { icon: Radio },
  government: { icon: Building },
  bfsi: { icon: Landmark },
};

const validIndustries = ["healthcare", "telecom", "government", "bfsi"];

export default function IndustryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const t = useTranslations("industries");
  const locale = useLocale();

  if (!validIndustries.includes(id)) {
    notFound();
  }

  const config = industryConfig[id as keyof typeof industryConfig];
  const Icon = config.icon;
  const outcomes = t.raw(`${id}.outcomes`) as string[];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href={`/${locale}/industries`}
              className="link-gold inline-flex items-center gap-2 text-sm font-medium mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              {t("backToIndustries")}
            </Link>

            <div className="flex items-start gap-4 mb-6">
              <div className="p-4 rounded bg-gold/10 text-gold">
                <Icon className="w-10 h-10" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold heading-gold">
                {t(`${id}.title`)}
              </h1>
            </div>

            <p className="text-lg text-muted-foreground">
              {t(`${id}.shortDescription`)}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-16 px-4 section-alt">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-6">
              {t("problemsTitle")}
            </h2>
            <div className="p-6 card-corporate">
              <p className="text-muted-foreground leading-relaxed">
                {t(`${id}.problems`)}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-6">
              {t("outcomesTitle")}
            </h2>
            <div className="grid gap-4">
              {outcomes.map((outcome, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 card-corporate"
                >
                  <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-silver">{outcome}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-4 section-alt">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold heading-gold mb-6">
              {t("keyCapabilities")}
            </h2>
            <div className="p-6 card-corporate">
              <p className="text-silver leading-relaxed">
                {t(`${id}.solution`)}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {t("ctaTitle")}
            </h2>
            <p className="text-muted-foreground mb-8">
              {t("ctaDescription")}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="btn-primary inline-flex items-center gap-2"
            >
              {t("contactUs")}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
