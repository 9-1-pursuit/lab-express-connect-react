import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
const API = process.env.REACT_APP_API_URL

const LogEdit = () => {
    const [logs, setLogs] = useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: false,
        daysSinceLastCrisis: ""
    })

    let navigate = useNavigate()
    let index = useParams()

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
                navigate(`/logs/${index}`)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get(`${API}/logs/${index}`)
            .then((res) => {
                setLogs(res.data)
            })
            .catch(err => console.log(err))
    },[index])

    return (
        <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Captain Name:</label>
        <input
          id="name"
          value={logs.captainName}
          type="text"
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
        <input
          id="post"
          type="text"
          value={logs.post}
          onChange={handleTextChange}
        />
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
        <input
          id="daysSinceLastCrisis"
          type="text"
          value={logs.daysSinceLastCrisis}
          onChange={handleTextChange}
        />
        <label htmlFor="mistakesWereMadeToday">Mistakes Were Made Today:</label>
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
      <Link to={`/logs/${index}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
    );
};

export default LogEdit;