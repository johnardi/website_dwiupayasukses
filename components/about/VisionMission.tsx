import Image from "next/image";
import { useTranslations } from "next-intl";

const VisionMission = () => {
  const t = useTranslations();
  return (
    <>
      <section id="visionmission" className="max-container padding-container">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center">
            {/* Left Column */}
            <div className="w-full md:w-6/12 px-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-none mb-0 text-blue-900 relative inline-block group">
                <span className="relative z-30">
                  {t("VisionMission.title")}
                </span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-tuliptree-300"></span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-white z-0 origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </h2>
            </div>

            {/* Right Column - Now aligned to right */}
            <div className="w-full md:w-5/12 px-4 mt-8 md:mt-0 md:mr-0 md:ml-auto">
              <p className="text-[17px] leading-[1.47em] relative inline-block">
                <span className="relative z-30">
                  {t("VisionMission.text")}
                  <br />
                  {t("VisionMission.text0")}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="container mx-auto px-4 pb-16 md:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Image Column */}
            <div className="hidden md:block">
              <Image
                src="https://alqaribwood.com/wp-content/uploads/2023/04/Vision-mission-2.jpg"
                alt="Vision & Mission"
                width={500}
                height={600}
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>

            {/* Vision Card */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-800/10 text-amber-800 mr-4">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-900">
                  {t("VisionMission.title1")}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t("VisionMission.text1")}
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-800/10 text-amber-800 mr-4">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-900 text-justify">
                  {t("VisionMission.title2")}
                </h3>
              </div>

              <div className="text-gray-700 leading-relaxed ">
                <ul className="max-w-md space-y-3 list-disc list-outside text-justify">
                  <li className="mb-2">{t("VisionMission.text21")}</li>
                  <li className="mb-2">{t("VisionMission.text22")}</li>
                  <li className="mb-2">{t("VisionMission.text23")}</li>
                  <li className="mb-2">{t("VisionMission.text24")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VisionMission;
