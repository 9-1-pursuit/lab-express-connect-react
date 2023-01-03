import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// const API = process.env.REACT_APP_API_URL
const API = "http://localhost:3001"

function NewLog() {
    let navigate = useNavigate()
    const [newLog, setNewLog] = useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: false,
        daysSinceLastCrisis: 0
    })

    const handleTextChange = (e) => {
        setNewLog({ ...newLog, [e.target.id]: e.target.value });
        console.log(newLog)
    }

    const handleRadioChange = () => {
        setNewLog({ ...newLog, mistakesWereMadeToday: !newLog.mistakesWereMadeToday });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
          .post(`${API}/logs`, newLog)
          .then(() => navigate("/logs"))
          .catch(err => console.log(err))
    }

    return (
    <div className="new">
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
                <input
                    id="captainName"
                    value={newLog.captainName}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Name"
                />
            <br/>
            <label htmlFor="title">Title:</label>
                <input
                    id="title"
                    type="text"
                    value={newLog.title}
                    placeholder="Title"
                    onChange={handleTextChange}
                    required
                />
            <br/>
            <label htmlFor="post">Post:</label>
                <textarea
                    id="post"
                    name="post"
                    value={newLog.post}
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
                    value={newLog.daysSinceLastCrisis}
                    onChange={handleTextChange}
                />
            
            <br />
            <input type="submit" />
      </form>
    </div>
    );
}

export default NewLog;