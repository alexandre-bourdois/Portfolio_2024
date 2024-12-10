import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/app/i18n/routing";
import { getMessages } from "next-intl/server";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Portfolio | Alexandre Bourdois",
  description: "Alexandre BOURDOIS's Porfolio.",
};

const raleway = localFont({
  src:'./fonts/Raleway.woff2',
  variable:"--font-raleway",
  weight: "100 900",
})
export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const {locale} = await params
  if (!routing.locales.includes(locale as typeof routing.locales[number])) {
    notFound();
  }
  
  const messages = await getMessages({locale});

  return (
    <html lang={locale}>
      <body
        className={`${raleway.variable}antialiased`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header/>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
