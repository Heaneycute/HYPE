import React, { useState } from "react";
import "../styles/AssortmentSection.css";
import s5left from "../assets/s5left.png";
import HYPEsmoke from "../assets/HYPEsmoke.png";
import HYPEblack from "../assets/HYPEblack.png";
import HYPEnado from "../assets/HYPEnado.png";
import leftArrow from "../assets/leftArrow.png";
import rightArrow from "../assets/rightArrow.png";

import currant from "../assets/currant.png";
import peach from "../assets/peach.png";
import powerEngineer from "../assets/powerEngineer.png";
import gum from "../assets/gum.png";
import grape from "../assets/grape.png";
import strawberry from "../assets/strawberry.png";
import apple from "../assets/apple.png";
import frostyMint from "../assets/frostyMint.png";
import lemonAndLime from "../assets/lemonAndLime.png";

import frostyMintStrong from "../assets/frostyMintStrong.png";
import watermelon from "../assets/watermelon.png";
import grapeStrong from "../assets/grapeStrong.png";
import iceMint from "../assets/iceMint.png";

import sprite from "../assets/sprite.png";
import mintAndGrape from "../assets/mintAndGrape.png";
import blackberryGum from "../assets/blackberryGum.png";
import kolaAndLemon from "../assets/kolaAndLemon.png";
import raspberryLemonade from "../assets/raspberryLemonade.png";

