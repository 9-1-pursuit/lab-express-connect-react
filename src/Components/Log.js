import { Link } from "react-router-dom";

function Log({ log, index }) {
  return (
    <tr>
      <td>
        {log.mistakesWereMadeToday ? (
          <span>💥</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>{log.captainName}</td>
      <td>
        <Link
          to={`/logs/${index}`}
          id="titleLink"
          style={{ textDecoration: "none", cursor: "pointer" }}
        >
          {log.title}
        </Link>
      </td>
    </tr>
  );
}

export default Log;
