import { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

import "./Logs.css";

const API = process.env.REACT_APP_API_URL;

export default function Logs() {
  const [logs, setLogs] = useState([]);

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

  useEffect(() => {
    axios
      .get(`${API}/logs`)
      .then((response) => setLogs(response.data))
      .catch(() => Navigate("/not-found"));
  }, []);

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
