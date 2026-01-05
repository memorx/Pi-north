"use client";

import { motion } from "framer-motion";
import { ExternalLink, Building2, TrendingUp, Shield, Zap } from "lucide-react";

interface CaseStudyCardProps {
  project: {
    id: string;
    client: string;
    title: string;
    description: string;
    category: string;
    categoryLabel: string;
    techStack: string[];
    metrics: string[];
    solution: string;
  };
  index: number;
}

const categoryIcons: Record<string, typeof Building2> = {
  healthcare: Shield,
  telecom: Zap,
  government: Building2,
  bfsi: TrendingUp,
};

export default function CaseStudyCard({ project, index }: CaseStudyCardProps) {
  const Icon = categoryIcons[project.category] || Building2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group card-corporate overflow-hidden hover:border-gold/30 transition-all duration-500"
    >
      {/* Category header */}
      <div className="px-6 pt-6 pb-4 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-gold/10 text-gold">
              <Icon className="w-5 h-5" />
            </div>
            <span className="text-sm font-medium text-gold">{project.categoryLabel}</span>
          </div>
          <span className="text-xs text-muted-foreground">{project.client}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-gold transition-colors">
          {project.title}
        </h3>

        <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-2 mb-6">
          {project.metrics.map((metric, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
              <span className="text-xs text-silver">{metric}</span>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs font-medium bg-secondary/50 text-silver rounded border border-border"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
