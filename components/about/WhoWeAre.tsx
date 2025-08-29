import Image from "next/image";
import { useTranslations } from "next-intl";

const WhoWeAre = () => {
  const t = useTranslations("WhoWeAre");
  return (
    <section id="whoweare" className="max-container padding-container">
      {/* Main Container */}
      <div className="flex flex-col md:flex-row py-10 gap-5 md:gap-3 lg:gap-5">
        {/* Images Container - Now with proper containment */}
        <div className="w-full md:w-5/12 relative">
          {/* Images Wrapper - Ensures proper containment */}
          <div className="relative h-[320px] xs:h-[360px] sm:h-[400px] md:h-[480px] lg:h-[550px] xl:h-[600px] p-2 md:p-3 overflow-hidden">
            {/* Main Image - Now properly contained */}
            <div className="absolute left-0 top-0 w-[68%] xs:w-[70%] sm:w-[72%] md:w-3/4 h-[70%] rounded-lg shadow-lg overflow-hidden z-0">
              <Image
                src="https://alqaribwood.com/wp-content/uploads/2022/07/Hardwood-log-min-324x389.jpg"
                alt="Hardwood logs"
                width={324}
                height={389}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Secondary Image - Now properly overlapping and contained */}
            <div className="absolute right-0 top-[15%] xs:top-[18%] sm:top-[20%] md:top-[22%] lg:top-[25%] w-[68%] xs:w-[70%] sm:w-[72%] md:w-3/4 h-[70%] rounded-lg shadow-lg overflow-hidden border border-gray-200 z-10">
              <Image
                src="https://alqaribwood.com/wp-content/uploads/2023/03/image2-329x392.png"
                alt="Wood products"
                width={329}
                height={392}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Content Container - Separate Wrapper */}
        <div className="w-full md:w-7/12 lg:w-8/12">
          <div className="h-full flex flex-col justify-center mt-10 sm:mt-12 md:mt-0 md:pl-8 lg:pl-12 md:pr-8 lg:pr-12">
            {/* Subheading */}
            <h6 className="text-green-700 text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wider mb-3 sm:mb-4">
              {t("title")}
            </h6>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-[28px] md:text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-900 mb-4 sm:mb-5 md:mb-6 leading-snug sm:leading-tight">
              {t("title1")}{" "}
              <span className="relative inline-block group">
                <span className="relative z-10">{t("title2")}</span>
                <span className="absolute bottom-0 left-0 w-full h-2 sm:h-[10px] md:h-3 bg-yellow-400 z-0"></span>
                <span className="absolute bottom-0 left-0 w-full h-2 sm:h-[10px] md:h-3 bg-white z-0 origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </span>{" "}
              {t("title3")}
            </h2>

            {/* Content */}
            <div className="text-gray-700 text-justify space-y-3 sm:space-y-4 mb-6 sm:mb-7 md:mb-8 text-sm sm:text-[15px] md:text-base leading-relaxed">
              <p>{t("text1")}</p>
              <br />
              <p>{t("text2")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
