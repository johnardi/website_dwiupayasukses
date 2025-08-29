export interface Messages {
  HomePage: {
    title: string;
    about: string;
  };
  Hero: {
    title: string;
    description: string;
  };
  About: {
    tag: string;
    tagName: string;
    title: string;
    companyName: string;
    text1: string;
    text2: string;
    viewMore: string;
  };
  Features: {
    tag: string;
    description: string;
  };
  GalleryItem: {
    id?: string | number;
    src: string;
    alt: string;
  };
}

export type Locale = "en" | "id";
