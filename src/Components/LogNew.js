import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const API = process.env.REACT_APP_API_URL

const LogNew = () => {
    let navigate = useNavigate()
    const [logs, setLogs] = useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: false,
        daysSinceLastCrisis: ""
    })

    function handleTextChange(event) {
        setLogs({...logs, [event.target.id]: event.target.value})
    }

    function handleCheckBoxChange() {
        setLogs({...logs, mistakesWereMadeToday: !logs.mistakesWereMadeToday})
    }

    function handleSubmit(event) {
        event.preventDefault()
        axios.post(`${API}/logs`, logs)
            .then((res) => {
                setLogs(res.data)
                navigate(`/logs`)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="New">
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Captain's Name:</label>
        <input
          id="captainName"
          type="text"
          value={logs.captainName}
          onChange={handleTextChange}
          placeholder="Captain Name"
          required
        />
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          required
          value={logs.title}
          placeholder="Title"
          onChange={handleTextChange}
        />
        <label htmlFor="post">Post:</label>
        <textarea
          id="post"
          type="text"
          value={logs.post}
          onChange={handleTextChange}
        />
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
        <input
          id="daysSinceLastCrisis"
          type="number"
          value={logs.daysSinceLastCrisis}
          onChange={handleTextChange}
        />
        <label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          value={logs.mistakesWereMadeToday}
          onChange={handleCheckBoxChange}
          placeholder="Describe why you bookmarked this site"
        />
        <br />

        <input type="submit" />
      </form>
      <Link to={`/logs`}>
        <button>Nevermind!</button>
      </Link>
    </div>
    );
};

export default LogNew;