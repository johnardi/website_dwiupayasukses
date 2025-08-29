// lib/i18n-utils.ts

import { NAV_COUNTRY } from "@/constants";

export function getLanguageByLocale(locale: string) {
  return NAV_COUNTRY.find((lang) => lang.locale === locale) || NAV_COUNTRY[0];
}

export function getLanguageName(locale: string) {
  return getLanguageByLocale(locale).name;
}

export function getLanguageFlag(locale: string) {
  return getLanguageByLocale(locale).flag;
}
