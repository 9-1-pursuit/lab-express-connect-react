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
      <td>
        <Link
          to={`/logs/${index}`}
          id="nameLink"
          style={{ textDecoration: "none", cursor: "pointer" }}
        >
          {log.captainName}
        </Link>
      </td>
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
