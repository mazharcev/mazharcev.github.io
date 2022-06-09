import whatsappImg from "../images/media/whatsapp-white.png";
import telegramImg from "../images/media/telegram.png";
import emailImg from "../images/media/email.png";
import vkImg from "../images/media/vk.png";
import { INFO } from "../services/.info";
import { TITLES } from "../services/services";
import Divider from "../components/Divider";

export default function Contact() {
  return (
    <div className="contact-container section">
            <div className="gallery-title-container">
        <Divider title={TITLES.CONTACT_ME} />
      </div>

      <div className="contact-content">
        <div className="contact-item">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={INFO.VK_LINK}
            style={{ textDecoration: "underline" }}
          >
            <img
              src={vkImg}
              className="icon-small icon-contact"
              alt="vk icon"
            />
            {TITLES.NAME}
          </a>
        </div>

        <div className="contact-item">
          <a href={INFO.PHONE_LINK}>
            <img
              src={whatsappImg}
              className="icon-small icon-contact"
              alt="whatsapp icon"
            />
            {INFO.PHONE_TEXT}
          </a>
        </div>

        <div className="contact-item">
          <a href={INFO.PHONE_LINK}>
            <img
              src={telegramImg}
              className="icon-small icon-contact"
              alt="telegram icon"
            />
            {INFO.PHONE_TEXT}
          </a>
        </div>

        <div className="contact-item">
          <a href={INFO.EMAIL_LINK}>
            <img
              src={emailImg}
              className="icon-small icon-contact"
              alt="email icon"
            />
            {INFO.EMAIL_TEXT}
          </a>
        </div>
      </div>
    </div>
  );
}
