import React from 'react';
import { useState, useEffect } from "react";
import { useParams, Link , useNavigate} from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL

const LogEdit = () => {
    let navigate = useNavigate()
    let { index } = useParams();

    const [logs, setLogs] = useState({
      captainName: "",
      title: "",
      post: "",
      mistakesWereMadeToday: false,
      daysSinceLastCrisis: ""
    });

    const handleTextChange = (event) => {
        setLogs({ ...logs, [event.target.id]: event.target.value });
      };


      const handleCheckboxChange = () => {
        setLogs({ ...logs, mistakesWereMadeToday: !logs.mistakesWereMadeToday });
      };

      useEffect(() => {
        axios.get(`${API}/logs/${index}`)
        .then(res => setLogs(res.data))
        .catch(err => console.log(err))
      }, [index]);

      const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${API}/logs` , logs)
        .then((res) => {
            setLogs(res.data)
            navigate(`/logs/${index}`)
        })
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
            type="number"
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
          <label htmlFor="daysSinceLastCrisis">Days since last crisis:</label>
          <input
            id="daysSinceLastCrisis"
            type="text"
            onChange={handleTextChange}
            value={logs.daysSinceLastCrisis}
          />

          <br></br>
          <label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
        <input
          id="mistakesWereMadeToday"
          checked={logs.mistakesWereMadeToday}
          type="checkbox"
          onChange={handleCheckboxChange}
          
        />
          <br></br>
          <input type="submit" />
        </form>
        <Link to={`/logs/${index}`}>
        <button>Go Back</button>
      </Link>
      </div>
      )
}

export default LogEdit;