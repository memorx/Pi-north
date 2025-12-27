"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Globe } from "lucide-react";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: `/${locale}`, label: t("home") },
    { href: `/${locale}/about`, label: t("about") },
    { href: `/${locale}/services`, label: t("services") },
    { href: `/${locale}/industries`, label: t("industries") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  const switchLocale = locale === "en" ? "es" : "en";
  const localeLabel = locale === "en" ? "ES" : "EN";

  const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/";
  const switchLocalePath = `/${switchLocale}${pathWithoutLocale}`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="text-xl font-bold heading-gold tracking-wider">
            PINORTH
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-gold ${
                  pathname === link.href ? "text-gold" : "text-silver"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Language Switcher */}
            <Link
              href={switchLocalePath}
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-gold transition-colors"
            >
              <Globe className="w-4 h-4" />
              {localeLabel}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-silver hover:text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block text-sm font-medium transition-colors hover:text-gold ${
                  pathname === link.href ? "text-gold" : "text-silver"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={switchLocalePath}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-gold transition-colors"
            >
              <Globe className="w-4 h-4" />
              {localeLabel}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
