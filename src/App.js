import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import RoutesComponent from "./routes/RoutesComponent";

export default function App() {
  useEffect(() => {
    function navEvents() {
      const header = document.getElementById("headerId");
      const homeBtn = document.getElementById("homeDiv");
      const hamburger = document.querySelector(".header-hamburger");
      const nav = document.querySelector(".nav-header-links");
      const navLinks = document.querySelectorAll(".nav-link");
      const categoriesNav = document.getElementById("navCategoriesId");
      const categoriesContent = document.getElementById(
        "navCategoriesContentId"
      );

      if(!matchMedia("(pointer:fine)").matches || "ontouchstart" in window) {
        categoriesNav.addEventListener(
          "click",
          () => {
            categoriesContent.classList.toggle("nav-categories-content-active");
            categoriesNav.classList.toggle("nav-categories-opened");
          },
          false
        );
      }

      hamburger.addEventListener(
        "click",
        () => {
          nav.classList.toggle("nav-header-links-active");
          nav.classList.toggle("header-dark");
          hamburger.classList.toggle("ham-toggle");
          header.classList.toggle("header-dark");
        },
        false
      );

      for (let i = 0; i < navLinks.length; ++i) {
        navLinks[i].addEventListener(
          "click",
          () => {
            nav.classList.remove("nav-header-links-active");
            nav.classList.remove("header-dark");
            hamburger.classList.remove("ham-toggle");
            header.classList.remove("header-dark");
            categoriesContent.classList.remove("nav-categories-content-active");
            categoriesNav.classList.remove("nav-categories-opened");
          },
          false
        );
      }

      homeBtn.addEventListener(
        "click",
        () => {
          nav.classList.remove("nav-header-links-active");
          nav.classList.remove("header-dark");
          hamburger.classList.remove("ham-toggle");
          header.classList.remove("header-dark");
          categoriesContent.classList.remove("nav-categories-content-active");
          categoriesNav.classList.remove("nav-categories-opened");
        },
        false
      );
    }

    // function handleButtonScrollToTop() {
    //   let documentBottom = document.body.scrollHeight;
    //   let scrolledDistance = document.documentElement.scrollTop;
    //   if (scrolledDistance > documentBottom / 3) {
    //     setIsButtonScrollToTopVisible(true);
    //   } else if (scrolledDistance <= documentBottom / 3) {
    //     setIsButtonScrollToTopVisible(false);
    //   }
    // }

    //window.addEventListener("scroll", handleButtonScrollToTop);
    navEvents();
  }, []);

  return (
    <div>
      <Header />
      <div className="content">
        <RoutesComponent />
      </div>
    </div>
  );
}
