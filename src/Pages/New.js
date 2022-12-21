import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function New() {
  const navigate = useNavigate();
  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    daysSinceLastCrisis: "",
    mistakesWereMadeToday: false,
  });

  const handleTextChanges = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckbox = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`${API}/logs`, log)
      .then(() => navigate("/logs"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="new_log">
      <h3>New</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName" className="name_label">
          Captain Name:
          <input
            id="captainName"
            value={log.captainName}
            type="text"
            onChange={handleTextChanges}
            placeholder="Captain Name"
            required
          ></input>
        </label>
        <label htmlFor="title" className="label">
          Title:
          <input
            id="title"
            value={log.title}
            type="text"
            onChange={handleTextChanges}
            placeholder="post title"
            required
          ></input>
        </label>
        <label htmlFor="post" className="label">
          Post:
          <input
            id="post"
            value={log.post}
            type="text"
            onChange={handleTextChanges}
            placeholder="anything you want..."
            required
          ></input>
        </label>
        <label htmlFor="daysSinceLastCrisis" className="label">
          Days Since Last Crisis:
          <input
            id="daysSinceLastCrisis"
            value={log.daysSinceLastCrisis}
            type="number"
            onChange={handleTextChanges}
            required
          ></input>
        </label>
        <label htmlFor="mistakesWereMadeToday">Mistakes Were made Today:</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckbox}
          checked={log.mistakesWereMadeToday}
        />
        <input type="submit" />
      </form>
      <button onClick={() => navigate("/logs")}>go Back</button>
    </div>
  );
}
