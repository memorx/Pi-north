import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PortfolioContent from "@/components/pages/PortfolioContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "portfolio" });

  return {
    title: t("title"),
    description: t("subtitle"),
    alternates: {
      canonical: `/${locale}/portfolio`,
      languages: {
        en: "/en/portfolio",
        es: "/es/portfolio",
      },
    },
  };
}

export default function PortfolioPage() {
  return <PortfolioContent />;
}
