import React from "react";
import "../styles/FeaturesSection.css";
import s3bottom from "../assets/s3bottom.png";

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <img src={s3bottom} alt="Bottom Background" className="s3-bottom" />

      <h2 className="features-title">Что делает HYPE особенным?</h2>

      <div className="features-cards">
        <div className="feature-card">
          <h3 className="feature-card-title">Свобода без компромиссов</h3>
          <p className="feature-card-text">
            Никакого дыма, табака <br />
            или лишних взглядов
          </p>
        </div>

        <div className="feature-card">
          <h3 className="feature-card-title">Вкусы на любой выбор</h3>
          <p className="feature-card-text">
            От лёгкой свежести <br />
            до мощных аккордов
          </p>
        </div>

        <div className="feature-card">
          <h3 className="feature-card-title">Моментальный комфорт</h3>
          <p className="feature-card-text">
            Просто спрячь пластинку <br />
            под губу и наслаждайся
          </p>
        </div>
      </div>

      <p className="features-footer-text">
        HYPE — это не просто никотин, это стиль жизни. Компактные, удобные и
        яркие — <br />
        они созданы, чтобы быть с тобой в любой момент. Попробуй HYPE и задай
        свой темп!
      </p>
    </section>
  );
};

export default FeaturesSection;
