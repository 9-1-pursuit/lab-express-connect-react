import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./Log.css";

const API = process.env.REACT_APP_API_URL;

export default function Logs({ logs }) {
  const [log, setLog] = useState({});
  const { index } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((response) => setLog(response.data))
      .catch((e) => console.error(e));
  }, [log]);

  return (
    <div className="log-container">
      <li key={index}>
        <h4>Log #{Number(index) * Math.random() + 1}</h4>
        <p
          className="
        black-border">
          Title: <strong>{log.title}</strong>{" "}
        </p>
        <p className="black-border">
          Captain: <em>{log.captainName}</em>
        </p>
        <p className="black-border">
          Mistakes: {log.mistakesWereMadeToday ? "🔴 Yes" : "🟢 No"}
        </p>
        <p className="black-border">
          Days since last Crisis: {log.daysSinceLastCrisis}
        </p>
        <p className="black-border" id="log-post">
          Post: {log.post}
        </p>
      </li>
    </div>
  );
}
