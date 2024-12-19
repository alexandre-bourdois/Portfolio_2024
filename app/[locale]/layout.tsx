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

export const metadata: Metadata = {
  title: "Portfolio | Alexandre Bourdois",
  description: "Alexandre BOURDOIS's Porfolio.",
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
      <body
        className={`${raleway.variable} antialiased text-white`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <StairTransition/>
          <PageTransition>
            <div className="px-10">
              {children}
            </div>
          </PageTransition>
          <Toaster/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
