import { INFO } from "../services/.info";
import { TITLES } from "../services/services";
import whatsappImg from "../images/media/whatsapp-white.png";
import telegramImg from "../images/media/telegram.png";
import emailImg from "../images/media/email.png";
import vkImg from "../images/media/vk.png";

export default function Footer() {
  return (
    <div className="footer">

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
