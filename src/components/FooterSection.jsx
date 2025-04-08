import React from "react";
import "../styles/FooterSection.css";
import tgIcon from "../assets/tg.png";
import instIcon from "../assets/inst.png";
import vkIcon from "../assets/vk.png";
import contactsBG from "../assets/contactsBG.png";

const FooterSection = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-left">
          <h2 className="footer-title">Контакты</h2>
          <p className="footer-phone">+7 999 999 99 99</p>
          <p className="footer-email">aaaaaa@mail.ru</p>
          <p className="footer-address">
            Адрес: ....................................
          </p>
        </div>

        <div className="footer-right">
          <div className="social-icons">
            <a
              href="https://telegram.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="social-icon-wrapper">
                <img src={tgIcon} alt="Telegram" className="social-icon" />
              </div>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="social-icon-wrapper">
                <img src={instIcon} alt="Instagram" className="social-icon" />
              </div>
            </a>
            <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
              <div className="social-icon-wrapper">
                <img src={vkIcon} alt="VK" className="social-icon" />
              </div>
            </a>
          </div>
          <p className="social-text">
            Следи за нами <br /> в социальных сетях
          </p>
        </div>
      </div>

      <div className="footer-image">
        <img src={contactsBG} alt="Contacts Background" className="contacts-bg" />
      </div>
    </footer>
  );
};

export default FooterSection;
