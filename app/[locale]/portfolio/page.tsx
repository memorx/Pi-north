"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Filter, ArrowRight } from "lucide-react";
import Link from "next/link";
import CaseStudyCard from "@/components/portfolio/CaseStudyCard";

type ProjectCategory = "all" | "healthcare" | "telecom" | "government" | "bfsi";

interface Project {
  id: string;
  category: Exclude<ProjectCategory, "all">;
  client: string;
  techStack: string[];
}

const projects: Project[] = [
  {
    id: "healthcare-modernization",
    category: "healthcare",
    client: "Regional Health System",
    techStack: ["Azure", "HL7 FHIR", "React", "PostgreSQL"],
  },
  {
    id: "healthcare-interoperability",
    category: "healthcare",
    client: "Healthcare Network",
    techStack: ["AWS", "Node.js", "MongoDB", "Docker"],
  },
  {
    id: "telecom-integration",
    category: "telecom",
    client: "Major Telecom Provider",
    techStack: ["AWS", "Kubernetes", "Node.js", "Redis"],
  },
  {
    id: "telecom-bss",
    category: "telecom",
    client: "Telecommunications Company",
    techStack: ["Java", "Oracle", "Apache Kafka", "Microservices"],
  },
  {
    id: "gov-digital-transformation",
    category: "government",
    client: "Federal Agency",
    techStack: ["GCP", "Python", "Terraform", "Docker"],
  },
  {
    id: "gov-citizen-services",
    category: "government",
    client: "State Government",
    techStack: ["Azure", "React", ".NET", "SQL Server"],
  },
  {
    id: "bfsi-core-banking",
    category: "bfsi",
    client: "Regional Bank",
    techStack: ["Java", "Oracle", "Angular", "Kafka"],
  },
  {
    id: "bfsi-insurance-platform",
    category: "bfsi",
    client: "Insurance Company",
    techStack: ["Python", "PostgreSQL", "React", "AWS"],
  },
];

export default function PortfolioPage() {
  const t = useTranslations("portfolio");
  const tIndustries = useTranslations("industries");
  const locale = useLocale();
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const filters: { id: ProjectCategory; labelKey: string }[] = [
    { id: "all", labelKey: "filters.all" },
    { id: "healthcare", labelKey: "filters.healthcare" },
    { id: "telecom", labelKey: "filters.telecom" },
    { id: "government", labelKey: "filters.government" },
    { id: "bfsi", labelKey: "filters.bfsi" },
  ];

  const getCategoryLabel = (category: string) => {
    return tIndustries(`${category}.title`);
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
