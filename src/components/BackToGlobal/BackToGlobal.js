import React from "react";
import "./BackToGlobal.css";
import { useHandleNavigation } from "../../utils/utils";

function BackToGlobal() {
  const { handleBackToGlobal } = useHandleNavigation();
  console.log(handleBackToGlobal);

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
