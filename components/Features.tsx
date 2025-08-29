"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { FEATURES_CAROUSEL_ITEMS } from "@/constants";

const Features = () => {
  //Validate useTranslations "locale" languages
  const t = useTranslations();
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="case-studies"
      className="max-container padding-container flex flex-col
    gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row "
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-wrap items-center -mx-4">
          {/* Left Column - Title */}

          <h1 className="text-3xl md:text-4xl lg:text-5xl leading-none pb-[30px] mb-4 text-blue-900">
            <span className="relative inline-block group">
              <span className="relative z-30">{t("Features.tag")}</span>

              <span className="absolute bottom-0 left-0 w-full h-3 bg-tuliptree-300 z-0 origin-left"></span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-white z-0 origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </span>
          </h1>

          {/* Right Column - Description */}
          <div className="w-full lg:w-5/12 lg:ml-[8.333%] md:w-6/12 px-4 md:pr-[5%]">
            <div className="text-justify">
              <p className="text-base leading-[26px] text-[rgba(33,41,67,0.8)]">
                {t("Features.description")}
              </p>
            </div>
          </div>

          {/* Carousel Navigation */}
          <div className="w-full md:w-1/12 px-4" id="business-carousel-nav">
            <div className="flex items-center justify-center space-x-4">
              <button
                className="swiper-button-prev-unique w-[54px] h-[54px] rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                aria-label="Previous slide"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
              </button>
              <button
                className="swiper-button-next-unique w-[54px] h-[54px] rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                aria-label="Next slide"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Carousel Items */}
          <div className="w-full px-4 mt-8">
            <div className="relative carousel">
              <Swiper
                slidesPerView={itemsPerView}
                spaceBetween={20}
                pagination={{
                  clickable: true,
                  // Custom bullet elements for different screen sizes
                  renderBullet: function (index, className) {
                    const isMobile = window.innerWidth < 768;
                    return `<span class="${className}" style="${
                      isMobile
                        ? "width: 32px; height: 4px; border-radius: 2px;"
                        : "width: 12px; height: 12px; border-radius: 50%;"
                    }"></span>`;
                  },
                }}
                navigation={{
                  prevEl: ".swiper-button-prev-unique",
                  nextEl: ".swiper-button-next-unique",
                }}
                modules={[Pagination, Navigation, Autoplay]}
                loop={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                className="businessSwiper"
              >
                {FEATURES_CAROUSEL_ITEMS.map((item) => (
                  <SwiperSlide key={item.id} className="carousel-item">
                    <div className="relative rounded-lg overflow-hidden h-full aspect-[4/3] group">
                      <div className="absolute inset-0 bg-black/30 z-10"></div>
                      <Image
                        src={item.imageUrl}
                        alt={t(`FeaturesCarouselItems.alt.${item.key}`)}
                        width={item.width}
                        height={item.height}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute bottom-0 left-0 right-0 z-20 p-4 md:p-7">
                        <h2 className="text-white text-2xl md:text-3xl font-bold">
                          <a href={item.href} className="hover:text-white">
                            <h3>{t(`FeaturesCarouselItems.${item.key}`)}</h3>
                          </a>
                        </h2>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
