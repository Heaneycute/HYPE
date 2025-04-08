import React, { useState } from "react";
import "../styles/FAQSection.css";

const FAQSection = () => {
  const [openSections, setOpenSections] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  const toggleSection = (sectionId) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">Часто задаваемые вопросы</h2>

      <div className="faq-accordion">
        <div className="faq-item">
          <div className="faq-header">
            <h3 className="faq-subtitle">
              Что представляют собой пластинки HYPE?
            </h3>
            <button className="faq-toggle-btn" onClick={() => toggleSection(1)}>
              {openSections[1] ? "−" : "+"}
            </button>
          </div>
          {openSections[1] && (
            <p className="faq-text">
              Это инновационный подход к доставке никотина! Никакого дыма,
              резкого привкуса или посторонних запахов — только тщательно
              отобранные компоненты и контроль качества на каждом этапе создания
              продукта.
            </p>
          )}
        </div>

        <div className="faq-item">
          <div className="faq-header">
            <h3 className="faq-subtitle">
              Какое количество подушечек HYPE содержится в одной упаковке?
            </h3>
            <button className="faq-toggle-btn" onClick={() => toggleSection(2)}>
              {openSections[2] ? "−" : "+"}
            </button>
          </div>
          {openSections[2] && (
            <p className="faq-text">
              Каждая пачка включает 55 пластинок, которых хватает на
              продолжительное использование.
            </p>
          )}
        </div>

        <div className="faq-item">
          <div className="faq-header">
            <h3 className="faq-subtitle">
              Допустимо ли проглатывать пластинки HYPE?
            </h3>
            <button className="faq-toggle-btn" onClick={() => toggleSection(3)}>
              {openSections[3] ? "−" : "+"}
            </button>
          </div>
          {openSections[3] && (
            <p className="faq-text">
              Нет, они не предназначены для употребления внутрь. Если пластинка
              была проглочена и вы почувствовали себя плохо, обратитесь за
              медицинской помощью, взяв с собой упаковку продукта.
            </p>
          )}
        </div>

        <div className="faq-item">
          <div className="faq-header">
            <h3 className="faq-subtitle">
              Каковы срок годности и правила хранения пластинок HYPE?
            </h3>
            <button className="faq-toggle-btn" onClick={() => toggleSection(4)}>
              {openSections[4] ? "−" : "+"}
            </button>
          </div>
          {openSections[4] && (
            <p className="faq-text">
              Продукт сохраняет свои свойства в течение 24 месяцев с момента
              производства. Для хранения используйте недоступное для детей
              место, избегайте попадание прямых солнечных лучей.
            </p>
          )}
        </div>

        <div className="faq-item faq-item-last">
          <div className="faq-header">
            <h3 className="faq-subtitle">
              Можно ли проглатывать слюну при использовании пластинок?
            </h3>
            <button className="faq-toggle-btn" onClick={() => toggleSection(5)}>
              {openSections[5] ? "−" : "+"}
            </button>
          </div>
          {openSections[5] && (
            <p className="faq-text">
              Мы не рекомендуем этого делать. Хотя единичное проглатывание слюны
              не вызовет серьезных проблем, лучше избегать такого поведения на
              регулярной основе.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
