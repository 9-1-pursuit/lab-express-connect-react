import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./LogEditForm.css";

const API = process.env.REACT_APP_API_URL;

export default function LogEditForm() {
  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });
  const navigate = useNavigate();
  const { index } = useParams();

  const handleTextChange = (e) => {
    setLog({ ...log, [e.target.id]: e.target.value });
  };

  const handleNumberChange = (e) => {
    setLog({ ...log, [e.target.id]: Number(e.target.value) });
  };

  const handleCheckboxChange = (e) => {
    setLog({ ...log, [e.target.id]: !log.mistakesWereMadeToday });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`${API}/logs/${index}`, log)
      .then(() => navigate(`/logs/${index}`))
      .catch(() => navigate("not-found"));
  };

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((response) => setLog(response.data))
      .catch(() => navigate("/not-found"));
  }, [index, navigate]);

  return (
    <form className="edit-log-form" onSubmit={handleSubmit}>
      <h4 style={{ fontFamily: "monospace", margin: 0 }}>
        {`Edit Log #${Number(index) + 1}`}
      </h4>
      <div></div>
      <label htmlFor="title">Title: </label>
      <input
        id="title"
        type="text"
        onChange={handleTextChange}
        value={log.title}
        placeholder="Enter Log Title..."
        required
      />
      <label htmlFor="captainName">Captain Name: </label>
      <input
        id="captainName"
        type="text"
        onChange={handleTextChange}
        value={log.captainName}
        placeholder="Enter Captain Name..."
        required
      />
      <label htmlFor="mistakesWereMadeToday">Mistakes: </label>
      <input
        id="mistakesWereMadeToday"
        type="checkbox"
        onChange={handleCheckboxChange}
        checked={log.mistakesWereMadeToday}
      />
      <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis: </label>
      <input
        id="daysSinceLastCrisis"
        type="number"
        min={0}
        onChange={handleNumberChange}
        value={log.daysSinceLastCrisis}
        required
      />
      <label htmlFor="post">Post: </label>
      <textarea
        id="post"
        type="text"
        onChange={handleTextChange}
        value={log.post}
        placeholder="Enter Log Post..."
        rows="6"
        required
      />
      <label htmlFor="submitInput"></label>
      <input id="submitInput" type="submit" />
    </form>
  );
}
