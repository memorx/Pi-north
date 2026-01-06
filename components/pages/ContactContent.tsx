"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Send, MapPin, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useActionState } from "react";
import { submitContactForm, ContactFormState } from "@/app/actions/contact";

const initialState: ContactFormState = {
  success: false,
  error: null,
  message: null,
};

export default function ContactContent() {
  const t = useTranslations("contact");
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

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
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {state.success ? (
                <div className="p-8 card-corporate text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    {t("form.successTitle")}
                  </h2>
                  <p className="text-muted-foreground">
                    {t("form.successMessage")}
                  </p>
                </div>
              ) : (
                <form action={formAction} className="space-y-6 p-8 card-corporate">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-silver mb-2">
                      {t("form.name")} *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      minLength={2}
                      aria-describedby={state.error === "name" ? "name-error" : undefined}
                      className={`w-full px-4 py-3 bg-input border rounded focus:outline-none focus:ring-2 focus:ring-ring text-foreground placeholder-muted-foreground ${
                        state.error === "name" ? "border-red-500" : "border-border"
                      }`}
                    />
                    {state.error === "name" && (
                      <p id="name-error" className="mt-1 text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {t("form.errorName")}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-silver mb-2">
                      {t("form.email")} *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      aria-describedby={state.error === "email" ? "email-error" : undefined}
                      className={`w-full px-4 py-3 bg-input border rounded focus:outline-none focus:ring-2 focus:ring-ring text-foreground placeholder-muted-foreground ${
                        state.error === "email" ? "border-red-500" : "border-border"
                      }`}
                    />
                    {state.error === "email" && (
                      <p id="email-error" className="mt-1 text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {t("form.errorEmail")}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-silver mb-2">
                      {t("form.company")}
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      className="w-full px-4 py-3 bg-input border border-border rounded focus:outline-none focus:ring-2 focus:ring-ring text-foreground placeholder-muted-foreground"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-silver mb-2">
                      {t("form.message")} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      minLength={10}
                      aria-describedby={state.error === "message" ? "message-error" : undefined}
                      className={`w-full px-4 py-3 bg-input border rounded focus:outline-none focus:ring-2 focus:ring-ring text-foreground placeholder-muted-foreground resize-none ${
                        state.error === "message" ? "border-red-500" : "border-border"
                      }`}
                    />
                    {state.error === "message" && (
                      <p id="message-error" className="mt-1 text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {t("form.errorMessage")}
                      </p>
                    )}
                  </div>

                  {state.error === "server" && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded text-red-500 text-sm flex items-center gap-2">
                      <AlertCircle className="w-5 h-5" />
                      {t("form.errorServer")}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full btn-primary inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        {t("form.sending")}
                      </>
                    ) : (
                      <>
                        {t("form.submit")}
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
