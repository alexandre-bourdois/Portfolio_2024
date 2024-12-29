import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/app/i18n/routing";
import { getMessages } from "next-intl/server";
import Header from "@/components/header/header";
import PageTransition from "@/components/transition/PageTransition";
import StairTransition from "@/components/transition/StairTransition";
import { Toaster } from "@/components/ui/toaster";
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Portfolio | Alexandre Bourdois",
  description: "Alexandre BOURDOIS's Portfolio.",
};

const raleway = localFont({
  src: './fonts/Raleway.woff2',
  variable: "--font-raleway",
  weight: "100 900",
});

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as typeof routing.locales[number])) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <head>
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
              })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
            `,
          }}
        />
      </head>
      <body className={`${raleway.variable} antialiased text-white`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <StairTransition />
          <PageTransition>
            <div className="px-10">
              {children}
            </div>
          </PageTransition>
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
