import { Link } from "react-router-dom";

export default function Log({ log, index }) {
  return (
    <tr>
      <td>
        <Link to={`/logs/${index}`}>✏️</Link>
      </td>
    </tr>
  );
}
