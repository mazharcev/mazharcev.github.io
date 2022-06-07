import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import RoutesComponent from "./routes/RoutesComponent";

export default function App() {
  useEffect(() => {
    function hamMenuSlide() {
      const header = document.getElementById("headerId");
      const homeBtn = document.getElementById("homeDiv");
      const hamburger = document.querySelector(".header-hamburger");
      const nav = document.querySelector(".nav-header-links");
      const navLinks = document.querySelectorAll(".nav-link")
      const categoriesNav = document.querySelector(".nav-categories");
      const categoriesContent = document.querySelector(".nav-categories-content");

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
          },
          false
        );
     }

      // navLinks.addEventListener(
      //   "click",
      //   () => {
      //     for (let i = 0; i < navLinks.length; ++i) {
      //       list[i].classList.add('cf');
      //    }
      //     console.log('clicked')
      //     nav.classList.remove("nav-header-links-active");
      //     nav.classList.remove("header-dark");
      //     hamburger.classList.remove("ham-toggle");
      //     header.classList.remove("header-dark");
      //   },
      //   false
      // );

      homeBtn.addEventListener(
        "click",
        () => {
          nav.classList.remove("nav-header-links-active");
          nav.classList.remove("header-dark");
          hamburger.classList.remove("ham-toggle");
          header.classList.remove("header-dark");
        },
        false
      );

      // categoriesNav.addEventListener(
      //   "click",
      //   () => {
      //     categoriesContent.classList.toggle("nav-categories-content-active");
      //   }
      // )

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
    hamMenuSlide();
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
