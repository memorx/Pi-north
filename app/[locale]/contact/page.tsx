import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ContactContent from "@/components/pages/ContactContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/contact`,
      languages: {
        en: "/en/contact",
        es: "/es/contact",
      },
    },
  };
}

export default function ContactPage() {
  return <ContactContent />;
}
