import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
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
      <h2>Captain's Logs</h2>
      <ul>
        {logs &&
          logs.map((log, i) => {
            return <li key={uuidv4()}>{log.title}</li>;
          })}
      </ul>
    </div>
  );
}
