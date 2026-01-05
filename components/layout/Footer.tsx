"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: `/${locale}/about`, label: t("about") },
    { href: `/${locale}/services`, label: t("services") },
    { href: `/${locale}/industries`, label: t("industries") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href={`/${locale}`} className="inline-block mb-4">
              <Image
                src="/images/pinorth_brand_1.png"
                alt="Pi-North"
                width={160}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-muted-foreground text-sm max-w-md">
              {t("description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t("quickLinks")}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t("contactTitle")}</h4>
            <p className="text-sm text-muted-foreground">
              {t("presence")}
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Pi-North. {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
