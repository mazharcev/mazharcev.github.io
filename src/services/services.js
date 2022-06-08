import heroImg1 from "../images/hero/heroImage1.jpg";
import heroImg2 from "../images/hero/heroImage2.jpg";
import heroImg3 from "../images/hero/heroImage3.jpg";
import heroImg4 from "../images/hero/heroImage4.jpg";

import heroImg1Placeholder from "../images/hero/placeholders/heroImage1-placeholder.jpg";
import heroImg2Placeholder from "../images/hero/placeholders/heroImage2-placeholder.jpg";
import heroImg3Placeholder from "../images/hero/placeholders/heroImage3-placeholder.jpg";
import heroImg4Placeholder from "../images/hero/placeholders/heroImage4-placeholder.jpg";

export const ROUTES = {
  HOME: "/",
  CONTACT: "/contact",
  PORTFOLIO: "/portfolio",
  STREET: "/portfolio/street",
  STUDIO: "/portfolio/studio",
  PORTRAIT: "/portfolio/portrait",
};

export const CATEGORIES = {
  PORTFOLIO: "Портфолио",
  STREET: "Street",
  STUDIO: "Studio",
  PORTRAIT: "Portrait",
};

export const categories = [
  {
    id: "categoryStreet",
    title: CATEGORIES.STREET,
    original: "/images/categoriesTitle/streetImageTitle.jpg",
    placeholder: "/images/categoriesTitle/placeholders/streetImageTitle-placeholder.jpg",
    url: ROUTES.STREET,
  },
  {
    id: "categoryStudio",
    title: CATEGORIES.STUDIO,
    original: "/images/categoriesTitle/studioImageTitle.jpg",
    placeholder: "/images/categoriesTitle/placeholders/studioImageTitle-placeholder.jpg",
    url: ROUTES.STUDIO,
  },
  {
    id: "categoryPortrait",
    title: CATEGORIES.PORTRAIT,
    original: "/images/categoriesTitle/portraitImageTitle.jpg",
    placeholder: "/images/categoriesTitle/placeholders/portraitImageTitle-placeholder.jpg",
    url: ROUTES.PORTRAIT,
  },
];

export const carouselImages = [
  {
    id: "hero1",
    original: heroImg1,
    placeholder: heroImg1Placeholder,
    position: "50% 50%",
  },
  {
    id: "hero2",
    original: heroImg2,
    placeholder: heroImg2Placeholder,
    position: "50% 50%",
  },
  {
    id: "hero3",
    original: heroImg3,
    placeholder: heroImg3Placeholder,
    position: "50% 30%",
  },
  {
    id: "hero4",
    original: heroImg4,
    placeholder: heroImg4Placeholder,
    position: "50% 30%",
  },
];

export const streetImages = [
  {
    id: "street1",
    original: "/images/street/street1.jpg",
    placeholder: "/images/street/placeholders/street1-placeholder.jpg",
  },
  {
    id: "street2",
    original: "/images/street/street1.jpg",
    placeholder: "/images/street/placeholders/street1-placeholder.jpg",
  },
  {
    id: "street3",
    original: "/images/street/street1.jpg",
    placeholder: "/images/street/placeholders/street1-placeholder.jpg",
  },
  {
    id: "street4",
    original: "/images/street/street1.jpg",
    placeholder: "/images/street/placeholders/street1-placeholder.jpg",
  },
  {
    id: "street5",
    original: "/images/street/street1.jpg",
    placeholder: "/images/street/placeholders/street1-placeholder.jpg",
  },
];

export const studioImages = [
  {
    id: "studio1",
    original: "/images/studio/studio1.jpg",
    placeholder: "/images/studio/placeholders/studio1-placeholder.jpg",
  },
  {
    id: "studio2",
    original: "/images/studio/studio1.jpg",
    placeholder: "/images/studio/placeholders/studio1-placeholder.jpg",
  },
  {
    id: "studio3",
    original: "/images/studio/studio1.jpg",
    placeholder: "/images/studio/placeholders/studio1-placeholder.jpg",
  },
  {
    id: "studio4",
    original: "/images/studio/studio1.jpg",
    placeholder: "/images/studio/placeholders/studio1-placeholder.jpg",
  },
  {
    id: "studio5",
    original: "/images/studio/studio1.jpg",
    placeholder: "/images/studio/placeholders/studio1-placeholder.jpg",
  },
];

export const portraitImages = [
  {
    id: "portrait1",
    original: "/images/portrait/portrait1.jpg",
    placeholder: "/images/portrait/placeholders/portrait1-placeholder.jpg",
  },
  {
    id: "portrait2",
    original: "/images/portrait/portrait1.jpg",
    placeholder: "/images/portrait/placeholders/portrait1-placeholder.jpg",
  },
  {
    id: "portrait3",
    original: "/images/portrait/portrait1.jpg",
    placeholder: "/images/portrait/placeholders/portrait1-placeholder.jpg",
  },
  {
    id: "portrait4",
    original: "/images/portrait/portrait1.jpg",
    placeholder: "/images/portrait/placeholders/portrait1-placeholder.jpg",
  },
  {
    id: "portrait5",
    original: "/images/portrait/portrait1.jpg",
    placeholder: "/images/portrait/placeholders/portrait1-placeholder.jpg",
  },
];
