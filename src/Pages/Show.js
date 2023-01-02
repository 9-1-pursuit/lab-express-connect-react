import React from "react";
import Log from "../Components/Log";

export default function Show() {
  return (
    <div>
      <h3
        style={{
          fontSize: "1.1em",
          marginLeft: "25px",
          marginBottom: "5px",
          marginTop: "5px",
          padding: "5px",
        }}
      >
        Show
      </h3>
      <Log />
    </div>
  );
}
