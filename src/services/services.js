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
};

export const TITLES = {
  NAME: "ALEXEY MAZHARCEV",
  CATEGORIES: "КАТЕГОРИИ",
  CONTACT: "КОНТАКТЫ",
  PORTFOLIO: "ПОРТФОЛИО",
  STREET: "STREET",
  STUDIO: "STUDIO",
  CONTACT_ME: "СВЯЗЬ СО МНОЙ",
  TERMS: "ALEXEY MAZHARCEV, ВСЕ ПРАВА ЗАЩИЩЕНЫ"
};

export const CATEGORIES = [
  {
    id: "categoryStreet",
    title: TITLES.STREET,
    original: "/images/categoriesTitle/streetImageTitle.jpg",
    placeholder: "/images/categoriesTitle/placeholders/streetImageTitle-placeholder.jpg",
    url: ROUTES.STREET,
  },
  {
    id: "categoryStudio",
    title: TITLES.STUDIO,
    original: "/images/categoriesTitle/studioImageTitle.jpg",
    placeholder: "/images/categoriesTitle/placeholders/studioImageTitle-placeholder.jpg",
    url: ROUTES.STUDIO,
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
