import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import Log from "../Components/Log"
const API = process.env.REACT_APP_API_URL;
//
export default function Logs() {
  const [logs, setLogs] = useState([]);
  // UseEffect
  useEffect(() => {
    axios
      .get(`${API}/logs`)
      .then((res) => {
        setLogs(res.data);
      })
      .catch((error) => console.log("catch", error));
  }, []);
  return (
    <div className="Logs">
      {logs.map((log, index) => {
        return (
          <div key={index} style={{ border: "1px solid black" }}>
            <Link to={`/logs/${index}`}>
              <h2>{log.title}</h2>{" "}
            </Link>
            by {log.captainName}
          </div>
        );
      })}
    </div>
  );
}
