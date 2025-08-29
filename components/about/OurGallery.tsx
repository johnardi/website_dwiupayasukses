"use client";
import React, { useState } from "react";
import Image from "next/image";
import FsLightbox from "fslightbox-react";
import { IMAGE_GALLERY } from "./contsGallery";

const OurGallery = () => {
  const [toggler, setToggler] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
    setToggler(!toggler);
  };

  const sources = IMAGE_GALLERY.map((item) => item.src);
  return (
    <section id="our-gallery" className="max-container padding-container">
      {/* Gallery Container */}
      <div className="container mx-auto px-4 py-4 rounded-xl overflow-hidden">
        {/* Heading Section */}
        <div className="text-center py-8">
          <h2 className="text-3xl font-bold text-gray-800">Our Gallery</h2>
        </div>

        {/* Gallery Grid */}
        <div className="px-4 pb-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0.5">
            {/* Gallery Items */}
            {IMAGE_GALLERY.map((item, index) => (
              <div
                key={item.id || index}
                className="relative rounded-lg overflow-hidden h-full aspect-[4/3] group cursor-pointer"
                onClick={() => handleImageClick(index)}
              >
                <div className="absolute inset-0 bg-black/30 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="block overflow-hidden aspect-[4/3] bg-gray-100">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                    width={384}
                    height={384}
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <FsLightbox
          toggler={toggler}
          sources={sources}
          sourceIndex={currentIndex}
          type="image"
        />
      </div>
    </section>
  );
};

export default OurGallery;
