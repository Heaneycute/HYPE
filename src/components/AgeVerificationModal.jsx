import React, { useState, useEffect } from "react";
import "../styles/AgeVerificationModal.css";

const AgeVerificationModal = ({ onAllow, onDeny }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const ageVerification = localStorage.getItem("ageVerification");
    const currentTime = Date.now();

    if (!ageVerification) {
      setIsOpen(true);
    } else {
      const { choice, timestamp } = JSON.parse(ageVerification);
      const thirtyDaysInMs = 30 * 24 * 60 * 60 * 1000;
      const fiveSecondsInMs = 5 * 1000;

      if (choice === "allow" && currentTime - timestamp < thirtyDaysInMs) {
        onAllow();
      } else if (choice === "deny" && currentTime - timestamp < fiveSecondsInMs) {
        onDeny();
      } else {
        localStorage.removeItem("ageVerification");
        setIsOpen(true);
      }
    }
  }, [onAllow, onDeny]);

  const handleAllow = () => {
    localStorage.setItem(
      "ageVerification",
      JSON.stringify({
        choice: "allow",
        timestamp: Date.now(),
      })
    );
    setIsOpen(false);
    onAllow();
  };

  const handleDeny = () => {
    localStorage.setItem(
      "ageVerification",
      JSON.stringify({
        choice: "deny",
        timestamp: Date.now(),
      })
    );
    setIsOpen(false);
    onDeny();
  };

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-labelledby="age-verification-title"
    >
      <h2 id="age-verification-title" className="modal-text">
        Вам есть 18 лет?
      </h2>
      <div className="modal-buttons">
        <button className="modal-button yes" onClick={handleAllow}>
          Да
        </button>
        <button className="modal-button no" onClick={handleDeny}>
          Нет
        </button>
      </div>
    </div>
  );
};

export default AgeVerificationModal;
