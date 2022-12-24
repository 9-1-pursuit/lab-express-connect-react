import { Link } from "react-router-dom";

import "./Logs.css";

export default function Logs({ logs }) {
  const formattedLogs = logs.map((log, index) => {
    return (
      <tr className="Log" key={index}>
        <td>{log.mistakesWereMadeToday ? "🔴" : "⚪️"}</td>
        <td>
          <em>{log.captainName}</em>
        </td>
        <td>
          <Link to={`/logs/${index}`}>{log.title}</Link>
        </td>
      </tr>
    );
  });

  return (
    <table className="index-container" style={{ textAlign: "center" }}>
      <thead className="logs-subtitles-container">
        <tr>
          <td>
            <strong>Mistakes</strong>
          </td>
          <td>
            <strong>Captain Name</strong>
          </td>
          <td>
            <strong>See This Log</strong>
          </td>
        </tr>
      </thead>
      <tbody>{formattedLogs}</tbody>
    </table>
  );
}
