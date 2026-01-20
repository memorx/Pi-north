"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Check, Users, Briefcase } from "lucide-react";
import Image from "next/image";

const fadeIn = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 }
};

export default function AboutContent() {
  const t = useTranslations("about");
  const values = t.raw("values.items") as string[];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Decorative North Star Image */}
        <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[300px] h-[300px] opacity-15 pointer-events-none hidden md:block">
          <Image
            src="/assets/north-star.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h1
            {...fadeIn}
            className="text-4xl md:text-5xl font-bold mb-6 heading-gold"
          >
            {t("title")}
          </motion.h1>

          <motion.div
            {...fadeIn}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {t("whoWeAre.title")}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t("whoWeAre.description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 section-alt">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="p-8 card-corporate"
            >
              <div className="p-3 rounded bg-gold/10 text-gold w-fit mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {t("mission.title")}
              </h3>
              <p className="text-muted-foreground mb-4">
                {t("mission.description")}
              </p>
              <p className="text-muted-foreground/70 text-sm">
                {t("mission.extended")}
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-8 card-corporate"
            >
              <div className="p-3 rounded bg-gold/10 text-gold w-fit mb-6">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {t("vision.title")}
              </h3>
              <p className="text-muted-foreground mb-4">
                {t("vision.description")}
              </p>
              <p className="text-muted-foreground/70 text-sm">
                {t("vision.extended")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="p-3 rounded bg-gold/10 text-gold w-fit mx-auto mb-6">
              <Heart className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold heading-gold">
              {t("values.title")}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-5 card-corporate"
              >
                <Check className="w-6 h-6 text-gold flex-shrink-0" />
                <span className="text-lg text-silver">{value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Experts Section */}
      <section className="py-20 px-4 section-alt">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="p-3 rounded bg-gold/10 text-gold w-fit mx-auto mb-6">
              <Users className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold heading-gold mb-6">
              {t("experts.title")}
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              {t("experts.description")}
            </p>
            <p className="text-muted-foreground/70">
              {t("experts.extended")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="p-3 rounded bg-gold/10 text-gold w-fit mx-auto mb-6">
              <Briefcase className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold heading-gold">
              {t("leadership.title")}
            </h2>
          </motion.div>

          <div className="space-y-12">
            {/* Executive Leadership */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-gold mb-6 text-center">
                {t("leadership.executive.title")}
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 card-corporate text-center">
                  <div className="w-20 h-20 rounded-full bg-gold/10 mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-gold/40" />
                  </div>
                  <p className="text-silver font-medium">COO</p>
                  <p className="text-sm text-muted-foreground">Coming Soon</p>
                </div>
                <div className="p-6 card-corporate text-center">
                  <div className="w-20 h-20 rounded-full bg-gold/10 mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-gold/40" />
                  </div>
                  <p className="text-silver font-medium">CGO</p>
                  <p className="text-sm text-muted-foreground">Coming Soon</p>
                </div>
                <div className="p-6 card-corporate text-center">
                  <div className="w-20 h-20 rounded-full bg-gold/10 mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-gold/40" />
                  </div>
                  <p className="text-silver font-medium">CHRO</p>
                  <p className="text-sm text-muted-foreground">Coming Soon</p>
                </div>
              </div>
            </motion.div>

            {/* Practice & Technology Leadership */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-gold mb-6 text-center">
                {t("leadership.practice.title")}
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {/* Arturo's Card */}
                <div className="p-6 card-corporate text-center">
                  <div className="w-20 h-20 rounded-full bg-gold/20 mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-gold/60" />
                  </div>
                  <p className="text-foreground font-semibold">{t("team.arturo.name")}</p>
                  <p className="text-gold text-sm mb-3">{t("team.arturo.role")}</p>
                  <p className="text-xs text-muted-foreground line-clamp-4">
                    {t("team.arturo.shortBio")}
                  </p>
                </div>
                <div className="p-6 card-corporate text-center">
                  <div className="w-20 h-20 rounded-full bg-gold/10 mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-gold/40" />
                  </div>
                  <p className="text-silver font-medium">Director, BI & Analytics</p>
                  <p className="text-sm text-muted-foreground">Coming Soon</p>
                </div>
                <div className="p-6 card-corporate text-center">
                  <div className="w-20 h-20 rounded-full bg-gold/10 mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-gold/40" />
                  </div>
                  <p className="text-silver font-medium">Director, Technology & AI</p>
                  <p className="text-sm text-muted-foreground">Coming Soon</p>
                </div>
              </div>
            </motion.div>

            {/* Client & Delivery Leadership */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-gold mb-6 text-center">
                {t("leadership.delivery.title")}
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 card-corporate text-center">
                  <div className="w-20 h-20 rounded-full bg-gold/10 mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-gold/40" />
                  </div>
                  <p className="text-silver font-medium text-sm">Client Partner – Canada East</p>
                  <p className="text-sm text-muted-foreground">Coming Soon</p>
                </div>
                <div className="p-6 card-corporate text-center">
                  <div className="w-20 h-20 rounded-full bg-gold/10 mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-gold/40" />
                  </div>
                  <p className="text-silver font-medium text-sm">Client Partner – Canada West</p>
                  <p className="text-sm text-muted-foreground">Coming Soon</p>
                </div>
                <div className="p-6 card-corporate text-center">
                  <div className="w-20 h-20 rounded-full bg-gold/10 mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-gold/40" />
                  </div>
                  <p className="text-silver font-medium text-sm">Head of Program Delivery</p>
                  <p className="text-sm text-muted-foreground">Coming Soon</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
