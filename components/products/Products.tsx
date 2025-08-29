"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa"; // You might need to install react-icons
import { useTranslations } from "next-intl";
import { getProductData } from "../../lib/getProductData";

const Products = ({ slug }: { slug: string }) => {
  const { slug: safeSlug, imagesData } = getProductData(slug);
  const t = useTranslations(`Products.${safeSlug}`);

  // const t = useTranslations("Products.GingerElephant");

  //Validate useTranslations "locale" languages
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  // Define the fields you want to display in order
  const productFields = [
    "BotanicalName",
    "Origin",
    "MoistureContent",
    "ForeignMatter",
    "Admixture",
    "MinimumOrder",
    "Packaging",
  ];

  return (
    <section className="bg-white py-8 md:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Gallery */}
          <div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-6 items-center lg:items-start md:justify-end bg-white">
            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-4 justify-center lg:justify-start">
              {imagesData.map((ImageData, index) => (
                <div
                  key={index}
                  className={`relative min-w-[75px] min-h-[75px] max-w-24 max-h-24 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                    index === activeImageIndex
                      ? "ring-2 ring-green-600 ring-offset-2"
                      : "opacity-70 hover:opacity-100"
                  }`}
                  onClick={() => setActiveImageIndex(index)}
                >
                  <Image
                    src={ImageData.src}
                    alt={ImageData.alt}
                    fill
                    className="object-cover rounded-sm"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Main Image */}
            <div className="relative lg:size-[500px] md:size-[400px] min-w-[300px] min-h-[300px] rounded-lg overflow-hidden shadow-md">
              <Image
                src={imagesData[activeImageIndex].src}
                alt={imagesData[activeImageIndex].alt}
                fill
                className="object-cover rounded-sm"
                loading="lazy"
              />
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {t("title")}
            </h1>
            <div className="h-0.5 w-12 md:w-16 bg-green-600 mb-6"></div>

            <div className="space-y-4 mb-8">
              {productFields.map((key) => {
                const label = t(`${key}.label`);
                const value = t(`${key}.value`);
                if (!label || !value) return null;

                return (
                  <div key={key} className="grid grid-cols-2 gap-x-4">
                    <span className="font-semibold text-gray-700">{label}</span>
                    <span>: {value}</span>
                  </div>
                );
              })}
            </div>

            <p className="text-gray-600 mb-8 leading-relaxed text-sm md:text-base text-justify">
              {t("Description")}
            </p>

            {/* <div className="flex flex-wrap gap-4">
              <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300">
                Contact Us
              </button>
              <button className="bg-[#25D366] hover:bg-[#128C7E] text-white font-medium py-3 px-8 rounded-md transition-colors duration-300 flex items-center gap-2">
                <FaWhatsapp className="w-5 h-5" />
                Chat on WhatsApp
              </button>
            </div> */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 sm:px-8 rounded-md transition-colors duration-300 w-full sm:w-auto">
                Contact Us
              </button>
              <button className="bg-[#25D366] hover:bg-[#128C7E] text-white font-medium py-3 px-6 sm:px-8 rounded-md transition-colors duration-300 flex items-center justify-center gap-2 w-full sm:w-auto">
                <FaWhatsapp className="w-5 h-5" />
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
