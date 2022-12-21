import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function Logs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/logs`)
      .then((res) => {
        setLogs(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Index</h2>
      <hr></hr>
      {logs.map((log, index) => {
        return (
          <div key={index}>
            <h3>{log.captainName}</h3>
            <Link to={`/logs/${index}`}>
              <h5>{log.title}</h5>
            </Link>

            <hr></hr>
          </div>
        );
      })}
    </div>
  );
}
