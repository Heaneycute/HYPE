import React, { useState } from "react";
import "../styles/ProductSection.css";
import s2RightChunk from "../assets/s2RightChunk.png";
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

const products = [
  { image: currant, flavor: "Смородина" },
  { image: peach, flavor: "Персик" },
  { image: powerEngineer, flavor: "Энергетик" },
  { image: gum, flavor: "Жвачка" },
  { image: grape, flavor: "Виноград" },
  { image: strawberry, flavor: "Клубника" },
  { image: apple, flavor: "Яблоко" },
  { image: frostyMint, flavor: "Морозная мята" },
  { image: lemonAndLime, flavor: "Лимон и лайм" },
  { image: frostyMintStrong, flavor: "Морозная мята" },
  { image: watermelon, flavor: "Арбуз" },
  { image: grapeStrong, flavor: "Виноград" },
  { image: iceMint, flavor: "Ледяная мята" },
  { image: sprite, flavor: "Спрайт" },
  { image: mintAndGrape, flavor: "Мята и виноград" },
  { image: blackberryGum, flavor: "Ежевичная жвачка" },
  { image: kolaAndLemon, flavor: "Кола и лимон" },
  { image: raspberryLemonade, flavor: "Малиновый лимонад" },
];

const ProductSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const handleNext = () => {
    if (currentIndex + 1 <= products.length - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const scrollToAssortment = () => {
    const assortmentSection = document.getElementById("assortment-section");
    if (assortmentSection) {
      assortmentSection.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Assortment section not found!");
    }
  };

  return (
    <section className="product-section">
      <img src={s2RightChunk} alt="Right Chunk" className="s2-right-chunk" />

      <div className="product-carousel">
        <button
          className="carousel-arrow carousel-arrow-left"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <img src={leftArrow} alt="Left Arrow" className="arrow-image" />
        </button>

        <div className="carousel-content">
          <div
            className="carousel-inner"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
            }}
          >
            {products.map((product, index) => (
              <div key={index} className="product-card">
                <img
                  src={product.image}
                  alt={product.flavor}
                  className="product-image"
                />
                <p className="product-type">Никотиновые пластинки</p>
                <p className="product-flavor">{product.flavor}</p>
              </div>
            ))}
          </div>
        </div>

        <button
          className="carousel-arrow carousel-arrow-right"
          onClick={handleNext}
          disabled={currentIndex + itemsPerPage >= products.length}
        >
          <img src={rightArrow} alt="Right Arrow" className="arrow-image" />
        </button>
      </div>

      <button className="learn-more-btn" onClick={scrollToAssortment}>
        Узнать больше
      </button>
    </section>
  );
};

export default ProductSection;