const AssortmentSection = () => {
  const [showSmokeModal, setShowSmokeModal] = useState(false);
  const [showBlackModal, setShowBlackModal] = useState(false);
  const [showNadoModal, setShowNadoModal] = useState(false);
  const [smokePage, setSmokePage] = useState(0);

  const smokeFlavors = [
    { image: currant, flavor: "Смородина" },
    { image: peach, flavor: "Персик" },
    { image: powerEngineer, flavor: "Энергетик" },
    { image: gum, flavor: "Жвачка" },
    { image: grape, flavor: "Виноград" },
    { image: strawberry, flavor: "Клубника" },
    { image: apple, flavor: "Яблоко" },
    { image: frostyMint, flavor: "Морозная мята" },
    { image: lemonAndLime, flavor: "Лимон и лайм" },
  ];

  const blackFlavors = [
    { image: frostyMintStrong, flavor: "Морозная мята" },
    { image: watermelon, flavor: "Арбуз" },
    { image: grapeStrong, flavor: "Виноград" },
    { image: iceMint, flavor: "Ледяная мята" },
  ];

  const nadoFlavors = [
    { image: sprite, flavor: "Спрайт" },
    { image: mintAndGrape, flavor: "Мята и виноград" },
    { image: blackberryGum, flavor: "Ежевичная жвачка" },
    { image: kolaAndLemon, flavor: "Кола и лимон" },
    { image: raspberryLemonade, flavor: "Малиновый лимонад" },
  ];

  const toggleSmokeModal = () => setShowSmokeModal(!showSmokeModal);
  const toggleBlackModal = () => setShowBlackModal(!showBlackModal);
  const toggleNadoModal = () => setShowNadoModal(!showNadoModal);

  const handlePrevSmoke = () => {
    setSmokePage((prev) => (prev === 0 ? 1 : prev - 1));
  };

  const handleNextSmoke = () => {
    setSmokePage((prev) => (prev === 1 ? 0 : prev + 1));
  };

  const isAnyModalOpen = showSmokeModal || showBlackModal || showNadoModal;

  return (
    <section className="assortment-section" id="assortment-section">
      <img src={s5left} alt="Left Background" className="s5-left" />

      <h2 className="assortment-title">Ассортимент</h2>

      <div className="assortment-cards">
        <div className="assortment-card">
          {!isAnyModalOpen && (
            <>
              <h3 className="card-title card-title-smoke">HYPE Дым</h3>
              <img src={HYPEsmoke} alt="HYPE Дым" className="card-image card-image-smoke" />
            </>
          )}
          {showSmokeModal && (
            <div className="modal-content modal-smoke">
              <button className="modal-close" onClick={toggleSmokeModal}>
                ×
              </button>
              <p className="modal-title">HYPE Дым</p>
              <p className="modal-text">
                Это тот самый HYPE, который стал легендой. Сбалансированная крепость 50 
                <br />мг, удобная упаковка с запасом в 55+ порций и целых 11 сочных вкусов.
              </p>
              <div className="flavor-slider">
                {smokePage === 0 ? (
                  <div className="flavor-grid">
                    {smokeFlavors.slice(0, 6).map((flavor, index) => (
                      <div key={index} className="flavor-item">
                        <img src={flavor.image} alt={flavor.flavor} className="flavor-image" />
                        <p className="flavor-label">{flavor.flavor}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flavor-grid">
                    {smokeFlavors.slice(6, 9).map((flavor, index) => (
                      <div key={index} className="flavor-item">
                        <img src={flavor.image} alt={flavor.flavor} className="flavor-image" />
                        <p className="flavor-label">{flavor.flavor}</p>
                      </div>
                    ))}
                  </div>
                )}
                <button className="slider-btn prev-btn asrt-btn" onClick={handlePrevSmoke}>
                  <img src={leftArrow} alt="Previous" className="arrow-icon" />
                </button>
                <button className="slider-btn next-btn asrt-btn" onClick={handleNextSmoke}>
                  <img src={rightArrow} alt="Next" className="arrow-icon" />
                </button>
              </div>
            </div>
          )}
          {!isAnyModalOpen && (
            <button className="details-btn" onClick={toggleSmokeModal}>
              Подробнее
            </button>
          )}
        </div>

        <div className="assortment-card">
          {!isAnyModalOpen && (
            <>
              <h3 className="card-title card-title-black">HYPE Black</h3>
              <img src={HYPEblack} alt="HYPE Black" className="card-image card-image-black" />
            </>
          )}
          {showBlackModal && (
            <div className="modal-content modal-black">
              <button className="modal-close" onClick={toggleBlackModal}>
                ×
              </button>
              <p className="modal-title">HYPE Black</p>
              <p className="modal-text">
                Линейка HYPE Black — это усиленная версия всего, что ты ценишь. Стильный 
                <br />минималистичный дизайн, знакомые вкусы и мощные 70 мг крепости.
              </p>
              <div className="flavor-grid">
                {blackFlavors.map((flavor, index) => (
                  <div key={index} className="flavor-item">
                    <img src={flavor.image} alt={flavor.flavor} className="flavor-image" />
                    <p className="flavor-label">{flavor.flavor}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {!isAnyModalOpen && (
            <button className="details-btn" onClick={toggleBlackModal}>
              Подробнее
            </button>
          )}
        </div>

        <div className="assortment-card">
          {!isAnyModalOpen && (
            <>
              <h3 className="card-title card-title-nado">HYPE x ЧёNADO</h3>
              <img src={HYPEnado} alt="HYPE x ЧёNADO" className="card-image card-image-nado" />
            </>
          )}
          {showNadoModal && (
            <div className="modal-content modal-nado">
              <button className="modal-close" onClick={toggleNadoModal}>
                ×
              </button>
              <p className="modal-title">HYPE x ЧёNADO</p>
              <p className="modal-text">
                HYPE x ЧёNADO — Стильная упаковка, 5 дерзких вкусовых ударов и 70 мг 
                <br />для тех, кто в теме. Новинка, которую все так долго ждали!
              </p>
              <div className="flavor-grid">
                {nadoFlavors.map((flavor, index) => (
                  <div key={index} className="flavor-item">
                    <img src={flavor.image} alt={flavor.flavor} className="flavor-image" />
                    <p className="flavor-label">{flavor.flavor}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {!isAnyModalOpen && (
            <button className="details-btn" onClick={toggleNadoModal}>
              Подробнее
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default AssortmentSection;
