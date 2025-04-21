import React, { useState } from "react";
import "./styles/global.css";
import HeroSection from "./components/HeroSection";
import ProductSection from "./components/ProductSection";
import FeaturesSection from "./components/FeaturesSection";
import ContactSection from "./components/ContactSection";
import AssortmentSection from "./components/AssortmentSection";
import WhyHypeSection from "./components/WhyHypeSection";
import FAQSection from "./components/FAQSection";
import FooterSection from "./components/FooterSection";
import AgeVerificationModal from "./components/AgeVerificationModal";
import s3top from "./assets/s3top.png";

function App() {
  const [isAllowed, setIsAllowed] = useState(null);

  const handleAllow = () => {
    setIsAllowed(true);
  };

  const handleDeny = () => {
    setIsAllowed(false);
  };

  return (
    <div className="App">
      <AgeVerificationModal onAllow={handleAllow} onDeny={handleDeny} />

      {isAllowed === true && (
        <>
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
        </>
      )}

      {isAllowed === false && (
        <div className="access-denied">
          Доступ запрещён. Вам должно быть 18 лет или больше.
        </div>
      )}
    </div>
  );
}

export default App;
