import React, { useState } from "react";
import "../styles/ContactSection.css";
import { toast } from "react-toastify";
import atIcon from "../assets/@.png";
import plusSevenIcon from "../assets/+7.png";

const ContactSection = () => {
  const [telegram, setTelegram] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [region, setRegion] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const lastSubmitTime = localStorage.getItem("lastSubmitTime");
    const currentTime = Date.now();
    const oneMinuteInMs = 60 * 1000;

    if (lastSubmitTime && currentTime - lastSubmitTime < oneMinuteInMs) {
      const remainingTime = Math.ceil(
        (oneMinuteInMs - (currentTime - lastSubmitTime)) / 1000
      );
      toast.warn(
        `Пожалуйста, подождите ещё ${remainingTime} секунд перед следующей отправкой.`,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        }
      );
      return;
    }

    setIsSubmitting(true);

    const formData = {
      telegram,
      name,
      phone,
      region,
    };

    const message = `
      Новая заявка:
      Telegram: ${telegram}
      Имя: ${name}
      Телефон: ${phone}
      Регион: ${region}
    `;

    const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      const response = await fetch(telegramUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });

      const data = await response.json();
      if (data.ok) {
        localStorage.setItem("lastSubmitTime", Date.now());

        toast.success(
          "Спасибо! Ваша заявка успешно отправлена, в ближайшее время с Вами свяжется наш менеджер.",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          }
        );
        setTelegram("");
        setName("");
        setPhone("");
        setRegion("");
      } else {
        toast.error("Ошибка при отправке заявки. Попробуйте снова.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
      }
    } catch (error) {
      toast.error("Ошибка сервера. Попробуйте снова позже.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    } finally {
      setIsSubmitting(false);
    }
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
            <img src={atIcon} alt="@ icon" className="input-icon transparent" />
            <input
              type="text"
              className="contact-input"
              value={telegram}
              onChange={handleTelegramChange}
              placeholder="@ Telegram"
              required
            />
          </div>
          <div className="input-wrapper">
            <img src={atIcon} alt="@ icon" className="input-icon transparent" />
            <input
              type="text"
              className="contact-input"
              value={name}
              onChange={handleNameChange}
              placeholder="Имя"
              required
            />
          </div>
          <div className="input-wrapper phone-input">
            <img src={plusSevenIcon} alt="+7 icon" className="input-icon transparent" />
            <input
              type="text"
              className="contact-input"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="+7 Телефон"
              required
            />
          </div>
          <div className="input-wrapper">
            <img src={plusSevenIcon} alt="+7 icon" className="input-icon transparent" />
            <input
              type="text"
              className="contact-input"
              value={region}
              onChange={handleRegionChange}
              placeholder="Регион"
              required
            />
          </div>
        </div>

        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          {isSubmitting ? "Отправка..." : "Отправить"}
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
