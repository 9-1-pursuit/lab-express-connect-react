import { Link } from "react-router-dom";



function Log ({ log, index }) {
  return (
    <tr>

      <td>
        <a href={log.url} target="_blank" rel="no log">
          {log.name}
        </a>
      </td>
      <td>
        <Link to={`/logs/${index}`}>✏️</Link>
      </td>
    </tr>
  );
}

export default Log;
