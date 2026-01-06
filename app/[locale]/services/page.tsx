import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ServicesContent from "@/components/pages/ServicesContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });

  return {
    title: t("title"),
    description: t("metaDescription"),
    alternates: {
      canonical: `/${locale}/services`,
      languages: {
        en: "/en/services",
        es: "/es/services",
      },
    },
  };
}

export default function ServicesPage() {
  return <ServicesContent />;
}
