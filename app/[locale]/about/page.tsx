import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import AboutContent from "@/components/pages/AboutContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

  return {
    title: t("title"),
    description: t("metaDescription"),
    alternates: {
      canonical: `/${locale}/about`,
      languages: {
        en: "/en/about",
        es: "/es/about",
      },
    },
  };
}

export default function AboutPage() {
  return <AboutContent />;
}
