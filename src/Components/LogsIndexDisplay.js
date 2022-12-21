import { Link } from "react-router-dom";
import mistakeTrue from "./assets/oops.png";
import mistakeFalse from "./assets/mistake-rocket.png";

function LogsIndexDisplay({
  captain,
  title,
  mistakes,
  index,
}) {
  return (
    <div className="logs">
      <img src={mistakes ? mistakeTrue : mistakeFalse} />

      <p>{captain}</p>

      <Link to={`/logs/${index}`}>{title}</Link>
    </div>
  );
}

export default LogsIndexDisplay;
