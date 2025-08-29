import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flexCenter bg-salem-600">
      <div className="padding-container pb-10 pt-10 max-container flex w-full flex-col gap-5">
        <div className="flex flex-col items-center md:item-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-0">
            <div className="relative w-[150px] h-auto aspect-[10/9]">
              <Image
                src="/images/logo_text_dwiupaya.png"
                alt="logo"
                fill
                sizes="100vw"
                unoptimized={true}
                className="object-contain"
              />
            </div>
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1 text-salem-50">
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title} key={columns.title}>
                <ul className="regular-14 flex flex-col gap-4">
                  {columns.links.map((link) => (
                    <Link
                      href="/"
                      key={link}
                      className="hover:text-tuliptree-300"
                    >
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5 text-salem-50">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    href="/"
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p className="whitespace-nowrap ">{link.label}:</p>
                    <p className="medium-14 whitespace-nowrap hover:text-tuliptree-300">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4">
                  {SOCIALS.links.map((link) => (
                    <Link href={link.href} key={link.href}>
                      <div
                        style={{
                          filter:
                            "invert(94%) sepia(6%) saturate(300%) hue-rotate(90deg) brightness(105%) contrast(95%)",
                        }}
                      >
                        <Image
                          src={link.icon}
                          alt="logo"
                          width={24}
                          height={24}
                          className="hover:scale-150 transition-transform duration-200 drop-shadow-red-800 hover:drop-shadow-red-800"
                        />
                      </div>
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />
        <div className="regular-14 w-full text-center text-salem-50">
          <p>2025 PT Dwi Upaya Sukses | All rights reserved</p>
          <p className="text-sm">
            Created by{" "}
            <Link
              href="https://www.https://github.com/johnardi"
              className="font-medium hover:font-bold"
            >
              JohnArdi
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
