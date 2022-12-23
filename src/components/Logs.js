import { Link } from "react-router-dom";

import "./Logs.css";

export default function Logs({ logs }) {
  const formattedLogs = logs.map((log, index) => {
    return (
      <li key={index}>
        <div className="logs-container">
          <section>{log.mistakesWereMadeToday ? "🔴" : "⚪️"}</section>
          <section>
            <em>{log.captainName}</em>
          </section>
          <section>
            <Link to={`/logs/${index}`}>{log.title}</Link>
          </section>
        </div>
      </li>
    );
  });

  return (
    <div className="index-container">
      <li key="alpha">
        <div className="logs-subtitles-container">
          <section>
            <strong>Mistakes</strong>
          </section>
          <section>
            <strong>Captain Name</strong>
          </section>
          <section>
            <strong>See This Log</strong>
          </section>
        </div>
      </li>
      {formattedLogs}
    </div>
  );
}
