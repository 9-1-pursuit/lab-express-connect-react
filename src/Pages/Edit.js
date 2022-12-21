import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function Edit() {
  let { index } = useParams();
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

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((res) => {
        setLog(res.data);
      })
      .catch((err) => console.log(err));
  }, [index]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${API}/logs/${index}`, log)
      .then((res) => {
        setLog(res.data);
        navigate(`/logs/${index}`);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="Edit">
      <h3>Edit</h3>
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
        <button type="submit">Submit!</button>
      </form>
      <button onClick={() => navigate(`/logs/${index}`)}>Back</button>
    </div>
  );
}
