import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import RoutesComponent from "./routes/RoutesComponent";

export default function App() {
  const [isHeaderMinimized, setIsHeaderMinimized] = useState(false);

  useEffect(() => {
    const header = document.getElementById("headerId");
    const homeBtn = document.getElementById("homeDiv");
    const hamburger = document.querySelector(".header-hamburger");
    const nav = document.querySelector(".nav-header-links");
    const navLinks = document.querySelectorAll(".nav-link");
    const categoriesNav = document.getElementById("navCategoriesId");
    const categoriesContent = document.getElementById("navCategoriesContentId");

    function closeNav() {
      nav.classList.remove("nav-header-links-active");
      nav.classList.remove("header-dark");
      hamburger.classList.remove("ham-toggle");
      header.classList.remove("header-dark");
      categoriesContent.classList.remove("nav-categories-content-active");
      categoriesNav.classList.remove("nav-categories-opened");
    }

    function openNav() {
      nav.classList.toggle("nav-header-links-active");
      nav.classList.toggle("header-dark");
      hamburger.classList.toggle("ham-toggle");
      header.classList.toggle("header-dark");
    }

    function navEvents() {
      if (!matchMedia("(pointer:fine)").matches || "ontouchstart" in window) {
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
          openNav();
        },
        false
      );

      homeBtn.addEventListener(
        "click",
        () => {
          closeNav();
        },
        false
      );

      for (let i = 0; i < navLinks.length; ++i) {
        navLinks[i].addEventListener(
          "click",
          () => {
            closeNav();
          },
          false
        );
      }
    }

    function minimizeHeaderOnScroll() {
      let scrolledDistance = document.documentElement.scrollTop;

      if (scrolledDistance >= 200) {
        setIsHeaderMinimized(true);
        closeNav();
      } else if (scrolledDistance <= 200) {
        setIsHeaderMinimized(false);
      }
    }

    window.addEventListener("scroll", minimizeHeaderOnScroll);
    navEvents();
  }, []);

  return (
    <div>
      <Header isHeaderMinimized={isHeaderMinimized} />
      <RoutesComponent />
    </div>
  );
}
