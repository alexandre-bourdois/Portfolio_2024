"use client";

import { useCookieConsent } from "@/hooks/use-cookie-consent";
import Script from "next/script";
import { useEffect } from "react";

interface GoogleAnalyticsProps {
  gtmId?: string;
  gaId?: string;
}

const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({
  gtmId = process.env.NEXT_PUBLIC_GTM_ID,
  gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
}) => {
  const { preferences, isLoaded } = useCookieConsent();

  useEffect(() => {
    if (!isLoaded || typeof window === "undefined") return;

    // Initialize Google Analytics with consent
    if (window.gtag) {
      window.gtag("consent", "default", {
        analytics_storage: preferences.analytics ? "granted" : "denied",
        functionality_storage: preferences.necessary ? "granted" : "denied",
        security_storage: preferences.necessary ? "granted" : "denied",
      });
    }
  }, [preferences, isLoaded]);

  if (!gtmId || !gaId) return null;

  return (
    <>
      {/* Google Tag Manager */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `,
        }}
      />

      {/* Google Analytics (gtag.js) */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;
