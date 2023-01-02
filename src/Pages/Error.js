import React from "react";
import "./Error.css";

export default function Error() {
  return (
    <div className="error">
      <h2
        style={{
          color: "red",
          fontSize: "4em",
          textShadow: "white 4px 4px 4px",
        }}
      >
        Error: Page not found!!!
      </h2>
    </div>
  );
}
