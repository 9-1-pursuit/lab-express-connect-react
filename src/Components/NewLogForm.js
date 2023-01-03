import React from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const API = process.env.REACT_APP_API_URL


const NewLogForm = () => {
    const navigate = useNavigate()
    const [log, setLog] = useState({
        captainName: "",
        title: "",
        post: "",
        days: "",
        mistakes: "",
    })

    const[checked, setChecked] = useState(false)

    const handleCheckBox = ()=>{
        setChecked(!checked)  //updates checkbox state
        log.mistakes=!checked //updates key value in object - needed since no event value is being captured since checkboxes only have boolean values, unlike text
    }

    const handleTextChange = (event) => {
        setLog({...log, [event.target.id]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()

    axios
        .post(`${API}/logs`, log)
        .then(() => navigate('/logs'))
        .catch(err => console(err))
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="captainName">Captain's Name:</label>
                <input
                id="captainName"
                value={log.captainName}
                type="text"
                onChange={handleTextChange}
                placeholder="Enter name of captain"
                required
                />
                <br/>

                <label htmlFor="title">Title:</label>
                <input
                id='title'
                value={log.title}
                type="text"
                onChange={handleTextChange}
                placeholder="Enter title"
                required
                />
                <br/>

                <label htmlFor="post">Post:</label>
                <input
                id="post"
                value={log.post}
                type="text"
                onChange={handleTextChange}
                placeholder="Enter a post here"
                required
                />
                <br/><br/>

                <label htmlFor="days">Days Since Last Crisis:</label>
                <input
                id="days"
                value={log.days}
                type="text"
                onChange={handleTextChange}
                placeholder="Enter number of days since the last crisis occurred"
                required
                />
                <br/><br/>
                
                <label htmlFor="mistakes">Mistakes were made today:</label>
                <input
                id="mistakes"
                checked={checked}
                type="checkbox"
                onChange={handleCheckBox}
                required
                />
                <br/> <br/>
                <input type="submit"/>
            </form>
        </>
    );
};

export default NewLogForm;