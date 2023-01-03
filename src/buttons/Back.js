import React from "react";
import { useNavigate } from "react-router-dom";

function Back() {
  const navigate = useNavigate();

  function handleOnClick() {
    navigate(`/logs`);
  }

  return (
    <div className="back-button">
      <button onClick={handleOnClick}>Back</button>
    </div>
  );
}

export default Back;
