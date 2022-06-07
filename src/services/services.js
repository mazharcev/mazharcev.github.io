import heroImg1 from "../images/hero/heroImage1.jpg";
import heroImg2 from "../images/hero/heroImage2.jpg";
import heroImg3 from "../images/hero/heroImage3.jpg";

import heroImg1Compressed from "../images/hero/compressed/heroImage1-compressed.jpg";
import heroImg2Compressed from "../images/hero/compressed/heroImage2-compressed.jpg";
import heroImg3Compressed from "../images/hero/compressed/heroImage3-compressed.jpg";

export const ROUTES = {
  HOME: "/",
};

// export const carouselImages = [
//     {
//         id: "hero1",
//         styles: "hero-image-1",
//     },
//     {
//         id: "hero2",
//         styles: "hero-image-2",
//     },
//     {
//         id: "hero3",
//         styles: "hero-image-3",
//     },

// ]

// export const carouselImages = [
//     {
//         id: "hero1",
//         image: "hero-image-1",
//         placeholder: "hero-image-1-placeholder",
//     },
//     {
//         id: "hero2",
//         image: "hero-image-2",
//         placeholder: "hero-image-2-placeholder",
//     },
//     {
//         id: "hero3",
//         image: "hero-image-3",
//         placeholder: "hero-image-3placeholder",
//     },

// ]

export const carouselImages = [
  {
    id: "hero1",
    original: heroImg1,
    placeholder: heroImg1Compressed,
  },
  {
    id: "hero2",
    original: heroImg2,
    placeholder: heroImg2Compressed,
  },
  {
    id: "hero3",
    original: heroImg3,
    placeholder: heroImg3Compressed,
  },
];
