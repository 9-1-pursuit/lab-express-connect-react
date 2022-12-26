import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import LogFooter from "./LogFooter";
import "./Log.css";

const API = process.env.REACT_APP_API_URL;

export default function Logs() {
  const [log, setLog] = useState({});
  const { index } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((response) => setLog(response.data))
      .catch(() => navigate("/not-found"));
  }, [index, navigate]);
  return (
    <div className="log-container">
      <div>
        <h4 style={{ fontFamily: "monospace" }}>
          Captain's Log #{Number(index) + 1}
        </h4>
        <p
          className="
        black-border">
          <strong>{log.title}</strong> - By <em>{log.captainName}</em>
        </p>
        <p className="black-border">
          Mistakes: {log.mistakesWereMadeToday ? "Yes" : "No"}
        </p>
        <p className="black-border">
          Days since last crisis: {log.daysSinceLastCrisis}
        </p>
        <p className="black-border" id="log-post">
          Post: {log.post}
        </p>
      </div>
      <br></br>
      <hr></hr>
      <LogFooter />
    </div>
  );
}
