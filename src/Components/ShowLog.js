import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ShowLog.css"

// const API = process.env.REACT_APP_API_URL
const API = "http://localhost:3001"

function ShowLog() {
    const [log, setLog] = useState([])
    const { index }  = useParams()
    let navigate = useNavigate()

    const handleGoBack = () => {
        navigate("/logs")
    }

    const handleEdit = () => {
        navigate(`/logs/${index}/edit`)
    }

    const handleDelete = () => {
        axios
        .delete(`${API}/logs/${index}`)
        .then(navigate('/logs'))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        axios
            .get(`${API}/logs/${index}`)
            .then(res => {
                setLog(res.data)
            })
            .catch(err => console.log(err))
    }, [index])
    
    return (
        <>
        <div className="show">
            <h1>{log.title} - By {log.captainName}</h1>
            <p id="post">{log.post}</p>
            <p><span>Mistakes today:</span> {log.mistakesWereMadeToday ? "Yes" : "No"}</p>
            <p><span>Days since last crisis:</span> {log.daysSinceLastCrisis}</p>
        </div>
        <div className="buttons">
            <button className="back" onClick={handleGoBack}>Back</button>
            <button className="edit" onClick={handleEdit}>Edit</button>
            <button className="delete" onClick={handleDelete}>Delete</button>
        </div>
        </>
    );
}

export default ShowLog;