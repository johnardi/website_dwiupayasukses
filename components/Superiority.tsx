import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBusinessTime,
  faDraftingCompass,
  faFireAlt,
  faTree,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";

const Superiority = () => {
  const t = useTranslations("Superiority");
  return (
    <section
      id="superiority"
      className="max-container padding-container flex flex-col
    gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row"
    >
      <div className="container-fluid w-full">
        <div className="flex flex-wrap w-full">
          {/* <!-- Left Column (Text Content) --> */}
          <div className="w-full md:w-7/12 text-left lg:pr-[1vw] lg:pl-[12%]">
            <div className="w-full">
              <div className="w-full">
                {/* <!-- Unique Features Heading --> */}
                <div className="uppercase">
                  <h6 className="text-xs font-bold tracking-[0.05em] mb-4">
                    {t("tag")}
                  </h6>
                </div>

                {/* <!-- Main Heading --> */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl leading-none pb-[30px] mb-4 text-blue-900">
                  {t("title")}{" "}
                  <span className="relative inline-block group">
                    <span className="relative z-30">{t("title-")}</span>
                    <span className="absolute bottom-0 left-0 w-full h-3 bg-tuliptree-300"></span>
                    <span className="absolute bottom-0 left-0 w-full h-3 bg-white z-0 origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </span>{" "}
                  {t("title--")}
                </h1>
                {/* <!-- Description Text --> */}
                <div className="text-base leading-[26px] lg:mr-[3vw]">
                  <p className="text-justify">{t("desc")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Right Column (Image) --> */}
          <div className="w-full md:w-5/12">
            <div className="w-full">
              <figure className="w-full">
                <Image
                  src="/commodity/colourful-spices.webp"
                  alt="pngwing.com (11)"
                  width="395"
                  height="234"
                  className="w-md h-auto border-rounded rounded-md"
                />
              </figure>
            </div>
          </div>

          {/* <!-- Features Grid --> */}
          <div className="w-full lg:pt-[4vh] lg:px-[6vw]">
            <div className="container-fluid w-full">
              <div className="flex flex-wrap -mx-[15px]">
                {/* <!-- Feature 1 --> */}
                <div className="w-full sm:w-6/12 md:w-3/12 px-[15px] mb-8">
                  <div className="text-center">
                    <div className="mb-5">
                      {/* <FontAwesomeIcon
                        icon={faBusinessTime}
                        className="text-2xl"
                      /> */}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {t("title1")}
                    </h3>
                    <p className="text-center">{t("text1")}</p>
                  </div>
                </div>

                {/* <!-- Feature 2 --> */}
                <div className="w-full sm:w-6/12 md:w-3/12 px-[15px] mb-8">
                  <div className="text-center">
                    <div className="mb-5">
                      {/* <FontAwesomeIcon icon={faFireAlt} className="text-2xl" /> */}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {t("title2")}
                    </h3>
                    <p>{t("text2")}</p>
                  </div>
                </div>

                {/* <!-- Feature 3 --> */}
                <div className="w-full sm:w-6/12 md:w-3/12 px-[15px] mb-8">
                  <div className="text-center">
                    <div className="mb-5">
                      {/* <FontAwesomeIcon icon={faTree} className="text-2xl" /> */}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {t("title3")}
                    </h3>
                    <p>{t("text3")}</p>
                  </div>
                </div>

                {/* <!-- Feature 4 --> */}
                <div className="w-full sm:w-6/12 md:w-3/12 px-[15px] mb-8">
                  <div className="text-center">
                    <div className="mb-5">
                      {/* <FontAwesomeIcon
                        icon={faDraftingCompass}
                        className="text-2xl"
                      /> */}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {t("title4")}
                    </h3>
                    <p>{t("text4")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Superiority;
