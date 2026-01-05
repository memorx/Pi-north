"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Filter, ArrowRight } from "lucide-react";
import Link from "next/link";
import CaseStudyCard from "@/components/portfolio/CaseStudyCard";

type ProjectCategory = "all" | "enterprise" | "government" | "bfsi";

interface Project {
  id: string;
  category: Exclude<ProjectCategory, "all">;
  client: string;
  techStack: string[];
}

const projects: Project[] = [
  {
    id: "wenco-hitachi",
    category: "enterprise",
    client: "Hitachi / Wenco Mining Systems",
    techStack: ["React", "Azure IoT", "C#", "Kubernetes", "Docker"],
  },
  {
    id: "disney-movie-insiders",
    category: "enterprise",
    client: "Disney / Radical I/O",
    techStack: ["React", "Node.js", "PostgreSQL", "Stripe"],
  },
  {
    id: "central1-payroll",
    category: "bfsi",
    client: "Central 1 Credit Union",
    techStack: ["Angular", "Java", "Oracle DB", "Jenkins"],
  },
  {
    id: "myrichmond-gov",
    category: "government",
    client: "City of Richmond, BC",
    techStack: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    id: "unity-robotics",
    category: "enterprise",
    client: "Unity Technologies / SoftBank",
    techStack: ["React", "TypeScript", "WebSockets", "Python"],
  },
  {
    id: "subastas-lasilla",
    category: "enterprise",
    client: "La Silla",
    techStack: ["Django", "Nuxt.js", "PostgreSQL", "Redis", "AWS"],
  },
];

export default function PortfolioPage() {
  const t = useTranslations("portfolio");
  const locale = useLocale();
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const filters: { id: ProjectCategory; labelKey: string }[] = [
    { id: "all", labelKey: "filters.all" },
    { id: "enterprise", labelKey: "filters.enterprise" },
    { id: "government", labelKey: "filters.government" },
    { id: "bfsi", labelKey: "filters.bfsi" },
  ];

  const categoryLabels: Record<string, string> = {
    enterprise: t("filters.enterprise"),
    government: t("filters.government"),
    bfsi: t("filters.bfsi"),
  };

  const getCategoryLabel = (category: string) => {
    return categoryLabels[category] || category;
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 heading-gold">
              {t("title")}
            </h1>

            <p className="text-lg md:text-xl text-silver mb-8 max-w-3xl mx-auto leading-relaxed">
              {t("subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 px-4 sticky top-16 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <Filter className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-2 rounded-full font-medium transition-all whitespace-nowrap text-sm ${
                  activeFilter === filter.id
                    ? "bg-gold text-background"
                    : "bg-secondary text-silver hover:bg-secondary/80 hover:text-foreground"
                }`}
              >
                {t(filter.labelKey)} (
                {filter.id === "all"
                  ? projects.length
                  : projects.filter((p) => p.category === filter.id).length}
                )
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => {
              const projectData = t.raw(`projects.${project.id}`) as {
                title: string;
                description: string;
                metrics: string[];
                solution: string;
              };

              return (
                <CaseStudyCard
                  key={project.id}
                  index={index}
                  project={{
                    id: project.id,
                    client: project.client,
                    title: projectData.title,
                    description: projectData.description,
                    category: project.category,
                    categoryLabel: getCategoryLabel(project.category),
                    techStack: project.techStack,
                    metrics: projectData.metrics,
                    solution: projectData.solution,
                  }}
                />
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-16 pt-12 border-t border-border"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {t("cta.title")}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t("cta.description")}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="btn-primary inline-flex items-center gap-2"
            >
              {t("cta.button")}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
