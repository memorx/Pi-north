import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import IndustriesContent from "@/components/pages/IndustriesContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "industries" });

  const description = locale === "es"
    ? "Entregamos soluciones especializadas combinando conocimiento profundo del sector con tecnología de vanguardia."
    : "We deliver specialized solutions combining deep industry knowledge with cutting-edge technology.";

  return {
    title: t("title"),
    description,
    alternates: {
      canonical: `/${locale}/industries`,
      languages: {
        en: "/en/industries",
        es: "/es/industries",
      },
    },
  };
}

export default function IndustriesPage() {
  return <IndustriesContent />;
}
