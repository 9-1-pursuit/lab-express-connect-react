import React from 'react';
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL

const LogNew = () => {
    let navigate = useNavigate()

    const [logs, setLogs] = useState({
      captainName: "",
      title: "",
      post: "",
      mistakesWereMadeToday: false,
      daysSinceLastCrisis: "",
    });

    const handleTextChange = (event) => {
        setLogs({ ...logs, [event.target.id]: event.target.value });
      };


      const handleCheckboxChange = () => {
        setLogs({ ...logs, mistakesWereMadeToday: !logs.mistakesWereMadeToday });
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`${API}/logs` , logs)
        .then(() => navigate('/logs'))
        .catch(err => console.log(err))
      };

      return(
        <div className="New">
        <form onSubmit={handleSubmit}>
        <br></br>
          <label htmlFor="captainName">Captain's Name:</label>
          <input
            id="captainName"
            value={logs.captainName}
            type="text"
            onChange={handleTextChange}
            placeholder="Captain Name"
            required
          />
          <br></br>
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            required
            value={logs.title}
            placeholder="Title"
            onChange={handleTextChange}
          />
          
          <br></br>
          <label htmlFor="post">Post:</label>
          <textarea
            id="post"
            type="text"
            value={logs.post}
            onChange={handleTextChange}
          />
          <br></br>
          <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
          <input
            id="daysSinceLastCrisis"
            type="number"
            onChange={handleTextChange}
            value={logs.daysSinceLastCrisis}
          />

          <br></br>

          <label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={logs.mistakesWereMadeToday}
        />
          
          <br></br>
          <br></br>
          <div className="new-buttons">
          <input type="submit" />

          <Link to={"/logs"}>
            <button className="cancel">Cancel</button>
          </Link>

          </div>
        </form>
      </div>
      )

}

export default LogNew;