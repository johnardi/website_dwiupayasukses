import "./globals.css";
import type { Metadata } from "next";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "PT Dwi Upaya Sukses",
  description: "Website for PT Dwi Upaya Sukses",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" }, // fallback
    ],
  },
};

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body suppressHydrationWarning>
//         <Navbar />
//         <main className="relative overflow-hidden">{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params; // ✅ This resolves the error

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  // const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} suppressHydrationWarning>
      {/* <body suppressHydrationWarning dir={direction}>*/}
      <body suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="relative overflow-hidden">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
