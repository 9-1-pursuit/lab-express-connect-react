import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
        axios.put(`${API}/logs/${index}`, logs)
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
    },[index, navigate])

    return (
        <div className="Edit">
            <h3>Edit</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Captain's Name:</label>
        <input
          id="captainName"
          type="text"
          value={logs.captainName}
          onChange={handleTextChange}
          placeholder="Captain's Name"
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
      <a href={`/logs/${index}`}>
        <button>Back</button>
      </a>
    </div>
    );
};

export default LogEdit;