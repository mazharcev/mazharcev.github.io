import { INFO } from "../services/.info";
import arrowUpImg from "../images/arrowUp.png";
import whatsappImg from "../images/media/whatsapp-white.png";
import telegramImg from "../images/media/telegram.png";
import emailImg from "../images/media/email.png";
import vkImg from "../images/media/vk.png";
import { useEffect, useState } from "react";

export default function Footer() {
  const [isButtonScrollToTopVisible, setIsButtonScrollToTopVisible] =
    useState(false);

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    function showBtnToTopOnScroll() {
      let documentBottom = document.body.scrollHeight;
      let scrolledDistance = document.documentElement.scrollTop;

      if (scrolledDistance > documentBottom / 3) {
        setIsButtonScrollToTopVisible(true);
      } else if (scrolledDistance <= documentBottom / 3) {
        setIsButtonScrollToTopVisible(false);
      }
    }

    window.addEventListener("scroll", showBtnToTopOnScroll);
  }, [])

  return (
    <div className="footer">
      <button
        className="btn-totop"
        onClick={handleScrollToTop}
        style={{ display: isButtonScrollToTopVisible ? "block" : "none" }}
      >
        <img
          src={arrowUpImg}
          alt="arrow button"
          className="btn-totop-icon"
        ></img>
      </button>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href={INFO.VK_LINK}
        style={{ textDecoration: "underline" }}
      >
        <img src={vkImg} className="icon-small icon-contact" alt="vk icon" />
      </a>

      <a href={INFO.PHONE_LINK}>
        <img
          src={whatsappImg}
          className="icon-small icon-contact"
          alt="whatsapp icon"
        />
      </a>
      <a href={INFO.PHONE_LINK}>
        <img
          src={telegramImg}
          className="icon-small icon-contact"
          alt="telegram icon"
        />
      </a>

      <a href={INFO.EMAIL_LINK}>
        <img
          src={emailImg}
          className="icon-small icon-contact"
          alt="email icon"
        />
      </a>
    </div>
  );
}
