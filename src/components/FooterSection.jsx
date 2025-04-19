import React from "react";
import "../styles/FooterSection.css";
import tgIcon from "../assets/tg.png";
import emailIcon from "../assets/mail-icon.png";
import qrMagazin from "../assets/qr-magazin.png";
import qrChe from "../assets/qr-che.png";
import contactsBG from "../assets/contactsBG.png";

const FooterSection = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-left">
          <h2 className="footer-title">Контакты</h2>
          <div className="qr-codes">
            <div className="qr-code-item">
              <img src={qrMagazin} alt="QR Magazin" className="qr-code" />
              <div className="tg-wrapper">
                <a
                  href="https://t.me/hypemagazin_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tg-link"
                >
                  <div className="social-icon-wrapper">
                    <img src={tgIcon} alt="Telegram" className="social-icon" />
                  </div>
                </a>
                <p className="tg-text">@hypemagazin_bot</p>
              </div>
            </div>
            <div className="qr-code-item">
              <img src={qrChe} alt="QR Che" className="qr-code" />
              <div className="tg-wrapper">
                <a
                  href="https://t.me/hypeche"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tg-link"
                >
                  <div className="social-icon-wrapper">
                    <img src={tgIcon} alt="Telegram" className="social-icon" />
                  </div>
                </a>
                <p className="tg-text">@hypeche</p>
              </div>
            </div>
          </div>
          <div className="footer-email-wrapper">
            <img src={emailIcon} alt="Email" className="email-icon" />
            <p className="footer-email">helphype@proton.me</p>
          </div>
        </div>
      </div>

      <div className="footer-image">
        <img src={contactsBG} alt="Contacts Background" className="contacts-bg" />
      </div>
    </footer>
  );
};

export default FooterSection;
