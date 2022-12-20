import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL

function LogNew(){
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
          <label htmlFor="captainName">Captain Name:</label>
          <input
            id="captainName"
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
          <textarea
            id="post"
            type="text"
            value={logs.post}
            onChange={handleTextChange}
          />
          <label htmlFor="daysSinceLastCrisis">Days since last crisis:</label>
          <input
            id="daysSinceLastCrisis"
            type="text"
            onChange={handleTextChange}
            value={logs.daysSinceLastCrisis}
          />
          <label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={logs.mistakesWereMadeToday}
        />
          <br />
          <input type="submit" />
        </form>
      </div>
      )

}

export default LogNew