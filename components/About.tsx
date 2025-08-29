import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";

const AboutSection = () => {
  const t = useTranslations();
  return (
    <section
      id="about"
      className="max-container padding-container flex flex-col
    gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row"
    >
      <div className="container mx-auto px-4 md:px-6 ">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Image Column */}
          <div className="w-full lg:w-5/12">
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/commodity/jahe-gajah.webp"
                alt="Freshly Harvested Ginger Farmer"
                width={466}
                height={565}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-6/12 lg:ml-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 relative">
              {t("About.tag")}
              <br />
              <span className="relative inline-block group">
                <span className="relative z-10">{t("About.tagName")}</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-tuliptree-300 z-0 origin-left"></span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-white z-0 origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </span>{" "}
              <br />
              <span className="text-blue-900 text-2xl relative">
                {t("About.title")}
              </span>
            </h1>

            <div className="prose max-w-none text-gray-700 space-y-4 mb-8 text-justify">
              <p>
                <strong>{t("About.companyName")}</strong> {t("About.text1")}
              </p>
              <p>{t("About.text2")}</p>
              <Link
                href="/about"
                className="inline-flex items-center px-6 py-3 bg-blue-900 text-white rounded-md border-2 border-blue-900 hover:bg-yellow-400 hover:border-yellow-400 hover:text-black transition-colors duration-300"
              >
                <span>{t("About.viewMore")}</span>
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
