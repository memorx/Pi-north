"use client";

import { useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, RefreshCw, AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const locale = useLocale();
  const t = useTranslations("error");

  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <div className="mb-8 flex justify-center">
          <div className="p-4 rounded-full bg-red-500/10">
            <AlertTriangle className="w-16 h-16 text-red-500" />
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          {t("title")}
        </h1>

        <p className="text-muted-foreground mb-8">{t("description")}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="btn-primary inline-flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-5 h-5" />
            {t("retryButton")}
          </button>

          <Link
            href={`/${locale}`}
            className="px-6 py-3 border border-border rounded-md text-foreground hover:bg-card transition-colors inline-flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" />
            {t("homeButton")}
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
