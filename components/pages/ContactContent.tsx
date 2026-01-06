"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Calendar,
  CheckCircle,
  AlertCircle,
  Loader2
} from "lucide-react";
import { useActionState } from "react";
import { submitContactForm, ContactFormState } from "@/app/actions/contact";

const initialState: ContactFormState = {
  success: false,
  error: null,
  message: null,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function ContactContent() {
  const t = useTranslations("contact");
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 heading-gold"
          >
            {t("title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            {t("subtitle")}
          </motion.p>
        </div>
      </section>

      {/* Contact Info + Form Section */}
      <section className="py-12 px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold text-foreground mb-8">
                {t("info.title")}
              </h2>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">{t("info.email")}</p>
                    <a
                      href="mailto:info@pinorth.com"
                      className="text-foreground hover:text-gold transition-colors font-medium"
                    >
                      info@pinorth.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">{t("info.phone")}</p>
                    <a
                      href="tel:+15876648730"
                      className="text-foreground hover:text-gold transition-colors font-medium"
                    >
                      +1 (587) 664-8730
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">{t("info.location")}</p>
                    <p className="text-foreground font-medium">
                      {t("info.locationValue")}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold text-foreground mb-8">
                {t("form.title")}
              </h2>

              {state.success ? (
                <div className="p-8 card-corporate text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {t("form.successTitle")}
                  </h3>
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
        </motion.div>
      </section>

      {/* Calendar Section */}
      <section className="py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="card-corporate p-8 md:p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-gold" />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {t("calendar.title")}
            </h2>

            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              {t("calendar.description")}
            </p>

            {/* Calendly Placeholder */}
            <div className="bg-secondary/50 rounded-xl p-12 border border-dashed border-border">
              <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
              <p className="text-muted-foreground">
                {t("calendar.comingSoon")}
              </p>
            </div>

            {/*
              When Calendly is ready, replace the placeholder above with:

              <iframe
                src="https://calendly.com/pinorth?hide_landing_page_details=1&hide_gdpr_banner=1"
                width="100%"
                height="650"
                frameBorder="0"
                title="Schedule a meeting"
                className="rounded-xl"
              />

              Or use react-calendly:
              import { InlineWidget } from "react-calendly";
              <InlineWidget
                url="https://calendly.com/pinorth"
                styles={{ height: '650px', minWidth: '320px' }}
              />
            */}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
