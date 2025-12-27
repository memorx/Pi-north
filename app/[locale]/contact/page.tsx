"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Send, MapPin } from "lucide-react";

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <div className="pt-16">
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 heading-gold">
                {t("title")}
              </h1>

              <p className="text-lg text-muted-foreground mb-8">
                {t("description")}
              </p>

              <div className="flex items-start gap-3 p-4 card-corporate">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  {t("presence")}
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="space-y-6 p-8 card-corporate"
            >
              <div>
                <label className="block text-sm font-medium text-silver mb-2">
                  {t("form.name")}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-input border border-border rounded focus:outline-none focus:ring-2 focus:ring-ring text-foreground placeholder-muted-foreground"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-silver mb-2">
                  {t("form.email")}
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-input border border-border rounded focus:outline-none focus:ring-2 focus:ring-ring text-foreground placeholder-muted-foreground"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-silver mb-2">
                  {t("form.company")}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-input border border-border rounded focus:outline-none focus:ring-2 focus:ring-ring text-foreground placeholder-muted-foreground"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-silver mb-2">
                  {t("form.message")}
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-input border border-border rounded focus:outline-none focus:ring-2 focus:ring-ring text-foreground placeholder-muted-foreground resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary inline-flex items-center justify-center gap-2"
              >
                {t("form.submit")}
                <Send className="w-5 h-5" />
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
}
