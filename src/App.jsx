import React from "react";
import "./styles/global.css";
import HeroSection from "./components/HeroSection";
import ProductSection from "./components/ProductSection";
import FeaturesSection from "./components/FeaturesSection";
import ContactSection from "./components/ContactSection";
import AssortmentSection from "./components/AssortmentSection";
import WhyHypeSection from "./components/WhyHypeSection";
import FAQSection from "./components/FAQSection";
import FooterSection from "./components/FooterSection";
import s3top from "./assets/s3top.png";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <ProductSection />
      <FeaturesSection />
      <div className="s3-top-wrapper">
        <img src={s3top} alt="Top Background" className="s3-top" />
      </div>
      <ContactSection />
      <AssortmentSection />
      <WhyHypeSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
}

export default App;
