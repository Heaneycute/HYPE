import React from "react";
import "../styles/HeroSection.css";
import heroLeftChunk from "../assets/heroLeftChunk.png";
import heroRightChunk from "../assets/heroRightChunk.png";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">HYPE</h1>

        <p className="hero-subtitle">Твой ритм никотина</p>

        <p className="hero-description">
          Никотиновые пластинки <br />
          нового времени, созданные <br /> для тех, кто живет в движении.
        </p>

        <div className="hero-images">
          <img
            src={heroLeftChunk}
            alt="Left Chunk"
            className="hero-image-left"
          />
          <img
            src={heroRightChunk}
            alt="Right Chunk"
            className="hero-image-right"
          />
        </div>

        <p className="hero-footer-text">
          Забудь про дым и неудобства — с HYPE <br />
          ты получаешь чистое удовольствие <br />
          от никотина в любой ситуации.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
