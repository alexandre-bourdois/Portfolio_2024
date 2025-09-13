"use client";

import { Button } from "@/components/ui/button";
import { useCookieConsent } from "@/hooks/use-cookie-consent";
import { AnimatePresence, motion } from "framer-motion";
import { Shield } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

const CookieConsent: React.FC = () => {
  const t = useTranslations("cookies");
  const locale = useLocale();
  const [isVisible, setIsVisible] = useState(false);
  const { isLoaded, acceptAll, acceptNecessary, hasConsent } =
    useCookieConsent();

  useEffect(() => {
    if (isLoaded && !hasConsent()) {
      setIsVisible(true);
    }
  }, [isLoaded, hasConsent]);

  const handleAcceptAll = () => {
    acceptAll();
    setIsVisible(false);
  };

  const handleAcceptNecessary = () => {
    acceptNecessary();
    setIsVisible(false);
  };

  if (!isVisible || !isLoaded) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed bottom-0 left-0 right-0 z-50"
      >
        <div className="w-full bg-gray-900/95 backdrop-blur-sm border-t border-gray-700 shadow-2xl">
          <div className="px-4 py-3 sm:py-2">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
              <div className="flex items-start sm:items-center gap-3 flex-1 min-w-0">
                <div className="flex-shrink-0 mt-0.5 sm:mt-0">
                  <Shield className="h-4 w-4 text-amber-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xs font-semibold text-amber-600 mb-1">
                    {t("title")}
                  </h3>
                  <p className="text-gray-300 text-xs leading-tight">
                    {t("description")}{" "}
                    <a
                      href={`/${locale}/privacy`}
                      className="text-amber-600 hover:text-amber-500 hover:underline whitespace-nowrap"
                    >
                      {t("learnMore")}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <Button
                  onClick={handleAcceptAll}
                  size="sm"
                  className="bg-amber-600 hover:bg-amber-700 text-white font-medium text-xs px-3 py-1.5 h-7 w-full sm:w-auto"
                >
                  {t("acceptAll")}
                </Button>
                <Button
                  onClick={handleAcceptNecessary}
                  variant="outline"
                  size="sm"
                  className="border-amber-600 text-amber-600 hover:bg-amber-600/10 hover:border-amber-500 text-xs px-3 py-1.5 h-7 w-full sm:w-auto"
                >
                  {t("acceptNecessary")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieConsent;
