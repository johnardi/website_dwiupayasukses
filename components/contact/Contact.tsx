"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";

const Contact = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative flex flex-wrap pt-[30px] pb-[60px]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center -mx-4">
            {/* Left Column Skeleton */}
            <div className="w-full lg:w-5/12 md:w-6/12 px-4">
              <div className="mb-8 space-y-6">
                <div className="h-10 w-3/4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse"></div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                    <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                    <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                    <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column Skeleton */}
            <div className="w-full md:w-6/12 px-4 md:ml-[50px] pb-[20px]">
              <div className="bg-white p-8 rounded shadow-lg space-y-6">
                <div className="h-8 w-1/3 bg-gray-200 rounded"></div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="h-4 w-1/4 bg-gray-200 rounded"></div>
                    <div className="h-12 bg-gray-200 rounded"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 w-1/4 bg-gray-200 rounded"></div>
                    <div className="h-12 bg-gray-200 rounded"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 w-1/4 bg-gray-200 rounded"></div>
                  <div className="h-32 bg-gray-200 rounded"></div>
                </div>
                <div className="h-12 w-1/4 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex flex-wrap lg:px-20 lg:py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center -mx-4">
          {/* <!-- Left Column --> */}
          <div className="w-full lg:w-5/12 md:w-6/12 px-4">
            <div className="mb-8">
              <h2 className="text-[34px] font-bold mb-4 relative group">
                <span className="relative inline-block">
                  <span className="absolute bottom-0 left-0 w-full h-[0.275em] bg-yellow-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  Get in touch
                </span>
              </h2>
              <p className="text-[15px] mb-8 relative">
                <span className="relative inline-block">
                  <span className="absolute bottom-0 left-0 w-full h-[0.275em]"></span>
                  We are here to answer any question you may have.
                  <br />
                  Feel free to reach via contact form.
                </span>
              </p>

              {/* <!-- Contact Info Boxes --> */}
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 flex items-center justify-center text-yellow-500 mr-3">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="text-[18px]"
                  />
                </div>
                <h3 className="text-[15px] text-gray-600 font-normal">
                  JAKARTA-INDONESIA
                </h3>
              </div>

              <div className="flex items-center mb-4">
                <div className="w-6 h-6 flex items-center justify-center text-yellow-500 mr-3">
                  <FontAwesomeIcon icon={faEnvelope} className="text-[18px]" />
                </div>
                <h3 className="text-[15px] text-gray-600 font-normal">
                  Email: info@dwiupayasukses.com
                </h3>
              </div>

              <div className="flex items-center">
                <div className="w-6 h-6 flex items-center justify-center text-yellow-500 mr-3">
                  <FontAwesomeIcon icon={faMobile} className="text-[18px]" />
                </div>
                <h3 className="text-[15px] text-gray-600 font-normal">
                  Phone: +62 789 4561 2378
                </h3>
              </div>
            </div>
          </div>

          {/* <!-- Right Column --> */}
          <div className="w-full md:w-6/12 px-4 md:ml-[50px] pb-[20px]">
            <div className="shadow-[0px_10px_60px_0px_rgba(0,0,0,0.07)] bg-white p-8 rounded">
              <h6 className="text-[20px] font-bold mb-6 relative">
                <span className="relative inline-block">
                  <span className="absolute bottom-0 left-0 w-full h-[0.275em] bg-yellow-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  Send a message
                </span>
              </h6>

              {/* <!-- Contact Form --> */}
              <form className="space-y-6">
                <div className="flex flex-wrap -mx-4">
                  <div className="w-full md:w-1/2 px-4 mb-6">
                    <label className="block text-gray-700 mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="John"
                      required
                    />
                  </div>

                  <div className="w-full md:w-1/2 px-4 mb-6">
                    <label className="block text-gray-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-wrap -mx-4">
                  <div className="w-full md:w-1/2 px-4 mb-6">
                    <label className="block text-gray-700 mb-2">Phone</label>
                    <div className="relative">
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="+63 812 3456 78"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 px-4 mb-6">
                    <label className="block text-gray-700 mb-2">Subject</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 mb-2">
                    Comment or Message
                  </label>
                  <textarea
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={4}
                  ></textarea>
                </div>
                <div className="flex flex-col w-full gap-3 sm:flex-row">
                  <Button type="submit" title="Submit" variant="btn_tulip" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
