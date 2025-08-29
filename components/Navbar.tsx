"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_COUNTRY, NAV_LINKS } from "@/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { getLanguageByLocale } from "@/lib/i18n-utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const switchLocale = (newLocale: string) => {
    if (newLocale !== locale) {
      router.replace(pathname, { locale: newLocale });
      router.refresh();
    }
  };
  // Find the matching language object by locale
  // const initialLanguage = NAV_COUNTRY.find((lang) => lang.locale === locale);

  // Fallback to first language if not found
  // const [currentLanguage, setCurrentLanguage] = useState(() => {
  //   const matched = NAV_COUNTRY.find((lang) => lang.locale === locale);
  //   return matched?.name || "Bahasa"; // Fallback to "Bahasa" if no match
  // });

  const [currentLanguage, setCurrentLanguage] = useState(() =>
    getLanguageByLocale(locale)
  );

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        !target.closest("#language-dropdown-button") &&
        !target.closest("#language-dropdown-menu") &&
        !target.closest(".nav-dropdown")
      ) {
        setIsLanguageDropdownOpen(false);
        setActiveDropdown(null);
      }
    };
    const handleScroll = () => {
      setIsLanguageDropdownOpen(false);
      setIsMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };

    // document.addEventListener("mousedown", handleClickOutside);
    // return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex flex-col items-center justify-center text-right space-y-1 md:flex-row md:items-center md:space-x-2 md:space-y-0"
        >
          <div className="relative w-[74px] h-[29px] md:w-[60px] md:h-[24px]">
            <Image
              src="/logo_driupaya.png"
              alt="Logo Company"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-xs md:text-base font-semibold whitespace-nowrap">
            PT Dwi Upaya Sukses
          </span>
        </Link>

        {/* Language and Mobile Menu */}
        <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
          {/* Language Current and Button */}
          <div className="relative">
            {/* <button
              id="language-dropdown-button"
              onClick={() => {
                setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
                setIsMenuOpen(false);
              }}
              className="flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-black rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 "
            >
              <div className="flex items-center">
                <Image
                  src={currentLanguage.flag}
                  alt={currentLanguage.name}
                  className="mr-2 rounded-full border border-black object-cover"
                  width={20}
                  height={20}
                />
                <span className="hidden sm:inline">{currentLanguage.name}</span>
                <span className="sm:hidden">
                  {currentLanguage.name.split(" ")[0]}
                </span>
              </div>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`w-4 h-4 ml-2 transition-transform ${
                  isLanguageDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button> */}
            <button
              id="language-dropdown-button"
              onClick={() => {
                setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
                setIsMenuOpen(false);
              }}
              className="flex items-center justify-between px-2 py-1 text-xs sm:px-3 sm:py-2 sm:text-sm font-medium text-gray-700 bg-white border border-black rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <div className="flex items-center">
                <Image
                  src={currentLanguage.flag}
                  alt={currentLanguage.name}
                  className="mr-1 sm:mr-2 rounded-full border border-black object-cover"
                  width={16}
                  height={16}
                />
                <span className="hidden sm:inline">{currentLanguage.name}</span>
                <span className="sm:hidden">
                  {currentLanguage.name.split(" ")[0]}
                </span>
              </div>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 transition-transform ${
                  isLanguageDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Language Dropdown List */}
            {isLanguageDropdownOpen && (
              <div
                id="language-dropdown-menu"
                className="absolute z-30 mt-2 w-32 sm:w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <div className="py-1">
                  {NAV_COUNTRY.map((lang) => (
                    <button
                      key={lang.name}
                      onClick={() => {
                        setCurrentLanguage(lang);
                        switchLocale(lang.locale);
                      }}
                      className={`flex items-center px-2 py-1 text-xs sm:px-3 sm:py-2 sm:text-sm font-medium w-full ${
                        currentLanguage.locale === lang.locale
                          ? "bg-blue-100 text-blue-900"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <div className="relative w-[14px] h-[14px] sm:w-[18px] sm:h-[18px] flex-shrink-0">
                        <Image
                          src={lang.flag}
                          alt={lang.name}
                          className="rounded-full border border-black object-cover mr-1 sm:mr-2"
                          fill
                          loading="lazy"
                        />
                      </div>
                      <span className="truncate ml-1 md:ml-2">{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            id="hamburger-dropdown-menu"
            data-collapse-toggle="navbar-menu"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-menu"
            aria-expanded={isMenuOpen}
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              setIsLanguageDropdownOpen(false);
            }}
          >
            <span className="sr-only">Open main menu</span>
            <Image
              src="/menu.svg"
              alt="menu"
              width={32}
              height={32}
              className="inline-block cursor-pointer lg:hidden"
            />
          </button>
        </div>

        {/* Main Menu Navigation */}
        <div
          className={`items-center justify-between ${
            isMenuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-menu"
        >
          {/* List Menu Hamburger */}
          <ul className="bg-gray-20 border border-gray-100 items-center flex flex-col font-medium p-4 md:p-0 mt-4  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            {NAV_LINKS.map((link) => (
              <li key={link.key} className="relative group">
                {link.children ? (
                  <>
                    <button
                      // onClick={() =>
                      //   setActiveDropdown(
                      //     activeDropdown === link.key ? null : link.key
                      //   )
                      // }
                      onClick={() => {
                        console.log("Toggling dropdown for:", link.key);
                        setActiveDropdown(
                          activeDropdown === link.key ? null : link.key
                        );
                      }}
                      className="text-center py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-tuliptree-300 flex items-center"
                    >
                      {link.label}
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className="ml-2 w-3 h-3"
                      />
                    </button>

                    <ul
                      className={`nav-dropdown absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-20 transition-opacity duration-200
                                ${
                                  activeDropdown === link.key
                                    ? "opacity-100 pointer-events-auto"
                                    : "opacity-0 pointer-events-none md:group-hover:opacity-100 md:pointer-events-auto"
                                }
                              `}
                      id="navbar-menu-products"
                    >
                      {link.children.map((child) => (
                        <li key={child.key}>
                          <Link
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setActiveDropdown(null);
                            }}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  // {/* List Menu NAV_LINK */}
                  <Link
                    href={link.href}
                    className="text-center block text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-tuliptree-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
