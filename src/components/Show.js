import React from "react";
import Edit from "./Edit";
import Delete from "./Delete";

function Show(captain, i) {
  return (
    <div>
      <Edit />
      <Delete />
    </div>
  );
}

export default Show;
