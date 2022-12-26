import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./LogNewForm.css";

const API = process.env.REACT_APP_API_URL;

export default function LogNewForm() {
  const [newLog, setNewLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });
  const navigate = useNavigate();

  const handleTextChange = (e) => {
    setNewLog({ ...newLog, [e.target.id]: e.target.value });
  };

  const handleNumberChange = (e) => {
    setNewLog({ ...newLog, [e.target.id]: Number(e.target.value) });
  };

  const handleCheckboxChange = (e) => {
    setNewLog({ ...newLog, [e.target.id]: !newLog.mistakesWereMadeToday });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${API}/logs`, newLog)
      .then(() => navigate("/logs"))
      .catch(() => navigate("not-found"));
  };

  return (
    <form className="new-log-form" onSubmit={handleSubmit}>
      <h4 style={{ fontFamily: "monospace", margin: 0 }}>
        {"Captain's Log #New"}
      </h4>
      <div></div>
      <label htmlFor="captainName">Captain's Name: </label>
      <input
        id="captainName"
        type="text"
        onChange={handleTextChange}
        value={newLog.captainName}
        placeholder="Enter Captain's Name..."
        required
      />
      <label htmlFor="title">Title: </label>
      <input
        id="title"
        type="text"
        onChange={handleTextChange}
        value={newLog.title}
        placeholder="Enter Log Title..."
        required
      />
      <label htmlFor="mistakesWereMadeToday">Mistakes were made today: </label>
      <input
        id="mistakesWereMadeToday"
        type="checkbox"
        onChange={handleCheckboxChange}
        value={newLog.mistakesWereMadeToday}
      />
      <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis: </label>
      <input
        id="daysSinceLastCrisis"
        type="number"
        min={0}
        onChange={handleNumberChange}
        value={newLog.daysSinceLastCrisis}
        required
      />
      <label htmlFor="post">Post: </label>
      <textarea
        id="post"
        type="text"
        onChange={handleTextChange}
        value={newLog.post}
        placeholder="Enter Log Post..."
        rows="6"
        required
      />
      <label htmlFor="submitInput"></label>
      <input id="submitInput" type="submit" />
      <footer id="log-buttons-footer">
        <Link to="/logs">
          <label htmlFor="backButton">
            <button id="backButton">Back</button>
          </label>
        </Link>
      </footer>
    </form>
  );
}
