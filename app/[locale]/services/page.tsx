"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Code2,
  Layers,
  Cloud,
  LineChart,
  Cpu,
  Database,
  Brain,
  Check
} from "lucide-react";

const services = [
  { id: "engineering", icon: Code2 },
  { id: "integration", icon: Layers },
  { id: "cloud", icon: Cloud },
  { id: "consulting", icon: LineChart },
  { id: "automation", icon: Cpu },
  { id: "analytics", icon: Database },
  { id: "ai", icon: Brain },
];

export default function ServicesPage() {
  const t = useTranslations("services");

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
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
            className="text-xl text-muted-foreground"
          >
            {t("description")}
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 pb-20">
        <div className="max-w-6xl mx-auto space-y-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const capabilities = t.raw(`${service.id}.capabilities`) as string[];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="p-8 card-corporate"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="p-4 rounded bg-gold/10 text-gold w-fit">
                      <Icon className="w-8 h-8" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {t(`${service.id}.title`)}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {t(`${service.id}.description`)}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3">
                      {capabilities.map((capability, capIndex) => (
                        <div
                          key={capIndex}
                          className="flex items-start gap-2"
                        >
                          <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-silver">{capability}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
