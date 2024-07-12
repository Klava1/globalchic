import React from "react";
import { useNavigate } from "react-router-dom";
import "./BackToGlobal.css";

function BackToGlobal() {
  const navigate = useNavigate();
  const handleBackToGlobal = () => {
    navigate("/");
  };

  return (
    <div className="back-to-global-container">
      <button
        className="back-to-global-button"
        onClick={handleBackToGlobal}
      >
        ⬅ BACK TO GLOBAL CHIC
      </button>
    </div>
  );
}

export default BackToGlobal;
