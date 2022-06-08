import whatsappImg from "../images/media/whatsapp-white.png";
import telegramImg from "../images/media/telegram.png";
import emailImg from "../images/media/email.png";
import vkImg from "../images/media/vk.png";
import { INFO } from "../services/.info";

export default function Contact() {
  return (
    <div className="contact-container section">
      <h1>Связь со мной</h1>

      <div className="contact-content">
        <div className="contact-item">
          <img src={vkImg} className="icon-small icon-contact" alt="vk icon"/>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={INFO.VK_LINK}
            style={{ textDecoration: "underline" }}
          >
            Alexey Mazharcev
          </a>
        </div>

        <div className="contact-item">
          <img src={whatsappImg} className="icon-small icon-contact" alt="whatsapp icon"/>
          <a href={INFO.PHONE_LINK}>{INFO.PHONE_TEXT}</a>
        </div>

        <div className="contact-item">
          <img src={telegramImg} className="icon-small icon-contact" alt="telegram icon"/>
          <a href={INFO.PHONE_LINK}>{INFO.PHONE_TEXT}</a>
        </div>

        <div className="contact-item">
          <img src={emailImg} className="icon-small icon-contact" alt="email icon"/>
          <a href={INFO.EMAIL_LINK}>{INFO.EMAIL_TEXT}</a>
        </div>
      </div>
    </div>
  );
}
