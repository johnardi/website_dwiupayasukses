// NAVIGATION
export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },
  { href: "/about", key: "about", label: "About" },
  {
    href: "/products",
    key: "products",
    label: "Products",
    children: [
      {
        href: "/products/ginger-elephant",
        key: "ginger-elephant",
        label: "Ginger Elephant",
      },
      {
        href: "/products/ginger-emprit",
        key: "ginger-emprit",
        label: "Ginger Emprit",
      },
      {
        href: "/products/paper-black",
        key: "paper-black",
        label: "Black Pepper",
      },
      {
        href: "/products/paper-white",
        key: "paper-white",
        label: "White Pepper",
      },
      {
        href: "/products/coffee-beans-robusta",
        key: "coffee-beans-robusta",
        label: "Robusta Bean",
      },
      {
        href: "/products/coffee-beans-arabika",
        key: "coffee-beans-arabika",
        label: "Arabika Bean",
      },
    ],
  },
  { href: "/contact", key: "contact", label: "Contact" },
];

export const NAV_COUNTRY = [
  {
    key: "id",
    name: "Bahasa",
    flag: "/id.svg",
    locale: "id", // ✅ Use locale slug instead of full URL
  },
  {
    key: "en",
    name: "English (US)",
    flag: "/us.svg",
    locale: "en",
  },

  // {
  //   flag: "/us.svg",
  //   href: "http://localhost:3000",
  //   key: "de",
  //   name: "Deutsch",
  // },
  // {
  //   flag: "/us.svg",
  //   href: "http://localhost:3000",
  //   key: "it",
  //   name: "Italiano",
  // },
  // {
  //   flag: "/id.svg",
  //   href: "http://localhost:3000",
  //   key: "jp",
  //   name: "中文 (繁體)",
  // },
];
export const FEATURES_CAROUSEL_ITEMS = [
  {
    id: 1,
    key: "ginger-elephant",
    href: "/products/ginger-elephant",
    imageUrl: "/commodity/jahe-gajah.webp",
    width: 900,
    height: 1600,
  },
  {
    id: 2,
    key: "ginger-emprit",
    href: "/products/ginger-emprit",
    imageUrl: "/commodity/jahe-emprit.png",
    width: 900,
    height: 1600,
  },
  {
    id: 3,
    key: "paper-white",
    href: "/products/paper-white",
    imageUrl: "/commodity/lada-putih-photo.jpg",
    width: 900,
    height: 1600,
  },
  {
    id: 4,
    key: "paper-black",
    href: "/products/black-paper",
    imageUrl: "/commodity/lada-hitam-photo.jpg",
    width: 900,
    height: 1600,
  },
  {
    id: 5,
    key: "robusta-coffee-bean",
    href: "/products/coffee-beans-robusta",
    imageUrl: "/commodity/robusta.webp",
    width: 900,
    height: 1600,
  },
  {
    id: 6,
    key: "arabika-coffee-bean",
    href: "/products/coffee-beans-arabika",
    imageUrl: "/commodity/arabica.jpg",
    width: 900,
    height: 1600,
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: "Learn More",
    links: ["Home", "About", "Contact Us"],
  },
  {
    title: "Our Features",
    links: [
      "Ginger Javanes",
      "Ginger Emprit",
      "Black Paper",
      "White Paper",
      "Coffee Bean Robusta",
      "Coffee Bean Arabika",
    ],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Admin Officer", value: "123-456-7890" },
    { label: "Email Officer", value: "info@dwiupayasukses.co.id" },
  ],
};

export const SOCIALS = {
  title: "Social",
  links: [
    { icon: "/facebook.svg", href: "https://facebook.com" },
    { icon: "/instagram.svg", href: "https://instagram.com" },
    { icon: "/twitter.svg", href: "https://twitter.com" },
    { icon: "/youtube.svg", href: "https://youtube.com" },
    { icon: "/wordpress.svg", href: "https://wordpress.com" },
  ],
};
