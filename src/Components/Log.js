import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

export default function Log() {
  const { index } = useParams();
  const [log, setLog] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((res) => setLog(res.data))
      .catch((err) => navigate("/*"));
  }, [index]);

  function handleDelete() {
    axios
      .delete(`${API}/logs/${index}`)
      .then(() => {
        navigate("/logs");
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="Log">
      <article className="log_details">
        <h3 className="title">
          {log.title} - by {log.captainName}
        </h3>
        <p className="log_post">{log.post}</p>
        <p className="mistakes">{log.mistakesWereMadeToday}</p>
        <p className="log_crisis">
          <b>{log.daysSinceLastCrisis}</b>
        </p>
      </article>
      <div className="log_buttons">
        <button onClick={() => navigate("/logs")}>Back</button>
        <button onClick={() => navigate(`/logs/${index}/edit`)}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}
