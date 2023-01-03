import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import "./Logs.css"
const API = process.env.REACT_APP_API_URL;

export default function Logs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/logs`)
      .then((res) => setLogs(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="Logs">
      <h2>Index</h2>
      <ul>
        {logs &&
          logs.map((log, i) => {
            return (
              <li key={uuidv4()}>
                <Link to={`/logs/${i}`}>{log.title}</Link> by {log.captainName}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
