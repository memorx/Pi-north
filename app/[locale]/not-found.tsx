"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  const locale = useLocale();
  const t = useTranslations("notFound");

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <div className="mb-8">
          <span className="text-8xl font-bold heading-gold">404</span>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          {t("title")}
        </h1>

        <p className="text-muted-foreground mb-8">
          {t("description")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={`/${locale}`}
            className="btn-primary inline-flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" />
            {t("homeButton")}
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 border border-border rounded-md text-foreground hover:bg-card transition-colors inline-flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            {t("backButton")}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
