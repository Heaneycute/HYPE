import React, { useState } from "react";
import "../styles/AssortmentSection.css";
import s5left from "../assets/s5left.png";
import HYPEsmoke from "../assets/HYPEsmoke.png";
import HYPEblack from "../assets/HYPEblack.png";
import HYPEnado from "../assets/HYPEnado.png";

const AssortmentSection = () => {
  const [showSmokeModal, setShowSmokeModal] = useState(false);
  const [showBlackModal, setShowBlackModal] = useState(false);
  const [showNadoModal, setShowNadoModal] = useState(false);

  const toggleSmokeModal = () => setShowSmokeModal(!showSmokeModal);
  const toggleBlackModal = () => setShowBlackModal(!showBlackModal);
  const toggleNadoModal = () => setShowNadoModal(!showNadoModal);

  return (
    <section className="assortment-section" id="assortment-section">
      <img src={s5left} alt="Left Background" className="s5-left" />

      <h2 className="assortment-title">Ассортимент</h2>

      <div className="assortment-cards">
        <div className="assortment-card">
          <h3 className="card-title card-title-smoke">HYPE Дым</h3>
          {showSmokeModal ? (
            <div className="modal-content">
              <button className="modal-close" onClick={toggleSmokeModal}>
                ×
              </button>
              <p className="modal-text">
                HYPE Дым — вечная классика в новом прочтении! <br />
                Это тот самый HYPE, который стал легендой. Сбалансированная крепость 50 мг, удобная упаковка с запасом в 55+ порций и целых 11 сочных вкусов — здесь есть всё, чтобы найти свой идеал.
              </p>
            </div>
          ) : (
            <img src={HYPEsmoke} alt="HYPE Дым" className="card-image card-image-smoke" />
          )}
          <button className="details-btn" onClick={toggleSmokeModal}>
            Подробнее
          </button>
        </div>

        <div className="assortment-card">
          <h3 className="card-title card-title-black">HYPE Black</h3>
          {showBlackModal ? (
            <div className="modal-content">
              <button className="modal-close" onClick={toggleBlackModal}>
                ×
              </button>
              <p className="modal-text">
                HYPE Black — мощь, которая задает ритм! <br />
                Линейка HYPE Black — это усиленная версия всего, что ты ценишь. Стильный минималистичный дизайн, знакомые вкусы и мощные 70 мг крепости. В каждой пачке 55+ пластинок — для тех, кто стремится к максимуму и не поступается качеством.
              </p>
            </div>
          ) : (
            <img src={HYPEblack} alt="HYPE Black" className="card-image card-image-black" />
          )}
          <button className="details-btn" onClick={toggleBlackModal}>
            Подробнее
          </button>
        </div>

        <div className="assortment-card">
          <h3 className="card-title card-title-nado">HYPE x ЧёNADO</h3>
          {showNadoModal ? (
            <div className="modal-content">
              <button className="modal-close" onClick={toggleNadoModal}>
                ×
              </button>
              <p className="modal-text">
                HYPE x ЧёNADO — коллаб, который ломает правила! <br />
                Стильная упаковка, 5 дерзких вкусовых ударов и 70 мг для тех, кто в теме. Новинка, которую все так долго ждали!
              </p>
            </div>
          ) : (
            <img src={HYPEnado} alt="HYPE x ЧёNADO" className="card-image card-image-nado" />
          )}
          <button className="details-btn" onClick={toggleNadoModal}>
            Подробнее
          </button>
        </div>
      </div>
    </section>
  );
};

export default AssortmentSection;
