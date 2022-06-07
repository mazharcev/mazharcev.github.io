import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import RoutesComponent from "./routes/RoutesComponent";

export default function App() {
  useEffect(() => {
    function hamMenuSlide() {
      const homeBtn = document.getElementById("home-div");
      const hamburger = document.querySelector(".header-hamburger");
      const nav = document.querySelector(".nav-header-links");

      hamburger.addEventListener(
        "click",
        () => {
          nav.classList.toggle("nav-header-links-active");
          hamburger.classList.toggle("ham-toggle");
        },
        false
      );

      nav.addEventListener(
        "click",
        () => {
          nav.classList.remove("nav-header-links-active");
          hamburger.classList.remove("ham-toggle");
        },
        false
      );

      homeBtn.addEventListener(
        "click",
        () => {
          nav.classList.remove("nav-header-links-active");
          hamburger.classList.remove("ham-toggle");
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
