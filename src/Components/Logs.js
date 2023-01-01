import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Logs.css";
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
    <div className="index_div">
      <h2 className="index_title">Index</h2>
      <div className="log__list">
        <hr></hr>
        {logs.map((log, index) => {
          return (
            <div key={index} className="logs">
              <Link to={`/logs/${index}`}>
                <h3> {log.title}</h3>
              </Link>
              <h5> by {log.captainName}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
}
