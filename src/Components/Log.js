import { Link } from "react-router-dom";
import LogDetails from "./LogDetails";

const Log = ({ log, index }) => {
  //   console.log(log);
  return (
    <div className="log">
      <Link to={`/logs/${index}`}>
        <h2>{log.captainName} ✏️</h2>
      </Link>
    </div>
  );
};

export default Log;
