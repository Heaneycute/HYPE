import React, { useState } from "react";
import "../styles/ContactSection.css";

const ContactSection = () => {
  const [telegram, setTelegram] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [region, setRegion] = useState("");

  const handleTelegramChange = (e) => {
    const value = e.target.value;
    setTelegram(value);
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    if (/^[a-zA-Zа-яА-Я\s]*$/.test(value)) {
      setName(value);
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setPhone(value);
    }
  };

  const handleRegionChange = (e) => {
    const value = e.target.value;
    if (/^[a-zA-Zа-яА-Я\s]*$/.test(value)) {
      setRegion(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="contact-section">
      <h2 className="contact-title">Остались вопросы?</h2>
      <p className="contact-subtitle">
        Заполните поля ниже и мы свяжемся с вами
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-inputs">
          <div className="input-wrapper telegram-input">
            <input
              type="text"
              className="contact-input"
              value={telegram}
              onChange={handleTelegramChange}
              placeholder="Telegram"
            />
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              className="contact-input"
              value={name}
              onChange={handleNameChange}
              placeholder="Имя"
            />
          </div>
          <div className="input-wrapper phone-input">
            <input
              type="text"
              className="contact-input"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="Телефон"
            />
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              className="contact-input"
              value={region}
              onChange={handleRegionChange}
              placeholder="Регион"
            />
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Отправить
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
