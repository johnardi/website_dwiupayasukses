import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("Hero");
  return (
    <section className="max-container">
      <div className="bg-pattern-2 bg-cover bg-center bg-no-repeat relative min-h-[300px] sm:h-[650px] md:h-[675px] lg:h-[700px] w-full">
        {/* Content container with responsive alignment */}
        <div className="relative z-10 flex flex-col justify-center h-full px-16 xl:w-1/2">
          <div className="text-center xl:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-salem-50 mb-4 sm:mb-6 mx-auto xl:mx-0">
              {t("title")}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-salem-50 leading-relaxed max-w-[90%] xl:max-w-none mx-auto xl:mx-0 text-center xl:text-left">
              {t("description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
