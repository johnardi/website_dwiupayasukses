import Features from "@/components/Features";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Superiority from "@/components/Superiority";
import { use } from "react";
import { setRequestLocale } from "next-intl/server";

export default function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <About />
      <Features />
      <Superiority />
    </>
  );
}
