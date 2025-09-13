"use client";

import { Button } from "@/components/ui/button";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const PrivacyPolicy: React.FC = () => {
  const t = useTranslations("privacy");
  const locale = useLocale();

  return (
    <div className="min-h-screen text-white py-12">
      <div className="max-w-2xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-amber-600 mb-2">
            {t("title")}
          </h1>
          <p className="text-gray-400 text-sm">
            {t("lastUpdated")}: {t("date")}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {/* Introduction */}
          <section>
            <h2 className="text-xl font-semibold text-amber-400 mb-3">
              {t("introduction.title")}
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {t("introduction.content")}
            </p>
          </section>

          {/* Cookies Section */}
          <section>
            <h2 className="text-xl font-semibold text-amber-400 mb-3">
              {t("cookies.title")}
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              {t("cookies.description")}
            </p>

            <div className="space-y-4">
              <div className="bg-gray-800/30 rounded-lg p-4">
                <h3 className="text-lg font-medium text-green-400 mb-2">
                  {t("cookies.necessary.title")}
                </h3>
                <p className="text-gray-300 text-sm">
                  {t("cookies.necessary.description")}
                </p>
              </div>

              <div className="bg-gray-800/30 rounded-lg p-4">
                <h3 className="text-lg font-medium text-amber-400 mb-2">
                  {t("cookies.analytics.title")}
                </h3>
                <p className="text-gray-300 text-sm mb-3">
                  {t("cookies.analytics.description")}
                </p>
                <div className="bg-gray-700/30 rounded p-3">
                  <p className="text-gray-300 text-xs leading-relaxed">
                    {t("cookies.analytics.details")}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="text-center pt-6">
            <p className="text-gray-300 mb-4">{t("contact.description")}</p>
            <div className="flex gap-3 justify-center">
              <Button
                asChild
                className="bg-amber-600 hover:bg-amber-700 text-white"
              >
                <Link href={`/${locale}/contact`}>{t("contact.button")}</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-amber-600 text-amber-600 hover:bg-amber-600/10"
              >
                <Link href={`/${locale}`}>{t("contact.home")}</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
