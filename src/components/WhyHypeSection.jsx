import React from "react";
import "../styles/WhyHypeSection.css";
import s6right from "../assets/s6right.png";
import firstCard from "../assets/firstCard.png";
import secondCard from "../assets/secondCard.png";
import thirdCard from "../assets/thirdCard.png";

const WhyHypeSection = () => {
  return (
    <section className="why-hype-section">
      <img src={s6right} alt="Right Background" className="s6-right" />

      <div className="left-content">
        <p className="intro-text">
          HYPE переосмысливает никотиновые подушечки: <br />
          используй их где угодно, от самолета до танцпола. <br />
          Без табака, без суеты — только чистый эффект <br />
          и разнообразие вкусов. Компактные и незаметные, <br />
          они легко помещаются в карман и становятся твоим <br />
          идеальным спутником.
        </p>

        <div className="cards-fan">
          <img src={firstCard} alt="First Card" className="card card-first" />
          <img
            src={secondCard}
            alt="Second Card"
            className="card card-second"
          />
          <img src={thirdCard} alt="Third Card" className="card card-third" />
        </div>
      </div>

      <div className="right-content">
        <div className="hype-window">
          <h2 className="window-title">
            <span className="title-word title-word-1">Почему</span>
            <br />
            <span className="title-word title-word-2">HYPE</span>
            <br />
            <span className="title-word title-word-3">выигрывает</span>
          </h2>

          <div className="reasons">
            <div className="reason">
              <h3 className="reason-title">Экономия на максимум:</h3>
              <p className="reason-text">
                вдвое больше порций за половину цены <br /> классического снюса.
              </p>
            </div>

            <div className="reason">
              <h3 className="reason-title">Премиум-уровень:</h3>
              <p className="reason-text">
                белоснежные пластинки из отборного сырья <br />с идеально
                сбалансированным никотином.
              </p>
            </div>

            <div className="reason">
              <h3 className="reason-title">Чистота и свежесть:</h3>
              <p className="reason-text">
                никаких повторных использований — бери новую <br /> и
                наслаждайся.
              </p>
            </div>

            <div className="reason">
              <h3 className="reason-title">Вкусов разных:</h3>
              <p className="reason-text">
                от традиций нот до смелых экспериментов.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-content">
        <h3 className="bottom-subtitle">Секрет силы HYPE</h3>
        <p className="bottom-text">
          Технология равномерного распределения никотина гарантирует стабильный
          эффект в каждой пластинке. Мягкая, <br />
          компактная структура идеально прилегает к десне, ускоряя всасывание, а
          премиальное сырье обеспечивает чистый <br /> и плавный результат. С
          HYPE ты всегда знаешь, чего ждать — никаких сюрпризов, только
          удовольствие.
        </p>
      </div>
    </section>
  );
};

export default WhyHypeSection;
