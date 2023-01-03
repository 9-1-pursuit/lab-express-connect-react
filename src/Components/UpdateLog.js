import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios"

// const API = process.env.REACT_APP_API_URL
const API = "http://localhost:3001"

function UpdateLog() {
    let { index } = useParams();
    let navigate = useNavigate()

    const [log, setLog] = useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: false,
        daysSinceLastCrisis: 0
    })

    const handleTextChange = (e) => {
        setLog({ ...log, [e.target.id]: e.target.value });
        console.log(log)
    }

    const handleRadioChange = () => {
        setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
          .put(`${API}/logs/${index}`, log)
          .then((res) => {
            setLog(res.data)
            navigate(`/logs/${index}`)
          })
          .catch(err => console.log(err))
    }

    useEffect(() => {
        axios
          .get(`${API}/logs/${index}`)
          .then(res => setLog(res.data))
          .catch(err => console.log(err))
      }, [index]);

    return (
    <div className="edit">
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
                <input
                    id="captainName"
                    value={log.captainName}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Name"
                />
            <br/>
            <label htmlFor="title">Title:</label>
                <input
                    id="title"
                    type="text"
                    value={log.title}
                    placeholder="Title"
                    onChange={handleTextChange}
                    required
                />
            <br/>
            <label htmlFor="post">Post:</label>
                <textarea
                    id="post"
                    name="post"
                    value={log.post}
                    placeholder="Type notes here"
                    onChange={handleTextChange}
                />
            <br/>
            <label htmlFor="mistakesWereMadeToday">Mistakes today:</label>

                <label htmlFor="no">No</label>
                <input id="no" name="mistakesWereMadeToday" type="radio" value="false" onChange={handleRadioChange}/>
                
                <label htmlFor="yes">Yes</label>
                <input id="yes" name="mistakesWereMadeToday" type="radio" value="true" onChange={handleRadioChange}/>
                
            <br/>
            <label htmlFor="daysSinceCrisis">Days since last crisis:</label>
                <input
                    id="daysSinceLastCrisis"
                    name="daysSinceLastCrisis"
                    value={log.daysSinceLastCrisis}
                    onChange={handleTextChange}
                />
            
            <br />
            <input type="submit" />
      </form>
    </div>
)}

export default UpdateLog;