import { Link } from "react-router-dom";

function log({ log, index }) {
  return (
    <Link to={`/logs/${index}`}>
      <h4 key={index}>{log.title}</h4>
    </Link>
  );
}

export default log;
